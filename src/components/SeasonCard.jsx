import React from 'react'

const SeasonCard = ({ seasonImg, season, startDate }) => {
  return (
    <div className='font-dancing max-w-[15rem] mt-[1rem] m-[0.25rem] text-center'>
        <img src={ seasonImg } alt={ season } />
        <p className='text-2xl'>{ season }</p>
        <p className='text-xl'>{ startDate }</p>
    </div>
  )
}

export default SeasonCard;