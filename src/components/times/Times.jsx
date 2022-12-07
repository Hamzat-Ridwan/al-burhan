import React from 'react'
import './Times.css'

const Times = () => {
  return (
    <div className='times'>
        <h3>Daily Prayer Times</h3>
        <p>LONDON   - <span>SATURDAY, 15TH OF SEPTEMBER 2022</span></p>
        <div className='awqaat'>
            <div className='time'>
                <p>FAJR</p>
                <h4>06:00AM</h4>
            </div>
            <div className='time'>
                <p>SUNRISE</p>
                <h4>06:32AM</h4>
            </div>
            <div className='time'>
                <p>DHUHR</p>
                <h4>01:05PM</h4>
            </div>
            <div className='time'>
                <p>ASR</p>
                <h4>04:10PM</h4>
            </div>
            <div className='time'>
                <p>MAGHRIB</p>
                <h4>07:00PM</h4>
            </div>
            <div className='time'>
                <p>ISHA</p>
                <h4>08:02PM</h4>
            </div>
        </div>
        <button>Full Timetable</button>
    </div>
  )
}

export default Times