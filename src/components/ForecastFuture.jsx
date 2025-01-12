import React from 'react';
import FutureWeatherCard from './FutureWeatherCard';
import { weatherCategories } from '../../helpers';
import { FaQuestion } from "react-icons/fa";

const ForecastFuture = ({ weatherData }) => {
  let icons = [];
  let categories = [];

  const daysOfWeek = [
    'Mon',
    'Tues',
    'Wed',
    'Thurs',
    'Fri',
    'Sat',
    'Sun'
  ];
  let days = [];

  if (weatherData) {
    for (const [i, code] of weatherData.daily.weather_code.entries()) {
      for (const item in weatherCategories) {
        const category = weatherCategories[item];
        if (category.codes.includes(code)) {
          icons.push(category.icon);
          categories.push(item);

          const date = new Date(weatherData.daily.time[i]);
          days.push(daysOfWeek[date.getDay()]);
        }
      }
    }
  }

  return (
    <>
      <section className='px-3 bg-slate-800 bg-opacity-50 rounded-xl md:h-full md:flex md:flex-col md:justify-evenly'>
        <h1 className='text-xl font-bold pb-2'>7-Day Forecast</h1>
          {Array.from({ length: 7 }, (_, i) =>
            weatherData
              ? <FutureWeatherCard
                key={i}
                day={days[i]}
                icon={
                  icons.length > 0
                    ? React.createElement(icons[i], { size: 45 })
                    : <FaQuestion size={100} />
                }
                weather={
                  categories.length > 0
                    ? categories[i]
                    : 'No data'
                }
                temp={
                  `${Math.round(weatherData.daily.temperature_2m_max[i])}° / ${Math.round(weatherData.daily.temperature_2m_min[i])}°`
                }
              />
              : <p key={i} className='text-2xl font-bold text-center [&:not(:last-child)]:border-b-2 border-slate-200 p-4'>-</p>
          )}
      </section>
    </>
  )
}

export default ForecastFuture;