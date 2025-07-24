import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen p-6 rounded-3xl shadow-xl space-y-5 ">
        <div className='flex flex-col items-center bg-white p-10 shadow-black rounded-3xl'>
        <div className="flex flex-col  items-center space-y-4">
            <div>
              <img src="signup.png" className="h-8 w-8 items-center" alt="Signup " />
            </div>
              <h2 className="text-2xl font-bold text-center">Create an account</h2>
            <div className="flex justify-center">
              <Link
                to="/signup"
                className="flex items-center space-x-2 border border-gray-400 rounded-2xl px-4 py-2 hover:bg-blue-200 transition bg-white"
              >
                <img src="google.png" alt="Google" className="h-5 w-5" />
                <span className="text-sm font-medium text-gray-700">Connect with Google</span>
              </Link>
            </div>
          <span className="text-sm font-medium text-gray-700">or</span>
          </div >
        <form className="flex flex-col  space-y-4 bg-white p-6 rounded-3xl shadow-xl w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
          
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            required
            className="p-2 border border-gray-300 rounded-xl"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            className="p-2 border border-gray-300 rounded-xl"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            className="p-2 border border-gray-300 rounded-xl"
          />
          <input
            type="password"
            id="password"
            placeholder="Confirm Password"
            required
            className="p-2 border border-gray-300 rounded-xl"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 rounded-2xl hover:bg-gray-900 transition"
          >
            Create an account
          </button>
         
       
        </form>
        <div className='flex items-center'>
                  <span className="text-sm font-medium text-gray-700">Already have an Account?</span>
                 <Link
                to="/login"
                className="flex items-center  text-black space-x-2  rounded-2xl px-4 py-2 hover:underline hover:text-blue-400 transition bg-blue"
              >
                Login
                </Link>
          </div>
          </div>
      </div>
    </>
  )
}

export default Signup
