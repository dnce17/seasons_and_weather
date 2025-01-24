import React from 'react';
import Hero from './Hero';
import WinterHero from '../assets/imgs/heros/winter_hero.jpg';
import SpringHero from '../assets/imgs/heros/spring_hero.jpg';
import SummerHero from '../assets/imgs/heros/summer_hero.jpg';
import AutumnHero from '../assets/imgs/heros/autumn_hero.jpg';

const HeroSelector = () => {
  // CAUTION: Dates are ZERO-INDEXED, so Jan = 0, Dec = 11
  // Entering 12 works, but .getMonth() returns 11

  // FOR TESTING
  // const today = new Date('2024-12-22'); // YYYY-MM-DD format
  // const today = new Date('2024-09-23'); // YYYY-MM-DD format
  // const today = new Date('2024-03-23'); // YYYY-MM-DD format
  // const today = new Date('2024-06-23'); // YYYY-MM-DD format
  // const today = new Date('2024-09-22'); // YYYY-MM-DD format

  const today = new Date();
  const year = today.getFullYear();

  const seasonDates = {
    // NOTE: Winter is edge case since it goes to next year, so it's not included here
    'spring': [`${year}-03-20`, `${year}-06-20`],
    'summer': [`${year}-06-21`, `${year}-09-21`],
    'autumn': [`${year}-09-22`, `${year}-12-20`],
  }

  const seasonComponents = {
    'spring': <Hero hero={ SpringHero } season='Spring' mdBgPos='bg-center' textColor='text-pink-400' dateRange='Mar 20 - Jun 20'/>,
    'summer': <Hero hero={ SummerHero } season='Summer' mdBgPos='bg-center' textColor='text-yellow-100' dateRange='Jun 21 - Sep 21'/>,
    'autumn': <Hero hero={ AutumnHero } season='Autumn' mdBgPos='bg-bottom' textColor='text-orange-600' dateRange='Sep 22 - Dec 20'/>,
    'winter': <Hero hero={ WinterHero } season='Winter' mdBgPos='bg-bottom' textColor='text-sky-200' dateRange='Dec 21 - Mar 19'/>,
  }

  for (const season in seasonDates) {
    let startDate = new Date(seasonDates[season][0]);
    let endDate = new Date(seasonDates[season][1]);
    let isInRange = today >= startDate && today <= endDate;

    if (isInRange) {
      return seasonComponents[season.toLowerCase()];
    }
  }

  return seasonComponents['winter'];
}

export default HeroSelector;