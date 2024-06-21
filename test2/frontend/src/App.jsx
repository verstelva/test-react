import List from './components/List';
import Detail from './components/Detail';
import {Route, Routes} from 'react-router-dom';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<List  />} />
      <Route path='/:id/details' element={<Detail />} />
    </Routes>
  )
}

export default App
