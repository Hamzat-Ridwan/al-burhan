import React from 'react'
import {motion} from 'framer-motion'
import AboutHero from '../components/about-hero/AboutHero'
import Mission from '../components/mission/Mission'

const About = () => {
  return (
    <motion.div
    initial={{y: 40, opacity: 0.4}}
    animate={{ opacity: 1, y:0, transition: {duration: .3}}}>
        <AboutHero />
        <Mission />
    </motion.div>
  )
}

export default About