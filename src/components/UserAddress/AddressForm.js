import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, PhoneOutlined, GlobalOutlined, HomeOutlined, CarOutlined } from '@ant-design/icons';
import userStore from '../../mobx/stores/AuthStore';
export default function AddressForm() {
    
    const onFinish = values => {
        userStore.userInfo.address.push(values);
      };
    return (<>
        <Form
            wrapperCol={{
                span: 4,
            }}
            layout="horizontal"
            onFinish={onFinish}
        >
            <Form.Item label="姓名" name="Name">
                <Input 
                    style={{width:240}}
                    placeholder="请输入姓名"
                    prefix={<UserOutlined className="site-form-item-icon" />} />
            </Form.Item>
            <Form.Item label="联系方式" name="Phone">
                <Input
                    style={{width:240}}
                    placeholder="请输入电话或座机号码"
                    prefix={<PhoneOutlined className="site-form-item-icon" />} />
            </Form.Item>
            <Form.Item label="国家和地区" name="Country">
                <Input
                    style={{width:240}}
                    placeholder="请输入您所在的国家或地区"
                    prefix={<GlobalOutlined className="site-form-item-icon" />}
                />
            </Form.Item>
            <Form.Item label="城市" name="City">
                <Input
                    style={{width:240}}
                    placeholder="请输入您居住的城市"
                    prefix={<HomeOutlined className="site-form-item-icon" />} />
            </Form.Item>
            <Form.Item label="住址" name="Location">
                <Input
                    style={{width:240}}
                    placeholder="请输入您的配送地址"
                    prefix={<CarOutlined className="site-form-item-icon" />} />
            </Form.Item>
            <Form.Item wrapperCol={{span:30}}>
                <Button type="primary" htmlType="submit">新增地址</Button>
            </Form.Item>
        </Form>
        </>                 
    )
}