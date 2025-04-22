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
    const { ref: introRef, inView: introIsVisible } = useInView()
    const { ref: searchRef, inView: searchIsVisible } = useInView()
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
                <h1 ref={introRef} className={`intro-text ${introIsVisible ? "visible" : "hidden"}`}>
                    Browse for Anime
                    <div className="aurora">
                        <div className="aurora-item"></div>
                        <div className="aurora-item"></div>
                        <div className="aurora-item"></div>
                        <div className="aurora-item"></div>
                    </div>
                </h1>
                <h2 ref={introRef} className={`intro-text-bottom ${introIsVisible ? "visible" : "hidden"}`}>Search. Create. Display.</h2>
                {/*<h2 ref={introRef} className={`${introIsVisible ? "visible" : "hidden"}`}>Choose your Ten</h2>*/}

            </section>
            <section className="search-container">
                <div className="hero-card">
                    <form onSubmit={HandleAnimeSearch}>
                        <h1 ref={searchRef} className={`hero-text ${searchIsVisible ? "visible" : "hidden"}`}>Search Animes</h1>
                        <div ref={searchRef} className={`search-input ${searchIsVisible ? "visible" : "hidden"}`}>
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)} //sets query value from user changing their inputs
                                placeholder="Search for an anime"
                            />
                        </div>
                        <button type="submit" ref={searchRef} className={`search-input ${searchIsVisible ? "visible" : "hidden"}`}>Search</button>
                    </form>
                    </div>
                    <AudioPlayer />            
            </section>
        </div>
    )
}

export default Hero