import React from 'react'
import Kabah from '../..//assets/kabah.svg'
import './Umrah.css'

const Umrah = () => {
  return (
    <div className='umrah'>
        <div>
            <img src={Kabah} alt='kabah' />
        </div>
        <div className='content'>
            <h3>Learn Correctly How To Perform Umrah</h3>
            <p>Umrah is just not anywhere you go to without knowing the rules and regulations. It happens during Ramadan and Hajj periods. Muslim make sure they know the terms attached to it well. So, while not master the things to know before embarking on the journey.</p>
            <button>Read More</button>
        </div>
    </div>
  )
}

export default Umrah