import React from 'react';
import { fetchWeatherApi } from 'openmeteo';

// TODO: Separate getting location and weather into components

// Info to get
// temperature, precipitation, humidity

// Features
// Ability to view F and C

// Nice to have
// The same info for the future days (up to a week)

const WeatherFetch = () => {
  const latitude = 40.7684; // Example latitude
  const longitude = -73.7771; // Example longitude
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit`;

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

    // fetchWeather();
  
  return (
    <div>WeatherFetch</div>
  )
}

export default WeatherFetch