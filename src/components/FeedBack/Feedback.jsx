import React, { Component } from "react";
import './feedback.css';

const Feedback = ({}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  
    alert('Form submitted');
  };

  return (

      <div className="container">
        <div className="contact-content">
          <div className="contact-container">
            <h1>FeedBack</h1>
            <p>
             Add your feedback and suggestions here.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your Message" required />
              </div>
              <button type="submit">Submit</button>
            </form>
            <div className="contact-info">
              <p>Email: <a href="mailto:info@test.com">info@test.com</a></p>
              <p>Phone: +994 (123)-456-78-90</p>
              <p>Address: Baku, Azerbaijan</p>
            </div>
          </div>
          <div className="image-container">
            <img className='image2'
              src="https://cdn-icons-png.flaticon.com/256/5336/5336375.png"
              alt="Business Statistics"
          
            />
          </div>
        </div>
      </div>
    
  );
};

export default Feedback;
