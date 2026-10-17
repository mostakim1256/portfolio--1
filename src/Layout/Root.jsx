import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Sheardcomponents/Header/Navbar';
import Footer from '../Components/Sheardcomponents/Footer';

const Root = () => {
  return (
    <div className="bg-[#0e1118] text-slate-100 min-h-screen flex flex-col selection:bg-[#FF014F] selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;