import React, { useRef } from 'react'
import './Contact.css'
import Clients1 from './../../Assects/clients1.png'
import Clients2 from './../../Assects/clients2.png'
import Clients3 from './../../Assects/clients3.png'
import Clients4 from './../../Assects/clients4.png'
import Instagram from './../../Assects/instagram.png'
import Facebook from './../../Assects/facebook.png'
import LinkedIn from './../../Assects/linkedin.png'
import Youtube from './../../Assects/youtube.png'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_r0ppf7g', 'template_68glplx', form.current, 'AnD8uLRMy3OYvchpz')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Send !')
          }, (error) => {
              console.log(error.text);
          });
    };


  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My project</h1>
            <p className='clientsDesc'>
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes 
            </p>
            <div className='clientsImgs'>
                <img src={Clients1} alt='Clients1' className='clientsImg'/>
                <img src={Clients2} alt='Clients2' className='clientsImg'/>
                <img src={Clients3} alt='Clients3' className='clientsImg'/>
                <img src={Clients4} alt='Clients4' className='clientsImg'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' required placeholder='Your Name' name='your_name' />
                <input type='email' className='email' required placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' required rows="5" placeholder='Your Message' />
                <button type='submit' value="Send" className='submitBtn' >Submit</button>
            </form>
            <div className='links'>
                <a href='https://instagram.com/_mr._r_j_?igshid=OGQ5ZDc2ODk2ZA=='><img src={Instagram} alt='Instagram' className='link' /></a>
                <img src={Facebook} alt='Facebook' className='link' />
                <img src={LinkedIn} alt='LinkedIn' className='link' />
                <img src={Youtube} alt='Youtube' className='link' />
            </div>
        </div>
    </section>
  )
}

export default Contact