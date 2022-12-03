import React from 'react'
import AboutHome from '../components/about-home/AboutHome'
import Activities from '../components/activities/Activities'
import Stories from '../components/stories/Stories'

const Home = () => {
  return (
    <div>
        <AboutHome />
        <Stories />
        <Activities />
    </div>
  )
}

export default Home