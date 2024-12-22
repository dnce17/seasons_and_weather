import React from 'react'

const Card = ({ seasonImg, season, startDate }) => {
  return (
    <div className='max-w-[15rem] text-center'>
        <img src={ seasonImg } alt={ season } />
        <p>{ season }</p>
        <p>{ startDate }</p>
    </div>
  )
}

export default Card