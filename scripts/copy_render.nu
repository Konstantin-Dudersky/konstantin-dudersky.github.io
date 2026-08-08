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

copy_pcb_render EKCP-ESP32C3 0.2.0
copy_pcb_render EKCP-LLP 0.2.0
copy_pcb_render EKCP-RP 0.2.0
copy_pcb_render EKDR-STEPx4 0.2.0
copy_pcb_render EKIF-1Wire 0.2.0
copy_pcb_render EKIF-I2Cx8 0.2.0
copy_pcb_render EKIO-AITx8 0.2.0
copy_pcb_render EKIO-AIVx8 0.2.0
copy_pcb_render EKIO-AIWx4 0.2.0
copy_pcb_render EKIO-AQx4 0.2.0
copy_pcb_render EKIO-DIx32 0.2.0
copy_pcb_render EKIO-DQx16 0.2.0
copy_pcb_render EKIO-AIPDCx8 0.2.0
copy_pcb_render EKIO-PWMx16 0.2.0
copy_pcb_render EKIO-RQx8 0.2.0
copy_pcb_render EKLD-10 0.2.0
copy_pcb_render EKLD-18 0.2.0
copy_pcb_render EKMC-ESP32C3 0.2.0
copy_pcb_render EKPS-20W 0.2.0
copy_pcb_render EKSP-CAN 0.2.0


copy_kicad_image EKIO-AIVx8 kicad_images-pmio_aiv_voltage_channel
copy_kicad_image EKIO-AIVx8 kicad_images-pmio_aiv_current_channel
