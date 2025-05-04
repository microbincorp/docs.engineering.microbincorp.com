import { defineConfig } from 'vitepress'
import '.theme.css'

export default defineConfig({
  title: 'MicroBin Documentation',
  description: 'Documentation for MicroBin Corporation\'s products, solutions, and platforms',
  base: '/',
  outDir: '../dist',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  srcDir: 'docs',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Hardware',
        items: [
          { text: 'System on Modules (mbXSOM)', link: '/hardware/mbxsom/' },
          { text: 'Infinite Board Computer (mbXXBC)', link: '/hardware/mbxxbc/' },
          { text: 'Single Board Computer (mbXSBC)', link: '/hardware/mbxsbc/' },
          { text: 'Development Kit (mbXDVK)', link: '/hardware/mbxdvk/' },
          { text: 'I/O Board (mbXIOB)', link: '/hardware/mbxiob/' }
        ]
      },
      {
        text: 'Cloud IoT Dashboard Builder',
        items: [
          { text: 'Device Monitoring (mbXRDM)', link: '/iot-dashboard/mbxrdm/' },
          { text: 'Device Control (mbXRDC)', link: '/iot-dashboard/mbxrdc/' },
          { text: 'OTA Updates (mbXOTA)', link: '/iot-dashboard/mbxota/' }
        ]
      },
      {
        text: 'PlatformQ',
        items: [
          { text: 'Hardware Design', link: '/platformq/hardware-design/' },
          { text: 'Firmware Development', link: '/platformq/firmware-development/' },
          { text: 'Embedded Software Applications', link: '/platformq/embedded-software/' },
          { text: 'Electronics (ESDM) services', link: '/platformq/esdm-services/' }
        ]
      }
    ],
    sidebar: {
      '/hardware/': [
        {
          text: 'Hardware',
          items: [
            { text: 'System on Modules (mbXSOM)', link: '/hardware/mbxsom/' },
            { text: 'Infinite Board Computer (mbXXBC)', link: '/hardware/mbxxbc/' },
            { text: 'Single Board Computer (mbXSBC)', link: '/hardware/mbxsbc/' },
            { text: 'Development Kit (mbXDVK)', link: '/hardware/mbxdvk/' },
            { text: 'I/O Board (mbXIOB)', link: '/hardware/mbxiob/' }
          ]
        }
      ],
      '/iot-dashboard/': [
        {
          text: 'Cloud IoT Dashboard Builder',
          items: [
            { text: 'Device Monitoring (mbXRDM)', link: '/iot-dashboard/mbxrdm/' },
            { text: 'Device Control (mbXRDC)', link: '/iot-dashboard/mbxrdc/' },
            { text: 'OTA Updates (mbXOTA)', link: '/iot-dashboard/mbxota/' }
          ]
        }
      ],
      '/platformq/': [
        {
          text: 'PlatformQ',
          items: [
            { text: 'Hardware Design', link: '/platformq/hardware-design/' },
            { text: 'Firmware Development', link: '/platformq/firmware-development/' },
            { text: 'Embedded Software Applications', link: '/platformq/embedded-software/' },
            { text: 'Electronics (ESDM) services', link: '/platformq/esdm-services/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/szabodanika/microbin' }
    ]
  }
})
