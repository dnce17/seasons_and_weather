import React from 'react'

const HourlyWeatherCard = ({ time, icon, temp}) => {
  return (
    <>
			<div className='flex justify-evenly w-full [&:not(:last-child)]:border-r-2 border-slate-200 min-w-24'>
				<div className='flex flex-col items-center'>
					<p className='text-xl font-bold text-center'>{ time }</p>
					{ icon }
					<p className='text-2xl font-bold'>{ temp }</p>
				</div>
			</div>
    </>
  )
}

export default HourlyWeatherCard