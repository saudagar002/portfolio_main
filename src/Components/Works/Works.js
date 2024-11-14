import React from 'react'
import './Works.css'
import Portfolio1 from './../../Assects/portfolio1.png'
import Portfolio2 from './../../Assects/portfolio2.webp'
import Portfolio3 from './../../Assects/portfolio3.jpg'
import Portfolio4 from './../../Assects/portfolio4.jpg'
import Portfolio5 from './../../Assects/portfolio5.jpg'
import Portfolio6 from './../../Assects/portfolio6.jpg'

function Works() {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smmallest details and </span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt='Portfolio1' className='worksImg'/>
            <img src={Portfolio2} alt='Portfolio2' className='worksImg'/>
            <img src={Portfolio3} alt='Portfolio3' className='worksImg'/>
            <img src={Portfolio4} alt='Portfolio4' className='worksImg'/>
            <img src={Portfolio5} alt='Portfolio5' className='worksImg'/>
            <img src={Portfolio6} alt='Portfolio6' className='worksImg'/>
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works