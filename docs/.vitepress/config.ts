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
              { text: 'Getting Started', link: '/hardware/per4mer/getting-started/getting-started' },
              { text: 'Build Instructions', link: '/hardware/per4mer/getting-started/build-instructions' },
              { text: 'Flashing Programming', link: '/hardware/per4mer/getting-started/flashing-programming' },
              { text: 'Project Structure ', link: '/hardware/per4mer/getting-started/project-structure' },
              { text: 'Toolchain Setup ', link: '/hardware/per4mer/getting-started/toolchain-setup' },
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
    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2025 MICROBIN CORPORATION PRIVATE LIMITED. All Rights Reserved.'
    }
  },
});
