import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import {  Typewriter} from 'react-simple-typewriter';
import intropic from '../img/intro.png';


const Intro = () => {
  
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span> 
            <span className='name'>I'm  <span className='fullname'>Bikram Kumal</span> </span> 
            <span className='intro-abut'>
              <Typewriter
              words={['Programmer','Web Designer','Developer','UI / UX Designer']}
              loop={0}
              cursor
              cursorStyle = ' | '
              typeSpeed={134.4}
              />    
            </span> 


                          
            <Link><button className='cv'>Download CV</button></Link>

        </div>

        <div className="intropic">
          <img src={intropic} alt=""  className='introp'/>
        </div>
      
    </section>
  )

}

export default Intro