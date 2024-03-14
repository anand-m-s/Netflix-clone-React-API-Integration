import React,{useEffect,useState} from 'react'
import './Post.css'
import axios from '../../Axios'
import {API_KEY} from '../../Constants/Constant'
function Post() {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
            console.log(response.data)
        }).catch(err=>{
            alert('NetWork error')
        })
    },[])
  return (
   <div className='row'>
    <h2>Title</h2>
        <div className="posters">
             <img className='poster' src="https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w" alt="poster" />
        </div>
   </div>
  )
}

export default Post