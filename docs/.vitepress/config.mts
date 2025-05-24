//import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  title: "开源人",
  description: "开源项目",
  lang: "zh-Hans",
  base: '/test/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Townwang' }
    ],
    footer: {
      copyright: "版权所有 © 2012-2025 <a href='https://github.com/Townwang'>Townwang</a>"
    },
  }
})
