# Per4mer folder Architecture

## Folder Tree
```
├───mbxsom_per4mer_24
│   ├───docs
│   │   └───sphinx
│   ├───mbx_app
│   │   ├───mbx_cli
│   │   ├───mbx_ethernet
│   │   ├───mbx_file_handling
│   │   ├───mbx_lvgl
│   │   │   ├───fonts
│   │   │   ├───images
│   │   │   └───screens
│   │   │       ├───adc_screen
│   │   │       ├───can_screen
│   │   │       ├───ethernet_screen
│   │   │       ├───i2c_screen
│   │   │       ├───main_screen
│   │   │       ├───rtc_screen
│   │   │       ├───sdcard_screen
│   │   │       ├───spi_screen
│   │   │       ├───uart_screen
│   │   │       └───usb_screen
│   │   ├───mbx_main
│   │   ├───mbx_stm_hal_misc
│   │   ├───mbx_test
│   │   └───mbx_threadx
│   │       └───App
│   ├───mbx_ate
│   ├───mbx_bsp
│   │   └───mbx_components
│   │       ├───level_0
│   │       │   ├───adc
│   │       │   │   └───ads131m08
│   │       │   ├───ethernet
│   │       │   │   └───lan8742
│   │       │   ├───extio
│   │       │   │   └───tca9539
│   │       │   ├───qspi
│   │       │   │   └───mt25ql128ab8e12
│   │       │   ├───sdram
│   │       │   │   └───mt48lc4m32b2
│   │       │   ├───touch
│   │       │   │   └───ili2511
│   │       │   └───wireless
│   │       │       └───esp32c6
│   │       └───level_1
│   │           ├───mbx_adc
│   │           ├───mbx_can
│   │           ├───mbx_dma
│   │           ├───mbx_dma2d
│   │           ├───mbx_fmc
│   │           ├───mbx_gpio
│   │           ├───mbx_i2c
│   │           ├───mbx_i2s
│   │           ├───mbx_interrupt
│   │           ├───mbx_ltdc
│   │           ├───mbx_qspi
│   │           ├───mbx_rtc
│   │           ├───mbx_sdmmc
│   │           ├───mbx_spi
│   │           ├───mbx_timer
│   │           ├───mbx_touch
│   │           ├───mbx_usart
│   │           ├───mbx_wdg
│   │           └───mbx_wireless
│   ├───mbx_build
│   │   └───obj
│   ├───mbx_config
│   ├───mbx_docs
│   ├───mbx_drivers
│   │   └───STM32CubeF7
│   ├───mbx_external_loader
│   │   ├───Core
│   ├───mbx_libs
│   │   └───mbx_custom_libs
│   │       └───libadc
│   │           └───obj
│   ├───mbx_middlewares
│   │   ├───level_0
│   │   │   ├───FatFs
│   │   │   ├───lvgl
│   │   │   ├───LwIP
│   │   │   ├───STM32_USB_Device_Library
│   │   │   ├───STM32_USB_Host_Library
│   │   │   └───threadx
│   │   └───level_1
│   │       ├───FATFS
│   │       ├───LWIP
│   │       ├───USB_DEVICE
│   │       └───USB_HOST
│   ├───mbx_system
│   ├───mbx_utills
│   │   └───mbx_console
│   └───sphinx
├───mbx_espat_firmware
└───per4mer_esp32_c6
```

- `mbx_app/` – Application Layer
Houses user-facing logic, including GUI screens, CLI commands, communication demos (Ethernet, UART, USB, etc.).

This layer depends on middleware and drivers but does not touch hardware directly.

LVGL screen folders reflect feature-based UI design, useful for modular application development.

- `mbx_bsp/` – Board Support Package
Abstracts hardware details into reusable level_0 and level_1 drivers:

- `level_0/`: Vendor or chip-specific drivers (e.g., lan8742, ili2511).

- `level_1/`: Abstracted MBX-level interfaces like mbx_spi, mbx_rtc — typically wraps level_0 for application use.

This abstraction enables portability — you can swap out a sensor or display controller with minimal changes to the upper layers.

- `mbx_middlewares/` – Middleware Stack
`level_0/`: Third-party libraries (e.g., FatFs, LwIP, LVGL, ThreadX).

- `level_1/`: Project-integrated middleware modules wrapping level_0 with application-specific initialization and interfaces.

This mirrors STM32Cube architecture and helps in managing upstream library changes independently.

- `mbx_drivers/` – Vendor Libraries
STM32Cube drivers are placed here.

Not modified directly, ensuring they can be cleanly updated when ST releases new versions.

- `mbx_config/` – Project Configurations
Likely contains configuration headers or .xml/.json files defining build-time features, memory maps, etc.

- `mbx_libs/` – Custom Libraries
Where user-created portable libraries (e.g., libadc) live. These may offer utilities or math functions not tied to hardware.

- `mbx_build/` – Build Artifacts
Contains obj/ and possibly build system files like Makefiles, CMake, or IDE configs.

Keeps build files separate from source, maintaining a clean repo.

- `mbx_utills/` – Utilities and Shell
mbx_console: Implements logging, command-line I/O utilities.

- `mbx_external_loader/` – Firmware Updater / Loader Code
Used to flash external memory like QSPI or load bootloaders.

- `docs/, sphinx/, mbx_docs/` – Documentation
Combines Doxygen and Sphinx for code and project documentation.

Promotes transparency and onboarding ease.

- `per4mer_esp32_c6/` and mbx_espat_firmware/
These are likely external module support repos, possibly for:

ESP32-based wireless module integration.

Programming ESP firmware or handling AT-command interface.

## Why It’s Structured This Way
- Layered architecture: Application → Middleware → Drivers → Hardware.

- Feature separation: Easier to manage screens, peripherals, protocols.

- Low coupling, high cohesion: Each folder focuses on one responsibility.

- Testability: Encourages unit/module testing by isolating logic.

- Extensibility: You can plug in new hardware (e.g., new ADC) with minimal changes to the upper layers.