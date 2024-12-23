import React from 'react'

const Hero = ({ hero, season, mdBgPos, textColor}) => {
  return (
    <div className={`text-center min-h-[400px] bg-cover bg-no-repeat bg-center md:${ mdBgPos } md:min-h-[550px]`} style={{ backgroundImage: `url(${ hero })` }}>
        <div className='pt-[1rem]'>
        <h2 className='text-2xl font-dancing text-slate-100'>Current Season</h2>
        <h1 className={`text-7xl font-dancing font-semibold drop-shadow-md ${ textColor }`}>{ season }</h1>
        </div>
    </div>
  )
}

export default Hero