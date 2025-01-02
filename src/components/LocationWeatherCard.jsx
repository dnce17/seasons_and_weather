import React from 'react'

const LocationWeatherCard = ({ location, icon, temp}) => {
  return (
    <>
			<h1 className='text-4xl font-bold'>{ location }</h1>
				{ icon }
			<h2 className='text-5xl font-bold'>{ temp }</h2>
		</>
  )
}

export default LocationWeatherCard