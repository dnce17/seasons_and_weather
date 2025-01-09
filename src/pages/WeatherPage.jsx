import React from 'react';
import LocationWeatherCard from '../components/LocationWeatherCard';
import HourlyWeatherCard from '../components/HourlyWeatherCard';
import CurrentConditionCard from '../components/CurrentConditionCard';
import FutureWeatherCard from '../components/FutureWeatherCard';
import SearchBar from '../components/SearchBar';

// Icons
import { SiAccuweather } from "react-icons/si";
import { TiWeatherCloudy } from "react-icons/ti";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { FaWind } from "react-icons/fa6";

// Test Fetch
import WeatherFetch from '../components/WeatherFetch';

// MAYBE: Might move each card into one jsx similar to SeasonCards.jsx

const WeatherPage = () => {
  return (
    <>
      <SearchBar />
      
      {/* TESTING */}
      {/* <WeatherFetch /> */}

      {/* X Location's Temperature */}
      <section className='bg-green-200 flex flex-col items-center'>
        <LocationWeatherCard 
          location='Bayside'
          icon={ <SiAccuweather size={ 100 } /> }
          temp='31 F'
        />
      </section>

      {/* Today's Forecast */}
      <section>
        <h1 className='text-xl font-bold'>Today's Forecast</h1>
        <div className='flex justify-evenly'>
          <HourlyWeatherCard 
            time='6:00 AM' 
            icon={ <SiAccuweather size={ 50 }/> } 
            temp='29 F' 
          />
          <HourlyWeatherCard time='6:00 AM' icon={ <SiAccuweather size={ 50 }/> } temp='29 F' />
          <HourlyWeatherCard time='6:00 AM' icon={ <SiAccuweather size={ 50 }/> } temp='29 F' />
          <HourlyWeatherCard time='6:00 AM' icon={ <SiAccuweather size={ 50 }/> } temp='29 F' />
          <HourlyWeatherCard time='6:00 AM' icon={ <SiAccuweather size={ 50 }/> } temp='29 F' />
          <HourlyWeatherCard time='6:00 AM' icon={ <SiAccuweather size={ 50 }/> } temp='29 F' />
        </div>
      </section>

      {/* Current Conditions */}
      <section>
        <h1 className='text-xl font-bold'>Current Conditions</h1>
        <div className='grid grid-cols-2'>
          <CurrentConditionCard 
            icon={ <FaTemperatureQuarter size={ 25 }/> } 
            header='Feels Like' 
            info='30 F' 
          />
          <CurrentConditionCard 
            icon={ <MdOutlineWaterDrop size={ 25 }/> } 
            header='Chance of Rain' 
            info='5%' 
          />
          <CurrentConditionCard 
            icon={ <FaSun size={ 25 }/> } 
            header='UV Index' 
            info='3' 
          />
          <CurrentConditionCard 
            icon={ <FaWind size={ 25 }/> } 
            header='Wind' 
            info='0.2 mi/hr' 
          />
        </div>
      </section>

      {/* 7-Day Forecast */}
      <section className='border border-sky-500'>
        <h1 className='text-xl font-bold'>7-Day Forecast</h1>
        <FutureWeatherCard 
          day='Today' 
          icon={ <SiAccuweather size={ 40 }/> }
          weather='Sunny'
          temp='36 F / 22 F'
        />
        <FutureWeatherCard 
          day='Tues' 
          icon={ <TiWeatherCloudy size={ 40 }/> }
          weather='Cloudy'
          temp='36 F / 22 F'
        />
      </section>
    </>
  )
}

export default WeatherPage