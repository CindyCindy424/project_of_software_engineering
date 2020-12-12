import React, { useState } from 'react';
import { Button,Card } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import AddressForm from './AddressForm';
import AddrStore from '../../mobx/stores/AddrStore';

export default function AddrCard({addr}) {

    const [isModalVis, setIsModalVis] = useState(false);
    const handleCancel = () => {
        setIsModalVis(false);
    }
    const handleOk = () => {
        AddrStore.remove(addr);
        setIsModalVis(false);
    }

    return (<>
        <Card
            style={{ width: 300 }}
            actions={[
                <Button onClick={() => {
                    AddrStore.remove(addr)
                }}>删除
                </Button>,
                <Button
                    onClick={() => {
                        setIsModalVis(true);
                    }}>修改
                </Button>]}>
            <p>{addr.reciever}</p>
            <span>{addr.phone}</span>
            <p>{addr.country + addr.province + addr.city}</p>
            <span>{addr.district + addr.location}</span>
            <span>{addr.postCode}</span>
        </Card>
        <Modal 
        title={'修改地址'}
        visible={isModalVis}
        onCancel={handleCancel}
        footer={[]}
        >
            <AddressForm preAddr={addr} closeModal={handleOk}/>
        </Modal>
    </>)
}