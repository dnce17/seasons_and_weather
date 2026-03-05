import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Is needed to allow layout.html to appear in shared pages
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      {/* Components that all pages share */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout