import React, {Component} from 'react';
import {Input} from 'antd';

const {Search } = Input;

const onSearch = value =>console.log(value);

export default class SearchBook extends Component {
    render(){
        return (<Search
            placeholder="Search Book!"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
        ></Search>)
    }
}