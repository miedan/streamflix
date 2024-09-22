import React from 'react'
import Promotion from './heroSection'
import Row from '../moviecategory/movierow'
import request from '../services/Api'

function Home() {
  return (

    <div className="flex flex-col">
        <Promotion/>
        <Row title ="Popular" fetchurl={request.popular}/>
        <Row title ="Trending" fetchurl={request.trending}/>
        <Row title = "New release" fetchurl={request.newrelease}/>
        <Row title = "Top Rated" fetchurl={request.toprated}/>
    </div>
    
  )
}

export default Home