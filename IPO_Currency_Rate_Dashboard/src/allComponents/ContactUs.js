import React from 'react';
import { useState } from 'react';

function ContactUs() {
  const [data, setData] = useState("");
  const [response, setResponse] = useState("");

  const handleSendMessage = () => {
    setResponse("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <section className="contact-section mb-4">
      <div style={{ backgroundColor: '#4caf50', padding: '30px 0', color: '#fff', textAlign: 'center' }}>
        <h1>Get in Touch</h1>
        <p>Feel free to contact us with any questions or concerns. Our team is here to help!</p>
      </div>
      <br />

      <div className="row">
        <div className="col-md-8 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="mail.php" method="POST">
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input type="text" id="name" name="name" value={data} className="form-control" onChange={(e) => setData(e.target.value)} />
                  <label htmlFor="name" className="">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input type="email" id="email" name="email" className="form-control" />
                  <label htmlFor="email" className="">Your Email</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input type="text" id="subject" name="subject" className="form-control" />
                  <label htmlFor="subject" className="">Subject</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea type="text" id="message" name="message" rows="4" className="form-control md-textarea"></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>
              </div>
            </div>
          </form>

          <div className="text-center text-md-left">
            <button className="btn btn-success" onClick={handleSendMessage}>Send Message</button>
          </div>
        </div>

        <div className="col-md-4 text-center">
          <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x"></i>
              <p>123 Main Street, Cityville, USA</p>
            </li>
            <li><i className="fas fa-phone mt-4 fa-2x"></i>
              <p>+1 (555) 123-4567</p>
            </li>
            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>info@example.com</p>
            </li>
          </ul>
        </div>
      </div>

      <h2 style={{ textAlign: 'center', marginTop: '20px', color: '#4caf50' }}>{response}</h2>
    </section>
  );
}

export default ContactUs;
