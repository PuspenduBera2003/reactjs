import React from 'react'
import logo from './images/light.png'
// import './css/Navbar.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div className='sticky-top'>
            <nav className={`navbar navbar-expand-lg bg-${props.theme} navbar-${props.theme}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} id='my_logo' alt="Logo" width="50" height="50" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{props.title}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className={`form-control me-2 bg-${props.theme}-subtle`} type="search" placeholder="Search" aria-label="Search" />
                            <button className={`btn btn-outline-${props.theme === 'light' ? 'dark' : 'light'}`} type="submit">Search</button>
                        </form>
                    </div>
                    <div className="form-check form-switch ms-auto">
                        <span className={`btn btn-outline-${props.theme === 'light' ? 'dark' : 'light'} material-symbols-outlined`} onClick={props.toggleTheme} style={{ position: 'relative', top: '0px' }}>
                            {props.theme === 'light' ? 'dark' : 'light'}_mode
                        </span>
                        {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleTheme}/> */}
                        {/* <label className={`form-check-label text-${props.theme==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Toggle Theme</label> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: "Your Title Here",
    about: "Your About Here"
}