import React from 'react'
import './Header.css'


const Header = () => {
    return (
        <header>
            <h2 className="header-title">Anime List</h2>
            <nav>
                <ul className="nav-links">
                    <li><a href="/about">About</a></li>
                    <li><a href="/anime">Animes</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}




export default Header