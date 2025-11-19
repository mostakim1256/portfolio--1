import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Sheardcomponents/Header/Navbar';
import Footer from '../Components/Sheardcomponents/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;