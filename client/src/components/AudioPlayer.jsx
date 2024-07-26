import React from 'react'
import { useState, useEffect, useRef } from 'react'
import song from '../../public/Rubia.mp3'

const AudioPlayer = () => {
    const songRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(true)

    const Toggle = () => {
        const song = songRef.current
        song.volume = .1
        if(isPlaying) {
            song.play()
        }
        else {
            song.pause()
        }
        setIsPlaying(!isPlaying)
    }

    return (
        <div>
            <div>
                <audio ref={songRef} loop>
                    <source src={song} type="audio/mp3"/>
                    Audio element is not supported.
                </audio>
            </div>
            <button onClick={Toggle}>
                { isPlaying ? "Play" : "Pause" }
            </button>
        </div>
    )
}

export default AudioPlayer