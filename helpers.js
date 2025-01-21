import { SiAccuweather } from 'react-icons/si';
import { FaCloudSun } from 'react-icons/fa';
import { TiWeatherCloudy } from 'react-icons/ti';
import { GiSnowing } from 'react-icons/gi';
import { IoRainy, IoThunderstorm } from 'react-icons/io5';

import SunnyBg from './src/assets/imgs/partly_cloudy_bg.jpg';
import CloudyBg from './src/assets/imgs/cloudy_bg.jpg';
import RainyBg from './src/assets/imgs/rainy_bg.jpg';
import SnowyBg from './src/assets/imgs/snowy_bg.jpg';
import ThunderstormBg from './src/assets/imgs/thunderstorm_bg.jpg';

const toAnalogTime = (timestamp) => {
  const date = new Date(timestamp);
  const analogTime = date.toLocaleString([], {
    hour: 'numeric',
    minute: '2-digit',
  });

  return analogTime;
}

const removeBlanks = (strArr) => {
  let location = [];
  for (let str of strArr) {
    str && location.push(str.trim());
  }
  return location.join(', ');
}

const weatherCategories = {
  Sunny: {
    codes: [0],
    icon: SiAccuweather,
    bg: SunnyBg,
  },
  'Partly Cloudy': {
    codes: [1, 2],
    icon: FaCloudSun,
    bg: SunnyBg
  },
  Cloudy: {
    codes: [3, 45, 48],
    icon: TiWeatherCloudy,
    bg: CloudyBg,
  },
  Rainy: {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
    icon: IoRainy,
    bg: RainyBg
  },
  Snowy: {
    codes: [71, 73, 75, 77, 85, 86],
    icon: GiSnowing,
    bg: SnowyBg
  },
  Thunderstorm: {
    codes: [95, 96, 99],
    icon: IoThunderstorm,
    bg: ThunderstormBg
  },
};


export { toAnalogTime, removeBlanks, weatherCategories };