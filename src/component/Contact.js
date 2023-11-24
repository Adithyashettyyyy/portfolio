import "../css/Contact.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Loader  from '../component/Loader.js';
const Contact=()=> {
    const [isLoading,setIsLoading] = useState(false);

    const Load=(value)=>
    {setIsLoading(value);}


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm('service_m18vvpb', 'template_28i38xc', form.current, 'a11LBgWWHf0NZMa7D')
      .then((result) => {
          alert(result.text);
          setIsLoading(false);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
      <>
          <div>
              <h1>REACH OUT TO ME</h1>
          </div>
          <div className="container">
              <h1>Contact Me</h1>
              <form ref={form} onSubmit={sendEmail}>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="your_name" required />

                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="your_email" required />

                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" rows="4" required></textarea>
                  {
                    isLoading?
                    <Loader/>
                    :
                 

                  <button type="submit" value='send' onSubmit={()=>Load(false)}>Send Message</button>
                  }
              </form>
          </div>
      </>
  );
}

export default Contact;
