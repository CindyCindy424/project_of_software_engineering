import React, {Component} from 'react';
import {Input} from 'antd';

const {Search } = Input;

const onSearch = value =>console.log(value);

export default class SearchBook extends Component {
    render(){
        return (<Search
            placeholder="搜索图书"
            allowClear
            enterButton="搜索"
            size="large"
            onSearch={onSearch}
        ></Search>)
    }
}