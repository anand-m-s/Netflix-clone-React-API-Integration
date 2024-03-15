import React, { useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constant'
import './Banner.css'
import { useEffect } from 'react'
import axios from '../../Axios'
function Banner() {
    const [movie,setMovie] = useState()
    useEffect(()=>{
        const RandomNum = Math.floor(Math.random()*19)+1;
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[0])
            setMovie(response.data.results[RandomNum])
        })
    },[])
  return (
        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}} className='banner'>
            <div className='content'>
                <h1 className='text-5xl font-extrabold pb-2'>{movie?movie.title:""}</h1>
                <div className='banner_btn'>
                    <button className='button '>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>{movie?movie.overview:""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
  )
}

export default Banner