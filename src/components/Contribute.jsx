import React from 'react';
import { Link } from 'react-router-dom';

const Contribute = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen p-6 mt-16 rounded-3xl shadow-xl space-y-5 ">
                <div className='flex flex-col items-center bg-white p-10 shadow-black rounded-3xl'>
                    <div className="flex flex-col  items-center space-y-6">
                        <img src="contribute.png" className="h-8 w-8 items-center" alt="Contribute " />
                        <h2 className="text-3xl font-bold text-center">Contribute</h2>
                    </div>

                    <form
                        className="flex flex-col space-y-6 bg-white p-10 rounded-3xl shadow-xl w-full"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="flex items-center space-x-4 flex-wrap w-full">
                            <div className="flex flex-col flex-1 min-w-0">
                                <label htmlFor="bookname" className="mb-1 font-medium">
                                    Book Name/Title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="bookname"
                                    required
                                    className="p-2 border border-gray-300 rounded-xl"
                                />
                            </div>
                            <div className="flex flex-col flex-1 min-w-0">
                                <label htmlFor="author" className="mb-1 font-medium">
                                    Author
                                </label>
                                <input
                                    type="text"
                                    id="author"
                                  
                                    className="p-2 border border-gray-300 rounded-xl"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 flex-wrap w-full">
                            <div className="flex flex-col flex-1 min-w-0">
                                <label htmlFor="category1" className="mb-1 font-medium">
                                    Category <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="category1"
                                    required
                                    className="p-2 border border-gray-300 rounded-xl"
                                />
                            </div>
                             <div className="flex flex-col flex-1 min-w-0">
                                <label htmlFor="category2" className="mb-1 font-medium">
                                    Category2 
                                </label>
                                <input
                                    type="text"
                                    id="category2"
                                    required
                                    className="p-2 border border-gray-300 rounded-xl"
                                />
                            </div>
                           
                        </div>

                        <div className="flex items-center space-x-4 flex-wrap w-full">
                           
                             <div className="flex flex-col flex-1 min-w-0">
                                <label htmlFor="language" className="mb-1 font-medium">
                                    Language 
                                </label>
                                <input
                                    type="text"
                                    id="language"
                                
                                    className="p-2 border border-gray-300 rounded-xl"
                                />
                            </div>
                            <div className="flex flex-col flex-1 min-w-0">
                                <label htmlFor="isbn" className="mb-1 font-medium">
                                    ISBN Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="isbn"
                                    required
                                    className="p-2 border border-gray-300 rounded-xl"
                                />
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 flex-wrap w-full">
                            <div className="flex flex-col flex-1 min-w-0">
                                <label htmlFor="pyear" className="mb-1 font-medium">
                                    Publish Year 
                                </label>
                                <input
                                    type="number"
                                    id="pyear"
                                    required
                                    className="p-2 border border-gray-300 rounded-xl"
                                />
                            </div>
                            <div className="flex flex-col flex-1 min-w-0">
                                 <label htmlFor="pyear" className="mb-1 font-medium">
                                    Publisher 
                                </label>

                                <input
                                    type="text"
                                    id="publisher"
                                    required
                                    className="p-2 border border-gray-300 rounded-xl"
                                />
                            </div>
                        </div>

                        <div className="flex space-x-4 flex-wrap w-full">
                            <div className='flex flex-col items-start space-y-2 flex-1 min-w-0'>
                                <label htmlFor="cover-upload" className="font-medium">
                                    Upload Book Cover <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="file"
                                    id="cover-upload"
                                    name="bookCover"
                                    accept="image/*"
                                    required
                                />
                            </div>
                            <div className='flex flex-col items-start space-y-2 flex-1 min-w-0'>
                                <label htmlFor="pdf-upload" className="font-medium">
                                    Upload Book PDF <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="file"
                                    id="pdf-upload"
                                    name="bookPdf"
                                    accept=".pdf"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="description" className="mb-1 font-medium">
                                Description / Summary <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="description"
                                required
                                placeholder="Description / Summary"
                                className="p-3 border border-gray-300 rounded-xl w-full h-32 resize-y"
                            />
                        </div>

                        <div className="flex items-center space-x-4 flex-wrap w-full">
                            <div className="flex flex-col flex-1 min-w-0">
                                <label htmlFor="name" className="mb-1 font-medium">
                                    Contributor Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="p-2 border border-gray-300 rounded-xl"
                                />
                            </div>
                            <div className="flex flex-col flex-1 min-w-0">
                                <label htmlFor="email" className="mb-1 font-medium">
                                    Contributor Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="p-2 border border-gray-300 rounded-xl"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-gray-800 text-white font-bold py-2 rounded-2xl hover:bg-gray-900 transition"
                        >
                            Contribute
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contribute;
