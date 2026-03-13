import React from 'react';

const education = [
  {
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'JCT College of Engineering and Technology, Coimbatore',
    duration: '2022 – 2026',
    score: '9.1 CGPA',
    status: 'Pursuing',
    highlights: [
      'Strong foundation in AI, data science & engineering fundamentals',
      'Hands-on experience with Python, SQL, Power BI & ML workflows',
      'Final year project: Fruitzy — fruit grading using SVM & CNN',
      'Active participation in technical training and internship programs',
    ],
    keySubjects: ['Python', 'SQL', 'Data Analytics', 'Statistics', 'Machine Learning', 'Deep Learning', 'Database Systems', 'Power BI'],
  },
  {
    degree: 'Higher Secondary Education (Computer Science)',
    institution: 'Higher Secondary Board – Kerala',
    duration: '2020 – 2022',
    score: '94%',
    status: 'Completed',
    highlights: [
      'Excellent academic performance with strong computer science foundation',
      'Strong mathematical & analytical reasoning skills',
      'Early exposure to programming, logic building and algorithms',
    ],
    keySubjects: ['Computer Science', 'Mathematics', 'Physics'],
  },
];

const Education = () => {
  return (
    <section id="education" className="section section-middle">
      <div className="container">

        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title" data-aos="fade-up">Education</h2>
            <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
              Academic background with a focus on Artificial Intelligence, Data Science and Programming.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="timeline">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="timeline-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="timeline-content">

                    {/* Header */}
                    <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                      <div className="timeline-date">
                        <i className="fas fa-calendar-alt me-2"></i>{edu.duration}
                      </div>
                      <span
                        className="badge"
                        style={{
                          background: edu.status === 'Pursuing' ? 'rgba(245,158,11,0.12)' : 'rgba(16,185,129,0.12)',
                          color: edu.status === 'Pursuing' ? '#f59e0b' : '#10b981',
                          border: `1px solid ${edu.status === 'Pursuing' ? 'rgba(245,158,11,0.25)' : 'rgba(16,185,129,0.25)'}`,
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '0.3rem 0.75rem',
                        }}
                      >
                        {edu.status}
                      </span>
                    </div>

                    <h4 className="timeline-title">{edu.degree}</h4>
                    <h5 className="mb-3" style={{ color: 'var(--accent)', fontSize: '0.92rem' }}>
                      <i className="fas fa-graduation-cap me-2"></i>{edu.institution}
                    </h5>

                    {/* Score */}
                    <div className="education-details mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <i className="fas fa-star" style={{ color: '#f59e0b', fontSize: '0.85rem' }}></i>
                        <span className="detail-item mb-0"><strong>Score:</strong> {edu.score}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-3">
                      <h6 className="mb-2" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>
                        <i className="fas fa-lightbulb me-2"></i>Highlights
                      </h6>
                      <ul className="list-unstyled mb-0">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="mb-1 d-flex align-items-start gap-2" style={{ fontSize: '0.86rem' }}>
                            <i className="fas fa-circle-check text-success mt-1" style={{ fontSize: '0.7rem', flexShrink: 0 }}></i>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Subjects */}
                    <div>
                      <h6 className="mb-2" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>
                        <i className="fas fa-book me-2"></i>Key Subjects
                      </h6>
                      <div className="project-tech">
                        {edu.keySubjects.map((s, i) => (
                          <span key={i} className="tech-badge">{s}</span>
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

export default Education;
