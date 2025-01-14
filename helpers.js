import { SiAccuweather } from 'react-icons/si';
import { FaCloudSun } from 'react-icons/fa';
import { TiWeatherCloudy } from 'react-icons/ti';
import { GiSnowing } from 'react-icons/gi';
import { IoRainy, IoThunderstorm} from 'react-icons/io5';

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
      icon: SiAccuweather
    },
    'Partly Cloudy': {
      codes: [1, 2],
      icon: FaCloudSun
    },
    Cloudy: {
      codes: [3, 45, 48],
      icon: TiWeatherCloudy
    },
    Rainy: {
      codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
      icon: IoRainy
    },
    Snowy: {
      codes: [71, 73, 75, 77, 85, 86],
      icon: GiSnowing
    },
    Thunderstorm: {
      codes: [95, 96, 99],
      icon: IoThunderstorm
    },
  };


export { toAnalogTime, removeBlanks, weatherCategories};