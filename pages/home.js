import React from 'react';
import MyMenu from '../src/components/header/header';
import SearchBook from '../src/components/SearchBook';
import BookCard from '../src/components/BookBoard/BookCard';
function Home(){
    return (
        <>       
            <MyMenu/>
            <SearchBook/>
            <BookCard/>
        </>
    )

}
export default Home;