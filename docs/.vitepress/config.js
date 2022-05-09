module.exports = {
  lang: 'zh-CN',
  title: '🐷',
  description: 'note',
  // 主题配置
  themeConfig: {
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: true, // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 展示搜索框
    // algolia: {
    //   appKey: '',
    //   indexName: '',
    //   searchParameters: {
    //     faeFilters: ['tags:guide,api']
    //   }
    // },
    // 导航栏配置
    nav: [
      { text: '介绍', link: '/introduce' },
      { text: '个人网站', link: 'http://www.ylsong.com' },
      { text: 'Github', link: 'https://github.com/admin-common-template' }
    ],
    // 侧边栏
    sidebar: {
      '/': getSidebar(),
    }
  }
}

function getSidebar() {
  return [
    {
      text: "介绍",
      link: "/introduce"
    },
    {
      text: "Admin后台系统",
      children: [
        {
          text: "环境搭建",
          children: [
            {
              text: "初始化项目",
              link: "/admin/environment/setup1"
            },
          ]
        },
        {
          text: "基础布局",
          children: [
            {
              text: "Layout布局定型",
              link: "/admin/layout/setup1"
            }
          ]
        }
      ],
    },
    {
      text: "服务端",
      link: "/server/"
    },
    {
      text: "数据库",
      link: "/sql/"
    }
  ]
}