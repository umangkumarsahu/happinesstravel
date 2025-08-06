import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p><strong>📞 Phone:</strong> 9109135533, 9109135530</p>
      <p><strong>📧 Email:</strong> contact@happinessplans.in</p>
      <p><strong>📍 Address:</strong> 408, Apollo Premiere, Vijay Nagar, Indore, India 452011</p>
      <form id="contact-form">
        <input type="text" placeholder="Your Name" required className="input-field" />
        <input type="email" placeholder="Your Email" required className="input-field" />
        <textarea placeholder="Your Message" required className="textarea-field"></textarea>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
};

export default Contact;