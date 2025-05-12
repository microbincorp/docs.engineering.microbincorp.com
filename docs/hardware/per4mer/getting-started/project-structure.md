# Per4mer folder Architecture

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