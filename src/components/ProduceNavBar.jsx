const ProduceNavBar = ({ season, seasonState, setSeason, color }) => {
  return (
    <li
      onClick={() => setSeason(`${season}`)}
      className={`
        cursor-pointer font-bold hover:text-${color} transition-all duration-200 ease-in-out
        ${season == seasonState ? `underline decoration-${color} decoration-[0.20rem] underline-offset-4` : ''}
      `}
    >
      {season == 'autumn'
        ? `${season.charAt(0).toUpperCase() + season.slice(1)}/Fall`
        : season.charAt(0).toUpperCase() + season.slice(1)
      }
    </li>
  )
}

export default ProduceNavBar;