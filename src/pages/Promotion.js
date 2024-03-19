import React, {useState, useEffect} from 'react'
import request from '../services/Api'
import { IoIosPlay } from "react-icons/io";
import { FiInfo } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";

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
    <div className='pb-10' >


      
      {randomMovie && (
        <div className='relative h-1/2'>
          <img
            className='img'
            src={`https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`}
            alt='movie banner'
          />

          <div  className = 'absolute  md:top-60  md:text-3xl left-2 px-4'>


            <div className='flex gap-10 py-5  '>
                  <button className=' p-3 flex   gap-2  items-center justify-center text-white bg-blue-500'>
                    
                    <h1 className='rounded-md'>Watch Now</h1>
                    <IoIosPlay/>
                  </button>

                  <button className=' p-3 flex   gap-2 items-center justify-center border-2 border-blue-500'>
                    
                    <h1>Watch Later</h1>
                    <MdOutlineWatchLater/>
                  </button>
            </div>


            <h1 className = '  font-bold text-3xl md:text-7xl '>{randomMovie.title}</h1>
            <p className = 'text-sm md:text-xl md:font-bold top-8'>{randomMovie.overview}</p>
            

              
          </div>
        
        </div>
    )}

       

     
    </div>
    
  )
}

export default Promotion