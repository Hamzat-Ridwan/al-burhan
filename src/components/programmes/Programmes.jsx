import React from 'react'
import radio from '../../assets/radios.svg'
import podcast from '../../assets/podcast.svg'
import quote from '../../assets/quote.svg'
import './Programmes.css'

const Programmes = () => {
  return (
    <div className='programmes'>
        <h3>Al-Burhan Media Programs</h3>
        <div className='content'>
            <div className='item'>
                <img src={radio} alt="radio"/>
                <div className='con'>
                <h5>Live Tv & Radio</h5>
                <p>You can get more about our last audios recordings and even watch us lively</p>
                <button>Explore</button>
                </div>
            </div>
            <div className='item'>
                <img src={podcast} alt='podcast' />
                <div className='con'>
                <h5>Podcasts</h5>
                <p>You can get more about our last audios recordings and even watch us lively</p>
                <button>Explore</button>
                </div>
            </div>
            <div className='item'>
                <img src={quote} alt='quote' />
                <div className='con'>
                <h5>Motivational Quotes</h5>
                <p>You can get more about our last audios recordings and even watch us lively</p>
                <button>Explore</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Programmes