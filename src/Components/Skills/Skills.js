import React from 'react'
import './Skills.css'
import UIDesign from './../../Assects/ui-designer.png'
import WebDesign from './../../Assects/app-design.png'
import AppDesign from './../../Assects/web-design.png'

function Skills() {
  return (
   <section id='skills'>
        <span className='skillsTitle'>What I do</span>
        <span className='skillsDesc'>I am fullstarck developer, I can build a software using java, springboot, j2ee.</span>
        <div className='skillsBars'>
            <div className='skillsBar'>
                <img src={UIDesign} alt='UIDesign' className='skillsBarImg'/>
                <div className='skillsBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is demo text, we can write here anything related to skills.</p>
                </div>
            </div>
            <div className='skillsBar'>
                <img src={WebDesign} alt='WebDesign' className='skillsBarImg'/>
                <div className='skillsBarText'>
                    <h2>Website Design</h2>
                    <p>This is demo text, we can write here anything related to skills.</p>
                </div>
            </div>
            <div className='skillsBar'>
                <img src={AppDesign} alt='AppDesign' className='skillsBarImg'/>
                <div className='skillsBarText'>
                    <h2>App Design</h2>
                    <p>This is demo text, we can write here anything related to skills.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills