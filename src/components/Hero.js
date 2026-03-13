import React from 'react';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const tools = [
    { icon: 'fas fa-database',    label: 'SQL' },
    { icon: 'fab fa-python',      label: 'Python' },
    { icon: 'fas fa-chart-bar',   label: 'Power BI' },
    { icon: 'fas fa-file-excel',  label: 'Excel' },
    { icon: 'fas fa-brain',       label: 'ML / AI' },
    { icon: 'fas fa-chart-pie',   label: 'Analytics' },
    { icon: 'fas fa-table',       label: 'EDA' },
    { icon: 'fas fa-robot',       label: 'Automation' },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: '100vh' }}>

          {/* Left — text */}
          <div className="col-lg-6 py-5">
            <div className="hero-content">

              {/* Eyebrow */}
              <div className="hero-eyebrow">
                Data Analyst · AI &amp; Data Science
              </div>

              {/* Name */}
              <h1 className="hero-title">
                Amal
                <em>Gopakumar</em>
              </h1>

              {/* Tagline */}
              <p className="hero-subtitle">
                Turning raw data into clear decisions — through dashboards, analysis and automation.
              </p>

              {/* Description */}
              <p className="hero-description mb-5">
                Final-year B.Tech student in AI &amp; Data Science with hands-on experience in
                SQL, Python, Power BI and Excel. Passionate about building insights that drive
                real business outcomes.
              </p>

              {/* CTAs */}
              <div className="d-flex flex-wrap gap-3">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => scrollTo('projects')}
                >
                  <i className="fas fa-code-branch me-2"></i>View Projects
                </button>
                <button
                  className="btn btn-outline-light btn-lg"
                  onClick={() => scrollTo('contact')}
                >
                  <i className="fas fa-envelope me-2"></i>Contact Me
                </button>
              </div>

            </div>
          </div>

          {/* Right — icon grid */}
          <div className="col-lg-6 py-5" data-aos="fade-left" data-aos-delay="200">
            <div className="position-relative">

              {/* Profile circle */}
              <div className="d-flex justify-content-center mb-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: 200, height: 200,
                    background: 'linear-gradient(135deg, rgba(61,107,255,0.15) 0%, rgba(0,201,167,0.08) 100%)',
                    border: '1.5px solid rgba(61,107,255,0.25)',
                    boxShadow: '0 0 60px rgba(61,107,255,0.12)',
                    animation: 'floating 5s ease-in-out infinite',
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/profile.png`}
                    alt="Amal Gopakumar"
                    className="rounded-circle"
                    style={{
                      width: 172, height: 172,
                      objectFit: 'cover',
                      border: '2px solid rgba(61,107,255,0.3)',
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML =
                        '<i class="fas fa-user" style="font-size:4rem;color:rgba(61,107,255,0.5)"></i>';
                    }}
                  />
                </div>
              </div>

              {/* Tool grid */}
              <div className="hero-icon-grid">
                {tools.map((t, i) => (
                  <div
                    key={i}
                    className="hero-icon"
                    style={{ animationDelay: `${i * 0.1}s` }}
                    data-aos="zoom-in"
                    data-aos-delay={300 + i * 60}
                  >
                    <i className={t.icon}></i>
                    <span>{t.label}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
