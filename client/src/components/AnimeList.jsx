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

    const redirectHomepage = () => {
        navigate('/')
    }

    return (
        <> 
            { animeData && animeData.data ? (
                <div className="anime-list-container">
                    <ul >
                        {animeData.data.map(anime => (
                            <li className="anime-items">
                                <div className="anime-title">
                                    <span>{anime.title}</span>
                                </div>
                                <div className="anime-rating">
                                    <span>{anime.score}</span>
                                </div>
                                <div className="anime-date">
                                    <span>{anime.aired.prop.from.year}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="return-container">
                    <button className="return-button" onClick={redirectHomepage}>Please click here to return to search page</button>
                </div>
            )}
        </>           
    )
}

export default AnimeList