import React, {useRef} from 'react'
import "../styles/Connect.css"
import emailjs from '@emailjs/browser';

const Connect = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_drni8a6', 'template_v25xz4p', form.current, '_vcrWHIhWJ9WMirwn')
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='connect_container' id='connect'>
        <div className='connect_image'>
            <img src='https://portofolio-opal-alpha.vercel.app/static/media/contact-img.62aa99e0f3b968b5d1ce9eb047f34fc7.svg' />
        </div>
        <div className='connect'> 
            <h2 className='connect_title'>Get in touch</h2>
            <form className='connect_form' ref={form} onSubmit={sendEmail}>
                <div className='connect_formDiv'>
                    <div className='connect_inputs connect_inputs1'>
                        <input type="text" placeholder="Your / Buisness Name*" name='user_name' ></input>
                    </div>
                    <div className='connect_inputs connect_inputs1'>
                        <input type="text" placeholder="Last name"></input>
                    </div>
                    <br></br>
                    <div className='connect_inputs connect_inputs2'>
                        <input type="text" placeholder="Email Address*" name='user_email'></input>
                    </div>
                    <div className='connect_inputs connect_inputs2'>
                        <input type="text" placeholder="Phone Number"></input>
                    </div>
                    <div className="connect_message">
                        <textarea className='textArea' type="text" placeholder="Message*" name='message'></textarea>
                    </div>
                    <div className='button_contain'>
                    <button type="submit" className='connect_button'>

                        <span className='button_send'>Send</span>

                    </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Connect