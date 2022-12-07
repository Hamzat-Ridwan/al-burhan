import React from 'react'
import { ReactComponent as Multiply } from '../../assets/multiply.svg'
import { Link } from 'react-router-dom'
import './Navdown.css'

const Navdown = ({setNavdown}) => {

  return (
    <div className='navdown'>
        <Multiply className='close' onClick={()=> setNavdown()} />
        <div className='first'>
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>Prayer Time</Link></li>
                <li><Link>Videos</Link></li>
                <li><Link>Welfare</Link></li>
                <li><Link>Donation</Link></li>
                <li><Link>Contact Us</Link></li>
            </ul>
            <ul>
                <li><Link>About Us</Link></li>
                <li><Link>Gallery</Link></li>
                <li><Link>Audios</Link></li>
                <li><Link>Livestream</Link></li>
                <li><Link>Ask a Shaykh</Link></li>
                <li><Link>Sign Up</Link></li>
            </ul>
        </div>
        <div className='second'>
            <ul>
                <li><Link>News</Link></li>
                <li><Link>Articles</Link></li>
                <li><Link>Library</Link></li>
                <li><Link>Kids Zone</Link></li>
                <li><Link>Meet our Team</Link></li>
            </ul>
            <ul>
                <li><Link>Mission</Link></li>
                <li><Link>Vision</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navdown