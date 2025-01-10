import React from 'react';
import HourlyWeatherCard from '../components/HourlyWeatherCard';
import { toAnalogTime } from '../../helpers';
import { FaQuestion } from "react-icons/fa";
import { SiAccuweather } from "react-icons/si";

import { weatherCategories } from '../../helpers';

const ForecastToday = ({ weatherData }) => {

	const currentDate = new Date();
	const currentHr = currentDate.getHours();
	const hourlyTime = weatherData && weatherData.hourly.time.slice(currentHr);
	const hourlyTemp = weatherData && weatherData.hourly.temperature_2m.slice(currentHr);
	const hourlyCode = weatherData && weatherData.hourly.weather_code.slice(currentHr);
	
	let hourlyIcon = [];

	if (weatherData) {
		for (const code of hourlyCode) {
			for (const item in weatherCategories) {
				const category = weatherCategories[item];
				if (category.codes.includes(code)) {
					hourlyIcon.push(category.icon);
				}
			}
		}
	}

	return (
		<section>
			<h1 className='text-xl font-bold'>Today's Forecast</h1>
			<div className='flex justify-evenly'>
				{ weatherData && Array.from(
					{ length: 6 },
					(_, i) => (
						<HourlyWeatherCard
							key={ i }
							time={ toAnalogTime(Date.parse(hourlyTime[i])) }
							// icon={ <SiAccuweather size={50} />}
							icon={
								hourlyIcon.length > 0
								? React.createElement(hourlyIcon[i], { size: 100 }) 
								: <FaQuestion size={100} />
							}
							temp={ `${ Math.round(hourlyTemp[i] )}°F` }
						/>
					)
				)}
			</div>
		</section>
	)
}

export default ForecastToday