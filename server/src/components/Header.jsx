import React from 'react'
import './Header.css'


const Header = () => {
    return (
        <header>
            <h2 className="header-title">Anime List</h2>
            <nav>
                <ul className="nav-links">
                    <li>About</li>
                    <li>Sign Up</li>
                </ul>
            </nav>
        </header>
    )
}




export default Header