import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {ReactComponent as Menu} from '../../assets/menu.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Logo />
            <span>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </span>
        <Menu className='menu' />
    </nav>
  )
}

export default Navbar