import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Feel free to get in touch with us. We would love to hear from you.</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
