# Project of Software Engineering
## Book Hub
使用 [Next.js](https://nextjs.org/) 搭建的前端项目，UI框架使用antd，支持mobx进行数据管理。

## Getting Started
建议使用yarn进行包管理。
1. 首先安装依赖
```bash
yarn install
# or
npm install
```
2. 运行项目
```bash
yarn run dev
# or 
yarn dev
```

## Next.js
Nextjs中不需要使用路由组件，类似于PHP的路由机制，pages/文件夹即为根目录，路由由其下的文件夹及文件生成。
动态路由生成规则详见Next.js文档。

## antd
Ant-design是一套应用于信息管理的UI库，足够满足本项目的基本需求。
文档：https://ant.design/docs/react/getting-started-cn

## mobx
mobx是一个状态管理和数据管理框架，通过建立数据中心（Store），向组件分发数据（Inject、Observe），数据驱动更新（Computed）以及组件修改数据（Action）接口建立中心化的数据管理流程。
由于本项目的数据并不复杂，可视情况使用mobx。
文档：https://cn.mobx.js.org/