import SeasonCard from './SeasonCard';
import WinterImg from '../assets/imgs/seasons/winter.jpg';
import SpringImg from '../assets/imgs/seasons/spring.jpg';
import SummerImg from '../assets/imgs/seasons/summer.jpg';
import AutumnImg from '../assets/imgs/seasons/autumn.jpg';

const SeasonCards = () => {
  return (
    <section className='text-center py-10'>
      <div className='font-lora text-4xl font-medium'>Season Durations</div>
      <div className='grid grid-cols-2 justify-items-center pt-7 md:grid-cols-4'>
        <SeasonCard seasonImg={WinterImg} season='Winter' startDate='Dec 21 - Mar 19' textColor='text-sky-300'/>
        <SeasonCard seasonImg={SpringImg} season='Spring' startDate='Mar 20 - Jun 20' textColor='text-pink-400'/>
        <SeasonCard seasonImg={SummerImg} season='Summer' startDate='Jun 21 - Sep 21' textColor='text-orange-300'/>
        <SeasonCard seasonImg={AutumnImg} season='Autumn / Fall' startDate='Sep 22 - Dec 20' textColor='text-orange-600'/>
      </div>
    </section>
  )
}

export default SeasonCards;