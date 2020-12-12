import React, { useState } from 'react';
import Router from 'next/router';
import { observer, Provider } from 'mobx-react';
import { Button, Modal } from 'antd';

import userStore from '../src/mobx/stores/AuthStore';
import OrderStore from '../src/mobx/stores/OrderStore';

import BookCard from '../src/components/BookBoard/BookCard';
import UserAddress from '../src/components/UserAddress/UserAddress';
import AddressForm from '../src/components/UserAddress/AddressForm';

function CreateOrder() {

    const [isModalVis, setIsModalVis] = useState(false);



    const showModal = () => {
        setIsModalVis(true);
    };

    const handleOk = () => {
        setIsModalVis(false);
    };

    const handleCancel = () => {
        setIsModalVis(false);
    };

    return (
        <>
            <UserAddress/>
            <Button onClick={showModal}>新增地址</Button>
            <BookCard />
            <Modal
                title={'新增地址'}
                visible={isModalVis}
                onCancel={handleCancel}
                footer={[]}
            >
                <AddressForm closeModal={handleOk}/>
            </Modal>

        </>
    )

}
export default observer(CreateOrder);
//