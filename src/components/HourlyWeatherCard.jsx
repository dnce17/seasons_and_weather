import React from 'react'

const HourlyWeatherCard = ({ time, icon, temp}) => {
  return (
    <>
			<div className='flex justify-evenly'>
				<div className='border border-blue-500 flex flex-col items-center'>
					<p className='text-xl font-bold text-center'>{ time }</p>
					{ icon }
					<p className='text-2xl font-bold'>{ temp }</p>
				</div>
			</div>
    </>
  )
}

export default HourlyWeatherCard