import { defineConfig } from 'vitepress'

import { sidebar } from './docsMetadata.json'
import { generateBreadcrumbsData } from '@nolebase/vitepress-plugin-breadcrumbs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zhishiku",
  description: "zhishiku is the knowledge base of LemonNeko and LiliumNeko",
  head:[
    [
      'link',
      {rel:'webmention',href:'https://webmention.io/username/zhishiku.lemonneko.moe'}
    ],
    [
      'a',{href:'https://github.com/liliumneko',rel:'me'},`https://github.com/liliumneko`
    ],
  ],
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
    docFooter: { 
      prev: false, 
      next: false, 
    }, 
  },
  ignoreDeadLinks: true,
  vite: {
    assetsInclude: ['**/*.jpe'],
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        '@nolebase/vitepress-plugin-breadcrumbs/client'
      ]
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-breadcrumbs'
      ]
    }
  },
  transformPageData(pageData, context) {
    generateBreadcrumbsData(pageData, context)
  }
})
