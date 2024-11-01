import React from 'react'

export default function Banner() {
  return (
    <div className="hero bg-base min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src='banner.png'
      className="max-w-sm " />
    <div>
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold"> Books to freshen up your bookshelf</h1>
      <p className="py-6 text-xl">
      Revitalize your reading space with a curated selection of books that inspire,  educate, and captivate!
      </p>
      <button className="btn  bg-green-500 text-white hover:bg-green-600">View The List</button>
    </div>
  </div>
</div>
  )
}
