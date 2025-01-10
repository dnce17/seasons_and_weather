import React from 'react';
import { useState } from 'react';
import HourlyWeatherCard from '../components/HourlyWeatherCard';
import CurrentConditionCard from '../components/CurrentConditionCard';
import FutureWeatherCard from '../components/FutureWeatherCard';
import SearchBar from '../components/SearchBar';
import TemperatureToday from '../components/TemperatureToday';
import ForecastToday from '../components/ForecastToday';

// Icons
import { SiAccuweather } from "react-icons/si";
import { TiWeatherCloudy } from "react-icons/ti";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { FaWind } from "react-icons/fa6";

// https://api.open-meteo.com/v1/forecast?latitude=40.7684&longitude=-73.7771&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState();

  return (
    <div>
      <SearchBar setWeatherData={ setWeatherData } />
      <TemperatureToday weatherData={ weatherData } />
      <ForecastToday weatherData={ weatherData } />

      {/* Current Conditions */}
      <section>
        <h1 className='text-xl font-bold'>Current Conditions</h1>
        <div className='grid grid-cols-2'>
          <CurrentConditionCard 
            icon={ <FaTemperatureQuarter size={ 25 }/> } 
            header='Feels Like' 
            info={
              weatherData
              ? `${Math.round(weatherData.current.apparent_temperature)}°F`
              : '-'
            } 
          />
          <CurrentConditionCard 
            icon={ <MdOutlineWaterDrop size={ 25 }/> } 
            header='Chance of Rain' 
            info={
              weatherData
              ? weatherData.daily.precipitation_probability_max[0]
              : '-'
            }
          />
          <CurrentConditionCard 
            icon={ <FaSun size={ 25 }/> } 
            header='UV Index' 
            info={
              weatherData
              ? weatherData.daily.uv_index_max[0]
              : '-'
            } 
          />
          <CurrentConditionCard 
            icon={ <FaWind size={ 25 }/> } 
            header='Wind' 
            info={
              weatherData
              ? `${weatherData.current.apparent_temperature} mph`
              : '-'
            } 
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
    </div>
  )
}

export default WeatherPage