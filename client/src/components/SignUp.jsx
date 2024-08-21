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

    const handleSubmit = async (e) => {
        e.preventDefault()
        let errorMessage = ""
        const usernameLength = username.length
        const usernameCheck = await handleUsernameCheck(username)
        const emailCheck = await handleEmailCheck(email)


        if(!validEmail(email)) {
            errorMessage = "Email format is incorrect."
        }
        else if(usernameCheck) {
            errorMessage = "Username has been taken."
        }
        else if(usernameLength <= 1) {
            errorMessage = "Username is too short."
        }
        else if(password != confirmPassword) {
            errorMessage = "Passwords do not match."
        }
        else if(emailCheck) {
            errorMessage = "Email already exists."
        }


        if(errorMessage) {
            setError(errorMessage)
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
                console.log("Sign up information sent successfully: ", response.data)
                alert("You have successfully signed up!")
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
                    {error && <div className="error-message">{error}</div>}
                    <div className="signup-image-container">
                        <img src={signUpImage} className="signup-image" alt="Anime girl laying down"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp