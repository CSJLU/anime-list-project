import React from 'react'
import Header from './Header'
import './Header.css'
import './SignUp.css'

const SignUp = () => {
    return (
        <div>
            <Header />
            <div className="background-container">
                <div className="sign-up-card">
                    <form>
                        <h1 className="sign-up-text">Sign Up</h1>
                        <div className="sign-up-input">
                            <input
                                type="text"
                                placeholder="Search for an anime"
                            />
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp