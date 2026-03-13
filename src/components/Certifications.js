import React from 'react';

const certifications = [
  {
    title: 'Python for Data Science',
    issuer: 'IBM SkillsBuild',
    category: 'Programming',
    description:
      'Industry-aligned training covering Python fundamentals, data structures, statistical analysis and visualization for analytics applications.',
    link: null,
  },
  {
    title: 'Python for Data Science & AI',
    issuer: 'Microsoft',
    category: 'Programming',
    description:
      'Python analytics workflows, data handling and an introduction to AI techniques used in modern business environments.',
    link: null,
  },
  {
    title: 'Intermediate SQL',
    issuer: 'DataCamp',
    category: 'Data Analytics',
    description:
      'Hands-on experience with SQL joins, aggregation, sub-queries, filtering and real-world analytical database scenarios.',
    link: null,
  },
];

const categoryStyle = {
  'Data Analytics': { bg: 'rgba(0,201,167,0.1)', color: '#00c9a7', border: 'rgba(0,201,167,0.2)' },
  'Programming':    { bg: 'rgba(61,107,255,0.1)', color: 'var(--accent-soft)', border: 'rgba(61,107,255,0.2)' },
};

const Certifications = () => {
  return (
    <section id="certifications" className="section section-middle">
      <div className="container">

        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title" data-aos="fade-up">Certifications &amp; Training</h2>
            <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
              Verified learning programs and industry-recognised certifications that strengthen
              my data analytics foundation.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {certifications.map((cert, i) => (
            <div key={i} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={i * 120}>
              <div
                className="certification-item h-100 d-flex flex-column"
                style={{ height: '100%' }}
              >
                {/* Top */}
                <div className="d-flex justify-content-between align-items-start mb-2 gap-2">
                  <h5 className="certification-title mb-0">{cert.title}</h5>
                  <span
                    className="badge flex-shrink-0"
                    style={{
                      background: categoryStyle[cert.category]?.bg || 'rgba(61,107,255,0.1)',
                      color: categoryStyle[cert.category]?.color || 'var(--accent-soft)',
                      border: `1px solid ${categoryStyle[cert.category]?.border || 'rgba(61,107,255,0.2)'}`,
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.6rem',
                    }}
                  >
                    {cert.category}
                  </span>
                </div>

                <p className="certification-issuer mb-2">
                  <i className="fas fa-building me-1"></i> {cert.issuer}
                </p>

                <p className="mb-0 mt-1" style={{ fontSize: '0.85rem', lineHeight: 1.75, flex: 1 }}>
                  {cert.description}
                </p>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm mt-3 align-self-start"
                  >
                    <i className="fas fa-external-link-alt me-1"></i>View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
