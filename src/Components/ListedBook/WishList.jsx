


import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../utils/MyProvider'
import SingleWishBookCard from './SingleWishBookCard';

export default function WishList() {
    const { getStoreWishList} = useContext(MyContext);
    const [wishList, setWishList] = useState(getStoreWishList());


    useEffect(() => {
        setWishList(getStoreWishList());
    }, []);

  return (
    <div className='flex flex-col gap-4'>{wishList?.map((book)=><SingleWishBookCard key={book.bookId} book={book}/>)}</div>
  )
}
