import React from 'react'
import Promotion from './Promotion'

// import Category from '../category/Category'
import request from '../services/Api'
import Tvseries from '../components/tvseries/Tvseries'

function Home() {
  return (
    <div>
        <Promotion/>
        <Tvseries title ="New release" fetchurl={request.newrelease_tvseries}/>
        <Tvseries title ="Popular" fetchurl={request.popular_tvseries}/>
        <Tvseries title = "Top rated" fetchurl={request.toprated_tvseries}/>    
    </div>
  )
}

export default Home