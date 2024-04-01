import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Singlemovie = ({ movieId }) => {
  
  const params = useParams()
  const id = params.userid
 
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
    <div className="hovered-movie">
    {/* poster_path */}
      {movieDetails && (
        <>

                <img
                className='object-contain'
                src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                alt='movie photo'
              />
          
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
        </>
      )}
    </div>
  );
};

export default Singlemovie;
