const PCB_folder: string = "/home/konstantin/projects/plc-modules/pcb"
const TARGET_FOLDER: string = "./src/content/docs/modules"

# Путь к изображениям схем, нарисованных в KiCad
const KICAD_IMAGES: string = "/home/konstantin/projects/plc-modules/pcb/doc/kicad_images/output/"


# Копирование рендеров для одного модуля
def copy_pcb_render [article: string, version: string] {
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

def copy_kicad_image [article: string, filename: string] {
    let source = $"($KICAD_IMAGES)/($filename).svg"

    # Путь к целевому каталогу
    let group = $article | split row "-" | get 0
    let target_folder = $"($TARGET_FOLDER)/($group)/($article)"

    cp $source $target_folder
}

copy_pcb_render PMCP-ESP32C3 0.1.0
copy_pcb_render PMCP-LLP 0.1.0
copy_pcb_render PMIF-I2Cx8 0.1.0
copy_pcb_render PMIO-AITx8 0.1.0
copy_pcb_render PMIO-AIVx8 0.1.0
copy_pcb_render PMIO-AIWx4 0.1.0
copy_pcb_render PMIO-DIx32 0.1.0
copy_pcb_render PMIO-DQx16 0.1.0
copy_pcb_render PMIO-PWMx16 0.1.0
copy_pcb_render PMIO-RQx8 0.1.0
copy_pcb_render PMPS-20W 0.1.0

copy_kicad_image PMIO-AIVx8 kicad_images-pmio_aiv_voltage_channel
copy_kicad_image PMIO-AIVx8 kicad_images-pmio_aiv_current_channel
