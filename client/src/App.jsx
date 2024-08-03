import Home from './components/Home'
import About from './components/About'
import AnimeList from './components/AnimeList'
import Login from './components/Login'
import SignUp from './components/SignUp'
import AnimeInfo from './components/AnimeInfo'
import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import AnimeContext from './components/AnimeContext'
import { useState } from 'react'

function App() {
  const [animeData, setAnimeData] = useState([])
  return (
    <AnimeContext.Provider value={{animeData, setAnimeData}}>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/animelist" element={<AnimeList />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/animeinfo" element={<AnimeInfo />}/>
          </Routes>
        </Router>
      </div>
    </AnimeContext.Provider>
  )
}

export default App
