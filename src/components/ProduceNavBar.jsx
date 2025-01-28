const ProduceNavBar = ({ season, seasonState, setSeason }) => {

  const hoverColor = {
    winter: 'hover:text-sky-300',
    spring: 'hover:text-pink-400',
    summer: 'hover:text-orange-300',
    autumn: 'hover:text-orange-600',
  };

  const decorationColor = {
    winter: 'decoration-sky-300',
    spring: 'decoration-pink-400',
    summer: 'decoration-orange-300',
    autumn: 'decoration-orange-600',
  };

  return (
    <li
      onClick={() => setSeason(`${season}`)}
      className={`
        cursor-pointer font-bold ${hoverColor[season]} transition-all duration-200 ease-in-out
        ${season == seasonState ? `underline ${decorationColor[season]} decoration-[0.20rem] underline-offset-4` : ''}
      `}
    >
      {season == 'autumn'
        ? 'Autumn/Fall'
        : season.charAt(0).toUpperCase() + season.slice(1)
      }
    </li>
  )
}

export default ProduceNavBar;