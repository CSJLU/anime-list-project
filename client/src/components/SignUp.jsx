import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import signUpImage from '../assets/lay.jpg'
import Header from './Header'
import "./SignUp.css"

const SignUp = () => {
    return (
        <div>
            <div className="signup-container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign Up</h2>
                        <form method="POST">
                            <div className="form-group">
                                <FontAwesomeIcon icon={faUser}/>
                                <label htmlFor="username"></label>
                                <input type="text" name="username" placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faLock}/>
                                <label htmlFor="password"></label>
                                <input type="text" name="password" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faKey}/>
                                <label htmlFor="confirm-password"></label>
                                <input type="text" name="confirm-password" placeholder="Confirm Password"/>
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <label htmlFor="email"></label>
                                <input type="text" name="email" placeholder="Email"/>
                            </div>
                            <button className="register-button" type="submit">Register</button>
                        </form>
                    </div>
                    <div className="signup-image-container">
                        <img src={signUpImage} className="signup-image" alt="Anime girl laying down"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp