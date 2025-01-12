const CurrentConditionCard = ({ icon, header, info }) => {
  return (
    <>
      <div className='flex py-3'>
        {icon}
        <div className='flex flex-col pl-2'>
          <h2 className='text-xl'>{header}</h2>
          <p className='text-2xl font-bold'>{info}</p>
        </div>
      </div>
    </>
  )
}

export default CurrentConditionCard;