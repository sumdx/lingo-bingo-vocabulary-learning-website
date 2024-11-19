import React from 'react';
import Home from './Home';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div className='font-poppins bg-primaryBg flex flex-col min-h-screen'>
            <NavBar></NavBar>
            <div className='flex-grow'>
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>

        </div>
    );
};

export default Root;