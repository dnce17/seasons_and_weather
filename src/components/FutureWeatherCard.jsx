import React from 'react'

const FutureWeatherCard = ({ day, icon, weather, temp }) => {
  return (
    <>
			<div className='flex justify-between items-center'>
				{/* NOTE: Width are given to dates, so icons are more centered */}
				<h2 className='text-xl w-16'>{ day }</h2>
				<div className='flex items-center'>
				{ icon }
				<p className='text-xl font-bold'>{ weather }</p>
				</div>
				<p className='text-xl'>{ temp }</p>
			</div>
    </>
  )
}

export default FutureWeatherCard