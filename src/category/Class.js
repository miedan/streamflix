import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './row.css';

const Row = ({ title, fetchurl }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(fetchurl);
        const data = await response.json();
        setMovies(data.results);
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching movies:', error);
        setIsLoading(false); // Set loading to false in case of error
      }
    };
    fetchMovies();
  }, [fetchurl]);

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],

  };

  return (
    <div className='row'>
      <h1 className='flex justify-start text-3xl'>{title}</h1>
      {isLoading ? (
        <div>Loading...</div> // Show loading indicator while fetching data
      ) : (
        <Slider {...settings}>
          {movies.map((movie) => (
            <div className='pr-2 pb-8 pt-3' key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt='movie photo'
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Row;
