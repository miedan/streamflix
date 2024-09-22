import React, {useState, useEffect} from 'react'
import request from '../services/Api'
import { IoIosPlay } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";

const Promotion = () => {

  const [banner, setbanner] = useState([])

  useEffect( () => {

    async function fetchmovie() {
      
      const result = await fetch(request.trending);
      console.log(result, "result")
      const movie = await result.json();
      setbanner(movie.results)
      
    }
    fetchmovie()
  }, [])

  const randomIndex = Math.floor(Math.random() * banner.length);
  const randomMovie = banner[randomIndex];
  
  return (
    <div className=' max-h-screen ' >
      
      {randomMovie && (
        <div className='relative max-h-screen   '>
          <img
            className='img w-full object-cover max-h-screen py-10'
            src={`https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`}
            alt='movie banner'
          />

          <div  className = 'absolute  md:top-72 md:text-2xl left-2 px-6'>
            <div className='flex gap-10 py-5  '>

              <button className=' p-1 flex   gap-2  items-center justify-center text-white bg-blue-500'>
                Watch Now
                <IoIosPlay/>
              </button>

              <button className=' p-1 flex   gap-2 items-center justify-center border-2 border-blue-500'>
                Watch Later
                <MdOutlineWatchLater/>
              </button>
            </div>
            <h1 className = '  font-bold text-3xl md:text-5xl mb-4 '>{randomMovie.title}</h1>
            <p className = 'text-sm md:text-lg md:font-bold '>{randomMovie.overview}</p>
             
          </div>
    </div>
    )}
  
    </div>
    
  )
}

export default Promotion