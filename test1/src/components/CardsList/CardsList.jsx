const CardsList = ({data, OptionsListHeight}) => {

  return (
    <ul className="list">
      {data.map((elem, index) => {
        return (
        <div key={index} className="card">
          <h3>{elem.header}</h3>
          <ul className='options' style={{height: OptionsListHeight}}>
            {elem.options.map((elem, index) => <li key={index}>{elem}</li>)}
          </ul>
          <p className='text'>{elem.text}</p>
        </div>)
      })}
    </ul>
  )
}

export default CardsList;