
import{Orginals,Action} from './urls.js'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Banner from './Components/Banner/Banner.jsx'
import Post from './Components/Post/Post.jsx'
function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Post url={Orginals} title='Netflix Orginals'/>
    <Post url={Action} title='Action' isSmall />
    </>
  )
}

export default App
