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
              { text: 'Infinite Board Computer', link: '/hardware/sbc' },
              { text: 'API Reference', link: '/hardware/api' },
              { text: 'BSP', link: '/hardware/bsp' },
            ]
          },
          { text: 'PlatformQ', link: '/platformq/' },
          // { text: 'IoT Dashboard', link: '/iot-dashboard/' },
          // ...
        ],
      },
    ],
  },
});
