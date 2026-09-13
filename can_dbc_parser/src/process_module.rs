use std::fs;

use can_dbc::{Dbc, Message, MessageId, Signal, ValDescription};
use tracing::warn;

use crate::{
    OUTPUT_DIR,
    html_templates::{HTML_FULL, HTML_MSG, HTML_SIGNAL, HTML_VAL_DESC, HTML_VAL_DESC_ITEM},
    module::Module,
};

pub(crate) fn process_module(module: &Module, dbc: &Dbc) {
    // Ищем сообщения, которые отправляются модулем
    let msgs_tx = dbc
        .messages
        .iter()
        .filter_map(|msg| {
            if !module.messages_tx.contains(&msg.name.as_str()) {
                return None;
            }
            Some(can_msg_to_html(msg, dbc))
        })
        .collect::<Vec<String>>()
        .join("\n");

    if msgs_tx.len() < module.messages_tx.len() {
        warn!("Не все TX сообщения найдены для модуля {}", module.name)
    }

    // Ищем сообщения, которые получаются модулем
    let msgs_rx = dbc
        .messages
        .iter()
        .filter_map(|msg| {
            if !module.messages_rx.contains(&msg.name.as_str()) {
                return None;
            }
            Some(can_msg_to_html(msg, dbc))
        })
        .collect::<Vec<String>>()
        .join("\n");

    if msgs_rx.len() < module.messages_rx.len() {
        warn!("Не все RX сообщения найдены для модуля {}", module.name)
    }

    let html_tx = HTML_FULL.replace("{msgs}", &msgs_tx);
    let html_rx = HTML_FULL.replace("{msgs}", &msgs_rx);

    let path_tx = format!("{OUTPUT_DIR}/{}/can_messages_tx.astro", module.name);
    let path_rx = format!("{OUTPUT_DIR}/{}/can_messages_rx.astro", module.name);

    fs::write(path_tx, html_tx).unwrap();
    fs::write(path_rx, html_rx).unwrap();
}

fn can_msg_to_html(msg: &Message, dbc: &Dbc) -> String {
    let id = match msg.id {
        MessageId::Standard(v) => format!("0x{:03X}", v),
        MessageId::Extended(v) => format!("0x{:08X}", v),
    };

    let message_comment = match dbc.message_comment(msg.id) {
        Some(v) => v,
        None => {
            warn!("Не найден комментарий для сообщения с идентификатором {id}");
            ""
        }
    };

    let size = msg.size;

    let signals = msg
        .signals
        .iter()
        .map(|signal| can_signal_to_html(signal, msg.id, dbc))
        .collect::<Vec<(String, Option<String>)>>();

    let all_signals = signals
        .iter()
        .map(|i| i.0.clone())
        .collect::<Vec<String>>()
        .join("\n");

    let val_desc = signals
        .iter()
        .filter_map(|s| s.1.clone())
        .collect::<Vec<_>>()
        .join("\n");

    HTML_MSG
        .replace("{id}", &id)
        .replace("{name}", &msg.name)
        .replace("{message_comment}", message_comment)
        .replace("{size}", &size.to_string())
        .replace("{signals}", &all_signals)
        .replace("{val_desc}", &val_desc)
}

fn can_signal_to_html(signal: &Signal, id: MessageId, dbc: &Dbc) -> (String, Option<String>) {
    let name = signal.name.clone();

    let comment = match dbc.signal_comment(id, &name) {
        Some(v) => &v.replace("_", " "),
        None => {
            warn!("Не найден комментарий для сигнала {name} в сообщении {id:x?}");
            ""
        }
    };

    let size = signal.size;

    let byte_order = match signal.byte_order {
        can_dbc::ByteOrder::LittleEndian => "LittleEndian",
        can_dbc::ByteOrder::BigEndian => "BigEndian",
    };

    let factor = signal.factor;

    let offset = signal.offset;

    let min = signal.min;

    let max = signal.max;

    let start_bit = signal.start_bit;

    let html_signal = HTML_SIGNAL
        .replace("{name}", &name)
        .replace("{comment}", comment)
        .replace("{start_bit}", &start_bit.to_string())
        .replace("{size}", &size.to_string())
        .replace("{byte_order}", byte_order)
        .replace("{factor}", &factor.to_string())
        .replace("{offset}", &offset.to_string())
        .replace("{min}", &min.to_string())
        .replace("{max}", &max.to_string())
        .replace("{unit}", &signal.unit);

    // Ищем, есть ли перечень вариантов у значения сигнала
    let val_desc = dbc.value_descriptions_for_signal(id, &name);
    let val_desc =
        val_desc.map(|vd| value_description_to_html(&format!("{} - {}", name, comment), vd));

    (html_signal, val_desc)
}

fn value_description_to_html(caption: &str, val_descs: &[ValDescription]) -> String {
    let items = val_descs
        .iter()
        .map(|desc| {
            HTML_VAL_DESC_ITEM
                .replace("{id}", &desc.id.to_string())
                .replace("{description}", &desc.description)
        })
        .collect::<Vec<_>>()
        .join("\n");
    HTML_VAL_DESC
        .replace("{caption}", caption)
        .replace("{items}", &items)
}
