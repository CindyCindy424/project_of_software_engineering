import React from 'react';
import { Button, Card } from 'antd';
import AddrStore from '../../mobx/stores/AddrStore';
import { getAddr } from '../../utils/ApiUtil';
import { observer } from 'mobx-react';
import AddrCard from './AddrCard';

const UserAddress = observer(() => {

    const Cards = () => {
        return AddrStore.addrList.map((addr) => {
            return (<AddrCard addr={addr}/>)
        });
    }
    return (<div>
        {Cards()}
    </div>)
})
export default UserAddress;