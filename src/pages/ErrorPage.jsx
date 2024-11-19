import React from 'react';
import ErorPageImg from "./../assets/error-page.svg"
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mx-auto w-full flex flex-col my-auto h-full font-poppins mt-20'>
            <img className='w-1/2 mx-auto' src={ErorPageImg} alt="" />
            <h1 className='mt-16 text-5xl'>Page Not Found</h1>
            <button className='bg-custom-gradient text text-white mt-10 w-fit text-center mx-auto px-7 rounded-lg py-2 cursor-pointer active:scale-95'><Link to={"/"}>Back To Homepage</Link> </button>
        </div>
    );
};

export default ErrorPage;