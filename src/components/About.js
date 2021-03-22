import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className="container mx-auto text-center lg:text-left pb-20">
            <Helmet>
                <title>About - Lewis Winthrop</title>
            </Helmet>
            <div className="px-6 pt-12 pb-6">
                <p className="py-3 text-5xl text-gray-900 font-semibold">About</p>
            </div>
            <div className="content">
                <div className="px-6 pt-6 pb-3">
                    <p className="py-3 text-gray-900 text-lg text-2xl font-semibold">Profile</p>
                    <p className="py-2 text-gray-500 text-lg">Hi I'm Lewis, and I'm a web developer, I enjoy learning new languages and frameworks. My strengths are mainly in front-end with technologies such as React, although I am sufficient in some backend technologies such as Node and Express. I'm currently looking for an opportunity to work as a javascript developer and would eventually like to end up as a fullstack developer.</p>
                    <p className="py-2 text-gray-500 text-lg">If you have any questions, make sure to visit my contact section.</p>
                </div>
                <div className="px-6 pt-3">
                    <p className="py-3 text-gray-900 text-lg text-2xl font-semibold">Skills</p>
                    <div className="py-1 flex flex-wrap space-x-2 justify-center lg:justify-start">
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">HTML / CSS</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">Javascript</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">Node</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">Express</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">Firebase</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">React</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">Redux</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">Tailwind CSS</p>
                        <p className="py-2 px-4 my-2 rounded-full bg-gray-200 text-gray-900">Material UI</p>
                    </div>
                </div>
                <div className="py-3 px-6 flex flex-wrap space-x-2 justify-center lg:justify-start">
                    <Link to="/" className="py-3 px-5 my-2 rounded-full bg-gray-900 flex flex-wrap content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff" height="20px" className="block m-auto pr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <p className="text-gray-50">Go To Portfolio</p>
                    </Link>
                    <Link to="/contact" className="py-3 px-5 my-2 rounded-full bg-gray-900 flex flex-wrap content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff" height="20px" className="block m-auto pr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <p className="text-gray-50">Go To Contact</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;