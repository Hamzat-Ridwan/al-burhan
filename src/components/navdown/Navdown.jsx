import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { ReactComponent as Multiply } from '../../assets/multiply.svg'
import { Link } from 'react-router-dom'
import './Navdown.css'

const Navdown = ({toggle}) => {

  return (
    <AnimatePresence>
    <motion.div className='navdown'
        key='ani'
        initial={{y: '100vh',}}
        animate={{ y:0, transition: {duration: .4, type: 'spring'}}}
        // exit={{y: '-100vh', transition: {duration: .4, type: 'spring'}}}
        exit={{ opacity: 0, transition: {duration: .9}}}
    >
        <Multiply className='close' onClick={()=> toggle()} />
        <div className='first'>
            <ul>
                <li><Link to='/' onClick={()=> toggle()}>Home</Link></li>
                <li><Link>Prayer Time</Link></li>
                <li><Link>Videos</Link></li>
                <li><Link>Welfare</Link></li>
                <li><Link>Donation</Link></li>
                <li><Link>Contact Us</Link></li>
            </ul>
            <ul>
                <li><Link to='/about' onClick={()=> setNavdown()}>About Us</Link></li>
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
    </motion.div>
    </AnimatePresence>
  )
}

export default Navdown