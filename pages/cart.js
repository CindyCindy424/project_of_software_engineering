import React from 'react';
import {observer} from 'mobx-react';

import BookBoard from '../src/components/BookBoard/BookBoard';

import CartStore from '../src/mobx/stores/CartStore';
import { Button } from 'antd';

const Cart = observer(()=>{
    console.log('cart:')
    console.log(CartStore.cart)
    return (<>
        <BookBoard bookList={CartStore.cart} deleteOrAdd={true}/>
    </>)
});


export default Cart;