import React from 'react'
import Banner from './Banner'
import Book from './Book'

export default function Home() {
  return (
    <div className=' w-10/12 mx-auto flex flex-col '>
        <Banner/>
        <Book/>
    </div>
  )
}
