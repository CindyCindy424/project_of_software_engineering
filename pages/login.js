import { Form, Input, Button, Checkbox } from 'antd';
import  React,{ useState } from 'react';
import { observer } from 'mobx-react';
import userStore from '../src/mobx/stores/AuthStore'
import Router from 'next/router';
import Header from '../src/components/header/header';
import Link from 'next/link';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


function Login(){
  const onFinish = values => {
    userStore.Login(values);
    Router.push('/home');
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (<>
    <Header/>
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="toRegister">
        还没有账户？现在
        <Link href="/register">注册</Link>！
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  )
}

export default observer(Login);