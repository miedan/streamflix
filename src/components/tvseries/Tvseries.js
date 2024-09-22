import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';

const Tvseries = ({ title, fetchurl }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(fetchurl);
        const data = await response.json();
        setMovies(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [fetchurl]);

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className='Tvseries'>
      <h1 className='flex justify-start text-3xl pb-2'>{title}</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Slider  {...settings}>
          {movies.map((movie) => (
            <div
              onClick={() => navigate(`/movie/${movie.id}`)} // Correct URL navigation here
              className='pb-8  pr-3 relative flex flex-col' 
              key={movie.id}
            >
              <img
                className='object-contain'
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt='movie'
              />
              <h1>{movie.title}</h1>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Tvseries;
