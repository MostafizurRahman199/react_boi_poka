
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SingleWishBookCard({book}) {
    const navigate = useNavigate();
    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing
    } = book;

    
const viewsDetails = ()=>{
    navigate(`/bookdetails/${bookId}`)
}
  return (
   
    <div className="hero-content flex-col lg:flex-row justify-between shadow-lg rounded-2xl">
      <div className='w-40 '>
      <img
        src={image} 
        className="max-w-sm rounded-lg shadow-2xl w-40" />
      </div>
      <div className=' flex flex-col justify-center items-start w-5/6 gap-2'>
        <h1 className="text-2xl md:text-5xl font-bold">{bookName}</h1>
        <p className="py-6">
         By : {author}
        </p>
        <div className="flex flex-wrap gap-2 mb-2  items-center"><span className="font-bold">Tags: </span>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="p-2 text-xs font-semibold text-green-700 bg-green-100 rounded-xl "
                >
                  {tag}
                </span>
              ))}

              <p className='text-gray-500'>🗓️Year of Publishing: {yearOfPublishing}</p>
            </div>
        <div className="flex flex-wrap gap-2 mb-2  items-center text-gray-500">
            

              <p>✒️ Publisher: {publisher}</p>
              <p>📃 Page: {totalPages}</p>
            </div>
       <div className='flex flex-wrap gap-2'>
       <p className="btn bg-blue-100 rounded-full text-blue-500 hover:bg-none">Category: {category}</p>
       <p className="btn bg-yellow-100 rounded-full text-yellow-500 ">Rating: {rating}</p>
       <button onClick={viewsDetails} className="btn btn-success text-white rounded-full">View Details</button>
       </div>
      </div>
    </div>

  )
}



