import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../utils/MyProvider';
import SingleReadBookCard from './SingleReadBookCard';

export default function ReadList() {
  const { getStoreReadList } = useContext(MyContext);

  // Initialize readList state with data from getStoreReadList
  const [readList, setReadList] = useState(getStoreReadList());

  // Update readList whenever localStorage changes
  useEffect(() => {
      setReadList(getStoreReadList());
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {readList?.map((book) => (
        <SingleReadBookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
}
