
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MicroBin Documentation",
  description: "Documentation for MicroBin Corporation's products, solutions, and platforms",
  
  // Base URL for deployment
  base: '/',
  
  // Custom appearance
  appearance: {
    toggleButton: true,
  },
  
  // Last updated text
  lastUpdated: true,
  
  // Markdown configuration
  markdown: {
    lineNumbers: true,
    // Configure custom containers
    config: (md) => {
      // Add custom containers if needed (tip, warning, danger)
    }
  },
  
  themeConfig: {
    // Logo in the nav bar
    logo: '/logo.png',
    
    // Top navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Hardware', link: '/hardware/' },
      { text: 'IoT Dashboard', link: '/iot-dashboard/' },
      { text: 'PlatformQ', link: '/platformq/' },
      { text: 'Contributing', link: '/contributing' },
    ],
    
    // Sidebar navigation
    sidebar: {
      '/hardware/': [
        {
          text: 'Hardware',
          items: [
            { text: 'Overview', link: '/hardware/' },
            { text: 'Single Board Computers', link: '/hardware/sbc' },
            { text: 'System on Modules', link: '/hardware/som' },
            { text: 'I/O Boards', link: '/hardware/io' },
            { text: 'Development Kits', link: '/hardware/devkit' },
            { text: 'Infinite Board Computers', link: '/hardware/ibc' },
          ]
        },
        {
          text: 'Product Series',
          items: [
            { text: 'Per4mer Series', link: '/hardware/per4mer' },
            { text: 'Ex6eeder Series', link: '/hardware/ex6eeder' },
            { text: 'Excep7ional Series', link: '/hardware/excep7ional' },
          ]
        },
        {
          text: 'API Documentation',
          link: '/hardware/api'
        }
      ],
      '/iot-dashboard/': [
        {
          text: 'IoT Dashboard',
          items: [
            { text: 'Overview', link: '/iot-dashboard/' },
            { text: 'Getting Started', link: '/iot-dashboard/getting-started' },
          ]
        },
        {
          text: 'User Guide',
          items: [
            { text: 'Dashboard Creation', link: '/iot-dashboard/user-guide/dashboards' },
            { text: 'Widgets', link: '/iot-dashboard/user-guide/widgets' },
            { text: 'Device Management', link: '/iot-dashboard/user-guide/devices' },
            { text: 'Alerts & Notifications', link: '/iot-dashboard/user-guide/alerts' },
          ]
        },
        {
          text: 'API Documentation',
          items: [
            { text: 'Authentication', link: '/iot-dashboard/api/authentication' },
            { text: 'Devices API', link: '/iot-dashboard/api/devices' },
            { text: 'Data API', link: '/iot-dashboard/api/data' },
            { text: 'Webhooks', link: '/iot-dashboard/api/webhooks' },
          ]
        },
        {
          text: 'Tutorials',
          link: '/iot-dashboard/tutorials'
        }
      ],
      '/platformq/': [
        {
          text: 'PlatformQ',
          items: [
            { text: 'Overview', link: '/platformq/' },
            { text: 'Account Creation', link: '/platformq/account-creation' },
            { text: 'Organization Setup', link: '/platformq/organization-setup' },
            { text: 'First Project', link: '/platformq/first-project' },
          ]
        },
        {
          text: 'User Guide',
          link: '/platformq/user-guide'
        },
        {
          text: 'Tutorials',
          link: '/platformq/tutorials'
        },
        {
          text: 'FAQ',
          link: '/platformq/faq'
        }
      ]
    },
    
    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/microbin' }
    ],
    
    // Footer
    footer: {
      message: 'MicroBin Documentation',
      copyright: '© 2025 MicroBin Corporation. All rights reserved.'
    },
    
    // Search
    search: {
      provider: 'local'
    },
    
    // Carbon ads (like Vue.js uses)
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement',
    // },
    
    // Edit links (like Vue.js has)
    editLink: {
      pattern: 'https://github.com/microbin/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  }
})
