import React from 'react'
// import Logo from '../../assets/logo.svg'
import {ReactComponent as Logo} from '../../assets/about-logo.svg'
import './AboutHome.css'

const AboutHome = () => {
  return (
    <div className='about'>
        <div className='logo-con'>
            {/* <img src={Logo} alt='logo' /> */}
            <Logo />
        </div>
        <div className='content'>
            <h3>About Al-Burhan Media</h3>
            <p>Al-Burhan Media is a fast growing muslim organisation aimed at delivering the best islamic services to all ummah. It has one of the best satellite service. Many activities can be found on the platform including educational knowledge, news, current affairs, sports, jurisprudence and many more. With us, you can get the best information ever.</p>
            <button>Learn More</button>
        </div>
    </div>
  )
}

export default AboutHome