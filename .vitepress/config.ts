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
  ignoreDeadLinks: true,
  vite: {
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
  transformPageData(pageData) {
    const splitPath = pageData.filePath.split('/').slice(1, -1)
    const breadcrumbs: {
      title: string,
      link: string
    }[] = [{
      title: '代码笔记',
      link: '/docs'
    }]

    for (let i = 0; i < splitPath.length; i++) {
      let link = '/docs/'

      for (let j = 0; j <= i; j++) {
        link += encodeURIComponent(splitPath[j]) + '/'
      }

      breadcrumbs.push({ title: splitPath[i], link })
    }

    if (splitPath.length)
      pageData.frontmatter.breadcrumbs = breadcrumbs
  }
})
