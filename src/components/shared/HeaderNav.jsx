import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style/HeaderNav.css'



const HeaderNav = () => {

  const [isDisable, setIsDisable] = useState(false)

  const handleMenu = () => {
    setIsDisable(true)
  }
  const handelExit = () => {
    setIsDisable(false)
  }

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

        <button className='headerMenu__btn' onClick={handleMenu}><i className='bx bx-menu' ></i></button>

        <div className={`hederMenu ${isDisable && "headerMenu__disable" }`}>
        <div className='headerMenu__x'><span onClick={handelExit} className='headerMenu__span-x'><i className='bx bx-x'></i></span></div>
          <ul className='HeaderMenu__ul'>
                  <li className='headerMenu__li'><Link className='headerMenu__link' onClick={handelExit} to="/register">Register</Link></li>
                  <li className='headerMenu__li'><Link className='headerMenu__link' onClick={handelExit} to="/login">Login</Link></li>
                  <li className='headerMenu__li'><Link className='headerMenu__link' onClick={handelExit} to="/cart"><i className='bx bxs-cart'></i></Link></li>
                  <li className='headerMenu__li'><Link className='headerMenu__link' onClick={handelExit} to="/purchases">Purchases</Link></li>
              </ul>
        </div>
    </header>
  )
}

export default HeaderNav