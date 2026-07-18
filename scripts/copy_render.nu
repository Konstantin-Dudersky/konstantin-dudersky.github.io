const PCB_folder: string = "/home/konstantin/projects/plc-modules/pcb"
const TARGET_FOLDER: string = "./src/content/docs/modules/description"
const STEP_FOLDER: string = "/home/konstantin/yandex_disk/plc_modules/step/"

# Путь к изображениям схем, нарисованных в KiCad
const KICAD_IMAGES: string = "/home/konstantin/projects/plc-modules/pcb/doc/kicad_images/output/"


# Копирование рендеров для одного модуля
def copy_pcb_render [article: string, version: string] {
    # Путь к исходным файлам
    let pcb_folder: string = $"($PCB_folder)/($article)-v($version)/export/v($version)"
    let render_1 = $"($pcb_folder)/render_x0y0z0.png"
    let render_2 = $"($pcb_folder)/render_x0y180z0.png"
    let step = $"($pcb_folder)/($article).step"

    # Путь к целевому каталогу
    let target_folder = $"($TARGET_FOLDER)/($article)"

    cp $render_1 $target_folder
    cp $render_2 $target_folder
    cp $step $STEP_FOLDER
}

def copy_kicad_image [article: string, filename: string] {
    let source = $"($KICAD_IMAGES)/($filename).svg"

    # Путь к целевому каталогу
    let target_folder = $"($TARGET_FOLDER)/($article)"

    cp $source $target_folder
}

copy_pcb_render EKDR-STEPx4 0.2.0
copy_pcb_render EKMC-ESP32C3 0.2.0

copy_pcb_render PMCP-ESP32C3 0.1.1
copy_pcb_render PMCP-LLP 0.1.1
copy_pcb_render PMIF-I2Cx8 0.1.0
copy_pcb_render PMIO-AITx8 0.1.1
copy_pcb_render PMIO-AIVx8 0.1.1
copy_pcb_render PMIO-AIWx4 0.1.1
copy_pcb_render PMIO-DIx32 0.1.0
copy_pcb_render PMIO-DQx16 0.1.0
copy_pcb_render PMIO-PWMx16 0.1.0
copy_pcb_render PMIO-RQx8 0.1.0
copy_pcb_render PMPS-20W 0.1.1

copy_kicad_image PMIO-AIVx8 kicad_images-pmio_aiv_voltage_channel
copy_kicad_image PMIO-AIVx8 kicad_images-pmio_aiv_current_channel
