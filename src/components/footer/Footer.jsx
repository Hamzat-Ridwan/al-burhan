import React from 'react'
import { ReactComponent as Fb } from '../../assets/Fcbk.svg'
import { ReactComponent as Twitter } from '../../assets/Twitter.svg'
import { ReactComponent as Youtube } from '../../assets/Youtube.svg'
import { ReactComponent as Instagram } from '../../assets/Instagram.svg'
import { ReactComponent as Linkedin } from '../../assets/Linkedin.svg'
import { ReactComponent as Telegram } from '../../assets/Telegram.svg'
import { Link } from 'react-router-dom'
import Logo from '../../assets/footer-logo.svg'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <h4>Subscribe To Newsletter</h4>
      <p>By subscribing to our newsletter, you will get every latest update and offers from Al-Burhan Media. Stay tuned with us </p>
      <div className='enter-mail'>
        <input type='email' placeholder='Enter email address' />
        <button>Submit Here</button>
      </div>
      <div className='box'>
        <div className='logo-con'>
          <img src={Logo} alt='logo' />
          <p>Al-Burhān Media is a fast growing Muslim Media Network aimed at delivering authentic Islamic values, principles and knowledge with world-class contents to the whole Muslim Ummah.</p>
        </div>
        <div className='links-con'>
          <div >
            <h5>Quick Links</h5>
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Gallery</Link>
            <Link>Articles</Link>
            <Link>Live Stream</Link>
          </div>
          <div>
            <h5>Articles</h5>
            <Link>Aqeedah</Link>
            <Link>Education</Link>
            <Link>History</Link>
            <Link>Fiqh</Link>
            <Link>Quran</Link>
          </div>
          <div>
            <h5>Company</h5>
            <Link>Programs</Link>
            <Link>Policy</Link>
            <Link>FAQs</Link>
            <Link>Support Us</Link>
            <Link>Contact Us</Link>
          </div>
        </div>
      </div>
      <div className='socials'>
        <Fb />
        <Instagram />
        <Twitter />
        <Telegram />
        <Youtube />
        <Linkedin />
      </div>
      <hr/>
      <p>@Copyright 2022 Al-Burhān Media. All Rights Reserved. Terms of service</p>
    </div>
  )
}

export default Footer