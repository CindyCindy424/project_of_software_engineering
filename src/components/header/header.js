import React from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons'

import SearchBook from './SearchBook';
export default function MyMenu() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
            </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
            </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
            </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  )

  return (
    <>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Menu<DownOutlined />
        </a>
      </Dropdown>
      <SearchBook/>
    </>
  )
}
