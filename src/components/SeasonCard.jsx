import React from 'react'

const SeasonCard = ({ seasonImg, season, startDate }) => {
  return (
    <div className='font-dancing max-w-[18rem] mx-[0.75rem] mb-[0.75rem] text-center'>
      <img src={seasonImg} alt={season} className='rounded-[50%]' />
      <h2 className='text-2xl font-bold font-montserrat pt-1'>{season}</h2>
      <p className='text-lg md:text-xl font-lora'>{startDate}</p>
    </div>
  )
}

export default SeasonCard;