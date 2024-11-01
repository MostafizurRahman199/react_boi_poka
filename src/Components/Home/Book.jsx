import React, { useContext } from 'react';
import { MyContext } from '../../utils/MyProvider';
import BookCard from './BookCard';

function Book() {

const {books} = useContext(MyContext);

  return (
    <div className=''>
        {
           books?.map((book)=><BookCard key={book.bookId} book={book}/>)
        }
    </div>
  );
}

export default Book;
