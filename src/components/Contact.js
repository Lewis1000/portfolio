import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <div className="container mx-auto text-center lg:text-left pb-20 main">
            <Helmet>
                <title>Contact - Lewis Winthrop</title>
            </Helmet>
            <div className="px-6 pt-12 pb-6">
                <p className="py-3 text-5xl text-gray-900 font-semibold">Contact</p>
            </div>
            <div className="content">
                <div className="px-6 pt-6 pb-3">
                    <p className="py-3 text-gray-900 text-lg text-2xl font-semibold">Get In Touch</p>
                    <p className="py-2 text-gray-500 text-lg">If you have any questions or opportunities, contact me on any of the below.</p>
                </div>
                <div className="px-6 py-3 grid justify-items-stretch">
                    <a href="mailto:lewiswinthrop27@gmail.com" target="_blank" rel="noreferrer" className="flex justify-self-center lg:justify-self-start py-1 my-1">
                        <div className="rounded-full p-2 bg-gray-900 h-11 w-11">
                            <svg viewBox="0 0 24 24" fill="#fff" height="100%" aria-hidden="true">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                            </svg>
                        </div>
                        <p className="text-gray-500 text-lg py-2 pl-4">lewiswinthrop27@gmail.com</p>
                    </a>
                    <a href="https://github.com/Lewis1000" target="_blank" rel="noreferrer" className="flex justify-self-center lg:justify-self-start py-1 my-1">
                        <div className="rounded-full p-2 bg-gray-900 h-11 w-11">
                            <svg height="100%" viewBox="0 0 256 249" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#fff">
                                <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/>
                            </svg>
                        </div>
                        <p className="text-gray-500 text-lg py-2 pl-4">github.com/lewis1000</p>
                    </a>
                    <a href="https://www.linkedin.com/in/lewis-winthrop-3273481bb" target="_blank" rel="noreferrer" className="flex justify-self-center lg:justify-self-start py-1 my-1">
                        <div className="rounded-full p-2 bg-gray-900 h-11 w-11"> 
                            <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 20 20">
                                <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z" fill="white"/>
                            </svg>
                        </div>
                        <p className="text-gray-500 text-lg py-2 pl-4">linkedin.com/lewis-winthrop</p>
                    </a>
                </div>
                <div className="py-3 px-6 flex flex-wrap space-x-2 justify-center lg:justify-start">
                    <Link to="/" className="py-3 px-5 my-2 rounded-full bg-gray-900 flex flex-wrap content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff" height="20px" className="block m-auto pr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <p className="text-gray-50">Go To Portfolio</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;