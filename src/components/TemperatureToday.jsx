import React from 'react';
import { weatherCategories } from '../../helpers';
import { FaQuestion } from "react-icons/fa";

const TemperatureToday = ({ weatherData }) => {

  let icon;
  if (weatherData) {
    for (const item in weatherCategories) {
      const category = weatherCategories[item];
      if (category.codes.includes(weatherData.current.weather_code)) {
        icon = category.icon;
      }
    }
  }

  return (
    <section className='bg-green-200 flex flex-col items-center'>
      <h1 className='text-4xl font-bold'>
        {
          weatherData
            ? weatherData.name
            : 'Search a location to get started'
        }
      </h1>
      { 
        icon 
          ? React.createElement(icon, { size: 100 }) 
          : <FaQuestion size={100} /> 
      }

      <h2 className='text-5xl font-bold'>
        {
          weatherData
            ? `${Math.round(weatherData.current.temperature_2m)}°F`
            : '-'
        }
      </h2>
    </section>
  )
}

export default TemperatureToday;