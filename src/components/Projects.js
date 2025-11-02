import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Data Insights Chatbot | NLP + SQL + Flask",
      description: 
        "Built a conversational analytics assistant capable of answering business queries like 'What were the total sales last month?' using Dialogflow, Flask, and SQL.",
      achievements: [
        "Connected Dialogflow chatbot with Flask webhook",
        "Designed SQL queries for key KPIs like revenue, customer growth, and sales trends",
        "Enabled natural language–based business data insights"
      ],
      technologies: [
        "Python", "Flask", "Dialogflow", "SQL", "Pandas", "NumPy"
      ],
      impact: "Business Automation",
      githubLink: "https://github.com/Amalgopakumar", // update with specific repo if available
      demoLink: "#"
    },
    {
      title: "Power BI Sales Analytics Dashboard",
      description: 
        "Developed an interactive Power BI dashboard with drill-through navigation and DAX to analyze 10,000+ sales transactions and key business metrics.",
      achievements: [
        "Built KPI dashboard for performance tracking",
        "Designed Star Schema for data modeling",
        "Enhanced reporting efficiency and sales monitoring"
      ],
      technologies: [
        "Power BI", "Excel", "DAX", "Data Modelling"
      ],
      impact: "Business Intelligence",
      githubLink: "https://github.com/Amalgopakumar", // update with specific repo
      demoLink: "#"
    },
    {
      title: "Sales & Customer Insights Dashboard",
      description: 
        "Performed exploratory data analysis on an e-commerce dataset to uncover customer behavior and sales patterns using Python libraries.",
      achievements: [
        "Cleaned and transformed dataset using Pandas & NumPy",
        "Performed EDA with Seaborn visualizations",
        "Delivered actionable insights for business improvement"
      ],
      technologies: [
        "Python", "Pandas", "NumPy", "Seaborn", "Excel"
      ],
      impact: "Data Analytics",
      githubLink: "https://github.com/Amalgopakumar", // update if repo exists
      demoLink: "#"
    }
  ];

  return (
    <section id="projects" className="section section-middle">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title" data-aos="fade-up">
              Featured Projects
            </h2>
            <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="200">
              A showcase of my data analytics and machine learning projects focused on
              delivering real business insights and automation.
            </p>
          </div>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card project-card h-100">
                <div className="card-header">
                  <h5 className="project-title mb-0">{project.title}</h5>
                </div>
                <div className="card-body">
                  <p className="project-description">{project.description}</p>

                  <div className="achievements mb-3">
                    <h6 className="text-primary mb-2">
                      <i className="fas fa-trophy me-2"></i>
                      Key Achievements:
                    </h6>
                    <ul className="list-unstyled">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="mb-1">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies mb-3">
                    <h6 className="text-primary mb-2">
                      <i className="fas fa-tools me-2"></i>
                      Technologies:
                    </h6>
                    <div className="project-tech">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-links mb-3">
                    <div className="d-flex gap-2">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                        <i className="fab fa-github me-1"></i> GitHub
                      </a>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                        <i className="fas fa-external-link-alt me-1"></i> Live Demo
                      </a>
                    </div>
                  </div>

                  <div className="impact">
                    <span className="badge bg-info">
                      <i className="fas fa-star me-1"></i>
                      {project.impact}
                    </span>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
