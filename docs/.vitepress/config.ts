import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'MicroBin',
  description: 'Your complete resource for MicroBin products',
  themeConfig: {
    nav: [
      { text: 'Hardware', link: '/hardware' },
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'IoT Dashboard', link: '/iot-dashboard' },
          // ...
        ],
      },
    ],
  },
});
