import React,{useEffect,useState} from 'react'
import './Post.css'
import axios from '../../Axios'
import {imageUrl,API_KEY} from '../../Constants/Constant'
import YouTube  from 'react-youtube'


function Post(props) {
    
    const [Movies,setMovies] = useState([])
    const [urlId,setUrlId]=useState('')

    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response.data)
            setMovies(response.data.results)
        }).catch(err=>{
            alert('NetWork error')
        })
    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const HandleMovie = (id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }else{
                console.log('Empty array')
            }
        })
    }
  return (
   <div className='row'>
    <h2 className='text-2xl font-bold'>{props.title}</h2>
        <div className="posters">
            {Movies.map((obj)=>
            
            <img key={obj.id} onClick={()=>HandleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )}
        </div>
        { urlId && <YouTube opts={opts} videoId={urlId.key} /> }
   </div>
  )
}

export default Post