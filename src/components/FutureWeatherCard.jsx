import React from 'react'

const FutureWeatherCard = ({ day, icon, weather, temp }) => {
	return (
		<>
			<div className='flex justify-between items-center [&:not(:last-child)]:border-b-2 border-slate-200 py-4'>
				{/* NOTE: Width are given to dates, so icons are more centered */}
				<h2 className='text-xl w-16'>{day}</h2>
				<div className='flex items-center min-[320px]:min-w-36'>
					{icon}
					<p className='pl-2 text-xl font-bold text-center'>{weather}</p>
				</div>
				<p className='text-xl min-[320px]:min-w-fit'>{temp}</p>
			</div>
		</>
	)
}

export default FutureWeatherCard