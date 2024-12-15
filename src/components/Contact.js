import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // Status for success/error messages

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/user/contact`, formData);
      setStatus('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send the message. Please try again later.');
    }
  };

  return (
    <div id="contact" className='d-flex justify-content-center align-items-center' style={{minHeight: '100vh'}} >
    <div  className="container" >
      <h2 className="text-center justify-content-center mb-4 py-3  fs-1 fw-bolder mt-4">Get In Touch</h2>
      
      {/* Display status message */}
      {status && (
        <div className={`alert ${status.includes('successfully') ? 'alert-success' : 'alert-danger'}`}>
          {status}
        </div>
      )}

      <form onSubmit={handleSubmit} className='justify-content-center container-fluid '>
        <div className="d-flex align-items-center ">
          <div className="col-md-4 mb-3 ">
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-control text-white contact-input"
              required
            />
          </div>
          <div className="col-md-4 mb-3 ">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control contact-input"
              required
            />
          </div>
        </div>
        <div className=" ">
          <div className="col-md-12 mb-3 ">
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-control contact-textarea "
              required
            />
          </div>
        </div>
        <div className=" mb-2 bg_color">
          <div className="col-md-12 text-center ">
            <input
              className="btn btn-primary form-btn bg_color"
              type="submit"
              value="Send Message"
            />
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Contact;
