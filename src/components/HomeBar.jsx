import React from 'react'
import { Link } from 'react-router-dom'

function HomeBar() {
  return (
    <div >
      
    <div className='flex space-x-8 items-center back back bg-gray-600  h-15 p-1 '>
    <Link to="/home" className='cursor-pointer text-black font-bold text-xl hover:text-pink-900 p-3'>Home</Link>
    </div>

    
  </div>
  )
}

export default HomeBar
