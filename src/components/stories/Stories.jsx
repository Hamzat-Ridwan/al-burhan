import React from 'react'
import Pic1 from '../../assets/pic1.svg'
import Pic2 from '../../assets/pic2.svg'
import Pic3 from '../../assets/pic3.svg'
import './Stories.css'

const Stories = () => {
  return (
    <div className='stories'>
        <h3>Read Latest Stories</h3>
        <div className='story'>
            <div className='item'>
                <img src={Pic1} alt='img' />
                <p>Muslims breaking the silence on Domestic Violence</p>
            </div>
            <div className='item'>
                <img src={Pic2} alt='img' />
                <p>Why are people converting to Islam nowadays?</p>
            </div>
            <div className='item'>
                <img src={Pic3} alt='img' />
                <p>Hijab-wearing Muslim Senator gives emotional first speech</p>
            </div>
        </div>
    </div>
  )
}

export default Stories