import React from 'react';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
    return (
        <div className="container mx-auto text-center lg:text-left">
            <Helmet>
                <title>Portfolio - Lewis Winthrop</title>
            </Helmet>
            <div className="px-6 py-12 title">
                <p className="py-3 text-5xl text-gray-900 font-semibold">Portfolio</p>
                <p className="py-2 text-gray-500 text-lg">Here's some of my recent projects. All source code is available on my <a target="_blank" className="text-gray-900 font-semibold" href="https://github.com/Lewis1000" rel="noreferrer">GitHub</a></p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 pb-20 content">
                <div className="p-6">
                    <div className="my-3 h-60 thumb-1" />
                    <a href="https://github.com/Lewis1000/apple-react-clone" target="_blank" rel="noreferrer">
                        <p className="py-3 text-gray-900 text-3xl font-semibold">Apple React Clone</p>
                    </a>
                    <div className="py-1 flex flex-wrap space-x-2 justify-center lg:justify-start">
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">Javascript</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">ReactJS</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">TailwindCSS</p>
                    </div>
                    <p className="py-3 text-gray-500 text-lg">This is a recreation of the Apple UK website in ReactJS. I used TailwindCSS to replicate their design.</p>
                    <div className="py-1 flex flex-wrap space-x-2 justify-center lg:justify-start">
                        <a href="https://lewis1000.github.io/apple-react-clone/" target="_blank" rel="noreferrer" className="py-3 px-5 my-2 rounded-full bg-gray-900 flex flex-wrap content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff" height="20px" className="block m-auto pr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-50">View Demo</p>
                        </a>
                        <a href="https://github.com/Lewis1000/apple-react-clone" target="_blank" rel="noreferrer" className="py-3 px-5 my-2 rounded-full bg-gray-900 flex flex-wrap content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff" height="20px" className="block m-auto pr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <p className="text-gray-50">View Source Code</p>
                        </a>
                    </div>
                </div>
                <div className="p-6">
                    <div className="my-3 h-60 thumb-2" />
                    <a href="https://github.com/Lewis1000/react-storefront-template" target="_blank" rel="noreferrer">
                        <p className="py-3 text-gray-900 text-3xl font-semibold">React Shopify Storefront</p>
                    </a>
                    <div className="py-1 flex flex-wrap space-x-2 justify-center lg:justify-start">
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">Shopify</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">ReactJS</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">Javascript</p>
                    </div>
                    <p className="py-3 text-gray-500 text-lg">An application that uses the Shopify Buy SDK. Allow's users to create a ReactJS storefront while still using Shopify basic plan.</p>
                    <div className="py-1 flex flex-wrap space-x-2 justify-center lg:justify-start">
                        <button disabled href="/" className="py-3 px-5 my-2 rounded-full bg-gray-200 flex flex-wrap content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6B7280" height="20px" className="block m-auto pr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-500">View Demo</p>
                        </button>
                        <a href="https://github.com/Lewis1000/react-storefront-template" target="_blank" rel="noreferrer" className="py-3 px-5 my-2 rounded-full bg-gray-900 flex flex-wrap content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff" height="20px" className="block m-auto pr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <p className="text-gray-50">View Source Code</p>
                        </a>
                    </div>
                </div>
                <div className="p-6">
                    <div className="my-3 h-60 thumb-3" />
                    <a href="https://github.com/Lewis1000/nodejs-web-scraper" target="_blank" rel="noreferrer">
                        <p className="py-3 text-gray-900 text-3xl font-semibold">NodeJS Webscraper</p>
                    </a>
                    <div className="py-1 flex flex-wrap space-x-2 justify-center lg:justify-start">
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">Puppeteer</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">ReactJS</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">ExpressJS</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">Javascript</p>
                    </div>
                    <p className="py-3 text-gray-500 text-lg">This app uses Puppeteer to scrape reviews from AliExpress. This data is then formatted and presented on the UI.</p>
                    <div className="py-1 flex flex-wrap space-x-2 justify-center lg:justify-start">
                        <button disabled href="/" className="py-3 px-5 my-2 rounded-full bg-gray-200 flex flex-wrap content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6B7280" height="20px" className="block m-auto pr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-500">View Demo</p>
                        </button>
                        <a href="https://github.com/Lewis1000/nodejs-web-scraper" target="_blank" rel="noreferrer" className="py-3 px-5 my-2 rounded-full bg-gray-900 flex flex-wrap content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff" height="20px" className="block m-auto pr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <p className="text-gray-50">View Source Code</p>
                        </a>
                    </div>
                </div>
                <div className="p-6">
                    <div className="my-3 h-60 thumb-4" />
                    <a href="https://github.com/Lewis1000/react-firebase" target="_blank" rel="noreferrer">
                        <p className="py-3 text-gray-900 text-3xl font-semibold">Firebase (CRUD) App</p>
                    </a>
                    <div className="py-1 flex flex-wrap space-x-2 justify-center lg:justify-start">
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">Firebase</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">ExpressJS</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">ReactJS</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">Javascript</p>
                    </div>
                    <p className="py-1 text-gray-500 text-lg">This app utilises Firebase and Firestore to allow users to sign in or sign up and create or delete data.</p>
                    <div className="py-3 flex flex-wrap space-x-2 justify-center lg:justify-start">
                        <button disabled href="/" className="py-3 px-5 my-2 rounded-full bg-gray-200 flex flex-wrap content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6B7280" height="20px" className="block m-auto pr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-500">View Demo</p>
                        </button>
                        <a href="https://github.com/Lewis1000/react-firebase" target="_blank" rel="noreferrer" className="py-3 px-5 my-2 rounded-full bg-gray-900 flex flex-wrap content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff" height="20px" className="block m-auto pr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <p className="text-gray-50">View Source Code</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;