import React from 'react';

const Internships = () => {
  const internships = [
    {
      title: "Data & Operations Intern",
      company: "CODESRIPE",
      location: "Hybrid",
      duration: "Mar 2024 – Aug 2024",
      description:
        "Assisted in data operations, documentation, and coordination of Python interns, supporting analytics-related tasks and project execution.",
      achievements: [
        "Managed and documented internal workflows, meetings, and data activities to ensure clarity and transparency",
        "Guided Python interns by helping define tasks and maintain timelines",
        "Assisted in data analysis activities to support project decisions",
        "Improved operational processes by maintaining structured records"
      ],
      technologies: ["Python", "Excel", "SQL", "Documentation", "Project Tracking"],
      type: "Data Operations / Analytics"
    },
    {
      title: "Python Intern",
      company: "IPCS GLOBAL",
      location: "Hybrid",
      duration: "Jun 2025 – Jul 2025",
      description:
        "Worked on Python-based data cleaning and exploratory analysis, supporting reporting and visualization tasks.",
      achievements: [
        "Performed data cleaning, preprocessing, and exploratory data analysis (EDA)",
        "Created visualizations to track key business insights",
        "Collaborated with team to support analytics projects",
        "Strengthened Python fundamentals for analytics use cases"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Seaborn", "EDA"],
      type: "Data Analytics"
    }
  ];

  return (
    <section id="internships" className="section section-middle">
      <div className="container">

        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title" data-aos="fade-up">
              Professional Experience
            </h2>
            <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="200">
              Hands-on internship experience in data analytics, operations, and Python development.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="timeline">
              {internships.map((internship, index) => (
                <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 200}>
                  <div className="timeline-content">
                    <div className="timeline-date">
                      <i className="fas fa-calendar-alt me-2"></i>
                      {internship.duration}
                    </div>
                    <h4 className="timeline-title">{internship.title}</h4>
                    <h5 className="text-primary mb-2">
                      <i className="fas fa-building me-2"></i>
                      {internship.company}
                    </h5>
                    <p className="text-muted mb-3">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      {internship.location}
                    </p>

                    <p className="timeline-description mb-3">{internship.description}</p>

                    <div className="achievements mb-3">
                      <h6 className="text-primary mb-2">
                        <i className="fas fa-trophy me-2"></i>
                        Key Responsibilities & Achievements:
                      </h6>
                      <ul className="list-unstyled">
                        {internship.achievements.map((achievement, idx) => (
                          <li key={idx} className="mb-1">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="technologies">
                      <h6 className="text-primary mb-2">
                        <i className="fas fa-tools me-2"></i>
                        Tools & Tech:
                      </h6>
                      <div className="project-tech">
                        {internship.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3">
                      <span className="badge bg-info">
                        <i className="fas fa-tag me-1"></i>
                        {internship.type}
                      </span>
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
