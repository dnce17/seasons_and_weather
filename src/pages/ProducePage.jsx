import { useState } from 'react';
import ProduceCards from '../components/ProduceCards';

import ProduceNavBar from '../components/ProduceNavBar';

const ProducePage = () => {
  const [season, setSeason] = useState('winter');

  return (
    <section className='bg-stone-100'>
      <div className='mx-auto max-w-[90%] md:max-w-[70%]'>
        <div className='mx-auto max-w-[90%] md:max-w-[50%] pt-4'>
          <ul className='flex justify-evenly'>
            <ProduceNavBar season='winter' seasonState={season} setSeason={setSeason} />
            <ProduceNavBar season='spring' seasonState={season} setSeason={setSeason} />
            <ProduceNavBar season='summer' seasonState={season} setSeason={setSeason} />
            <ProduceNavBar season='autumn' seasonState={season} setSeason={setSeason} />
          </ul>
        </div>
        <ProduceCards season={season} />
      </div>
    </section>
  )
}

export default ProducePage;