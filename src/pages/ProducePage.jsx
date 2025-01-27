import { useState } from 'react';
import ProduceCards from '../components/ProduceCards';

const ProducePage = () => {
  const [season, setSeason] = useState('winter');

  return (
    <section className='bg-stone-100'>
      <div className='mx-auto max-w-[90%] md:max-w-[70%]'>
        <div className='mx-auto max-w-[90%] md:max-w-[50%] pt-4'>
          <ul className='flex justify-evenly'>
            <li
              onClick={() => setSeason('winter')}
              className={`
                cursor-pointer font-bold hover:text-sky-300 transition-all duration-200 ease-in-out
                ${season == 'winter' ? 'underline decoration-sky-300 decoration-[0.20rem] underline-offset-4' : ''}
              `}
            >
              Winter
            </li>
            <li
              onClick={() => setSeason('spring')}
              className={`
                cursor-pointer font-bold hover:text-pink-400 transition-all duration-200 ease-in-out
                ${season == 'spring' ? 'underline decoration-pink-400 decoration-[0.20rem] underline-offset-4' : ''}
              `}
            >
              Spring
            </li>
            <li
              onClick={() => setSeason('summer')}
              className={`
                cursor-pointer font-bold hover:text-orange-300 transition-all duration-200 ease-in-out 
                ${season == 'summer' ? 'underline decoration-orange-300 decoration-[0.20rem] underline-offset-4' : ''}
              `}
            >
              Summer
            </li>
            <li
              onClick={() => setSeason('autumn')}
              className={`
                cursor-pointer font-bold hover:text-orange-600 transition-all duration-200 ease-in-out
                ${season == 'autumn' ? 'underline decoration-orange-600 decoration-[0.20rem] underline-offset-4' : ''}
              `}
            >
              Autumn/Fall
            </li>
          </ul>
        </div>
        <ProduceCards season={season} />
      </div>
    </section>
  )
}

export default ProducePage