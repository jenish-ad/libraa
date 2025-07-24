import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="fixed w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 z-50">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">


          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-3">
              <img src="logo.svg" className="h-8" alt="Logo" />
              <span className="text-2xl font-semibold dark:text-white">Libraa</span>
            </Link>

            <div className="hidden sm:flex space-x-6">
              <Link to="/" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-yellow-500">Home</Link>
              <Link to="/about" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-yellow-500">About</Link>
              <Link to="#" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-yellow-500">Books</Link>
              <Link to="#" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-yellow-500">Resources</Link>
            </div>
          </div>

          {/* Right: Search and Auth */}
          <div className="hidden md:flex items-center space-x-6">
            <input
              type="text"
              id="name"
              placeholder="Search..."
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />

            <Link to="/login" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-yellow-500">Login</Link>
            <Link to="/signup" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">Signup</Link>
          </div>
        </div>
      </nav>
      <div className="fixed top-2/3 right-4 z-50 px-5 py-2  bg-yellow-400 border border-white rounded-3xl shadow-lg hover:bg-yellow-500 transition">
        <Link to="/contribute" className='flex items-center space-x-2'>
          <img src="contribute.png" alt="contribute" className='h-8' />
          <span className='text-blue-900 text-xl font-bold '>Contribute</span>
        </Link>
      </div>

    </>
  );
}
