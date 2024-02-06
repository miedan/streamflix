import React from 'react'
import { useState, useEffect } from 'react'
import { FaCircleChevronRight } from "react-icons/fa6";
import request from '../services/Api'


const Popular = () => {

  const [movies, setmovies] = useState([])
  const [next, setnext] = useState(false)
  

  useEffect(() => {
    const fetchpopular = async() => {
        const url = `${request.popular}`
        const response = await fetch(url);
        const data = await response.json();
        setmovies(data.results)
        console.log(data)
    }
    fetchpopular()
   
  }, [])


    
  return (

    
    <div className='grid'>
      
      
       {movies.map((movie) => (
        <div key={movie.id} >
          
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie photo'/>
       </div>
       ))}
        
    </div>
  )
}

export default Popular