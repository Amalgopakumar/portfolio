import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section" style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background overlay similar to hero */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.05) 0%, transparent 50%)
        `,
        backgroundSize: 'cover'
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title text-white" data-aos="fade-up" style={{
              fontSize: '2.8rem',
              fontWeight: '700',
              letterSpacing: '-0.02em',
              marginBottom: '3.5rem'
            }}>
              Get In Touch
            </h2>
            <p className="text-center text-white mb-5" data-aos="fade-up" data-aos-delay="200" style={{
              fontSize: '1.15rem',
              opacity: '0.75',
              lineHeight: '1.7',
              maxWidth: '80%',
              margin: '0 auto'
            }}>
              Ready to collaborate on your next data science project? Let's connect and discuss 
              how we can work together to achieve your goals.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="contact-info" data-aos="fade-up" data-aos-delay="400">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="contact-item" style={{
                    background: 'rgba(120, 119, 198, 0.15)',
                    border: '1px solid rgba(120, 119, 198, 0.3)',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fas fa-envelope" style={{ 
                      fontSize: '1.5rem', 
                      color: '#7877c6',
                      marginRight: '1rem' 
                    }}></i>
                    <div>
                      <h5 style={{ 
                        marginBottom: '0.5rem', 
                        color: '#ffffff',
                        fontWeight: '600'
                      }}>Email</h5>
                      <p style={{ 
                        margin: '0', 
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.95rem'
                      }}>your.valiyakathshamnaz@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="contact-item" style={{
                    background: 'rgba(120, 119, 198, 0.15)',
                    border: '1px solid rgba(120, 119, 198, 0.3)',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fas fa-phone" style={{ 
                      fontSize: '1.5rem', 
                      color: '#7877c6',
                      marginRight: '1rem' 
                    }}></i>
                    <div>
                      <h5 style={{ 
                        marginBottom: '0.5rem', 
                        color: '#ffffff',
                        fontWeight: '600'
                      }}>Phone</h5>
                      <p style={{ 
                        margin: '0', 
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.95rem'
                      }}>+91 99610 11313</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="contact-item" style={{
                    background: 'rgba(120, 119, 198, 0.15)',
                    border: '1px solid rgba(120, 119, 198, 0.3)',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fas fa-map-marker-alt" style={{ 
                      fontSize: '1.5rem', 
                      color: '#7877c6',
                      marginRight: '1rem' 
                    }}></i>
                    <div>
                      <h5 style={{ 
                        marginBottom: '0.5rem', 
                        color: '#ffffff',
                        fontWeight: '600'
                      }}>Location</h5>
                      <p style={{ 
                        margin: '0', 
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.95rem'
                      }}>Palakkad, Kerala, India</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="contact-item" style={{
                    background: 'rgba(120, 119, 198, 0.15)',
                    border: '1px solid rgba(120, 119, 198, 0.3)',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fas fa-linkedin" style={{ 
                      fontSize: '1.5rem', 
                      color: '#7877c6',
                      marginRight: '1rem' 
                    }}></i>
                    <div>
                      <h5 style={{ 
                        marginBottom: '0.5rem', 
                        color: '#ffffff',
                        fontWeight: '600'
                      }}>LinkedIn</h5>
                      <p style={{ 
                        margin: '0', 
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.95rem'
                      }}>https://www.linkedin.com/in/shamnaz-vh-223b94362/</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-12 text-center" data-aos="fade-up" data-aos-delay="600">
            <div className="contact-cta">
              <h4 className="mb-4" style={{
                color: '#ffffff',
                fontSize: '2rem',
                fontWeight: '700',
                letterSpacing: '-0.02em'
              }}>Let's Work Together</h4>
              <p className="mb-4" style={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: '1.1rem',
                lineHeight: '1.7',
                maxWidth: '70%',
                margin: '0 auto'
              }}>
                I'm always interested in new opportunities and exciting projects. 
                Whether you need help with data analysis, machine learning solutions, 
                or want to discuss potential collaborations, feel free to reach out!
              </p>
              <div className="contact-buttons">
                <a 
                  href="mailto:your.valiyakathshamnaz@gmail.com" 
                  className="btn btn-lg me-3 mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #7877c6 0%, #4a4a4a 100%)',
                    border: 'none',
                    color: '#ffffff',
                    padding: '14px 32px',
                    borderRadius: '12px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 28px rgba(120, 119, 198, 0.25)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <i className="fas fa-envelope me-2"></i>
                  Send Email
                </a>
                <a 
                  href="https://www.linkedin.com/in/shamnaz-vh-223b94362/" 
                  className="btn btn-lg mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    color: '#ffffff',
                    background: 'transparent',
                    padding: '12px 30px',
                    borderRadius: '12px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <i className="fab fa-linkedin me-2"></i>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-12 text-center" data-aos="fade-up" data-aos-delay="800">
            <div className="footer">
              <p style={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '0.9rem',
                margin: '0'
              }}>
                © 2025 Portfolio. Built with React and Bootstrap. 
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
