import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

const Row = ({ title, fetchurl }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);
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
        setError(error);
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
    <div className="row">
      <h1 className="flex justify-start text-3xl pb-2">{title}</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Slider {...settings}>
          {movies.map((movie) => (
            <div
              onClick={() => navigate(`/movie/${movie.id}`)}
              className="pr-3 flex flex-col h-96  cursor-pointer" // Adjust height of each card here
              key={movie.id}
            >
              {/* Image with controlled height */}
              <img
                className="object-cover w-full h-80" // Limit height and make sure object-fit is set
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              {/* Movie title */}
              <h1 className="mt-1 text-white text-sm  truncate">
                {movie.title}
              </h1>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Row;
