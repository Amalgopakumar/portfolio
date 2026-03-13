import React from 'react';

const skillCategories = [
  {
    icon: 'fas fa-code',
    title: 'Programming & Libraries',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    icon: 'fas fa-chart-pie',
    title: 'Data Analytics & BI',
    skills: ['Power BI', 'DAX', 'Excel', 'Data Modelling', 'Business Analytics'],
  },
  {
    icon: 'fas fa-database',
    title: 'Databases & SQL',
    skills: ['SQL', 'MySQL', 'Data Cleaning', 'ETL Basics'],
  },
  {
    icon: 'fas fa-brain',
    title: 'Machine Learning',
    skills: ['SVM', 'CNN', 'Classification', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Statistical Methods',
    skills: ['Hypothesis Testing', 'ANOVA', 'Chi-Square Test', 'Regression', 'EDA'],
  },
  {
    icon: 'fas fa-robot',
    title: 'Automation & Tools',
    skills: ['n8n', 'Dialogflow', 'Chatbot Dev', 'Flask', 'Git'],
  },
];

const proficiency = [
  { label: 'SQL',       pct: 90 },
  { label: 'Python',    pct: 72 },
  { label: 'Power BI',  pct: 85 },
  { label: 'Excel',     pct: 88 },
  { label: 'ML (SVM/CNN)', pct: 65 },
  { label: 'Statistics',   pct: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="section section-middle">
      <div className="container">

        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title" data-aos="fade-up">Core Skills &amp; Technologies</h2>
            <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
              Technical expertise across the full data analytics stack — from raw data to business insights.
            </p>
          </div>
        </div>

        {/* Skill categories */}
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={i} className="skill-category" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="skill-header mb-3 d-flex align-items-center gap-2">
                <i className={`${cat.icon}`} style={{ color: 'var(--accent)', fontSize: '1rem' }}></i>
                <h4 className="mb-0">{cat.title}</h4>
              </div>
              <ul className="skill-list">
                {cat.skills.map((skill, j) => (
                  <li key={j}>
                    <i className="fas fa-check-circle"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="row mt-5">
          <div className="col-lg-10 mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div
              className="p-4 rounded-4"
              style={{ background: 'var(--light-surface)', border: '1px solid var(--light-border)' }}
            >
              <h4 className="text-center mb-4" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
                Proficiency Overview
              </h4>
              <div className="row g-4">
                {proficiency.map((s, i) => (
                  <div key={i} className="col-md-6">
                    <div className="skill-bar-item">
                      <div className="d-flex justify-content-between mb-1">
                        <span style={{ fontWeight: 600, fontSize: '0.86rem' }}>{s.label}</span>
                        <span style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--accent)' }}>{s.pct}%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: `${s.pct}%` }}
                          role="progressbar"
                          aria-valuenow={s.pct}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
