import { defineConfig } from 'vitepress'

import { sidebar } from './docsMetadata.json'
import { BreadcrumbsDataGenerator } from '@lemonneko/vitepress-plugin-breadcrumbs'

const breadcrumbsGenerator = new BreadcrumbsDataGenerator('zhishiku', 'docs')

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
        '@nolebase/vitepress-plugin-enhanced-readabilities/client'
      ]
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities'
      ]
    }
  },
  transformPageData(pageData, context) {
    breadcrumbsGenerator.generate(pageData, context.siteConfig.pages)
  }
})
