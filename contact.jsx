import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleForm() {
    console.log('saving');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  }

  function handleChange(e) {
    let text = e.target.value;
    setName(text);
  }

  function handleEmailChange(e) {
    let text = e.target.value;
    setEmail(text);
  }

  function handleMessageChange(e) {
    let text = e.target.value;
    setMessage(text);
  }

  return (
    <div className="contact page">
      <h1>Contact Us</h1>

      <div className="form">
        <h4>Do you have something to tell us?</h4>

        <div>
          <label className="form-label">Name</label>
          <input onChange={handleChange} type="text" className="form-control" />
        </div>

        <div>
          <label className="form-label">Email</label>
          <input onChange={handleEmailChange} type="email" className="form-control" />
        </div>

        <div>
          <label className="form-label">Message</label>
          <textarea onChange={handleMessageChange} rows="3" className="form-control" />
        </div>
        <div>
          <button onClick={handleForm} className="btn btn-primary">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
