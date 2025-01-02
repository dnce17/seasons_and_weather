import React from 'react';
import { fetchWeatherApi } from 'openmeteo';
import LocationWeatherCard from '../components/LocationWeatherCard';
import HourlyWeatherCard from '../components/HourlyWeatherCard';
import CurrentConditionCard from '../components/CurrentConditionCard';
import FutureWeatherCard from '../components/FutureWeatherCard';

// Icons
import { SiAccuweather } from "react-icons/si";
import { TiWeatherCloudy } from "react-icons/ti";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { FaWind } from "react-icons/fa6";

// Info to get
// temperature, precipitation, humidity

// Features
// Ability to view F and C

// Nice to have
// The same info for the future days (up to a week)

const WeatherPage = () => {
  const latitude = 40.7684; // Example latitude
  const longitude = -73.7771; // Example longitude
  const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=bayside&count=10&language=en&format=json`;
  // const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit`;
  const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=40.7684&longitude=-73.7771&hourly=temperature_2m,rain';

  const fetchLocation = async () => {
    try {
      const res = await fetch(geocodingUrl);
      const data = await res.json()

      return data;
    } 
    catch (error) {
      console.log('Error fetching geocoding data', error);
    }
  }


  // You can make sure one function is before another rather than both at same time by
  // using await
  const logLocation = async () => {
    console.log('logLocation called');
    try {
      const locationData = await fetchLocation();

      for (let location of locationData.results) {
        location.admin1.toLowerCase() == 'new york' && console.log(`${location.name}, ${location.admin1}`);
      }
      console.log(locationData.results[0])
    } 
    catch (error) {
      console.log('Error logging location data', error);
    }
  }

  // logLocation();

  const fetchWeather = async () => {
    try {
      const res = await fetch(weatherUrl);
      const data = await res.json()

      console.log(data);
    } 
    catch (error) {
      console.log('Error fetching weather data', error);
    }
  }

  fetchWeather();

  return (
    <>
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