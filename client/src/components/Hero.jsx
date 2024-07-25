import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className="background-container">
            <div className="card">
                <form>
                    <h1 className="hero-text">Search for your favorite animes here</h1>
                    <div className="search-input">
                        <input
                            type="search"
                            placeholder="Search for an anime"
                        />
                    </div>
                    <button>Search</button>
                </form>
            </div>
        </div>
    )
}

export default Hero