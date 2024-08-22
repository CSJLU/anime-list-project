import React from 'react'
import { useState, useEffect, useContext } from 'react' 
import AnimeContext from './AnimeContext'
import Header from './Header'
import './AnimeList.css' 
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AnimeList = () => { 
    const { animeData, setAnimeData } = useContext(AnimeContext)
    const navigate = useNavigate() //return button will navigate back to home component

    const truncateTitle = (title) => {
        if(title.length > 55) {
            return title.slice(0, 50) + "..."
        }
        return title
    }

    return (
        <>
            { animeData && animeData.data ? (
                <div>
                    <div className="anime-list-container">
                        <h1 className="result-text">Anime Search Results</h1>
                        {animeData.data.map(anime => (
                            <a href={anime.url}>
                                <div key={anime.mal_id} className="card">
                                    <h3 className="anime-title">{truncateTitle(anime.title)}</h3>
                                    <img src={anime.images.jpg.image_url} alt="Image of anime" className="anime-image"/>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="return-container">
                    <button className="return-button" type="submit">Please click here to return</button>
                </div>
            )}
        </>
    )
}

export default AnimeList