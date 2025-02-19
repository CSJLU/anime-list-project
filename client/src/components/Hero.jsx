import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'
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
    const { ref: aboutRef, inView: aboutIsVisible } = useInView()
    /*
     * Once user submits their query input, async function runs and
     * attempts to get data at that endpoint. 
     * When response is successfully processed, animeData state is changed. 
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
        <div className="homepage-container">
            <section className="intro-container">
                <div className="intro-text">
                    <h1>Browse for Anime</h1>
                    <h2>Choose your Ten</h2>
                </div>
            </section>
            <section className="background-container">
                <div className="hero-card">
                    <form onSubmit={HandleAnimeSearch}>
                        <h1 className="hero-text">Search Animes</h1>
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
            </section>
            <section className="about-container">
                <h1 ref={aboutRef} className={`about-text ${aboutIsVisible ? "visible" : "hidden"}`}>Test about</h1>
            </section>
            <section className="fun-container">
                <h1>Test fun</h1>
            </section>
        </div>
    )
}

export default Hero