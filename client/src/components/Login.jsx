import React from 'react'
import Header from './Header'
import './Header.css'
import './Login.css'

const Login = () => {
    return (
        <div>
            <Header />
            <div className="background-container">
                <div className="login-card">
                    <form>
                        <h1 className="login-text">Login here</h1>
                        <div className="login-input">
                            <input
                                type="text"
                                placeholder="Search for an anime"
                            />
                        </div>
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
