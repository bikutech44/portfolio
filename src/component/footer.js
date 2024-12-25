import React from 'react';
import './footer.css';
// import logo from '../img/logo1.png';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin  } from 'react-icons/fa';



const Footer = () => {
  return (
    <section className="footer" id='footer'>
        {/* <div className="logo_name">
            <img src={logo} alt="logo" className='footer_logo' />
            <h2 className='footer_name'>Bikram Kumal</h2>
        </div> */}
        <div className="description">
            <h3>Let's Work Together!</h3>
            <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
        </div>

        <div className="social_link">
            <a target='_blank' href="https://www.facebook.com/bikram.kumal.02"><FaFacebook/> </a>
            <a target='_blank' href="https://www.instagram.com/jaquard.bikram/"><FaInstagram/> </a>
            <a target='_blank' href="https://x.com/jaq_bk"><FaTwitter/> </a>
            <a target='_blank' href="https://github.com/bikutech44/portfolio"><FaGithub/> </a>
            <a target='_blank' href="https://www.linkedin.com/in/bikramkumal/"><FaLinkedin/> </a>
        </div>

        <div className="copyright">
            <p>Copyright &copy; 2024 Bikram Kumal. &nbsp; <br /> All rights reserved.</p>
        </div>
    </section>
  )
}

export default Footer;