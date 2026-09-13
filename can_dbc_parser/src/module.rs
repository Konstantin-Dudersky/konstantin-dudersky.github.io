pub struct Module {
    pub name: &'static str,
    pub messages_tx: Vec<&'static str>,
    pub messages_rx: Vec<&'static str>,
}
