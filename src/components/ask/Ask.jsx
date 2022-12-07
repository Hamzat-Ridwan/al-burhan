import React from 'react'
import Ques from '../../assets/ask.svg'
import './Ask.css'
 
const Ask = () => {
  return (
    <div className='ask' >
        <div className='content'>
            <h3>Are You In Doubt Of Anything? <br />
Then Ask The Scholar</h3>
            <p>In case there is any questions you are in doubt of knowing the answer. You can ask a sheikh an answer. Our islamic scholars are the best when it comes to answering questions related to Islamic Affairs.</p>
            <button>Ask The Scholars</button>
        </div>
        <div>
            <img src={Ques} alt='question' />
        </div>
    </div>
  )
}

export default Ask