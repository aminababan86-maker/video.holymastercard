import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站标题
  title: "教学文档中心",
  // 网站描述
  description: "在线教学文档与视频资源库",
  // 语言设置
  lang: 'zh-CN',

  // 主题配置
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '文档教程', link: '/guide/' },
      { text: '视频课程', link: '/videos/' }
    ],

    // 侧边栏配置
    sidebar: {
      '/guide/': [
        {
          text: '入门指南',
          items: [
            { text: '快速开始', link: '/guide/' },
            { text: '第一课', link: '/guide/lesson-1' },
            { text: '第二课', link: '/guide/lesson-2' }
          ]
        }
      ],
      '/videos/': [
        {
          text: '视频课程',
          items: [
            { text: '视频列表', link: '/videos/' },
            { text: '第一讲', link: '/videos/video-1' },
            { text: '第二讲', link: '/videos/video-2' }
          ]
        }
      ]
    },

    // 社交链接（可选）
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/your-repo' }
    ],

    // 页脚
    footer: {
      message: '教学文档中心',
      copyright: '© 2025'
    },

    // 搜索功能
    search: {
      provider: 'local'
    },

    // 文档页脚导航
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 大纲标题
    outlineTitle: '本页目录',

    // 最后更新时间文字
    lastUpdatedText: '最后更新'
  }
})
