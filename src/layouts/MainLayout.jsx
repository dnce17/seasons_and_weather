import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Needed to allow layout to apply to pages you desired
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      {/* Components you want on many pages (e.g. <Navbar />) */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout