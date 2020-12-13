import React from 'react';
import MyMenu from '../src/components/header/header';
import SearchBook from '../src/components/SearchBook';
import BookCard from '../src/components/BookBoard/BookCard';
import BookBoard from '../src/components/BookBoard/BookBoard';
import CartStore from '../src/mobx/stores/CartStore';
function Home(){
    return (
        <>       
            <MyMenu/>
            <SearchBook/>
            <BookBoard bookList={[{
        name:'概率论',
        image:'',
        publisher:'同济大学出版社',
        author:'',
        category:['学术','教育'],
        price:'38',
        discount:'1',
        secondhand:true,
        ISBN:'1245362789',
        bookAbstract:'???',
        inventory:'15',
        id:'114514',
    }]} deleteOrAdd={false}/>
        </>
    )

}
export default Home;