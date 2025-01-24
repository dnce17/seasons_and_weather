const Hero = ({ hero, season, mdBgPos, textColor, dateRange }) => {
  return (
    <div className={`pt-[1rem] text-center min-h-[500px] bg-cover bg-no-repeat bg-center md:${mdBgPos} md:min-h-[600px]`} style={{ backgroundImage: `url(${hero})` }}>
      <div className='p-[1rem] bg-black/55 mx-auto max-w-[300px] rounded-[100%]'>
        <h2 className='text-xl font-montserrat text-slate-100'>Current Season</h2>
        <h1 className={`text-6xl font-lora font-semibold drop-shadow-md ${textColor}`}>{season}</h1>
        <h2 className='text-xl font-montserrat text-slate-100 mt-2'>{dateRange}</h2>
      </div>
    </div>
  )
}

export default Hero;