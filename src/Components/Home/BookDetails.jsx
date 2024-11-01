import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../utils/MyProvider";

export default function BookDetails() {
  const { books } = useContext(MyContext);
  const { id } = useParams();
  const book = books.find((book) => book.bookId == id);

const style = {
    background: "rgba(19, 19, 19, 0.05)",
}
  if (!book) return <p>Book not found</p>;

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg  mt-10 my-12">
      <div className="grid lg:grid-cols-2 justify-items-center">
        <div className="w-full h-auto  flex justify-center items-center rounded-xl" style={style}>
          <img
            src={image}
            alt={bookName}
            className="w-6/6 lg:p-12 rounded-lg  mb-4 md:mb-0 object-cover mx-auto"
          />
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="flex-1 md:ml-6 flex flex-col gap-2">
            <h2 className="text-4xl font-semibold text-gray-800">{bookName}</h2>
            <p className="text-lg text-gray-600 mb-2">By: {author}</p>
         
            <div className="text-sm  flex flex-col gap-2">
              <p>
                <strong>Category</strong> {category}
              </p>
              <p className="text-justify"><span className="font-bold">Review :</span> {review}</p>
              <div className="flex gap-2 mb-2  items-center"><span className="font-bold">Tags: </span>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="p-2 text-xs font-semibold text-green-700 bg-green-100 rounded-xl "
                >
                  {tag}
                </span>
              ))}
            </div>
              <p>
                <strong>Number of Pages:</strong> {totalPages}
              </p>
              <p>
                <strong>Publisher:</strong> {publisher}
              </p>
              <p>
                <strong>Year of Publishing:</strong> {yearOfPublishing}
              </p>
              <p>
                <strong>Rating:</strong> {rating} / 5
              </p>
              <div className="flex justify-center md:justify-start mt-6 space-x-3">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300">
          Read
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-75 transition-all duration-300">
          Wishlist
        </button>
      </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
