import { defineConfig } from 'vitepress'

import { sidebar } from './docsMetadata.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zhishiku",
  description: "zhishiku is the knowledge base of LemonNeko and LiliumNeko",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introducing', link: '/docs' }
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lemonnekogh/zhishiku' }
    ],
  },
  ignoreDeadLinks: true
})
