import SeasonCard from './SeasonCard';
import WinterImg from '../assets/imgs/seasons/winter.jpg';
import SpringImg from '../assets/imgs/seasons/spring.jpg';
import SummerImg from '../assets/imgs/seasons/summer.jpg';
import AutumnImg from '../assets/imgs/seasons/autumn.jpg';

const SeasonCards = () => {
  return (
    <div className='bg-gray-100 text-center'>
      <div className='font-dancing text-[2.35rem] py-4'>Season Durations</div>
      <div className='grid grid-cols-2 md:grid-cols-4 justify-items-center'>
        <SeasonCard seasonImg={WinterImg} season='Winter' startDate='Dec 21 - Mar 19' />
        <SeasonCard seasonImg={SpringImg} season='Spring' startDate='Mar 20 - Jun 20' />
        <SeasonCard seasonImg={SummerImg} season='Summer' startDate='Jun 21 - Sep 21' />
        <SeasonCard seasonImg={AutumnImg} season='Autumn / Fall' startDate='Sep 22 - Dec 20' />
      </div>
    </div>
  )
}

export default SeasonCards;