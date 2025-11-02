import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Libraries",
      icon: "fas fa-code",
      skills: [
        "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"
      ]
    },
    {
      title: "Data Analytics & BI",
      icon: "fas fa-chart-pie",
      skills: [
        "Power BI", "Excel", "DAX", "Data Modelling", "Business Analytics"
      ]
    },
    {
      title: "Machine Learning",
      icon: "fas fa-brain",
      skills: [
        "Classification", "Regression", "Feature Engineering", "EDA"
      ]
    },
    {
      title: "Statistical Methods",
      icon: "fas fa-chart-line",
      skills: [
        "Hypothesis Testing", "ANOVA", "Chi-Square Test", "Data Interpretation"
      ]
    },
    {
      title: "Databases & Backend",
      icon: "fas fa-database",
      skills: [
        "SQL", "MySQL", "Data Cleaning", "Flask API"
      ]
    },
    {
      title: "Automation / Apps",
      icon: "fas fa-robot",
      skills: [
        "Streamlit", "Dialogflow", "Chatbot Development"
      ]
    },
    {
      title: "Model Deployment & Tools",
      icon: "fas fa-rocket",
      skills: [
        "Pickle", "Pipeline Deployment", "Version Control (Git/GitHub)"
      ]
    },
    {
      title: "Soft Skills",
      icon: "fas fa-user-check",
      skills: [
        "Problem Solving", "Communication", "Team Collaboration"
      ]
    }
  ];

  return (
    <section id="skills" className="section section-middle">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title" data-aos="fade-up">
              Core Skills & Technologies
            </h2>
            <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="200">
              Technical expertise in data analytics, machine learning, and business intelligence tools.
            </p>
          </div>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="skill-header mb-3">
                <i className={`${category.icon} text-primary me-2`}></i>
                <h4 className="d-inline">{category.title}</h4>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <i className="fas fa-check-circle"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skill bars */}
        <div className="row mt-5">
          <div className="col-lg-12" data-aos="fade-up">
            <div className="skills-summary">
              <h4 className="text-center mb-4">Skills Proficiency Overview</h4>
              <div className="row">
                
                <div className="col-lg-6 mb-4">
                  <div className="proficiency-section">
                    <h5 className="text-primary mb-3">
                      <i className="fas fa-laptop-code me-2"></i>
                      Programming & Querying
                    </h5>
                    <div className="skill-bar-container">
                      <div className="skill-bar-item">
                        <div className="d-flex justify-content-between">
                          <span>Python</span>
                          <span>70%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar" style={{width: '70%'}}></div>
                        </div>
                      </div>
                      <div className="skill-bar-item">
                        <div className="d-flex justify-content-between">
                          <span>SQL</span>
                          <span>65%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar" style={{width: '65%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="proficiency-section">
                    <h5 className="text-primary mb-3">
                      <i className="fas fa-chart-bar me-2"></i>
                      BI & Analytics
                    </h5>
                    <div className="skill-bar-container">
                      <div className="skill-bar-item">
                        <div className="d-flex justify-content-between">
                          <span>Power BI</span>
                          <span>80%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar" style={{width: '80%'}}></div>
                        </div>
                      </div>
                      <div className="skill-bar-item">
                        <div className="d-flex justify-content-between">
                          <span>Excel</span>
                          <span>85%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar" style={{width: '85%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
