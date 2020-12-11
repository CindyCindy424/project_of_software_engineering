import React from 'react';
import MyMenu from '../src/components/header/header';
import SearchBook from '../src/components/SearchBook';
import BookCard from '../src/components/BookBoard/BookCard';
function Home(){
    return (
        <>       
            <MyMenu logInfo={true}/>
            <SearchBook/>
            <BookCard/>
        </>
    )

}
export default Home;