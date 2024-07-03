import './contact.css';
import './../../styles/global.css';

import React from 'react';

function Contact() {
    return (
       <div className="container">
           <div className="contact">
               <h2>We will be glad to contact you</h2>
               <p>Give us your email and we will   send a message you now</p>
               <form>
                   <div className="form-input">
                       <input type="text" name="name" placeholder="Your Name" required/>
                   </div>
                   <div className="form-input">
                       <input type="email" name="email" placeholder="Your Email:"  required/>
                   </div>

                   <button type="submit">Contact Us</button>
               </form>
           </div>
       </div>
    );
}

export default Contact;
