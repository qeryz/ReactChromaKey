import React from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

  emailjs.sendForm('service_gcys9ri', 'template_p6n8bj6', e.target, 'user_9IBQRhfGnk9pMbYnOlmj6')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}

return(
    <div>
        <div><i className="far fa-envelope"></i></div>
        <div className="contact-us">
        <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div className="col">
                        <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col">
                        <input type="submit" className="btn btn-info" value="Send Message"></input>
                    </div>
                </div>
            </form>
        </div>
    </div>
)
}