import React, { useState } from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import userStore from '../../mobx/stores/AuthStore';
import Router from 'next/router';
import Link from 'next/link';


function MyMenu() {

  const LoggedMenu = (
    <Menu>
      <Menu.Item>
        <Link target="_blank" rel="noopener noreferrer" href="/AccountManagement">
          账户管理
            </Link>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="/">
          购物车
            </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          订单管理
            </a>
      </Menu.Item>
      <Menu.Item
        onClick={()=>{
          userStore.logout();
          Router.reload();}}
        danger>
        登出</Menu.Item>
    </Menu>
  )

  const unLoginMenu = (
    <Menu>
      <Menu.Item>
        <Link target="_blank" rel="noopener noreferrer" href="/login">
          登录
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link target="_blank" rel="noopener noreferrer" href="/register">
          注册
        </Link>
      </Menu.Item>
    </Menu>
  )
  var menu = isLogin => (isLogin == true ? LoggedMenu : unLoginMenu)

  return (
    <Menu>
      <Link target="_blank" href="/home">首页</Link>
      <Dropdown overlay={menu(userStore.isLogin)}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          主菜单<DownOutlined />
        </a>
      </Dropdown>
    </Menu>
  )
}
export default observer(MyMenu);