import React from 'react';
import './about.css';
// import { Link } from 'react-scroll';
// import aboutpic from '../img/about.jpg';
import aboutpic1 from '../img/about1.jpg';
import { FaGraduationCap, FaBriefcase, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin  } from 'react-icons/fa';
import CircularProgress from './progress';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function About() {
  return (
    <section id='about'>
    {/* <h2>ABOUT</h2> */}
    <div className="about-class">
      <div className="about-img">
        <img className='aboutpic1' src={aboutpic1} alt="Bikram Kumal" />
      </div>
      {/* div 1 : Short Information */}
      <div className="short-intro">
        <h2 className='about-me'><span>✹</span> &nbsp; &nbsp; &nbsp; ABOUT ME &nbsp; &nbsp; &nbsp; <span>✹</span></h2>
        <div className="short-intro-biku" >
          <h1 className="symbol">「</h1>
          <h1 className="symbol2"> ✧</h1>
          <h2 className="name">BIKRAM KUMAL</h2>
          <p>
            I am currently studying and learning HTML, CSS, JavaScript, and Java as part of my IT course. 
            I have developed various webpages and Java projects. 
            My focus is on enhancing my skills in web development and software engineering.
          </p>
        </div>
      </div>
     
    </div>
      {/* div 2 : Experience and Education*/}
    <div className="edu-exp">
      <div className="about-edu">
        <h1>Education  &nbsp; <FaGraduationCap className='opacity-change' /></h1>
        <h3>2019 - 2021</h3>
        <h2>NEB | +2</h2>
        <p>I completed my NEB level in Science Stream successfully.</p>

        <h3>2022 - Now</h3>
        <h2>Pokhara University</h2>
        <p>Now, Studying IT at Pokhara University with strong skills.</p>
      </div>

      <div className="about-exp">
        <h1>Experience  &nbsp; <FaBriefcase className='opacity-change'/></h1>
        <h3>2022</h3>
        <h2>Portfolio Website</h2>
        <p>I made my own first <a target='_blank' href="https://oldportfolio.bikramkumal.com.np" > portfolio website.</a></p>

        <h3>2023 - Now</h3>
        <h2>Different Web Application &<br className='brin'/> Java Project</h2>
        <p>Making and testing many web application and Java projects.</p>
      </div>

    </div>

    {/* skills and more div*/}

    <div className="skills-other">
      <div className="skills">
        <h1>My Skills</h1>
        <div className="skill">
          <div>
            <CircularProgress className="circular-progress" value={82} text="82%"/>
            <h4>HTML</h4>
          </div>
          <div>
            <CircularProgress className="circular-progress" value={74} text="74%"/>
            <h4>CSS</h4>
          </div>
          <div>
            <CircularProgress className="circular-progress" value={72} text="72%"/>
            <h4>JAVASCRIPT</h4>
          </div>
          <div>
            <CircularProgress className="circular-progress" value={70} text="70%"/>
            <h4>PHP</h4>
          </div>
          <div>
            <CircularProgress className="circular-progress" value={68} text="68%"/>
            <h4>JAVA</h4>
          </div>
          <div>
            <CircularProgress className="circular-progress" value={71} text="71%"/>
            <h4>REACT</h4>
          </div>
          
        </div>
      </div>
      <div className="about-other">
        <div className="top">
          <h2>Let's connect with me...</h2>
          <a target='_blank' href="https://www.facebook.com/bikram.kumal.02"><FaFacebook/> </a>
          <a target='_blank' href="https://www.instagram.com/jaquard.bikram/"><FaInstagram/> </a>
          <a target='_blank' href="https://x.com/jaq_bk"><FaTwitter/> </a>
          <a target='_blank' href="https://github.com/bikutech44/portfolio"><FaGithub/> </a>
          <a target='_blank' href="https://www.linkedin.com/in/bikramkumal/"><FaLinkedin/> </a>
        </div>
        <div className="next">
          <p>I am also intrested in Photography. In my free time i capture photos and video. &nbsp; You can visit my photography website by <a target='_blank' href="https://www.photography.bikramkumal.com.np">clicking here.</a> </p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default About;