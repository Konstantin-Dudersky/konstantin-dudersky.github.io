mod module;

use can_dbc::{Dbc, Message, MessageId, Signal};
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
        .collect::<Vec<String>>()
        .join("\n");

    HTML_MSG
        .replace("{id}", &id)
        .replace("{message_comment}", message_comment)
        .replace("{size}", &size.to_string())
        .replace("{signals}", &signals)
}

fn can_signal_to_html(signal: &Signal, id: MessageId, dbc: &Dbc) -> String {
    let name = signal.name.clone();

    let comment = match dbc.signal_comment(id, &name) {
        Some(v) => v,
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

    HTML_SIGNAL
        .replace("{name}", &name)
        .replace("{comment}", comment)
        .replace("{start_bit}", &start_bit.to_string())
        .replace("{size}", &size.to_string())
        .replace("{byte_order}", byte_order)
        .replace("{factor}", &factor.to_string())
        .replace("{offset}", &offset.to_string())
        .replace("{min}", &min.to_string())
        .replace("{max}", &max.to_string())
}

const HTML_FULL: &str = r#"
---
---

<style>

</style>

{msgs}
"#;

const HTML_MSG: &str = r#"
<details>
    <summary>{id} - {message_comment} </summary>
    <ul>
        <li>Название: EKIO_AIT_module_status</li>
        <li>Идентификатор: {id}</li>
        <li>Длина: {size} байт</li>
    </ul>

    <table>
        <thead>
            <tr>
                <th>Название</th>
                <th>Свойства</th>
                <th>Описание</th>
            </tr>
        </thead>
        <tbody>
            {signals}
        </tbody>
    </table>
</details>"#;

const HTML_SIGNAL: &str = r#"
<tr>
    <td>{name}</td>
    <td>
        <ul>
            <li>Начальный бит: {start_bit}</li>
            <li>Длина: {size} бит</li>
            <li>Порядок: {byte_order}</li>
            <li>Масштаб: {factor}</li>
            <li>Смещение: {offset}</li>
            <li>Минимум: {min}</li>
            <li>Максимум: {max}</li>
        </ul>
    </td>
    <td>{comment}</td>
</tr>
"#;
