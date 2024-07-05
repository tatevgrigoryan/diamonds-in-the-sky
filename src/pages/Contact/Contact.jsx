import './contact.css';
import './../../styles/global.css';
import Button from '../../components/Button/Button';
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Contact() {
  return (
    <div className="container position-relative">
      <Header />
      <div className="contact">
        <h2>We will be glad to contact you</h2>
        <p>Give us your email and we will send a message you now</p>
        <form>
          <div className="form-input">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-input">
            <input
              type="email"
              name="email"
              placeholder="Your Email:"
              required
            />
          </div>

          <Button text="Contact us" />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
