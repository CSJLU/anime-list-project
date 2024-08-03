import React from 'react'
import { useState, useEffect, useContext } from 'react' 
import AnimeContext from './AnimeContext'

const AnimeList = () => { 
    const { animeData, setAnimeData } = useContext(AnimeContext)
    return (
        <div>
            {animeData.data.map(anime => (
                <div>
                    <h3>{anime.title}</h3>
                </div>
            ))}
            <a href="/animeinfo">View more</a>
        </div>
    )

}

export default AnimeList