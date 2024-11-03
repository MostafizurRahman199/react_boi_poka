import { createContext, useEffect, useState } from "react";

import React from "react";
import { toast } from "react-toastify";

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



const handleSort  = (sortType, readList , setReadList)=>{
  // sort readList based on sortType
 
    if(sortType === 'No of pages'){
          const sortList = [...readList].sort((a,b)=>a.totalPages -  b.totalPages);
          setReadList(sortList);
    }
    if(sortType === 'Publish year'){
      const sortList = [...readList].sort((a,b)=>a.yearOfPublishing -  b.yearOfPublishing);
      setReadList(sortList);
    }
    if(sortType === "Ratings"){
      const sortList = [...readList].sort((a,b)=>a.rating -  b.rating);
      setReadList(sortList);
    }

}





  const handleReadList = (bookId)=>{
    const LocalStoreReadList = getStoreReadList();
    console.log(LocalStoreReadList);

      const  check = LocalStoreReadList.find((item)=>item.bookId ==  bookId);

      
      if(check){
        toast.error("This Book have already in ReadList", { position: "top-right" })
      }else{

       const readBook = books.find((book)=>book.bookId == bookId);
  
       const newReadList = [...readList, readBook];
       setReadList(newReadList);

       const readListString = JSON.stringify(newReadList);
       localStorage.setItem("read-list", readListString);
       toast.success("This book added to readlist", { position: "top-right" });
       
      }
    

      // console.log(readList);
    }
    
    
    const handleWishList = (bookId)=>{
      const LocalStoreWishList = getStoreWishList();
      console.log(LocalStoreWishList);
      
      const  check = LocalStoreWishList.find((item)=>item.bookId ==  bookId);

      if(check){
        toast.error("This Book have already in wishList " , { position: "top-right" })
      }else{
       const wishBook = books.find((book)=>book.bookId == bookId);
       const newWishList = [...wishList, wishBook];
       setWishList(newWishList);

       const wishListString = JSON.stringify(newWishList);
       localStorage.setItem("wish-list", wishListString);
        toast.success("This Book added to wishList", { position: "top-right" });
      }
    
  }

  useEffect(() => {
    fetch("booksData.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return <MyContext.Provider value={{ books, handleReadList, handleWishList, getStoreWishList, getStoreReadList, readList, wishList , handleSort}}>{children}</MyContext.Provider>;
}
