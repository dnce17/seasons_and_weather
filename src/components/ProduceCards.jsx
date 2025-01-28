import ProduceCard from './ProduceCard';
import SeasonalProduceData from '../seasonalProduce.json';

const ProduceCards = ({ season }) => {
  const produceData = SeasonalProduceData.seasons[season];

  return (
    <>
      {/* h1 - capitalizes first letter */}
      <h1 className='text-2xl font-bold font-lora md:text-[1.8rem] pb-2 pt-6'>
        {season == 'autumn'
          ? 'Autumn/Fall'
          : season.charAt(0).toUpperCase() + season.slice(1)
        }
      </h1>
      <hr className='border-green-900 border-2'></hr>
      <div className='py-6'>
        <h2 className='text-2xl font-bold font-lora pb-1 md:text-[1.8rem]'>Seasonal Fruits</h2>
        <div className='grid grid-cols-2 gap-x-4 gap-y-8 py-2 md:grid-cols-4'>
          {produceData.produce.fruits.map(fruit => (
            <ProduceCard key={fruit[0]} imgPath={fruit[1]} alt={fruit[0]} produceName={fruit[0]} />
          ))}
        </div>
      </div>
      <div className='py-6'>
        <h2 className='text-2xl font-bold font-lora pb-1 md:text-[1.8rem]'>Seasonal Vegetables</h2>
        <div className='grid grid-cols-2 gap-x-4 gap-y-8 py-2 md:grid-cols-4'>
          {produceData.produce.vegetables.map(vegetable => (
            <ProduceCard key={vegetable[0]} imgPath={vegetable[1]} alt={vegetable[0]} produceName={vegetable[0]} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProduceCards;