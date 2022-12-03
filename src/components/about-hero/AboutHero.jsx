import React from 'react'
import { ReactComponent as Forward } from '../../assets/forward.svg'
import './AboutHero.css'

const AboutHero = () => {
  return (
    <div className='about-hero'>
        <div className='title'>
            ABOUT US
        </div>
        <div className='content'>
            <div className='top'>
                <h6>Home </h6>
                <span><Forward /></span> 
                <h6>About</h6>
            </div>
            <p>Al-Burhān Media, is a fast-rising Islamic Media organisation aimed at providing the Muslim Ummah with Optimum Islamic Media contents. In the world today, we have not less than 10,000 satellite television stations on earth with about one-third of them being religious satellite TV stations. The need to pass pristine, undiluted knowledge of Islam from the correct sources across the globe lead to the birth of Al-Burhan Media in 2018.<br/>
        Owning a wide range of media outreach, we make efforts to ensure the dissemination of pristine Islam, quality information, and vivacious knowledge in various aspects of the Deen. Using our different media platforms, we deliver daily videos of the Qur'an, regular episodes of videos from Sunni scholars; translated and transcribed in English, posting articles and translated books of scholars of Islam on our website, hosting of podcasts, attending to the welfare of Muslims around the world and breaking the bridge between scholars and their students by providing means of asking questions and scholars provide answers to them.<br/>
       We hope our media would be the first to have an HD 24/7 satellite TV channel and radio station in West Africa, which would be used in spreading pristine Islam to the grassroots and untouched/unaware part of the continent and around the globe at large.<br />
     It was initially established in 2018, but was registered and operational in 2022.
</p>
        </div>
    </div>
  )
}

export default AboutHero