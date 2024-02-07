import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Row = ({ title, fetchurl }) => {
  const [movies, setMovies] = useState([]);
  const [currentindex, setcurrentindex] = useState(0)

  const slideleft = () => {

    setcurrentindex(currentindex - 1)
  }

  const slideright = () => {
    setcurrentindex(currentindex + 1)
    
  }


  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(fetchurl);
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, [fetchurl]);

  return (
    <div>
      <h1 className='flex justify-start'>{title}</h1>

      <div className='flex relative'>
        

        
        

        {movies.slice(currentindex * 5, (currentindex+1) * 5 ).map((movie) => (
          <div className='pr-3 pb-8' key={movie.id}>
            <img
              className=''
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt='movie photo'
            />
          </div>
        ))}

<div className='absolute inset-y-0 left-0 flex items-center'>
        {currentindex > 0 && <FaChevronLeft onClick={slideleft} />}
        </div>
        <div className='absolute inset-y-0 right-0 flex items-center'>
        {currentindex < Math.ceil(movies.length / 5) - 1  &&<FaChevronRight onClick={slideright} />}
        </div>

        
      </div>
    </div>
  );
};

export default Row;
