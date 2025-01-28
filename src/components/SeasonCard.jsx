const SeasonCard = ({ seasonImg, season, startDate, textColor='text-slate-800'}) => {
  return (
    <div className='max-w-[18rem] mx-[0.75rem] mb-[0.75rem] text-center text-slate-800'>
      <img src={seasonImg} alt={season} className='rounded-[50%] drop-shadow-md' />
      <h2 className={`text-2xl font-bold font-montserrat pt-1 ${textColor}`}>{season}</h2>
      <p className='text-lg md:text-xl font-lora'>{startDate}</p>
    </div>
  )
}

export default SeasonCard;