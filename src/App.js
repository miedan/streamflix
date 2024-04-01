
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import Series from './pages/series'
import {Routes, Route} from 'react-router-dom'
import Singlemovie from './moviecategory/singlemovie';
import Tvseries from './components/tvseries/Tvseries';
import { Globalcontextprovider } from './context/Globalcontext';
import Watchlater from './components/watchlater/watchlater';



function App() {
  return (
   
      <Globalcontextprovider>
      
      <Header/>
      
      
    
      <Routes>

      <Route path='movie/:userid' element={<Singlemovie />} />
      <Route path='/' element={<Home/>} />
      <Route path='/tvseries' element={<Series/>} />
      <Route path = '/watchlater' element={<Watchlater/>}/>
      </Routes>

      </Globalcontextprovider>
   
  );
}

export default App;
