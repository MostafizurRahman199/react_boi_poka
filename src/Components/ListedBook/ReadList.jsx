import React, { useContext } from 'react'
import { MyContext } from '../../utils/MyProvider'
import SingleReadBookCard from './SingleReadBookCard';

export default function ReadList() {
    const { getStoreReadList} = useContext(MyContext);
    const readList = getStoreReadList();
  return (
    <div className='flex flex-col gap-4'>{readList?.map((book)=><SingleReadBookCard key={book.bookId} book={book}/>)}</div>
  )
}
