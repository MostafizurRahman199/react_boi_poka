import { createContext, useEffect, useState } from "react";

import React from "react";

export const MyContext = createContext();

export default function MyProvider({ children }) {
  const [books, setBooks] = useState();
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);


const getStoreReadList = ()=>{
    const storeReadBookList = localStorage.getItem("read-list");
    if (storeReadBookList) {
      return JSON.parse(storeReadBookList);
      }
      return [];
}


const getStoreWishList = ()=>{
  const storeWishBookList = localStorage.getItem("wish-list");
  if (storeWishBookList) {
    return JSON.parse(storeWishBookList);
    }
    return [];
}






  const handleReadList = (bookId)=>{
    const LocalStoreReadList = getStoreReadList();
    console.log(LocalStoreReadList);

      const  check = LocalStoreReadList.find((item)=>item.bookId ==  bookId);

      if(!check){

       const readBook = books.find((book)=>book.bookId == bookId);
  
       const newReadList = [...readList, readBook];
       setReadList(newReadList);

       const readListString = JSON.stringify(newReadList);
       localStorage.setItem("read-list", readListString);
       
      }
    

      // console.log(readList);
    }
    
    
    const handleWishList = (bookId)=>{
      const LocalStoreWishList = getStoreWishList();
      console.log(LocalStoreWishList);
      
      const  check = LocalStoreWishList.find((item)=>item.bookId ==  bookId);

      if(!check){
       const wishBook = books.find((book)=>book.bookId == bookId);
       const newWishList = [...wishList, wishBook];
       setWishList(newWishList);

       const wishListString = JSON.stringify(newWishList);
       localStorage.setItem("wish-list", wishListString);

      }
    
  }

  useEffect(() => {
    fetch("booksData.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return <MyContext.Provider value={{ books, handleReadList, handleWishList, getStoreWishList, getStoreReadList, readList, wishList }}>{children}</MyContext.Provider>;
}
