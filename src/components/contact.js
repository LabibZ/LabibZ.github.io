import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { SocialIcon } from 'react-social-icons';

import './css/contact.css';

class Contact extends Component {
    render() {
        return(
            <div >
                <h2>Contact Me</h2>
                <div className="contact">
                    <form className="contact-form" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number"/>
                        <label>Name</label>
                        <input type="text" name="name" class="feedback-input" placeholder="Name"/>
                        <label>Email</label>
                        <input type="email" name="email" class="feedback-input" placeholder="Email"/>
                        <label>Message</label>
                        <textarea name="message" class="feedback-input" placeholder="Message" />
                        <input type="submit" value="Send" />
                    </form>
                </div>
                <div className="icons">
                    <SocialIcon url="https://www.linkedin.com/in/labibmz/" target="_blank" network="linkedin" fgColor="white"/>
                    <SocialIcon url="https://github.com/LabibZ" target="_blank" network="github" fgColor="white"/>
                    <SocialIcon url="mailto:labibmzaman@gmail.com" target="_blank" network="email" fgColor="white"/>
                </div>
            </div>
        )

        function sendEmail(e) {
            e.preventDefault();
    
            emailjs.sendForm('gmail', 'template_x9tv22s', e.target, 'user_F03gpIMBnPNyCWwEJdbkU')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
            e.target.reset()
        }
    }
}

export default Contact;