import React from 'react'
import {Link} from 'react-router-dom'
import HomeBar from './HomeBar'


function NavBar() {
  return (
    <div >
      
      <div className='flex space-x-8 items-center bg-gray-600  h-15 p-1 '>
      <HomeBar/>
      <Link to="/login" className='cursor-pointer text-black font-bold text-xl hover:text-pink-900'>Login</Link>
      <Link to="/register" className='cursor-pointer text-black font-bold text-xl hover:text-pink-900'>Register</Link>
      </div>

      
    </div>
  )
}

export default NavBar
