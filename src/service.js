  import React, { useState } from 'react';

  import './service.css';
  function Service() {
      const [toggleState, setToggleState]= useState(0);
      const toggleTab = (index) => {
        setToggleState(index);

        // const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        if (index !== 0) {
          document.body.style.overflow = 'hidden';
          if (window.innerWidth > 1499) {
            document.body.style.paddingRight = `16px`;
          }
          else if (window.innerWidth > 800) {
            document.body.style.paddingRight = `2px`;
          }

        }
        else{
          document.body.style.overflow = '';
          document.body.style.paddingRight = '';
        }
      }
    return (
      <section id='service'>
          <h1 className='service-header'>Service &nbsp; <span>🔧</span></h1>

          <div className="service_container grid container">
            <div className="service_content">
              <div>
                <i className="uil uil-web-grid service_icon"></i>
                <h3 className='service_title'>Web <br /> Design</h3>
              </div>
              <span className="service_button" onClick={() => 
                toggleTab(1)
              }>
                View More 
                <i className="uil uil-arrow-right service_button_icon"></i>
              </span>

              <div className={toggleState ===1 ? "service_modal active-modal " : "service_modal"} >
                <div className="service_modal_content">
                  <i onClick={() => toggleTab(0)} className="uil uil-times services_modal_close"></i>
                  <h3 className="service_modal_title">Web Design</h3>
                  <p className="service_modal_description">Create visually appealing, user-focused websites that enhance brand identity and user experience.</p>
                  <ul className="service_modal_service grid">
                    
                  <li className="service_modal_list">
                      <i className="uil uil-check-circle service_modal_icon"></i>
                      <p className="service_modal_info">Custom Website Design.</p>
                    </li>

                    <li className="service_modal_list">
                      <i className="uil uil-check-circle service_modal_icon"></i>
                      <p className="service_modal_info">UI/UX Design.</p>
                    </li>

                    <li className="service_modal_list">
                      <i className="uil uil-check-circle service_modal_icon"></i>
                      <p className="service_modal_info">Landing Page Design.</p>
                    </li>

                    <li className="service_modal_list">
                      <i className="uil uil-check-circle service_modal_icon"></i>
                      <p className="service_modal_info">Website Redesign.</p>
                    </li>

                    <li className="service_modal_list">
                      <i className="uil uil-check-circle service_modal_icon"></i>
                      <p className="service_modal_info">Graphic Design & Branding.</p>
                    </li>
                    
                  </ul>
                </div>
              </div>

            </div>


            {/*  */}
            
            <div className="service_content">
              <div>
                <i className="uil uil-arrow service_icon"></i>
                <h3 className='service_title'>Web <br /> Development</h3>
              </div>
              <span className="service_button" onClick={() => 
                toggleTab(2) 
                }>View More 
                <i className="uil uil-arrow-right service_button_icon"></i>
              </span>

              <div className={toggleState ===2 ? "service_modal active-modal " : "service_modal"}>
                <div className="service_modal_content">
                  <i onClick={() => toggleTab(0)} className="uil uil-times services_modal_close"></i>
                  <h3 className="service_modal_title">Web Development</h3>
                  <p className="service_modal_description">Build dynamic, secure, and scalable websites with both front-end and back-end development.</p>
                  <ul className="service_modal_service grid">

                    <li className="service_modal_list">
                      <i className="uil uil-check-circle service_modal_icon"></i>
                      <p className="service_modal_info">Front-End Development.</p>
                    </li>

                    <li className="service_modal_list">
                      <i className="uil uil-check-circle service_modal_icon"></i>
                      <p className="service_modal_info">Back-End Development.</p>
                    </li>

                    <li className="service_modal_list">
                      <i className="uil uil-check-circle service_modal_icon"></i>
                      <p className="service_modal_info">E-commerce Development.</p>
                    </li>

                    <li className="service_modal_list">
                      <i className="uil uil-check-circle service_modal_icon"></i>
                      <p className="service_modal_info">Web Performance Optimization.</p>
                    </li>

                    <li className="service_modal_list">
                      <i className="uil uil-check-circle service_modal_icon"></i>
                      <p className="service_modal_info">Website Maintenance & Support.</p>
                    </li>

                  </ul>
                </div>
              </div>

            </div>


            {/*  */}
            
            <div className="service_content">
              <div>
                <i className="uil uil-brackets-curly service_icon"></i> 
                <h3 className='service_title'>Java <br /> Development</h3>
              </div>
              <span className="service_button" onClick={() => 
                toggleTab(3)
              }>View More 
                <i className="uil uil-arrow-right service_button_icon"></i>
              </span>

              <div className={toggleState ===3 ? "service_modal active-modal " : "service_modal"}>
                <div className="service_modal_content">
                  <i onClick={() => toggleTab(0)} className="uil uil-times services_modal_close"></i>
                  <h3 className="service_modal_title">Java Development</h3>
                  <p className="service_modal_description">Develop robust Java applications for custom and enterprise solutions.</p>
                  <ul className="service_modal_service grid">

                  <li className="service_modal_list">
                      <i className="uil uil-check-circle service_modal_icon"></i>
                      <p className="service_modal_info">Custom Java Application Development.</p>
                    </li>

                    <li className="service_modal_list">
                      <i className="uil uil-check-circle service_modal_icon"></i>
                      <p className="service_modal_info">Java Web Application Development.</p>
                    </li>

                    <li className="service_modal_list">
                      <i className="uil uil-check-circle service_modal_icon"></i>
                      <p className="service_modal_info">Java API Development.</p>
                    </li>

                    <li className="service_modal_list">
                      <i className="uil uil-check-circle service_modal_icon"></i>
                      <p className="service_modal_info">Java Database Solutions.</p>
                    </li>

                    <li className="service_modal_list">
                      <i className="uil uil-check-circle service_modal_icon"></i>
                      <p className="service_modal_info">Java Application Maintenance.</p>
                    </li>

                  </ul>
                </div>
              </div>

            </div>


          </div>
      </section>
    )
  }

  export default Service;