import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { IoIosStar } from "react-icons/io";
import { Globalcontext } from '../context/Globalcontext';


const Singlemovie = ({ movieId }) => {

  const params = useParams()
  const id = params.userid
  // console.log(id, "id")

  const {addtowatchlater, watchlater} = useContext(Globalcontext);
  // let storedMovies = watchlater.find(o => o.id === String(movieId));

  let storedmovies = watchlater.find(movie => String(movie.id) === String(id))
  // console.log(storedmovies, "stored")

  const buttonDisabled = storedmovies ? true : false;

  const [movieDetails, setMovieDetails] = useState(null);

 

  
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {  
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=8d8ff0b6170bff5622de6091db2a9140`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  // console.log("buttonDisabled:", buttonDisabled);
  console.log("Movie ID from watchlater:", watchlater)
  return (
    <div className="hovered-movie">
    {/* poster_path */}
      {movieDetails && (
        <div className='flex'>

                <img
                className=' h-1\2'
                src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                alt='movie photo'
              />
          <div>
            <h2>{movieDetails.title}</h2>
            <h1>{movieDetails.release_date}</h1>
            <div className='flex items-center gap-2'>
              <IoIosStar/>
              
              <h1>{movieDetails.vote_average}</h1>
              <button  className='bg-blue-500 p-2'  
              disabled = {buttonDisabled}
              onClick = {() => addtowatchlater(movieDetails)}> Add to watch Later
              </button>
            </div>
            <p>{movieDetails.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Singlemovie;
