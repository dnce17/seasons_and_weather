const ProduceCard = ({ header, imgPath, alt, produceName }) => {
  return (
    <div className='w-fit relative'>
      <img src={imgPath} alt={alt} className='drop-shadow-md rounded-lg' />
      <div className='bg-white drop-shadow-md rounded-lg py-3 max-w-[87%] font-bold mx-auto text-center mt-[-1.5rem]'>
        <p>{produceName}</p>
      </div>
    </div>
  )
}

export default ProduceCard;