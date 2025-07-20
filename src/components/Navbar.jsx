import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
   <>
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div className=" max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-start">
    

    <div>
      <Link to="/" className='flex items-center space-x-3'>
      <img src="logo.svg" className="h-8" alt="Logo " />
      <span className="text-2xl font-semibold dark:text-white">Libraa</span>
      </Link>
    </div>

    <div className="hidden md:flex mx-8 space-x-6">
        <Link to="/" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-yellow-500">Home</Link>
        <Link to="/about" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-yellow-500">About</Link>
        <Link to="#" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-yellow-500">Books</Link>
        <Link to="#" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-yellow-500">Resources</Link>
    </div>

    

    <div className="hidden md:flex items-center  ml-auto  space-x-6">
          <input
        type="text"
        placeholder="Search..."
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
     
        <Link to="#" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-yellow-500">Login</Link>
        <Link to="#" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">Signup</Link>
    </div>

  </div>
</nav>




    </>
  )
}
