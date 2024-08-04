import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css'

const Background = ({ children }) => {
    const location = useLocation();

    const getBackgroundClass = () => {
        switch (location.pathname) {
            case '/':
                return 'home-background'
            case '/about':
                return 'about-background'
            case '/animelist':
                return 'animelist-background'
            case '/login':
                return 'login-background'
            case '/signup':
                return 'signup-background'
            case '/animeinfo':
                return 'animeinfo-background'
            default:
                return 'home-background'
        }
    }

    const backgroundClass = `background-container ${getBackgroundClass()}` //first class for styles, second class to determine background image depending on route location

    return (
        <div className={backgroundClass}>
            {children}
        </div>
    )
};

export default Background;