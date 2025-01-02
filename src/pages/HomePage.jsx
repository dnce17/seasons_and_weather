import React from 'react';
import Navbar from '../components/Navbar';
import HeroSelector from '../components/HeroSelector';
import SeasonCards from '../components/SeasonCards';

const HomePage = () => {
  return (
    <>
      <HeroSelector />
      <SeasonCards />
    </>
  )
}

export default HomePage