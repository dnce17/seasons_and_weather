import React from 'react';
import Navbar from '../components/Navbar';
import HeroSelector from '../components/HeroSelector';
import SeasonCards from '../components/SeasonCards';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSelector />
      <SeasonCards />
    </>
  )
}

export default HomePage