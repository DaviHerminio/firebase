import React from 'react'
import logo from '../images/logo.jpg'

const Header = () => {
  return (
    <nav>
        <div className="container">
            <a className='navigation-brand' href="/">
                <img className='logo' src={logo} alt="Staart" />
            </a>
        </div>
    </nav>
  )
}

export default Header