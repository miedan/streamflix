import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import { Globalcontext } from '../context/Globalcontext';

const Singlemovie = ({ movieId }) => {
  const params = useParams();
  const id = params.userid;
  const { addtowatchlater, watchlater } = useContext(Globalcontext);

  let storedmovies = watchlater.find(movie => String(movie.id) === String(id));
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

  return (
    <div className="max-h-screen flex items-center justify-center  text-white">
      {movieDetails && (
        <div className="flex max-h-screen w-full max-w-6xl py-8">
          {/* Movie Poster */}
          <img
            className="max-h-screen w-1/2 object-cover"
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt="movie poster"
          />

          {/* Movie Details */}
          <div className="w-1/2 p-6 flex flex-col gap-2 ">
            <h2 className="text-4xl font-bold mb-4">{movieDetails.title}</h2>
            <h1 className="text-xl mb-4">{movieDetails.release_date}</h1>

            {/* Rating - Conditionally Rendered */}
            {movieDetails.vote_average ? (
              <div className="flex items-center gap-2 mb-4">
                <IoIosStar className="text-yellow-500" />
                <h1>{movieDetails.vote_average.toFixed(1)}</h1>
              </div>
            ) : (
              <div className="text-gray-500 mb-4">Rating not available</div>
            )}

            <button
              className={`bg-blue-500 text-white p-1 w-1/2 rounded ${buttonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={buttonDisabled}
              onClick={() => addtowatchlater(movieDetails)}
            >
              Add to Watch Later
            </button>

            {/* Movie Overview */}
            <div className="mt-2">{movieDetails.overview}</div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Singlemovie;
