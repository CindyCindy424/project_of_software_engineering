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

### 12/11:
建立了注册(register)、登录(login)页面和主页(home)之间的路由，添加了BookCard组件，用来在主页上展示Book信息(应当被组织到BookBoard里排版展示)*，通过点击其购买按钮应该能进入商品详情页，但现在是定向到了注册页面。详情页面即book_detail页面，目前还是空的。通过详情页面应能进入创建订单(create_order)页面，在这里应该有用户的地址信息展示(UserAdress：空)，和添加新地址(AddressForm)组件，以及书籍的简介卡片(BookDescription:空)，从这里点击下单按钮应该能进入支付页面(Payment)，此时该订单被加入订单管理(OrderStore)且状态为未完成，待支付结束则其状态转为完成。

以上的页面跳转逻辑一不涉及数据的远端获取，二不涉及数据的上传，仅仅做了本地的管理(AuthStore完成登录，OrderStore可以添加/删除订单(尚不完善))这两点需要进一步添加。

> *首页还应当有畅销书排行榜，可能有分类筛选功能。首页现在还有一个没什么用的搜索栏。



