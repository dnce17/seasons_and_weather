import React from 'react';
import Card from './Card';
import WinterImg from '../assets/imgs/winter.jpg';
import SpringImg from '../assets/imgs/spring.png';
import SummerImg from '../assets/imgs/summer.png';
import AutumnImg from '../assets/imgs/autumn.png';

const SeasonCards = () => {
  return (
    <div className='grid grid-cols-2 bg-gray-200'>
      <Card seasonImg={ WinterImg } season='Winter' startDate='Dec 21 - Mar 19' />
      <Card seasonImg={ SpringImg } season='Spring' startDate='Mar 20 - Jun 20' />
      <Card seasonImg={ SummerImg } season='Summer' startDate='Jun 21 - Sep 21' />
      <Card seasonImg={ AutumnImg } season='Autumn' startDate='Sep 22 - Dec 20' />
    </div>
  )
}

export default SeasonCards