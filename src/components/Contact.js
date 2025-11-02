import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section" style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>

      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.05) 0%, transparent 50%)
        `,
        backgroundSize: 'cover'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title text-white" data-aos="fade-up" style={{
              fontSize: '2.8rem', fontWeight: '700', marginBottom: '3.5rem'
            }}>
              Get In Touch
            </h2>
            <p className="text-center text-white mb-5" data-aos="fade-up" data-aos-delay="200" style={{
              fontSize: '1.15rem', opacity: '0.75', lineHeight: '1.7', maxWidth: '80%', margin: '0 auto'
            }}>
              Whether you want to collaborate on a data project, need help with analytics,
              or want to discuss insights and dashboards — feel free to reach out!
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="contact-info" data-aos="fade-up" data-aos-delay="400">
              <div className="row">

                {/* Email */}
                <div className="col-md-6 mb-4">
                  <div className="contact-item" style={cardStyle}>
                    <i className="fas fa-envelope" style={iconStyle}></i>
                    <div>
                      <h5 style={titleStyle}>Email</h5>
                      <p style={textStyle}>amalgopakumar@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="col-md-6 mb-4">
                  <div className="contact-item" style={cardStyle}>
                    <i className="fas fa-phone" style={iconStyle}></i>
                    <div>
                      <h5 style={titleStyle}>Phone</h5>
                      <p style={textStyle}>+91 77368 99481</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="col-md-6 mb-4">
                  <div className="contact-item" style={cardStyle}>
                    <i className="fas fa-map-marker-alt" style={iconStyle}></i>
                    <div>
                      <h5 style={titleStyle}>Location</h5>
                      <p style={textStyle}>Palakkad, Kerala, India</p>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="col-md-6 mb-4">
                  <div className="contact-item" style={cardStyle}>
                    <i className="fab fa-linkedin" style={iconStyle}></i>
                    <div>
                      <h5 style={titleStyle}>LinkedIn</h5>
                      <p style={textStyle}>
                        https://www.linkedin.com/in/amal-gopakumar/
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="row mt-5">
          <div className="col-lg-12 text-center" data-aos="fade-up" data-aos-delay="600">
            <h4 className="mb-4 text-white" style={{ fontSize: '2rem', fontWeight: '700' }}>
              Let's Work Together
            </h4>
            <p className="mb-4" style={{
              color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.1rem', lineHeight: '1.7',
              maxWidth: '70%', margin: '0 auto'
            }}>
              I'm always open to internships, freelance projects, full-time roles, and collaborations
              in data analytics, dashboard building, and business insights.
            </p>

            <div className="contact-buttons">

              {/* Email Button */}
              <a href="mailto:amalgopakumar@gmail.com" className="btn btn-lg me-3 mb-3"
                style={primaryBtnStyle}>
                <i className="fas fa-envelope me-2"></i> Send Email
              </a>

              {/* LinkedIn Button */}
              <a href="https://www.linkedin.com/in/amal-gopakumar/" target="_blank"
                rel="noopener noreferrer" className="btn btn-lg mb-3" style={outlineBtnStyle}>
                <i className="fab fa-linkedin me-2"></i> Connect on LinkedIn
              </a>

            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="row mt-5">
          <div className="col-lg-12 text-center" data-aos="fade-up" data-aos-delay="800">
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem', margin: 0 }}>
              © 2025 Portfolio. Built with React & Bootstrap.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

/* Styling Shorthands */
const cardStyle = {
  background: 'rgba(120, 119, 198, 0.15)',
  border: '1px solid rgba(120, 119, 198, 0.3)',
  borderRadius: '15px',
  padding: '1.5rem',
  backdropFilter: 'blur(10px)',
};
const iconStyle = { fontSize: '1.5rem', color: '#7877c6', marginRight: '1rem' };
const titleStyle = { marginBottom: '0.5rem', color: '#fff', fontWeight: '600' };
const textStyle = { margin: 0, color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' };
const primaryBtnStyle = {
  background: 'linear-gradient(135deg, #7877c6 0%, #4a4a4a 100%)',
  color: '#fff',
  padding: '14px 32px',
  borderRadius: '12px',
  fontWeight: 600
};
const outlineBtnStyle = {
  border: '2px solid rgba(255, 255, 255, 0.3)',
  color: '#fff',
  padding: '12px 30px',
  borderRadius: '12px',
  fontWeight: 600
};

export default Contact;
