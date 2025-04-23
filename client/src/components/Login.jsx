import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import signUpImage from '../assets/lay.jpg'
import backgroundImage from '../assets/background.jpeg'
import Header from './Header'
import axios from 'axios'
import "./Login.css"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const validEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ //regex for valid email
        return emailRegex.test(email);
    }

    const handleUsernameCheck = async (username) => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/auth/checkuser',
            {
                username: username
                
            })
            return response.data.exists
        }
        catch (error) {
            console.log("Issue with username check: ", error)
            setUsernameExists(null)
        }
    }

    
    const handleEmailCheck = async (email) => {
        try {
            console.log("Email checked")
            const response = await axios.post('http://127.0.0.1:5000/auth/checkemail',
            {
                email: email
            })
            return response.data.exists
        }
        catch (error) {
            console.log("Issue with email check: ", error)
            setEmailExists(null)
        }
    }

    const handleLogin = async(e) => {
        return
    }


    return (
        <div>
            <img src={backgroundImage} className="bg-image"/>
            <div className="login-container">
                <div className="login-content">
                    <div className="login-form">
                        <h2 className="form-title">Sign Up</h2>
                        <form method="POST" onSubmit={handleLogin}>
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
                            <button className="login-button" type="submit">Login</button>
                        </form>
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <div className="login-image-container">
                        <img src={signUpImage} className="login-image" alt="Anime girl laying down"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
