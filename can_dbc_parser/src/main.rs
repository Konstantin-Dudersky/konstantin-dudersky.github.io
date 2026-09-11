mod module;

use can_dbc::{Dbc, Message, MessageId, Signal, ValDescription};
use tracing::warn;

use std::fs;

fn main() {
    tracing_subscriber::fmt().init();

    let data = fs::read_to_string("/home/konstantin/projects/plc-modules/firmware/ek_modules.dbc")
        .expect("Unable to read input file");
    let dbc = Dbc::try_from(data.as_str()).expect("Failed to parse dbc file");

    let modules = vec![module::Module {
        name: "EK-IO-AIT",
        can_sending_mode: "EK_IO_AIT",
    }];

    for module in &modules {
        process_module(module, &dbc);
    }
}

fn process_module(module: &module::Module, dbc: &Dbc) {
    let msgs = dbc
        .messages
        .iter()
        .filter_map(|msg| {
            if msg.transmitter != Some(module.can_sending_mode.to_string()) {
                return None;
            }
            Some(can_msg_to_html(msg, dbc))
        })
        .collect::<Vec<String>>()
        .join("\n");

    let html = HTML_FULL.replace("{msgs}", &msgs);

    let path = format!(
        "/mnt/data/projects/konstantin-dudersky.github.io/src/content/docs/modules/description/{}/can_messages.astro",
        module.name
    );

    fs::write(path, html).unwrap();
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
            warn!("Не найден комментарий для сигнала {name} в сообщении {id:?}");
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
        .replace("{max}", &max.to_string());

    // Ищем, есть ли перечень вариантов у значения сигнала
    let val_desc = dbc.value_descriptions_for_signal(id, &name);
    let val_desc = match val_desc {
        Some(v) => Some(value_description_to_html(v)),
        None => None,
    };

    (html_signal, val_desc)
}

fn value_description_to_html(val_descs: &[ValDescription]) -> String {
    let items = val_descs
        .iter()
        .map(|desc| {
            HTML_VAL_DESC_ITEM
                .replace("{id}", &desc.id.to_string())
                .replace("{description}", &desc.description)
        })
        .collect::<Vec<_>>()
        .join("\n");
    HTML_VAL_DESC.replace("{items}", &items)
}

const HTML_FULL: &str = r#"
---
---

<style>
    thead tr > *:not(:first-child) {
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        white-space: nowrap;
    }

    tr > *:not(:first-child) {
        text-align: center;
    }
</style>

<h3>Модуль читает</h3>

<h3>Модуль создаёт</h3>

{msgs}
"#;

const HTML_MSG: &str = r#"
<details>
    <summary>{id} {message_comment} </summary>
    <p>Название: EKIO_AIT_module_status</p>
    <p>Идентификатор: {id}</p>
    <p>Длина: {size} байт</p>

    <table>
        <thead>
            <tr>
                <th></th>
                <th>Начальный бит</th>
                <th>Размер, бит</th>
                <th>Масштаб</th>
                <th>Смещение</th>
                <th>Минимум</th>
                <th>Максимум</th>
            </tr>
        </thead>
        <tbody>
            {signals}
        </tbody>
    </table>

    {val_desc}
</details>"#;

const HTML_SIGNAL: &str = r#"
<tr>
    <td>{name} <br> {comment}</td>
    <td>{start_bit}</td>
    <td>{size}</td>
    <td>{factor}</td>
    <td>{offset}</td>
    <td>{min}</td>
    <td>{max}</td>
</tr>
"#;

const HTML_VAL_DESC: &str = r#"
<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        {items}
    </tbody>
</table>
"#;

const HTML_VAL_DESC_ITEM: &str = r#"
<tr>
    <td>{id}</td>
    <td>{description}</td>
</tr>
"#;
