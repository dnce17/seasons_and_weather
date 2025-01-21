import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import TemperatureToday from '../components/TemperatureToday';
import ForecastToday from '../components/ForecastToday';
import CurrentConditions from '../components/CurrentConditions';
import ForecastFuture from '../components/ForecastFuture';
import { weatherCategories } from '../../helpers';

import DefaultBg from '../assets/imgs/partly_cloudy_bg.jpg';

// https://api.open-meteo.com/v1/forecast?latitude=40.7684&longitude=-73.7771&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState();

  const getBg = () => {
    if (weatherData) {
      for (const item in weatherCategories) {
        // Cycle through weather code to determine which bg to use
        for (const code of weatherCategories[item].codes) {
          // TEST item
          // if (73 == code) { 
          if (weatherData.current.weather_code == code) {
            return weatherCategories[item].bg;
          }
        }
      }
    }
    else {
      return DefaultBg;
    }
  }

  let weatherBg = getBg();

  return (
    // <div className={`bg-cover text-slate-200`} style={{ backgroundImage: `url(${bgClass})` }} >
    <div className='bg-cover text-slate-200' style={{ backgroundImage: `url(${weatherBg})` }} >
      <div className='bg-slate-700 bg-opacity-30 py-8'>
        <SearchBar setWeatherData={setWeatherData} />
      </div>
      <div className='bg-slate-700 bg-opacity-30 md:flex'>
        <article className='md:max-w-[60%] md:w-full'>
          <div className='mx-2 py-4'>
            <TemperatureToday weatherData={weatherData} />
          </div>
          <div className='mx-2 pb-6'>
            <ForecastToday weatherData={weatherData} />
          </div>
          <div className='mx-2 pb-6'>
            <CurrentConditions weatherData={weatherData} />
          </div>
        </article>

        <article className='md:max-w-[40%] md:w-full'>
          <div className='mx-2 pb-6 md:h-full'>
            <ForecastFuture weatherData={weatherData} />
          </div>
        </article>
      </div>
    </div>
  )
}

export default WeatherPage