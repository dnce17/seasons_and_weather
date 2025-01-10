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

const weatherCategories = {
    sunny: {
      codes: [0],
      icon: SiAccuweather
    },
    partlyCloudy: {
      codes: [1, 2],
      icon: FaCloudSun
    },
    cloudy: {
      codes: [3, 45, 48],
      icon: TiWeatherCloudy
    },
    rainy: {
      codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
      icon: IoRainy
    },
    snowy: {
      codes: [71, 73, 75, 77, 85, 86],
      icon: GiSnowing
    },
    thunderstorm: {
      codes: [95, 96, 99],
      icon: IoThunderstorm
    },
  };


export { toAnalogTime, weatherCategories};