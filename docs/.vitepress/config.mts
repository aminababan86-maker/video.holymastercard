import { defineConfig } from 'vitepress'

export default defineConfig({
  // GitHub Pages 部署路径（仓库名）
  base: '/video.holymastercard/',

  // 网站标题
  title: "Holy Card教程",
  // 网站描述
  description: "Holy Card在线视频教程与学习资源库",
  // 语言设置
  lang: 'zh-CN',

  // 主题配置
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '视频课程', link: '/videos/' },
      { text: '开卡说明', link: '/guide/' }
    ],

    // 侧边栏配置
    sidebar: {
      '/guide/': [
        {
          text: '开卡说明',
          items: [
            { text: '开卡指南', link: '/guide/' }
          ]
        }
      ],
      '/videos/': [
        {
          text: '视频课程',
          items: [
            { text: '课程总览', link: '/videos/' }
          ]
        },
        {
          text: '现有视频教程',
          collapsed: false,
          items: [
            { text: '课程介绍', link: '/videos/current/' },
            { text: '第一讲', link: '/videos/current/video-1' },
            { text: '第二讲', link: '/videos/current/video-2' }
          ]
        },
        {
          text: '微软相关教程',
          collapsed: false,
          items: [
            { text: '微软教程', link: '/videos/microsoft/video-1' }
          ]
        },
        {
          text: 'Gemini 教程',
          collapsed: false,
          items: [
            { text: '课程介绍', link: '/videos/gemini/' }
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
      message: 'Holy Card教程',
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
