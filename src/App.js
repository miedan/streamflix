
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Singlemovie from './moviecategory/singlemovie';
import Tvseries from './components/tvseries/Tvseries';


function App() {
  return (
    <div className="App">
      
      <Header/>
      
    
      <Routes>

      <Route path='movie/:userid' element={<Singlemovie />} />
      <Route path='/' element={<Home/>} />
      <Route path='/tvseries' element={<Tvseries/>} />
      </Routes>
     
    </div>
  );
}

export default App;
