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
          
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="hero-content" data-aos="fade-right">

              {/* Badge */}
              <div className="hero-badge mb-4">
                <span className="badge px-4 py-2 rounded-pill"
                  style={{
                    background: 'rgba(120, 119, 198, 0.15)',
                    color: '#7877c6',
                    border: '1px solid rgba(120, 119, 198, 0.2)',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                >
                  <i className="fas fa-chart-line me-2"></i>
                  Aspiring Data Analyst
                </span>
              </div>

              {/* Name */}
              <h1 className="hero-title mb-3">
                Hi, I'm{" "}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7877c6 0%, #ffffff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Amal Gopakumar
                </span>
              </h1>

              {/* Subtitle */}
              <h2 className="hero-subtitle mb-4">
                Turning data into insight & decisions
              </h2>

              {/* Description */}
              <p className="hero-description mb-4">
                Passionate data enthusiast skilled in SQL, Python, Power BI and Excel.
                I help uncover business insights through data cleaning, analysis, dashboards and automation. 
                Strong interest in solving real-world challenges with analytics and BI tools.
              </p>

              {/* Buttons */}
              <div className="hero-buttons">
                <button
                  className="btn btn-primary btn-lg me-3 mb-3 shadow-sm"
                  onClick={() => scrollToSection('projects')}
                >
                  <i className="fas fa-portfolio me-2"></i>
                  View My Work
                </button>

                <button
                  className="btn btn-outline-light btn-lg mb-3 shadow-sm"
                  onClick={() => scrollToSection('contact')}
                >
                  <i className="fas fa-envelope me-2"></i>
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Image + Floating Icons */}
          <div className="col-lg-6">
            <div className="hero-image text-center" data-aos="fade-left">
              <div className="profile-container position-relative">
                
                <div className="bg-gradient-primary rounded-circle mx-auto shadow-lg"
                  style={{
                    width: '280px',
                    height: '280px',
                    background: 'linear-gradient(135deg, rgba(120,119,198,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <img
                    src={${process.env.PUBLIC_URL}/images/profile.png}
                    alt="Amal Gopakumar profile"
                    className="rounded-circle"
                    style={{
                      width: '240px',
                      height: '240px',
                      objectFit: 'cover',
                      border: '3px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.2)'
                    }}
                  />
                </div>

                {/* Floating Data-Analyst Icons */}
                {[
                  { icon: "fas fa-database", top: "10%", left: "8%" },       // SQL
                  { icon: "fab fa-python", top: "5%", right: "15%" },       // Python
                  { icon: "fas fa-chart-bar", bottom: "20%", left: "8%" },  // Visualization
                  { icon: "fas fa-table", top: "65%", right: "8%" },        // Excel / Tables
                  { icon: "fas fa-chart-pie", bottom: "10%", right: "10%" }, // BI/Analytics
                  { icon: "fas fa-file-excel", top: "40%", left: "2%" },   // Power BI / Excel
                  { icon: "fas fa-project-diagram", top: "80%", left: "20%" } // Projects
                ].map((item, i) => (
                  <div key={i}
                    className="position-absolute rounded-3 p-3"
                    style={{
                      ...item,
                      animation: `float ${6 + i}s ease-in-out infinite`,
                      background: 'rgba(120, 119, 198, 0.15)',
                      border: '1px solid rgba(120, 119, 198, 0.3)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <i className={item.icon} style={{ fontSize: '1.2rem', color: '#7877c6' }}></i>
                  </div>
                ))}
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
