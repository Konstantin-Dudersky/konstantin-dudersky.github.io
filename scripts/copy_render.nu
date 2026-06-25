const PCB_folder: string = "/home/konstantin/projects/plc-modules/pcb"
const TARGET_FOLDER: string = "./src/content/docs/modules"

# Копирование рендеров для одного модуля
def copy [article: string, version: string] {
    # Путь к исходным файлам
    let pcb_folder: string = $"($PCB_folder)/($article)-v($version)/export/v($version)"
    let render_1 = $"($pcb_folder)/render_x0y0z0.png"
    let render_2 = $"($pcb_folder)/render_x0y180z0.png"

    # Путь к целевому каталогу
    let group = $article | split row "-" | get 0
    let target_folder = $"($TARGET_FOLDER)/($group)/($article)"

    cp $render_1 $target_folder
    cp $render_2 $target_folder
}

copy PMCP-ESP32C3 0.1.0
copy PMCP-LLP 0.1.0
copy PMIF-I2Cx8 0.1.0
copy PMIO-AITx8 0.1.0
copy PMIO-DIx32 0.1.0
copy PMIO-DQx16 0.1.0
copy PMIO-PWMx16 0.1.0
copy PMIO-RQx8 0.1.0
copy PMPS-20W 0.1.0
