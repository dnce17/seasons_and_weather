import Navbar from '../components/Navbar';
import HeroSelector from '../components/HeroSelector';
import SeasonCards from '../components/SeasonCards';
import FindSeasonalProduce from '../components/FindSeasonalProduce';

const HomePage = () => {
  return (
    <>
      <HeroSelector />
      <SeasonCards />
      <FindSeasonalProduce />
    </>
  )
}

export default HomePage