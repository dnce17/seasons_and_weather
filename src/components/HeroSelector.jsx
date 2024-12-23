import React from 'react';
import Hero from './Hero';
import WinterHero from '../assets/imgs/winter_hero.jpg';
import SpringHero from '../assets/imgs/spring_hero.jpg';
import SummerHero from '../assets/imgs/summer_hero.jpg';
import AutumnHero from '../assets/imgs/autumn_hero.jpg';

const HeroSelector = () => {
  // CAUTION: Dates are ZERO-INDEXED, so Jan = 0, Dec = 11
  // Entering 12 works, but .getMonth() returns 11
  // const today = new Date('2024-12-22'); // YYYY-MM-DD format
  // const today = new Date('2024-09-23'); // YYYY-MM-DD format
  // const today = new Date('2024-03-23'); // YYYY-MM-DD format
  const today = new Date('2024-06-23'); // YYYY-MM-DD format
  // const today = new Date();

  // Month and day will only be used, so year is arbitrary
  // TODO: Make year dynamic with today.getDate()
  const seasonsDate = {
    'winter': ['2024-12-21', '2025-03-19'],
    'spring': ['2024-03-20', '2024-06-20'],
    'summer': ['2024-06-21', '2024-09-21'],
    'autumn': ['2024-09-22', '2024-12-20'],
  }
  
  for (const season in seasonsDate) {
    let startDate = new Date(seasonsDate[season][0]);
    let endDate = new Date(seasonsDate[season][1]);

    console.log(today);
    let isInRange = today >= startDate && today <= endDate;
    console.log(isInRange);
    console.log(startDate);
    console.log(endDate);

    if (isInRange) {
      if (season.toLowerCase() == 'winter') {
        return (
          <Hero hero={ WinterHero } season='Winter' mdBgPos='bg-bottom' textColor='text-sky-200' />
        )
      }

      if (season.toLowerCase() == 'spring') {
        return (
          <Hero hero={ SpringHero } season='Spring' mdBgPos='bg-center' textColor='text-pink-400' />
        )
      }

      if (season.toLowerCase() == 'summer') {
        return (
          <Hero hero={ SummerHero } season='Summer' mdBgPos='bg-center' textColor='text-yellow-100' />
        )
      }

      if (season.toLowerCase() == 'autumn') {
        return (
          <Hero hero={ AutumnHero } season='Autumn' mdBgPos='bg-bottom' textColor='text-orange-600' />
        )
      }
    }
  }

  // return (
  //   // TODO: Replace with some default thing later
  //   <div className='text-center min-h-[400px] bg-cover bg-no-repeat bg-center md:bg-right-top md:min-h-[500px]' style={{ backgroundImage: `url(${ SpringHero })` }}>
  //     <div className='pt-[1rem]'>
  //       <h2 className='text-2xl font-dancing'>Current Season</h2>
  //       <h1 className='text-7xl font-dancing font-semibold text-sky-200 drop-shadow-md'>Spring</h1>
  //     </div>
  //   </div>
  // )
}

export default HeroSelector