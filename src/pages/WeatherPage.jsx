import React from 'react';
import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import TemperatureToday from '../components/TemperatureToday';
import ForecastToday from '../components/ForecastToday';
import CurrentConditions from '../components/CurrentConditions';
import ForecastFuture from '../components/ForecastFuture';

import { weatherCategories } from '../../helpers';
import DefaultBg from '../assets/imgs/weather_bgs/partly_cloudy_bg.jpg';

// https://api.open-meteo.com/v1/forecast?latitude=40.7684&longitude=-73.7771&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState();
  const [weatherBg, setWeatherBg] = useState(DefaultBg);

  useEffect(() => {
    const getBg = () => {
      if (weatherData) {
        for (const item in weatherCategories) {
          // Cycle through weather code to determine which bg to use
          for (const code of weatherCategories[item].codes) {
            // if (71 == code) {  // TEST USE
            if (weatherData.current.weather_code == code) {
              setWeatherBg(weatherCategories[item].bg);
              return true;
            }
          }
        }
      }
      return false;
    }

    getBg();

  }, [weatherData])

  return (
    <div className='overlay bg-cover text-slate-200 transition-all duration-200 opacity-100 md:min-h-screen md:w-full' style={{ backgroundImage: `url(${weatherBg})` }} >
      <div className='max-w-[95%] mx-auto'>
        <div className='bg-opacity-30 py-8'>
          <SearchBar setWeatherData={setWeatherData} />
        </div>
        <div className='bg-opacity-30 md:flex'>
          <article className='md:max-w-[60%] md:w-full'>
            <section className='mx-2 py-4'>
              <TemperatureToday weatherData={weatherData} />
            </section>
            <section className='mx-2 pb-6'>
              <ForecastToday weatherData={weatherData} />
            </section>
            <section className='mx-2 pb-6'>
              <CurrentConditions weatherData={weatherData} />
            </section>
          </article>
          <article className='md:max-w-[40%] md:w-full'>
            <section className='mx-2 pb-6 md:h-full'>
              <ForecastFuture weatherData={weatherData} />
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}

export default WeatherPage