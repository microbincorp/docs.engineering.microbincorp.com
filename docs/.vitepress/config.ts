import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'MicroBin',
  description: 'Your complete resource for MicroBin products',
  themeConfig: {
    sidebar: [
      {
        items: [
          {
            text: 'Hardware - Per4mer',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/hardware/' },
              {
                text: 'SBC', collapsed: true, link: '/hardware/sbc'
              },
              { text: 'SoM', link: '/hardware/som' },
              { text: 'IO Boards', link: '/hardware/io' },
              { text: 'DVK - Development Kit', link: '/hardware/sdk' },
              { text: 'Infinite Board Computer', link: '/hardware/xbc' },
              { text: 'API Reference', link: '/hardware/api' },
              { text: 'BSP', link: '/hardware/bsp' },
              { text: 'Drivers', link: '/hardware/drivers' },
              {
                text: 'Resources', collapsed: true, items: [
                  {
                    text: 'Datasheets',
                    link: '/hardware/datasheets'
                  }
                ]
              },

            ]
          },
          {
            text: 'PlatformQ', link: '/platformq/', collapsed: true, items: [
              // {
              //   text:'Overview',
              //   link:'/platformq/'
              // },
              // {
              //   text:'Account Creation',
              //   link:'/platformq/account-creation/'
              // },
            ]
          },
          // { text: 'IoT Dashboard', link: '/iot-dashboard/' },
          // ...
        ],
      },
    ],
  },
});
