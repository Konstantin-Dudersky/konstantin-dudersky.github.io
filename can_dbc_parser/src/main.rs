mod html_templates;
mod module;
mod process_module;

use std::fs;

use can_dbc::Dbc;

use crate::{module::Module, process_module::process_module};

const DBC_FILE: &str = "/home/konstantin/projects/plc-modules/firmware/ek_modules.dbc";
const OUTPUT_DIR: &str =
    "/mnt/data/projects/konstantin-dudersky.github.io/src/content/docs/modules/description";

fn main() {
    tracing_subscriber::fmt().init();

    let data = fs::read_to_string(DBC_FILE).expect("Unable to read input file");
    let dbc = Dbc::try_from(data.as_str()).expect("Failed to parse dbc file");

    let modules = vec![
        Module {
            name: "EK-IO-AIT",
            messages_tx: vec!["EKIO_AIT_module_status", "EKIO_AIT_channel_status"],
            messages_rx: vec!["EK_watchdog"],
        },
        Module {
            name: "EK-IO-AIW",
            messages_tx: vec!["EKIO_AIW_module_status", "EKIO_AIW_channel_status"],
            messages_rx: vec!["EK_watchdog"],
        },
    ];

    for module in &modules {
        process_module(module, &dbc);
    }
}
