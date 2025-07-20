import React from "react";
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div className="  max-w-screen-xl mx-auto px-4 py-3 flex  flex-col items-center justify-start  ">
        <div className="flex flex-col items-center text-center space-y-5 ">
          <div className="text-5xl  space-x-8 font-semibold dark:text-white">About us</div>
          <img className=" h-30" src="logo.svg" alt="About us" />
        </div>
        <div className=" px-6 py-4  bg-gray-600 rounded overflow-hidden shadow-lg ">
          <div className="font-bold text-xl mb-2 text-white  ">About us</div>
          <p className=" text-white text-base">
            Libraa is an open-source digital library built with the vision of making
            knowledge freely accessible to everyone. Designed for students,
            researchers, and lifelong learners, Libraa offers a growing collection
            of books, articles, and learning resources—all available at no cost. As
            an open-source platform, Libraa encourages collaboration, transparency,
            and community-driven development. Whether you're exploring academic
            topics, discovering new interests, or contributing to the project,
            Libraa is your companion in the pursuit of knowledge. Together, let’s
            make learning open, free, and limitless.
            <Link to="/about" className="mt-4 flex items-center text-blue-500 hover:underline">
              Learn More
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>

          </p>

        </div>
      </div>

    </>
  );
}
