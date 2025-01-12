const Hero = ({ hero, season, mdBgPos, textColor, dateRange }) => {
  return (
    <div className={`pt-[1rem] text-center min-h-[500px] bg-cover bg-no-repeat bg-center md:${mdBgPos} md:min-h-[550px]`} style={{ backgroundImage: `url(${hero})` }}>
      <div className='p-[1rem] bg-black/55 mx-auto max-w-[300px] rounded-[100%]'>
        <h2 className='text-2xl font-dancing text-slate-100'>Current Season</h2>
        <h1 className={`text-7xl font-dancing font-semibold drop-shadow-md ${textColor}`}>{season}</h1>
        <h2 className='text-2xl font-dancing text-slate-100 mt-2'>{dateRange}</h2>
      </div>
    </div>
  )
}

export default Hero;