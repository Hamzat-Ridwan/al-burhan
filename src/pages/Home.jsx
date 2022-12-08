import React from 'react'
import {motion} from 'framer-motion'
import AboutHome from '../components/about-home/AboutHome'
import Activities from '../components/activities/Activities'
import Ask from '../components/ask/Ask'
import Hero from '../components/hero/Hero'
import Programmes from '../components/programmes/Programmes'
import Stories from '../components/stories/Stories'
import Support from '../components/support/Support'
import Times from '../components/times/Times'
import Umrah from '../components/umrah/Umrah'

const Home = () => {
  return (
    <motion.div
    initial={{y: 40, opacity: 0.4}}
    animate={{ opacity: 1, y:0, transition: {duration: .3}}}
    >
        <Hero />
        <AboutHome />
        <Stories />
        <Activities />
        <Times />
        <Programmes />
        <Ask />
        <Support />
        <Umrah />
    </motion.div>
  )
}

export default Home