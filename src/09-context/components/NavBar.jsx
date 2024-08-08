import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-2">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="/">Use context</a> */}
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <NavLink
                                className={ ( { isActive } ) => `nav-link ${isActive ? 'active' : ''} ` }
                                to={ '/' }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={ ( { isActive } ) => `nav-link ${isActive ? 'active' : ''} ` }
                                to={ '/login' }
                            >
                                Login
                            </NavLink>
                            <NavLink
                                className={ ( { isActive } ) => `nav-link ${isActive ? 'active' : ''} ` }
                                to={ '/about' }
                            >
                                About
                            </NavLink>

                            {/* <li class="nav-item">
                                <a class="nav-link" href="/login">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/404">Not found</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>

        // <Link> por <a>

        // <>
        //     <Link to="/">Home</Link>
        //     <Link to="login">Login</Link>
        //     <Link to="about">About</Link>
        // </>
    )
}
