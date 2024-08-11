import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AudioPlayer from './AudioPlayer'
import './Hero.css'
import AnimeList from './AnimeList'
import AnimeContext from './AnimeContext'
import axios from 'axios'

const Hero = () => {
    const [query, setQuery] = useState('')
    //const [animeData, setAnimeData] = useState([])
    const { animeData, setAnimeData } = useContext(AnimeContext)
    const navigate = useNavigate()

    /*
     * Once user submits their query input, async function runs and
     * attempts to get data at that endpoint. 
     * When response is successfully processed, animeData
     * state is changed. 
     */
    const HandleAnimeSearch = async (e) => {
        e.preventDefault()
        try {
            /*
            const response = await fetch(`http://127.0.0.1:5000/anime/search_anime?q=${query}`)
            const data = await response.json()
            */
            const response = await axios.get(`http://127.0.0.1:5000/anime/search_anime?q=${query}`)
            console.log(response.data)
            setAnimeData(response.data)
            navigate('./animelist')
        }
        catch (error) {
            console.error(`Error retrieving anime data: ${error}`)
        }
    }


    return (
        <div className="background-container">
            <div className="hero-card">
                <form onSubmit={HandleAnimeSearch}>
                    <h1 className="hero-text">Search for your favorite animes here</h1>
                    <div className="search-input">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)} //sets query value from user changing their inputs
                            placeholder="Search for an anime"
                        />
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
            <AudioPlayer />
        </div>
    )
}

export default Hero