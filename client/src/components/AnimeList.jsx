import React from 'react'
import { useState, useEffect, useContext } from 'react' 
import AnimeContext from './AnimeContext'
import Header from './Header'
import './AnimeList.css' 

const AnimeList = () => { 
    const { animeData, setAnimeData } = useContext(AnimeContext)
    return (
        <div className="anime-list-wrapper">
            <Header />
            <div className="anime-list-container">
                {animeData.data.map(anime => (
                    <div key={anime.mal_id} className="card">
                        <h3>{anime.title}</h3>
                        <img src={anime.images.jpg.image_url} alt="Image of anime" className="anime-image"/>
                    </div>
                ))}
                <a href="/animeinfo">View more</a>
            </div>
        </div>
    )

}

export default AnimeList