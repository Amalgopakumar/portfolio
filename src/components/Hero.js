import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className="hero-content" data-aos="fade-right">
              <div className="hero-badge mb-4">
                <span className="badge px-4 py-2 rounded-pill" style={{
                  background: 'rgba(120, 119, 198, 0.15)',
                  color: '#7877c6',
                  border: '1px solid rgba(120, 119, 198, 0.2)',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  <i className="fas fa-code me-2"></i>
                  Data Science Professional
                </span>
              </div>
              <h1 className="hero-title mb-3">
                Hi, I'm <span style={{
                  background: 'linear-gradient(135deg, #7877c6 0%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Shamnaz VH</span>
              </h1>
              <h2 className="hero-subtitle mb-4">
                <span className="typed-text">Data Analyst & Data Scientist</span>
              </h2>
              <p className="hero-description mb-4">
                Passionate about transforming data into actionable insights through 
                machine learning and advanced analytics. Specializing in predictive 
                modeling, deep learning, and business intelligence solutions.
              </p>
              

              <div className="hero-buttons">
                <button 
                  className="btn btn-primary btn-lg me-3 mb-3 shadow-sm"
                  onClick={() => scrollToSection('projects')}
                >
                  <i className="fas fa-code me-2"></i>
                  View My Work
                </button>
                <button 
                  className="btn btn-outline-light btn-lg mb-3 shadow-sm"
                  onClick={() => scrollToSection('contact')}
                >
                  <i className="fas fa-envelope me-2"></i>
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image text-center" data-aos="fade-left">
              <div className="profile-container position-relative">
                <div className="profile-background">
                  <div className="bg-gradient-primary rounded-circle mx-auto shadow-lg"
                       style={{
                         width: '280px',
                         height: '280px',
                         background: 'linear-gradient(135deg, rgba(120, 119, 198, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         position: 'relative',
                         border: '2px solid rgba(255, 255, 255, 0.1)'
                       }}>
                    <img
                      src="/images/profile.png"
                      alt="Shamnaz VH profile"
                      className="rounded-circle"
                      style={{
                        width: '240px',
                        height: '240px',
                        objectFit: 'cover',
                        border: '3px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                      }}
                    />
                  </div>
                </div>
                
                {/* Floating professional elements */}
                <div className="floating-elements">
                  {/* Python */}
                  <div className="floating-element element-1 position-absolute rounded-3 p-3"
                       style={{ 
                         top: '8%', 
                         right: '15%', 
                         animation: 'float 6s ease-in-out infinite',
                         background: 'rgba(120, 119, 198, 0.15)',
                         border: '1px solid rgba(120, 119, 198, 0.3)',
                         backdropFilter: 'blur(10px)'
                       }}>
                    <i className="fab fa-python" style={{ fontSize: '1.2rem', color: '#7877c6' }}></i>
                  </div>
                  
                  {/* Machine Learning/AI */}
                  <div className="floating-element element-2 position-absolute rounded-3 p-3"
                       style={{ 
                         bottom: '25%', 
                         left: '8%', 
                         animation: 'float 8s ease-in-out infinite reverse',
                         background: 'rgba(120, 119, 198, 0.15)',
                         border: '1px solid rgba(120, 119, 198, 0.3)',
                         backdropFilter: 'blur(10px)'
                       }}>
                    <i className="fas fa-brain" style={{ fontSize: '1.2rem', color: '#7877c6' }}></i>
                  </div>
                  
                  {/* Analytics */}
                  <div className="floating-element element-3 position-absolute rounded-3 p-3"
                       style={{ 
                         top: '65%', 
                         right: '8%', 
                         animation: 'float 7s ease-in-out infinite',
                         background: 'rgba(120, 119, 198, 0.15)',
                         border: '1px solid rgba(120, 119, 198, 0.3)',
                         backdropFilter: 'blur(10px)'
                       }}>
                    <i className="fas fa-chart-line" style={{ fontSize: '1.2rem', color: '#7877c6' }}></i>
                  </div>
                  
                  {/* SQL/Database */}
                  <div className="floating-element element-4 position-absolute rounded-3 p-3"
                       style={{ 
                         top: '15%', 
                         left: '10%', 
                         animation: 'float 9s ease-in-out infinite',
                         background: 'rgba(120, 119, 198, 0.15)',
                         border: '1px solid rgba(120, 119, 198, 0.3)',
                         backdropFilter: 'blur(10px)'
                       }}>
                    <i className="fas fa-database" style={{ fontSize: '1.2rem', color: '#7877c6' }}></i>
                  </div>
                  
                  {/* Data Visualization */}
                  <div className="floating-element element-5 position-absolute rounded-3 p-3"
                       style={{ 
                         bottom: '8%', 
                         right: '12%', 
                         animation: 'float 5s ease-in-out infinite reverse',
                         background: 'rgba(120, 119, 198, 0.15)',
                         border: '1px solid rgba(120, 119, 198, 0.3)',
                         backdropFilter: 'blur(10px)'
                       }}>
                    <i className="fas fa-chart-bar" style={{ fontSize: '1.2rem', color: '#7877c6' }}></i>
                  </div>
                  
                  {/* Statistics */}
                  <div className="floating-element element-6 position-absolute rounded-3 p-3"
                       style={{ 
                         top: '40%', 
                         left: '2%', 
                         animation: 'float 6.5s ease-in-out infinite',
                         background: 'rgba(120, 119, 198, 0.15)',
                         border: '1px solid rgba(120, 119, 198, 0.3)',
                         backdropFilter: 'blur(10px)'
                       }}>
                    <i className="fas fa-chart-pie" style={{ fontSize: '1.2rem', color: '#7877c6' }}></i>
                  </div>
                  
                  {/* Neural Network */}
                  <div className="floating-element element-7 position-absolute rounded-3 p-3"
                       style={{ 
                         top: '85%', 
                         left: '20%', 
                         animation: 'float 7.5s ease-in-out infinite reverse',
                         background: 'rgba(120, 119, 198, 0.15)',
                         border: '1px solid rgba(120, 119, 198, 0.3)',
                         backdropFilter: 'blur(10px)'
                       }}>
                    <i className="fas fa-network-wired" style={{ fontSize: '1.2rem', color: '#7877c6' }}></i>
                  </div>
                  
                  {/* Algorithm */}
                  <div className="floating-element element-8 position-absolute rounded-3 p-3"
                       style={{ 
                         top: '35%', 
                         right: '2%', 
                         animation: 'float 8.5s ease-in-out infinite',
                         background: 'rgba(120, 119, 198, 0.15)',
                         border: '1px solid rgba(120, 119, 198, 0.3)',
                         backdropFilter: 'blur(10px)'
                       }}>
                    <i className="fas fa-cogs" style={{ fontSize: '1.2rem', color: '#7877c6' }}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x" data-aos="fade-up" data-aos-delay="1000">
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;


