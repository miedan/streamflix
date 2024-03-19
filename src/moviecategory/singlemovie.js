import React, { useState, useEffect } from 'react';

const Singlemovie = ({ movieId }) => {
  
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details using movieId
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=YOUR_API_KEY&language=en-US`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className="hovered-movie">
      {movieDetails && (
        <>
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
        </>
      )}
    </div>
  );
};

export default Singlemovie;
