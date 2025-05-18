import { defineConfig } from 'vitepress'
import { set_sidebar } from './utils/auto_sidebar.mjs'
// import { generateSidebar } from 'vitepress-sidebar';
// import { withSidebar } from 'vitepress-sidebar';

// const vitePressOptions = {};

// const vitePressSidebarOptions = [
//   {
//     documentRootPath: '',
//     scanStartPath: '/programming/',
//     basePath: '/programming/',
//     resolvePath: '/programming/Python',
//     useTitleFromFileHeading: true
//   },
//   {
//     documentRootPath: '',
//     scanStartPath: '/webpages/',
//     resolvePath: '/webpages/',
//     useTitleFromFrontmatter: true
//   }
// ];


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/online-docs',
  head: [["link", { rel: "icon", href: "/logo_dark.png" }]],
  title: "牧码人",
  description: "希望你见过所有的浑浊，眼里还有星辰，大牧莫邪的在线文档库",
  themeConfig: {
    outline:[2,4],
    outlineTitle: "目录",
    // logo配置
    logo: {
      light: "/logo_dark.png",
      dark: "/logo_light.png"
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '编程语言', items: [
          { text: "Python", link: "/programming/Python" }
        ]
      },
      {
        text: '前端开发', items: [
          { text: "网页设计开发", link: "/webpage" },
          { text: "JavaScript", link: "/webpage" },
          { text: "NodeJS", link: "/webpage" },
          { text: "Vue3.x", link: "/webpage" },
          { text: "Uniapp", link: "/webpage/5.Uniapp" },
        ]
      },
      {
        text: 'WEB开发', items: [
          { text: "待升级..", link: "/" }
        ]
      },
      {
        text: '数据库', items: [
          { text: "待升级..", link: "/" }
        ]
      },
      {
        text: '虚拟化', items: [
          { text: "待升级..", link: "/" }
        ]
      },
      {
        text: "机器学习", items: [
          { text: "数学基础", link: "/machinelearning/1、数学基础" },
          { text: "数据分析", link: "/machinelearning/2、数据分析" },
          { text: "机器学习", link: "/machinelearning/3、机器学习" },
          { text: "深度学习", link: "/machinelearning/4、深度学习" },
        ]
      },
      {
        text: "AI大模型", items: [
          { text: "待升级..", link: "/" }
        ]
      },
      {
        text: '工具软件', items: [
          { text: "网站维护", link: "/tools/website" }
        ]
      },
      {
        text: '开源项目', items: [
          { text: "待升级..", link: "/" }
        ]
      }
    ],

    // sidebar: withSidebar(vitePressOptions, vitePressSidebarOptions),
    sidebar: {
      "/programming/Python": set_sidebar('/programming/Python/'),
      "/machinelearning/1、数学基础": set_sidebar('/machinelearning/1、数学基础'),
      "/machinelearning/2、数据分析": set_sidebar('/machinelearning/2、数据分析'),
      "/machinelearning/3、机器学习": set_sidebar('/machinelearning/3、机器学习'),
      "/machinelearning/4、深度学习": set_sidebar('/machinelearning/4、深度学习'),
      "/tools/website": set_sidebar('/tools/website/'),
      "/webpage/5.Uniapp": set_sidebar('/webpage/5.Uniapp'),
    },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'gitee', link: 'https://gitee.com/mouwenbin' }
    ],

    footer: {
      copyright: "CopyRight © 2025-present DAMU",
      message: "大牧老师的在线文档库 | 希望你见过所有的浑浊，眼里还有星辰"
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档"
          }
        },
        modal: {
          noResultsText: "无法找到相关结果",
          resetButtonTitle: "清除查询条件",
          footer: {
            selectText: "选择",
            navigateText: "切换"
          }
        },
      }
    }
  }
})
