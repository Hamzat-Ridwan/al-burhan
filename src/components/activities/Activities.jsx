import React from 'react'
import Mic from "../../assets/mic.svg"
import Book from "../../assets/book.svg"
import Welfare from "../../assets/Welfare.svg"
import History from "../../assets/history.svg"
import Quran from "../../assets/Quran.svg"
import Salah from "../../assets/Salah.svg"
import Dawah from "../../assets/dawah.svg"
import Charity from "../../assets/Charity.svg"

import './Activities.css'

const Activities = ()=> {
    return(
        <section className='activities'>
            <h3>Our Activities</h3>
            <div className='container'>
                <div className='item'>
                    <img src={Mic} alt='act' />
                    <p>Lectures</p>
                </div>
                <div className='item'>
                    <img src={Book} alt='act' />
                    <p>Education</p>
                </div>
                <div className='item'>
                    <img src={Welfare} alt='act' />
                    <p>Welfare Services</p>
                </div>
                <div className='item'>
                    <img src={History} alt='act' />
                    <p>History</p>
                </div>
                <div className='item'>
                    <img src={Quran} alt='act' />
                    <p>Quran</p>
                </div>
                <div className='item'>
                    <img src={Salah} alt='act' />
                    <p>Solah</p>
                </div>
                <div className='item'>
                    <img src={Dawah} alt='act' />
                    <p>Dawah & Outreach</p>
                </div>
                <div className='item'>
                    <img src={Charity} alt='act' />
                    <p>Charity</p>
                </div>
            </div>
        </section>
    )
}

export default Activities