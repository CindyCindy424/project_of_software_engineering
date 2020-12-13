import React from 'react';
import { Button, Grid } from 'antd';

import BookCard from './BookCard';
import CartStore from '../../mobx/stores/CartStore';
import { observer } from 'mobx-react';

 const BookBoard=observer(({ bookList,deleteOrAdd }) => {

    const deleteBook = (book)=>{
        CartStore.remove(book);
    }
    const addBook = (book) =>{
        CartStore.add(book);
        console.log(CartStore.cart)
    }
    
    const Cards = () => {
        return (bookList.map((book) => {
            return (
            <BookCard book={book} 
                action={deleteOrAdd==true?
                <Button onClick={()=>(deleteBook(book))}>从购物车移除</Button>
                :<Button onClick={()=>{addBook(book)}}>添加到购物车</Button>} />)
        }))
    }

    return (<div>{Cards()}</div>)
});

export default BookBoard;