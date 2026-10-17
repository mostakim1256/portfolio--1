import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Sheardcomponents/Header/Navbar';
import Footer from '../Components/Sheardcomponents/Footer';

const Root = () => {
    return (
        <div className='bg-[#1D1F24] '>
            <div className='container mx-auto  '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Root;