import { useState } from 'react';
import SeasonalProduceData from '../seasonalProduce.json';
import ProduceCard from '../components/ProduceCard';

import ProduceCards from '../components/ProduceCards';

const ProducePage = () => {
  const [season, setSeason] = useState('spring');
  // const produceData = SeasonalProduceData.seasons[season];

  return (
    <section className='bg-stone-100'>
      <div className='mx-auto max-w-[90%] md:max-w-[80%]'>
        <div className='mx-auto max-w-[90%] md:max-w-[50%] pt-4'>
          <ul className='flex justify-evenly'>
            <li onClick={() => setSeason('winter')}>Winter</li>
            <li onClick={() => setSeason('spring')}>Spring</li>
            <li onClick={() => setSeason('summer')}>Summer</li>
            <li onClick={() => setSeason('autumn')}>Autumn/Fall</li>
          </ul>
        </div>
        <ProduceCards season={season}/>
        {/* <article>
          <h1 className='text-2xl font-bold font-lora md:text-[1.8rem] pb-2'>{season.charAt(0).toUpperCase() + season.slice(1)}</h1>
          <hr className='border-orange-200 border-2'></hr>
          <div className='py-6'>
            <h2 className='text-2xl font-bold font-lora md:text-[1.8rem]'>Seasonal Fruits</h2>
            <div className='grid grid-cols-2 gap-x-4 gap-y-8 py-2 md:grid-cols-4'>
              {produceData.produce.fruits.map(fruit => (
                <ProduceCard key={fruit[0]} imgPath={fruit[1]} alt={fruit[0]} produceName={fruit[0]} />
              ))}
            </div>
          </div>
          <div className='py-6'>
            <h2 className='text-2xl font-bold font-lora md:text-[1.8rem]'>Seasonal Vegetables</h2>
            <div className='grid grid-cols-2 gap-x-4 gap-y-8 py-2 md:grid-cols-4'>
              {produceData.produce.vegetables.map(vegetable => (
                <ProduceCard key={vegetable[0]} imgPath={vegetable[1]} alt={vegetable[0]} produceName={vegetable[0]} />
              ))}
            </div>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default ProducePage