import React from 'react';
import Navbar from '../components/Navbar';

// Needed to allow layout to apply to pages you desired
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      {/* Components you want on many pages (e.g. <Navbar />) */}
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout