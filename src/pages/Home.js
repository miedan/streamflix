import React from 'react'
import Promotion from './Promotion'
import Row from '../moviecategory/movierow'
// import Category from '../category/Category'
import request from '../services/Api'

function Home() {
  return (
    <div>
        <Promotion/>
        <Row title ="Popular" fetchurl={request.popular}/>
        <Row title ="Trending" fetchurl={request.trending}/>
        <Row title = "New release" fetchurl={request.newrelease}/>
        <Row title = "Top Rated" fetchurl={request.toprated}/>
    </div>
  )
}

export default Home