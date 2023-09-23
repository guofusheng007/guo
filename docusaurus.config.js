// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '蝈蝈',
  tagline: '若放弃努力，你永远不会知道自己将来是多么的优秀',
  favicon: 'img/favicon.png',
  //staticDirectories: ['public', 'static'],
  baseUrlIssueBanner: true,


  customFields: {
    bannerImgUrl: '/img/preview.gif',             //首页广告动画，采用gif格式
    bannerString: '😅IT人，就是那群挨了别人踢而仍不能回踢的人，天天被人揍~',   //首页滚动文字
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'guofusheng007', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  deploymentBranch: 'master',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  /*
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/docusaurus.png',
      },
    },
  ],
  */

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        //docs: false,    //若配置此项，表示有不需要文档功能
        docs: {
          /*
          lastVersion: 'current',
          versions: {
            current: {
              label: 'latest',
              path: 'latest',
            },
          },
          */
          //id: 'docs',
          breadcrumbs: true,
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,      //全局配置，树状目录是否默认展开，false展开，true关闭
          showLastUpdateTime: false,
        },
        //blog: false,    //若配置此项，表示有不需要blog功能
        blog: {
          //blog显示
          //id: 'blog',
          showReadingTime: true,                          //显示读取时间
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          //blog list配置
          //blogTitle: 'Docusaurus blog!-888',    //尚未测试
          //blogDescription: 'A Docusaurus powered blog!-666',    //尚未测试
          postsPerPage: 'ALL',              //blog菜单默认显示的blog列表数量(右边)，默认10个，ALL表示全部,0表示不显示
          //树状侧边
          blogSidebarTitle: 'All posts',    //树状侧边的名称
          blogSidebarCount: 'ALL',          //树状侧边显示blog的数量，默认为5个，0表示不显示，"ALL"表示全部
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  plugins: [
    require.resolve("@cmfcmf/docusaurus-search-local"),
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-ideal-image', 
      {
        //quality: 100,
        //max: 1030, // 最大缩放图片尺寸。
        //min: 640, // 最小缩放图片尺寸。 如果原始值比这还低，会使用原图尺寸。
        //steps: 2, // 在 min 和 max 之间最多生成的图片数量（包含两端点）
        disableInDev: true,
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Meta配置(HTML 元数据)
      // Replace with your project's social card
      // 网站的元数据图像 URL。 相对于你的网站的静态目录。 不能是 SVG。 可以是外部链接。
      //image: 'img/docusaurus-social-card.jpg',
      image: 'img/favicon.png',
      //你可以配置额外的 HTML 元数据（以及覆盖现有数据）
      metadata: [
        {
          name: 'keywords',
          content: 'go程序开发,云原生,DevOps CI/CD,k8s/istio,ceph,harbor,rancher,prometheus/grafana,PXE,运维,网络,新基础架构,高性能计算',
        },
      ],
      socials: {
        github: 'https://github.com/Shake-Jarjane',
        qq: 'http://wpa.qq.com/msgrd?v=3&uin=2531535061&site=qq&menu=yes',
        wechat: 'https://cdn-us.imgs.moe/2023/01/17/63c66e6fe7adf.jpg',
      },

      // 配置代码码风格，其中lightCodeTheme和darkCodeTheme是配置前面定义过的变量
      prism: {
        //theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        theme: darkCodeTheme,
        //theme: require('prism-react-renderer/themes/vsDark'),
        //darkTheme: require('prism-react-renderer/themes/vsDark'),
      },

      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {}
      },
      //配置文档中H2到H6中哪些要显示,默认h1不能显示
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      //顶部公告配置
      /*
      announcementBar: {
        id: 'support_us',
        content:
          'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      */
      //侧边栏配置
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true, //这能让用户免于打开过多的菜单，帮助他们关注选定的部分。
        },
      },
      //默认白昼主题，可配置dark模式
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // 顶部导航菜单
      navbar: {        
        hideOnScroll: false,
        title: '蝈蝈',
        logo: {
          alt: 'test Logo',
          src: 'img/favicon.png',
        },
        //页眉配置，即顶部横向导航menu。配置次序就是显示次序。
        items: [
          //多语言下拉菜单
          /*
          {
            type: 'localeDropdown',
          },
          */
          //版本下拉菜单
          /*
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: false
          },
          */
          {
            label: '🏡首页',
            to: '/',
            position: 'right',
          },
          //顶部菜单及其二级菜单
          {
            label: '📝文档',
            position: 'right',
            type: 'dropdown',
            items:
            [
              //关联树状菜单样例
              {
                type: 'docSidebar',
                sidebarId: 'devSidebar',
                label: '程序开发',
              },
              {
                type: 'docSidebar',
                sidebarId: 'devopsSidebar',
                label: 'DevOps云原生',
              },
              {
                type: 'docSidebar',
                sidebarId: 'netSidebar',
                label: '运维',
              },
              {
                type: 'docSidebar',
                sidebarId: 'yunSidebar',
                label: '网络',
              },
              {
                type: 'docSidebar',
                sidebarId: 'toolsSidebar',
                label: '工具',
              },
            ],
          },
          //搜索框菜单,需要配置搜索引擎才可用.
          //在配置了“docusaurus-search-local“方式后，search菜单会自动出现在最right边，无需再配置。
          /*
          {
            type: 'search',
            position: 'left'          // 显示在导航的 左边 还是 右边
          },
          */      
          // 普通顶部菜单: page方式
          {
            to: '/blog', 
            label: '博客', 
            position: 'right',
          },
          //更多
          {
            label: '更多',
            position: 'right',
            type: 'dropdown',
            items:
            [
              {
                type: 'docSidebar',
                sidebarId: 'caseSidebar',
                label: 'ShowCase',
              },
              {
                label: '项目',
                to: '/project',
              },
              {
                label: '资源',
                to: '/resource',
              },
              {
                label: '友情链接',
                to: '/friends',
              },
              {
                label: '精益副业❤️',
                href: 'https://guo-fs.com/lean-side-bussiness/docs/',
              },
            ],
          },
          {
            label: '关于',
            position: 'right',
            type: 'dropdown',
            items:
            [
              {
                label: '站点',
                to: '/about-site',
              },
              {
                label: '博主',
                to: '/about-us',
              },
            ],
          },
          {
            href: 'https://github.com/guofusheng007',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '程序开发❤️',
                to: '/docs/developers',
              },
              {
                label: 'DevOps云原生',
                to: '/docs/devops',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
          {
            title: '☎️Contact',
            items: [
              {
                html: `<img style="height:24px;margin-bottom:0.0rem" src="https://api.iconify.design/entypo/mail.svg?color=white" />邮箱： <a href="mailto:guofs@139.com">guofs@139.com</a>`,
              },
              {
                html: `<img style="height:24px;margin-bottom:0.0rem" src="https://api.iconify.design/uiw/weixin.svg?color=white" />微信： goldphenix`,
              },
            ],
          },
        ],
        /*
        logo: {
          alt: 'Meta 开源图标',
          src: 'img/docusaurus.png',
          width: 32,
          height: 32,
        },
        */
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        copyright: `<a href="http://beian.miit.gov.cn/" >备案号(示例)：深ICP备2020017848号-8</a></br>Copyright © 2023 - ${new Date().getFullYear()} 蝈蝈 built with Docusaurus, deploy with Vercel`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
