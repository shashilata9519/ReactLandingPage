import React from 'react'
import logo from '../images/Logo.svg'
import '../css/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
    {/* LOGO */}
    <div className="logo"> <img src={logo} alt='logo'/> </div>
    {/* NAVIGATION MENU */}
    <ul className="nav-links">
      {/* USING CHECKBOX HACK */}
      <input type="checkbox" id="checkbox_toggle" />
      <label htmlFor="checkbox_toggle" className="hamburger">
      &#9776;
      </label>
      {/* NAVIGATION MENUS */}
      <div className="menu">
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Testimonials</a>
        </li>
        <li>
          <a href="/">Help</a>
        </li>
        <li className='signin'>
          Sign in
        </li>
        <li className='signup'>
        Sign Up
        </li>
      </div>
      
    </ul>
  </nav>
  
  )
}

export default Navbar