import { useState, useEffect } from 'react';
import { FETCH_URL } from './const';
import CardsList from './components/CardsList';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const maxOptionsLength = data.reduce((max, item) => {
    return Math.max(max, item.options.length);
  }, 0);
  const optionItemHeight = 22;
  const OptionsListHeight = maxOptionsLength * optionItemHeight;

  useEffect(() => {
    fetch(FETCH_URL)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsError(true);
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <h3>Идет загрузка...</h3>;
  }

  if (isError) {
    return <h3>Произошла ошибка при загрузке данных</h3>;
  }


  return (
    <>
      {data.length > 0 
      ? <CardsList data={data} OptionsListHeight={OptionsListHeight}/> 
      : <h3>Нет данных</h3>
      }    
    </>
  )
}

export default App
