import React from 'react'
import { Link } from 'react-router-dom'
import './style/HeaderNav.css'

const HeaderNav = () => {
  return (
    <header className='header__container'>
        <h1 className='header__title'><Link className='header__title' to='/'>e-commerce</Link></h1>
        <nav className='header__nav'>
            <ul className='header__ul'>
                <li className='header__li'><Link className='header__link' to="/register">Register</Link></li>
                <li className='header__li'><Link className='header__link' to="/login">Login</Link></li>
                <li className='header__li'><Link className='header__link' to="/cart"><i className='bx bxs-cart'></i></Link></li>
                <li className='header__li'><Link className='header__link' to="/purchases">Purchases</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderNav