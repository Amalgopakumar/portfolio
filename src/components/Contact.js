import React from 'react';

const contactItems = [
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'amalgopakumar5@gmail.com',
    href: 'mailto:amalgopakumar5@gmail.com',
  },
  {
    icon: 'fas fa-phone',
    label: 'Phone',
    value: '+91 77368 99481',
    href: 'tel:+917736899481',
  },
  {
    icon: 'fas fa-map-marker-alt',
    label: 'Location',
    value: 'Palakkad, Kerala, India',
    href: null,
  },
  {
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
    value: 'amal-gopakumar',
    href: 'https://www.linkedin.com/in/amal-gopakumar/',
  },
  {
    icon: 'fab fa-github',
    label: 'GitHub',
    value: 'Amalgopakumar',
    href: 'https://github.com/Amalgopakumar',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Title */}
        <div className="row">
          <div className="col-lg-12 text-center">
            <span className="section-label">Let's Connect</span>
            <h2 className="section-title text-white" data-aos="fade-up">
              Get In Touch
            </h2>
          </div>
        </div>

        {/* Subtitle */}
        <div className="row mb-5">
          <div className="col-lg-7 mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
            <p style={{ color: 'var(--dark-muted)', fontSize: '0.97rem', lineHeight: 1.85 }}>
              Whether you want to collaborate on a data project, discuss analytics,
              or explore internship and full-time opportunities — I'd love to hear from you.
            </p>
          </div>
        </div>

        {/* Contact cards */}
        <div className="row">
          <div className="col-lg-7 mx-auto" data-aos="fade-up" data-aos-delay="200">
            {contactItems.map((item, i) => (
              item.href ? (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-item text-decoration-none"
                >
                  <i className={item.icon}></i>
                  <div>
                    <h5>{item.label}</h5>
                    <p>{item.value}</p>
                  </div>
                  <i className="fas fa-arrow-right ms-auto" style={{ color: 'var(--dark-border)', fontSize: '0.8rem' }}></i>
                </a>
              ) : (
                <div key={i} className="contact-item">
                  <i className={item.icon}></i>
                  <div>
                    <h5>{item.label}</h5>
                    <p>{item.value}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="row mt-5">
          <div className="col-lg-12 text-center" data-aos="fade-up" data-aos-delay="350">
            <h4
              className="mb-3 text-white"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Open to Opportunities
            </h4>
            <p className="mb-4" style={{ color: 'var(--dark-muted)', fontSize: '0.9rem' }}>
              Internships · Freelance Projects · Full-time Roles · Collaborations
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="mailto:amalgopakumar5@gmail.com" className="btn btn-primary btn-lg">
                <i className="fas fa-envelope me-2"></i>Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/amal-gopakumar/"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg"
              >
                <i className="fab fa-linkedin me-2"></i>LinkedIn
              </a>
              <a
                href="https://github.com/Amalgopakumar"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg"
              >
                <i className="fab fa-github me-2"></i>GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="row mt-5 pt-3" style={{ borderTop: '1px solid var(--dark-border)' }}>
          <div className="col-lg-12 text-center">
            <p style={{ color: 'var(--dark-muted)', fontSize: '0.82rem', margin: 0 }}>
              © 2025 Amal Gopakumar · Built with React &amp; Bootstrap
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
