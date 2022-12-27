import React from 'react'
import prev from '../../assets/prev.svg'
import next from '../../assets/next.svg'
import madinah from '../../assets/madinah.svg'
import makkah from '../../assets/makkah.svg'
import haram from '../../assets/haram.svg'
import './Hero.css'
import { useState, useEffect } from 'react'

const slider = [
  {url: madinah},
  {url: makkah},
  {url: haram}
]

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== slider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === slider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(slider.length)
        }
    }

    const moveDot = index => {
      setSlideIndex(index)
    }

    useEffect(()=>{
      const interval = setInterval(()=>{
        nextSlide()
      }, 4000)
      return ()=> clearInterval(interval)
    })

  return (
    <div className='hero'>
      {slider.map((item, index)=> {
        return(
          <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"} key={index}
            style={{background: `linear-gradient(0deg, rgba(51, 51, 51, 0.6), rgba(51, 51, 51, 0.6)), url(${item.url})`}}
          >
            <h3>THE BEST SUPPLICATION ON THE DAY OF ARAFAH</h3>
            <button>Read more</button>
          </div>
        )
      })}
      <div onClick={()=> prevSlide()}>
        <img src={prev} className='prev' alt='arrow'/>
      </div>
      
      <img src={next} className='next' onClick={nextSlide} alt='arrow'/>
      <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div key={index}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
      </div>
    </div>
  )
}

export default Hero