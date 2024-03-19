
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Singlemovie from './moviecategory/singlemovie';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Home/>
      <Routes>

          <Route path='movie/:movieid' element={<Singlemovie/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
