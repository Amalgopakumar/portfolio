import React from 'react';

const About = () => {
  const highlights = [
    { icon: 'fas fa-database',    text: 'Strong foundation in SQL & relational databases' },
    { icon: 'fas fa-chart-line',  text: 'Hands-on experience building dashboards in Power BI' },
    { icon: 'fab fa-python',      text: 'Python for data cleaning, EDA & visualization' },
    { icon: 'fas fa-file-excel',  text: 'Advanced Excel — Pivot tables, VLOOKUP, Charts' },
    { icon: 'fas fa-brain',       text: 'ML fundamentals — SVM, CNN, classification models' },
    { icon: 'fas fa-robot',       text: 'Workflow automation with n8n & Dialogflow' },
  ];

  const stats = [
    { number: '4+',  label: 'Projects Delivered' },
    { number: '8+',  label: 'Dashboards & Reports' },
    { number: '9.1', label: 'CGPA (B.Tech)' },
    { number: '8m',  label: 'Internship Experience' },
  ];

  return (
    <section id="about" className="section section-middle">
      <div className="container">

        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title" data-aos="fade-up">About Me</h2>
          </div>
        </div>

        <div className="row align-items-start g-5">

          {/* Summary + Highlights */}
          <div className="col-lg-7" data-aos="fade-right">
            <span className="section-label">Who I Am</span>
            <h3 className="mb-3" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
              Aspiring Data Analyst
            </h3>
            <p className="mb-4" style={{ lineHeight: 1.9, fontSize: '0.95rem' }}>
              Final-year B.Tech student in Artificial Intelligence &amp; Data Science
              with a CGPA of <strong>9.1</strong>. Skilled in SQL, Python, Power BI and Excel,
              with practical experience in data cleaning, exploratory analysis and interactive
              dashboards. I enjoy turning messy datasets into clear, actionable business insights.
            </p>

            <div className="about-highlights">
              {highlights.map((h, i) => (
                <div key={i} className="highlight-item d-flex align-items-center" data-aos="fade-up" data-aos-delay={i * 80}>
                  <i className={`${h.icon} me-3`} style={{ color: 'var(--accent)', fontSize: '1rem', flexShrink: 0 }}></i>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="col-lg-5" data-aos="fade-left" data-aos-delay="200">
            <div className="row g-3">
              {stats.map((s, i) => (
                <div key={i} className="col-6">
                  <div className="stat-card">
                    <div className="stat-number">{s.number}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="mt-4 d-flex flex-wrap gap-2">
              <a
                href="https://github.com/Amalgopakumar"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="fab fa-github me-2"></i>GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/amal-gopakumar/"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <i className="fab fa-linkedin me-2"></i>LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Passion */}
        <div className="row mt-5">
          <div className="col-lg-10 mx-auto" data-aos="fade-up">
            <div
              className="text-center p-4 rounded-4"
              style={{
                background: 'var(--accent-subtle)',
                border: '1px solid rgba(61,107,255,0.15)',
              }}
            >
              <i className="fas fa-chart-line mb-3" style={{ fontSize: '1.8rem', color: 'var(--accent)' }}></i>
              <p className="mb-0" style={{ lineHeight: 1.9, fontSize: '0.95rem' }}>
                I love working with data to solve real-world problems — whether it's analyzing business
                performance, building predictive models, or designing automation pipelines. My goal is
                to build a career creating meaningful insights and helping organizations make smarter, data-driven decisions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
