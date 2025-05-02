import { defineConfig } from 'vitepress'
import '.theme.css'

export default defineConfig({
  title: 'MicroBin Documentation',
  description: 'Documentation for MicroBin Corporation\'s products, solutions, and platforms',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Hardware', link: '/hardware/' },
      { text: 'IoT Dashboard', link: '/iot-dashboard/' },
      { text: 'PlatformQ', link: '/platformq/' },
      { text: 'Contributing', link: '/contributing' }
    ],
    sidebar: {
      '/hardware/': [
        {
          text: 'Hardware',
          items: [
            { text: 'Introduction', link: '/hardware/' },
            { text: 'Ex6eeder XP2', link: '/hardware/ex6eeder' },
            { text: 'API Reference', link: '/hardware/api' }
          ]
        }
      ],
      '/iot-dashboard/': [
        {
          text: 'IoT Dashboard',
          items: [
            { text: 'Introduction', link: '/iot-dashboard/' },
            { text: 'Getting Started', link: '/iot-dashboard/getting-started' }
          ]
        }
      ],
      '/platformq/': [
        {
          text: 'PlatformQ',
          items: [
            { text: 'Introduction', link: '/platformq/' },
            { text: 'Account Creation', link: '/platformq/account-creation' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/szabodanika/microbin' }
    ]
  }
})
