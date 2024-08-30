import { defineConfig } from 'vitepress'

import { sidebar } from './docsMetadata.json'

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
      title: 'zhishiku',
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
