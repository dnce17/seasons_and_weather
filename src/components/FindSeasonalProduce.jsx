import ProduceBg from '../assets/imgs/produce_bg.png';
import { Link } from 'react-router-dom';

const FindSeasonalProduce = () => {
  return (
    <section className='py-32 bg-cover overlay-black-medium' style={{ backgroundImage: `url(${ProduceBg})`}}>
      <div className='text-center text-white py-10'>
        <h2 className='text-[2rem] font-playfairDisplay md:text-[2.5rem]'>Want to taste the season’s best?</h2>
        <p className='text-[1.1rem] font-lora py-4 md:text-[1.5rem]'> Check out what’s fresh and in season!</p>
        <Link
          to='/seasonal-produce'
          className='text-[1rem] font-montserrat mx-auto block w-fit py-4 px-10 bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out'
        >
          Learn more
        </Link>
      </div>
    </section>
  )
}

export default FindSeasonalProduce;