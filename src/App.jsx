import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Banner from './Components/Banner/Banner.jsx'
import Post from './Components/Post/Post.jsx'
function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Post/>
    </>
  )
}

export default App
