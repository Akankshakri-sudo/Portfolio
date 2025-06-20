import React from 'react'
import './Hero.css'
import profile_img from '../../assets/mypic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm a Akanksha Kumari,</span> <br />a passionate Frontend developer</h1>
        <p>I design and develop engaging web applications, solve challenging coding problems, and continuously learning new technologies to enhance my skills.</p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
          <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero