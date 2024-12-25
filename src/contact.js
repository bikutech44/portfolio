import React, { useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';


const Contact = () => {

  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // ========= Email validation =========
  const emailValidation = () =>{
    return String(email)
    .toLocaleLowerCase()
    .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  };


  // ====================

  const handleSend = (e) =>{
    e.preventDefault() ;
    
    if(username === ""){
      setErrorMsg("Username is required!");
      setSuccessMsg("");
    }
    else if(phoneNumber === ""){
      setErrorMsg("Phone number is required!");
    }
    else if(email === ""){
      setErrorMsg("Email is required!");
    }
    else if(!emailValidation(email)){
      setErrorMsg("Give a valid email!");
    }
    else if(subject === ""){
      setErrorMsg("Subject is required!");
    }
    else if(message === ""){
      setErrorMsg("Message is required!");
    }
    else{

      sendEmail(e);
      // setSuccessMsg(`Thank you ${username}, Your Messages has been sent successfully!`);
      // setErrorMsg("");
      // setUsername("");
      // setEmail("");
      // setPhoneNumber("");
      // setSubject("");
      // setMessage("");
    }

  };

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm(
      'service_kd4ixrn',
      'template_d6kkzhu',
      e.target,
      '-pDRqMPH6-Ua3yjCL'
    )
    .then(
      res=> {
        setSuccessMsg(`Thank you ${username}, your message has been sent successfully!`);
        setErrorMsg("");
        setUsername("");
        setEmail("");
        setPhoneNumber("");
        setSubject("");
        setMessage("");
      },
      err => {
        setErrorMsg("There was an error sending the message. Please try again later.");
      }
    );
  };




  return (
    <section id='contact'>
        <h2 className="title">Contact &nbsp;  <i class="uil uil-comment-alt"></i> </h2>
        <div className="contact_section">
          <div className="contact_left-part">
            <h3 className="div_title">Talk to me</h3>
            <div className="contact_left-content">

              <div className="contact-left_">
                <i class="uil uil-envelope left_icon"></i>
                <h3>Email</h3>
                <p>bikutech44@gmail.com</p>
                <a className='contact_link' target='_blank'  href="mailto:bikutech44@gmail.com"><span>Write me <i className="uil uil-arrow-right write-me_icon"></i> </span></a>
              </div>

              <div className="contact-left_">
                <i class="uil uil-whatsapp left_icon"></i>
                <h3>Whatsapp</h3>
                <p>+977-9866312458</p>
                <a className='contact_link' target='_blank' href="https://wa.me/+9779866312458"><span>Write me <i className="uil uil-arrow-right write-me_icon"></i> </span></a>
              </div>

              <div className="contact-left_">
                <i class="uil uil-facebook-messenger left_icon"></i>
                <h3>Messenger</h3>
                <p>m.me/bikram.kumal.02</p>
                <a className='contact_link' target='_blank' href="https://m.me/bikram.kumal.02"><span>Write me <i className="uil uil-arrow-right write-me_icon"></i> </span></a>
              </div>

            </div>
          </div>
          <div className="contact_right-part">
            <h3 className="div_title div_title-right">Send message to me</h3>
              <div className="contact-form">

                <form onSubmit={handleSend} autoComplete='off' className='contact_form_right'>

                  {/* name and phone */}
                  <div className="name-phone">
                    <div className="contact_name contact_for_div">
                      <label className='contact_form-tag' htmlFor="">Full Name</label>
                      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name='name' className='contact_form-input' placeholder='Enter your name'/>
                    </div>
                    <div className="contact_phone contact_form_div">
                      <label className='contact_form-tag' htmlFor="">Phone Number</label>
                      <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}  name='number' className='contact_form-input contact_number' placeholder='Enter your phone number' />
                    </div>
                  </div>

                  <div className="contact_form_div">
                    <label className='contact_form-tag' htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' className='contact_form-input' placeholder='Enter your email'/>
                  </div>
                  
                  <div className="contact_form_div">
                    <label className='contact_form-tag' htmlFor="">Subject</label>
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} name='subject' className='contact_form-input' placeholder='Subject'/>
                  </div>

                  <div className="contact_form_div">
                    <label className='contact_form-tag' htmlFor="">Message</label>
                    <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} className='contact_form-input message_input' placeholder='Enter your message here...'></textarea>
                  </div>

                  <div className="displayMsg">
                    {
                      errMsg && (
                        <p className='err_msg'>
                          {errMsg}
                        </p>
                      )
                    }
                    {
                      successMsg && (
                        <p className='suc_msg'>
                          {successMsg}
                        </p>
                      )
                    }
                  </div>

                  <div className="contact_button">
                    <button type='submit' className='button'>Send Message &nbsp; <i class="uil uil-message send_icon"></i></button>
                  </div>


                </form>
              </div>
          </div>
        </div> 
    </section>
  )
}

export default Contact;