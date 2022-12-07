import React from 'react'
import AboutHome from '../components/about-home/AboutHome'
import Activities from '../components/activities/Activities'
import Ask from '../components/ask/Ask'
import Programmes from '../components/programmes/Programmes'
import Stories from '../components/stories/Stories'
import Support from '../components/support/Support'
import Times from '../components/times/Times'
import Umrah from '../components/umrah/Umrah'

const Home = () => {
  return (
    <div>
        <AboutHome />
        <Stories />
        <Activities />
        <Times />
        <Programmes />
        <Ask />
        <Support />
        <Umrah />
    </div>
  )
}

export default Home