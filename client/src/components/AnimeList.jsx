import React from 'react'
import { useState, useEffect} from 'react' 

const AnimeList = () => {
    const [animeData, setAnimeData] = useState({})

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/anime')
        .then(response => response.json())
        .then(data => setAnimeData(data))
        .catch(error => console.error(error));
    }, []);
    
    console.log(animeData);

    if (!animeData.data) {
        return <div>No anime data available</div>;
    }
    
    return (
        <div>
            <h1>Test</h1>
            <h1> {animeData.data.title} </h1>
            <h1> {animeData.data.synopsis} </h1>
        </div>
    )
}

export default AnimeList