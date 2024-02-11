import React, {useState, useEffect} from 'react'
import request from '../services/Api'
import './banner.css'


const Promotion = () => {

  const [banner, setbanner] = useState([])

  useEffect( () => {
    async function fetchmovie() {

      const result = await fetch(request.trending);
      const  movie = await result.json();
  
      setbanner(movie.results)
      
    }
    fetchmovie()
  }, [])

 
  const randomIndex = Math.floor(Math.random() * banner.length);

  const randomMovie = banner[randomIndex];
  
  return (
    <div >


      
{randomMovie && (
  <div className = 'relative'>
      <img
      className='img'
      src={`https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`}
      alt='movie banner'
    />
    <h1 className = 'relative text-2xl bottom-36'>{randomMovie.title}</h1>
  </div>
  )}

       

     
    </div>
    
  )
}

export default Promotion