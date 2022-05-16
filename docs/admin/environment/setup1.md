# 环境搭建

## 统一开发环境

node => v16.15.0 => [前往官网下载](https://nodejs.org/zh-cn/)

yarn => 最新版 => `npm i yarn@latest -g`

vscode，[前往官网下载](https://code.visualstudio.com/)

## 统一项目环境

搭建vite项目，[vite官网](https://www.vitejs.net/guide/#scaffolding-your-first-vite-project)

选择vue框架并启动项目

显示如下则搭建成功

<img src=".\..\..\images\admin\vue-js\setup1-1.png" style="zoom: 50%;" />

## 配置环境及依赖

添加 [vue-router](https://router.vuejs.org/zh/introduction.html)，实现路由跳转

添加 [Element-Plus](https://element-plus.org/zh-CN/guide/installation.html#%E4%BD%BF%E7%94%A8%E5%8C%85%E7%AE%A1%E7%90%86%E5%99%A8)，配置按需引入

添加 [pinia](https://pinia.vuejs.org/getting-started.html)，实现状态库数据的引用和修改（包括外部引用）

添加 [pinia-plugin-persist](https://seb-l.github.io/pinia-plugin-persist/)，实现状态库数据持久化

添加 [axios](http://www.axios-js.com/zh-cn/docs/)， 实现接口请求封装，只看链接概述部分

添加 [Windi CSS](https://windicss.org/integrations/vite.html)，原子css，统一css写法和规范

添加 `sass` 和 `sass-loader`，项目使用sass语法写css样式

添加 `eslint` 校验配置，不清楚具体配置的可先查询社区文档，推荐[掘金](https://juejin.cn/)

预览如下

<img src=".\..\..\images\admin\vue-js\setup1-2.png" style="zoom: 50%;" />


## 约定项目结构
```
├── doc（项目构建说明文档）
├── public
│   └── favicon.ico
├── src
|   ├── assets（静态资源目录）
|   |   ├──css
|   |   ├──images
|   |   └──js
|   ├── common（公用配置、方法等）
|   |   ├── config.js（项目相关配置）
|   |   ├── dayjs.js（针对服务器时区的日期转换方法）
|   |   ├── enums.js（枚举）
|   |   ├── request.js（ajax请求封装）
|   |   ├── tools.js（通用工具类）
|   |   └── utils.js（项目工具类）
|   ├── components （基础及公用组件）
|   ├── handles（数据处理）
|   |   ├── api（接口管理）
|   |   ├── column（表格列）
|   |   ├── data（接口返回数据）
|   |   ├── export（导出Excel数据）
|   |   └── validate（表单校验）
|   ├── layout（项目主体结构）
|   ├── router（路由配置）
|   |   ├── children.js（子路由）
|   |   └── index.js（配置）
|   ├── store（状态管理）
|   |   └── app.js（应用模块）
|   └── views（页面）
├── App.vue（项目入口组件）
├── main.js（项目入口文件）
├── .eslintignore（eslint校验忽略项）
├── .eslintrc.js（eslint规则配置）
├── index.html（主页）
├── jsconfig.json（js规则配置）
├── vite.config.js（脚手架配置）
└── windi.config.js（原子css配置）
```
