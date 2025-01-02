import React from 'react'

const CurrentConditionCard = ({ icon, header, info}) => {
  return (
    <>
      <div className='flex bg-pink-200'>
        { icon }
        <div className='flex flex-col'>
          <h2 className='text-xl'>{ header }</h2>
          <p className='text-2xl font-bold'>{ info }</p>
        </div>
      </div>
    </>
  )
}

export default CurrentConditionCard