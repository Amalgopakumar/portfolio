import React from 'react';

const internships = [
  {
    title: 'Data Analyst Intern',
    company: 'IPCS GLOBAL',
    location: 'Hybrid',
    duration: 'Jun 2025 – Jul 2025',
    period: '2 Months',
    description:
      'Worked as a Data Analyst intern, performing end-to-end data analysis tasks — from data cleaning and preprocessing to exploratory analysis and dashboard reporting.',
    achievements: [
      'Cleaned, preprocessed and validated datasets using Python (Pandas, NumPy)',
      'Conducted Exploratory Data Analysis (EDA) to identify trends and anomalies',
      'Created visualizations with Seaborn and Matplotlib to communicate findings',
      'Built summary reports and insights dashboards to support business decisions',
      'Strengthened SQL querying skills for data extraction and transformation',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'SQL', 'Excel'],
    type: 'Data Analytics',
    color: 'var(--accent)',
  },
  {
    title: 'Data & Operations Intern',
    company: 'CODESRIPE',
    location: 'Hybrid',
    duration: 'Mar 2024 – Aug 2024',
    period: '6 Months',
    description:
      'Supported data operations, internal analytics and project coordination over a 6-month engagement. Assisted in data-driven decision making while helping manage Python interns and internal workflows.',
    achievements: [
      'Managed and documented internal data workflows, meetings and activity logs',
      'Assisted in data analysis tasks to support project planning and decisions',
      'Coordinated Python intern activities — defined tasks and tracked timelines',
      'Maintained structured records to improve operational transparency',
      'Built Excel-based tracking sheets and basic reporting templates',
    ],
    technologies: ['Python', 'Excel', 'SQL', 'Documentation', 'Project Tracking'],
    type: 'Data Operations',
    color: 'var(--accent-2)',
  },
];

const Internships = () => {
  return (
    <section id="internships" className="section section-middle">
      <div className="container">

        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title" data-aos="fade-up">Professional Experience</h2>
            <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
              Hands-on internship experience in data analytics, operations and Python development
              — totalling <strong>8 months</strong> across two organisations.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="timeline">
              {internships.map((item, index) => (
                <div
                  key={index}
                  className="timeline-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <div className="timeline-content">

                    {/* Header row */}
                    <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                      <div>
                        <div className="timeline-date">
                          <i className="fas fa-calendar-alt me-2"></i>
                          {item.duration}
                          <span
                            className="ms-2 badge"
                            style={{
                              background: `${item.color}18`,
                              color: item.color,
                              border: `1px solid ${item.color}33`,
                              fontSize: '0.68rem',
                            }}
                          >
                            {item.period}
                          </span>
                        </div>
                        <h4 className="timeline-title">{item.title}</h4>
                      </div>
                      <span
                        className="badge"
                        style={{
                          background: 'rgba(61,107,255,0.08)',
                          color: 'var(--accent-soft)',
                          border: '1px solid rgba(61,107,255,0.2)',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '0.3rem 0.75rem',
                        }}
                      >
                        {item.type}
                      </span>
                    </div>

                    {/* Company + location */}
                    <h5 className="mb-1" style={{ color: 'var(--accent)' }}>
                      <i className="fas fa-building me-2"></i>{item.company}
                    </h5>
                    <p className="mb-3" style={{ fontSize: '0.82rem' }}>
                      <i className="fas fa-map-marker-alt me-2"></i>{item.location}
                    </p>

                    <p className="timeline-description mb-3">{item.description}</p>

                    {/* Achievements */}
                    <div className="mb-3">
                      <h6 className="mb-2" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>
                        <i className="fas fa-trophy me-2"></i>Key Responsibilities
                      </h6>
                      <ul className="list-unstyled mb-0">
                        {item.achievements.map((a, i) => (
                          <li key={i} className="mb-1 d-flex align-items-start gap-2" style={{ fontSize: '0.86rem' }}>
                            <i className="fas fa-circle-check text-success mt-1" style={{ fontSize: '0.7rem', flexShrink: 0 }}></i>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech */}
                    <div>
                      <h6 className="mb-2" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>
                        <i className="fas fa-tools me-2"></i>Tools &amp; Tech
                      </h6>
                      <div className="project-tech">
                        {item.technologies.map((t, i) => (
                          <span key={i} className="tech-badge">{t}</span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Internships;
