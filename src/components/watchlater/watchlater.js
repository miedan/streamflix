import React from 'react';
import { Globalcontext } from '../../context/Globalcontext';
import { useContext } from 'react';
import { IoIosStar } from 'react-icons/io';

const Watchlater = () => {
  const { watchlater, removefromwatchlater } = useContext(Globalcontext);
  console.log(watchlater, 'watchlater');

  return (
    <div>
      {watchlater.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <h2 className="text-2xl font-bold">No movies added to Watch Later.</h2>
        </div>
      ) : (
        watchlater.map((movie) => (
          <div className="flex" key={movie.id}>
            <div className="flex max-h-screen w-full max-w-6xl py-8">
              <img
                className="max-h-screen w-1/2 object-cover"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="movie poster"
              />

              <div className="w-1/2 p-6 flex flex-col gap-2 ">
                <h2 className="text-4xl font-bold mb-4">{movie.title}</h2>
                <h1 className="text-xl mb-4">{movie.release_date}</h1>

                <div className="flex items-center gap-2 mb-4">
                  <IoIosStar className="text-yellow-500" />
                  <h1>{movie.vote_average.toFixed(1)}</h1>
                </div>

                <button
                  className="bg-blue-500 text-white p-1 w-1/2 rounded"
                  onClick={() => removefromwatchlater(movie.id)}
                >
                  Remove from Watch Later
                </button>

                <div className="mt-2">{movie.overview}</div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Watchlater;
