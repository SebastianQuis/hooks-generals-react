import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        
        // <Link> por <a>

        <>
            <Link to="/">Home</Link>
            <Link to="login">Login</Link>
            <Link to="about">About</Link>
        </>
  
    )
}
