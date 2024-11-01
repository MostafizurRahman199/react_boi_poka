import React, { useContext } from 'react';
import { MyContext } from '../../utils/MyProvider';
import BookCard from './BookCard';

function Book() {

const {books} = useContext(MyContext);

  return (
<div className='mx-auto'>
  <h1 className='text-4xl text-center font-bold'>Books</h1>
<div className='flex flex-wrap gap-4 justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 mx-auto  py-12'>
      
      {
         books?.map((book)=><BookCard key={book.bookId} book={book}/>)
      }
  </div>
</div>
  );
}

export default Book;
