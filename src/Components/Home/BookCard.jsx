import React from 'react'
import { Link } from 'react-router-dom';

export default function BookCard({book}) {

const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing
} = book;


  return (
   <Link to={`/bookdetails/${bookId}`} >
         <div className="w-80 md:max-w-xl p-4 bg-white shadow-md rounded-lg hover:shadow-lg  duration-300 cursor-pointer transition-all transform hover:scale-105">
    <div className="relative pb-56 overflow-hidden rounded-lg bg-gray-100">
      <img
        src={image} // replace with actual book image URL
        alt="The Dating Playbook for Men"
        className="absolute inset-0 w-full h-full object-contain lg:p-4"
      />
    </div>
    <div className="mt-4">
      <div className="flex gap-2 mb-2">
       {
        tags.map((tag, index) =>  <span key={index} className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded">{tag}</span>)
       }
        
      </div>
      <h2 className="text-lg font-bold text-gray-800">{bookName}</h2>
      <p className="text-sm text-gray-500">By: {author}</p>
     <div className='flex justify-between items-center'>
     <div>
     <p className="text-sm text-gray-500 mt-1">{category}</p>
     </div>
      <div className="flex items-center mt-2">
        <span className="text-lg font-bold text-gray-800">{rating}</span>
        <svg
          className="w-5 h-5 ml-1 text-yellow-500 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.463a1 1 0 00-.364 1.118l1.286 3.975c.3.921-.755 1.688-1.54 1.118l-3.388-2.463a1 1 0 00-1.176 0l-3.388 2.463c-.784.57-1.838-.197-1.54-1.118l1.286-3.975a1 1 0 00-.364-1.118L2.043 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z" />
        </svg>
      </div>
     </div>
    </div>
  </div>
   </Link>
  )
}
