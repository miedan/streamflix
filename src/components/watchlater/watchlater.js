import  React from 'react'
import { Globalcontext } from '../../context/Globalcontext'
import { useContext } from 'react'

 const Watchlater = () => {

  const {watchlater, removefromwatchlater} = useContext(Globalcontext)
  console.log(watchlater, "watchlater")
  return (

    <div >watchlater
        {watchlater.map((movie) => <div className='flex'><h1 key={movie.id}> {movie.title}</h1>
        <button className='bg-blue-500' onClick={() => removefromwatchlater(movie.id)}>remove </button></div> )}
        {/* {() => addtowatchlater(movieDetails)} */}
        
    </div>
    
  )
}

export default Watchlater;
