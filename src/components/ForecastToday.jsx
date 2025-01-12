import React from 'react';
import HourlyWeatherCard from '../components/HourlyWeatherCard';
import { toAnalogTime } from '../../helpers';
import { FaQuestion } from "react-icons/fa";
import { weatherCategories } from '../../helpers';

const ForecastToday = ({ weatherData }) => {

	const currentDate = new Date();
	const currentHr = currentDate.getHours();
	const hourlyTime = weatherData && weatherData.hourly.time.slice(currentHr);
	const hourlyTemp = weatherData && weatherData.hourly.temperature_2m.slice(currentHr);
	const hourlyCode = weatherData && weatherData.hourly.weather_code.slice(currentHr);

	let hourlyIcons = [];

	if (weatherData) {
		for (const code of hourlyCode) {
			for (const item in weatherCategories) {
				const category = weatherCategories[item];
				if (category.codes.includes(code)) {
					hourlyIcons.push(category.icon);
				}
			}
		}
	}

	return (
		<section className='p-3 bg-slate-800 bg-opacity-50 rounded-xl'>
			<h1 className='text-xl font-bold pb-4'>Today's Forecast</h1>
			<div className='flex justify-evenly overflow-x-scroll'>
				{weatherData
					? Array.from(
						{ length: 10 },
						(_, i) => (
							<HourlyWeatherCard
								key={i}
								// time={ toAnalogTime(Date.parse(hourlyTime[i])) }
								time={
									// Remove trailing 0's
									toAnalogTime(Date.parse(hourlyTime[i])).match(/([0-9]*):00 ([a-zA-z]*)/)[1]
									+ ' ' +
									toAnalogTime(Date.parse(hourlyTime[i])).match(/([0-9]*):00 ([a-zA-z]*)/)[2]
								}
								icon={
									hourlyIcons.length > 0
										? React.createElement(hourlyIcons[i], { size: 50 })
										: <FaQuestion size={100} />
								}
								temp={`${Math.round(hourlyTemp[i])}°`}
							/>
						)
					)
					: <p className='text-2xl font-bold'>-</p>
				}
			</div>
		</section>
	)
}

export default ForecastToday