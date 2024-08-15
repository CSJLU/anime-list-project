import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import signUpImage from '../assets/lay.jpg'
import backgroundImage from '../assets/background.jpeg'
import Header from './Header'
import axios from 'axios'
import "./SignUp.css"

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password != confirmPassword) {
            setError("Passwords do not match.")
        }
        else {
            setError('')
            try {
                const response = await axios.post('http://127.0.0.1:5000/auth/signup', 
                {
                    username: username,
                    password: password,
                    confirmPassword: confirmPassword,
                    email: email
                })
                console.log("Sign up information sent successfully: ", response.data )
            }
            catch (error) {
                console.log("Trouble signing up: ", error)
            }
        }
    }

    return (
        <div>
            <img src={backgroundImage} className="bg-image"/>
            <div className="signup-container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign Up</h2>
                        <form method="POST" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faUser}/>
                                <label htmlFor="username"></label>
                                <input type="text" 
                                name="username" 
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faLock}/>
                                <label htmlFor="password"></label>
                                <input type="text" 
                                name="password" 
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faKey}/>
                                <label htmlFor="confirm-password"></label>
                                <input type="text" 
                                name="confirm-password" 
                                placeholder="Confirm Password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <label htmlFor="email"></label>
                                <input type="text" 
                                name="email" 
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                />
                            </div>
                            <button className="register-button" type="submit">Register</button>
                        </form>
                    </div>
                    {error && <div>{error}</div>}
                    <div className="signup-image-container">
                        <img src={signUpImage} className="signup-image" alt="Anime girl laying down"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp