import React from 'react'
import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
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

const Row = ({title, fetchurl}) => {

  const [movies, setmovies] = useState([])
  const [next, setnext] = useState(false)
  

  useEffect(() => {
    const fetchmovie = async() => {
       
        const response = await fetch(fetchurl);
        const data = await response.json();
        setmovies(data.results)
        console.log(data)
    }
    fetchmovie()
   
  }, [])


    
  return (
     
    <div>
          <h1 className='flex justify-start'>{title}</h1>
          
      
      <Slider {...settings}>
      {/* <div className='flex '> */}
        {movies.map((movie) => (
       <div className='pr-3 pb-8'  key={movie.id} >
         <img className='' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie photo'/>
       </div>
      ))}
       {/* </div> */}

      </Slider>
      
       
  

    </div>
    
  )
}

export default Row