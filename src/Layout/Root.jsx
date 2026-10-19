import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Sheardcomponents/Header/Navbar';
import Footer from '../Components/Sheardcomponents/Footer';

const Root = () => {
  return (
    <div className="bg-[#08090D] text-slate-100 min-h-screen flex flex-col selection:bg-[#00DF82] selection:text-[#08090D]">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;