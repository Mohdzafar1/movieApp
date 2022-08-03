import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <div className="container">
        <div className='header navbar'>
    <div className="headerLeft">
        <Link to="/" className='navbar-brand'><img src="https://download.logo.wine/logo/IMDb/IMDb-Logo.wine.png" className='header_icon'></img></Link>
        <Link to="/movies/popular" className='ms-5 text-white 'style={{textDecoration:"none"}}>Popular</Link>
        <Link to="/movies/top_rated" className='ms-3 text-white'style={{textDecoration:"none"}}>Top Rated</Link>
        <Link to="/movies/upcoming"className='ms-3 text-white'style={{textDecoration:"none"}}>Upcoming</Link>
    </div>
    </div>
    </div>
  )
}

export default Header