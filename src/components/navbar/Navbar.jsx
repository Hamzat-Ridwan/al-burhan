import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {ReactComponent as Menu} from '../../assets/menu.svg'
import Navdown from '../navdown/Navdown'
import './Navbar.css'

const Navbar = () => {
  const [navdown, setNavdown] = useState(false)
  const toggle=()=>{
    setNavdown(!navdown)
  }
  return (
    <>
    <nav className='navbar'>
        <Logo />
            <span>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </span>
        <Menu className='menu' onClick={()=> setNavdown(true)} />
        
    </nav>
    {
      navdown && <Navdown setNavdown={toggle} />
    }
    </>
  )
}

export default Navbar