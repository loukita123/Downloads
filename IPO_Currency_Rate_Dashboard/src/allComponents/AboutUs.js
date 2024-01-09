import React from 'react';

function AboutUs() {
  return (
    <div>
      <div style={{ backgroundColor: '#ff7f50', padding: '30px 0' }}>
        <div style={{ color: '#333', textAlign: 'center' }}>
          <h1>Welcome to Our Story</h1>
          <p>Discover more about our journey and mission.</p>
          <p>Adjust the screen size to experience the responsive design.</p>
        </div>
      </div>

      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Meet Our Team</h2>

      <div className="row" style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '30px' }}>
        <div className="column">
          <div className="card">
            <div className="jane"></div>
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">Founder & CEO</p>
              <p>Passionate about making a positive impact.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button" style={{ backgroundColor: '#4caf50' }}>Get in Touch</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="mike"></div>
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Creative Director</p>
              <p>Transforming ideas into visually stunning creations.</p>
              <p>mike@example.com</p>
              <p>
                <button className="button" style={{ backgroundColor: '#2196f3' }}>Contact Us</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="john"></div>
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">UX/UI Designer</p>
              <p>Crafting seamless and enjoyable user experiences.</p>
              <p>john@example.com</p>
              <p>
                <button className="button" style={{ backgroundColor: '#e91e63' }}>Connect Now</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#607d8b', padding: '30px 0', color: '#fff', textAlign: 'center' }}>
        <h2>Join Us on Our Journey</h2>
        <p>Explore opportunities to collaborate and grow together.</p>
        <p>Follow us on social media for the latest updates!</p>
      </div>
    </div>
  );
}

export default AboutUs;
