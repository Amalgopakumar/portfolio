import React, { useState } from 'react';

const projects = [
  {
    title: 'Fruitzy — Fruit Grading System',
    subtitle: 'Final Year Project',
    description:
      'An AI-powered fruit grading application that classifies fruit quality and grade using Support Vector Machine (SVM) and Convolutional Neural Network (CNN) models. Processes fruit images to detect defects, size, and ripeness — automating quality control in agricultural supply chains.',
    achievements: [
      'Built CNN model for image-based fruit classification with high accuracy',
      'Integrated SVM for feature-level grading after CNN feature extraction',
      'Processed and augmented fruit image dataset for robust model training',
      'Designed end-to-end pipeline from image input to grade output',
    ],
    technologies: ['Python', 'CNN', 'SVM', 'TensorFlow/Keras', 'OpenCV', 'NumPy', 'Pandas'],
    impact: 'Final Year Project',
    impactType: 'featured',
    github: 'https://github.com/Amalgopakumar',
    demo: null,
  },
  {
    title: 'Data Insights Chatbot',
    subtitle: 'NLP + SQL + Flask',
    description:
      'A conversational analytics assistant that answers natural-language business queries like "What were total sales last month?" by connecting Dialogflow intents with a live SQL database via a Flask webhook.',
    achievements: [
      'Connected Dialogflow chatbot with Flask webhook for live data queries',
      'Designed SQL queries covering KPIs: revenue, customer growth, sales trends',
      'Enabled non-technical users to retrieve business insights via chat',
    ],
    technologies: ['Python', 'Flask', 'Dialogflow', 'SQL', 'Pandas', 'NumPy'],
    impact: 'Business Automation',
    impactType: 'normal',
    github: 'https://github.com/Amalgopakumar',
    demo: null,
  },
  {
    title: 'Power BI Sales Analytics Dashboard',
    subtitle: 'Business Intelligence',
    description:
      'Interactive Power BI dashboard with drill-through navigation and DAX measures to analyze 10,000+ sales transactions across regions, products, and time periods. Built with a Star Schema data model.',
    achievements: [
      'Built KPI cards for revenue, profit margin, and sales velocity',
      'Designed Star Schema for clean, performant data modelling',
      'Implemented drill-through pages for region and product-level analysis',
    ],
    technologies: ['Power BI', 'DAX', 'Excel', 'Data Modelling', 'Star Schema'],
    impact: 'Business Intelligence',
    impactType: 'normal',
    github: 'https://github.com/Amalgopakumar',
    demo: null,
  },
  {
    title: 'E-Commerce Customer Insights Dashboard',
    subtitle: 'Python EDA + Visualization',
    description:
      'Performed end-to-end exploratory data analysis on an e-commerce dataset to uncover customer behaviour patterns, product performance, and sales seasonality. Delivered actionable insights via visual reports.',
    achievements: [
      'Cleaned and transformed dataset with Pandas — handled nulls, outliers, types',
      'Created 15+ Seaborn/Matplotlib visualizations for trend and cohort analysis',
      'Identified top-performing segments and seasonal revenue patterns',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Excel'],
    impact: 'Data Analytics',
    impactType: 'normal',
    github: 'https://github.com/Amalgopakumar',
    demo: null,
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="section section-middle">
      <div className="container">

        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
            <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
              A selection of analytics, machine learning and automation projects — each focused on
              delivering real business value.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.impactType === 'featured' ? 'col-lg-12' : 'col-lg-6'} mb-2`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="card project-card h-100"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                  borderColor: hovered === index ? 'rgba(61,107,255,0.35)' : undefined,
                }}
              >
                {/* Header */}
                <div className="card-header d-flex align-items-start justify-content-between flex-wrap gap-2">
                  <div>
                    <div className="mb-1" style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-soft)', opacity: 0.8 }}>
                      {project.subtitle}
                    </div>
                    <h5 className="project-title mb-0">{project.title}</h5>
                  </div>
                  <span className={`project-badge ${project.impactType}`}>
                    {project.impactType === 'featured' && <i className="fas fa-star"></i>}
                    {project.impact}
                  </span>
                </div>

                {/* Body */}
                <div className="card-body">
                  <p className="project-description">{project.description}</p>

                  {/* Achievements */}
                  <div className="mb-3">
                    <h6 className="mb-2" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>
                      <i className="fas fa-check me-2"></i>Key Highlights
                    </h6>
                    <ul className="list-unstyled mb-0">
                      {project.achievements.map((a, i) => (
                        <li key={i} className="mb-1 d-flex align-items-start gap-2" style={{ fontSize: '0.86rem' }}>
                          <i className="fas fa-circle-check text-success mt-1" style={{ fontSize: '0.7rem', flexShrink: 0 }}></i>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech badges */}
                  <div className="project-tech mb-4">
                    {project.technologies.map((t, i) => (
                      <span key={i} className="tech-badge">{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="d-flex gap-2 flex-wrap">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <i className="fab fa-github me-2"></i>View on GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light btn-sm"
                      >
                        <i className="fas fa-external-link-alt me-2"></i>Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="row mt-5">
          <div className="col-lg-12 text-center" data-aos="fade-up">
            <p className="mb-3" style={{ fontSize: '0.9rem' }}>See all repositories and work-in-progress projects</p>
            <a
              href="https://github.com/Amalgopakumar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              <i className="fab fa-github me-2"></i>View GitHub Profile
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
