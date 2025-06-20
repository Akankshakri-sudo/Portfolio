import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/mypic.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1> About Me </h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='about-sections'>
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p> Hi, I'm Akanksha, a frontend developer and CSE student, passionate about writing clean code, solving DSA problems, and building scalable web applications. </p>
                    <p>My expertise lies in JavaScript, C++, and frontend frameworks, and I'm currently working on educational tech projects and blockchain research. I believe in continuous learning and love collaborating on innovative solutions!</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                        <hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React Js</p>
                        <hr style={{width:"20%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>My SQL</p>
                        <hr style={{width:"40%"}}/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About