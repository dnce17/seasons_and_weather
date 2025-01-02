import React from 'react';
import { fetchWeatherApi } from 'openmeteo';

const WeatherFetch = () => {
    const latitude = 40.7684; // Example latitude
    const longitude = -73.7771; // Example longitude
    const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=bayside&count=10&language=en&format=json`;
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit`;

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

    logLocation();

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