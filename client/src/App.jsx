import Home from './components/Home'
import About from './components/About'
import AnimeList from './components/AnimeList'
import Login from './components/Login'
import SignUp from './components/SignUp'

import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/anime" element={<AnimeList />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </Router>
      </div>
  )
}

export default App
