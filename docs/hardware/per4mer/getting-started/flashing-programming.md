# Flashing the executable to the STM32 target

- Select the executable.

![flashing the build image](../images/selection_of_build_file.png)
1. Click the download icon.
2. Click the browse button.
3. Navigate to the mbx_build directory and select th embxsom_per4mer.elf file.
4. Click the start programming button to start the flashing process.


## Hardware setup
![hardware setup](../images/hardware_setup.png)

1. Connect the 20-pin ST-Link connector to the JTAG-labeled header on the Per4mer board. Refer above image.
2. Ensure that the red stripe on the ribbon cable aligns with Pin 1 of the JTAG connector, indicated by an arrow mark on the board.
3. Connect and flash

![connect and flash](../images/connect_and_flash.png)

4. Click Start Programming button to start the programming process.

![start programming](../images/start_programming.png)

5. Wait for the progress bar to reach 100%. Once the Flash Download Complete message appears, you can restart your Per4mer board.

![flash completed](../images/flash_completed.png)

---

# Flashing the ESP-AT firmware to the ESP32 target

## Setting up the hardware.

![esp firmware setup](../images/espat_firmware_hardwar_setup.png)

- Before starting to flash, you need to download Flash Download Tools for Windows. You can download by using this link https://www.espressif.com/en/support/download/other-tools
• Open the ESP Flash Download Tool. 
• Select chipType. Here, we select ESP32-C6. 
• Select a work-mode as Developer Mode.
• Select a load-mode as uart.

![alt text](../images/esp_firmware_uart_download.png)

- To download one combined factory bin to address 0, select “DoNotChgBin”to use the default configuration of the factory bin. 

![alt text](../images/esp_firmware_download_tool.png)

- In case of flashing issues, please verify what the COM port number of download interface of the ESP32-C6 board 
is and select it from “COM:” drop-down list. If you do not know the port number.