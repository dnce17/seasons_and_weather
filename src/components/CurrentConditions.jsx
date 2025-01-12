import React from 'react';
import CurrentConditionCard from './CurrentConditionCard';
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { FaWind } from "react-icons/fa6";

const CurrentConditions = ({ weatherData }) => {
  return (
    <section className='p-3 bg-slate-800 bg-opacity-50 rounded-xl'>
      <h1 className='text-xl font-bold'>Current Conditions</h1>
      <div className='grid grid-cols-2'>
        <CurrentConditionCard
          icon={<FaTemperatureQuarter size={25} />}
          header='Feels Like'
          info={
            weatherData
              ? `${Math.round(weatherData.current.apparent_temperature)}°F`
              : '-'
          }
        />
        <CurrentConditionCard
          icon={<MdOutlineWaterDrop size={25} />}
          header='Chance of Rain'
          info={
            weatherData
              ? `${weatherData.daily.precipitation_probability_max[0]}%`
              : '-'
          }
        />
        <CurrentConditionCard
          icon={<FaSun size={25} />}
          header='UV Index'
          info={
            weatherData
              ? weatherData.daily.uv_index_max[0]
              : '-'
          }
        />
        <CurrentConditionCard
          icon={<FaWind size={25} />}
          header='Wind'
          info={
            weatherData
              ? `${weatherData.current.apparent_temperature} mph`
              : '-'
          }
        />
      </div>
    </section>
  )
}

export default CurrentConditions