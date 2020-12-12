import { FormProvider } from 'antd/lib/form/context';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'antd';
import AuthStore from '../../mobx/stores/AuthStore';
import AddrStore from '../../mobx/stores/AddrStore';
import { getAddr } from '../../utils/ApiUtil';
import { Observer, inject, observer, useLocalStore } from 'mobx-react';
import Router from 'next/router';
import AddrCard from './AddrCard';

const UserAddress = observer(() => {

    const Cards = () => {
        const addr = {
            reciever: 'wangzeju',
            phone: '1145141989810',
            country: '中国',
            province: '上海',
            city: '上海',
            district: '嘉定区',
            postCode: '114514',
            location: '曹安公路4800号同济大学'
        };
        return AddrStore.addrList.map((addr) => {
            return (<AddrCard addr={addr}/>)
        });
    }
    return (<div>
        {Cards()}
    </div>)
})
export default UserAddress;