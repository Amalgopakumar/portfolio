import React from 'react';

const Internships = () => {
  const internships = [
    {
      title: "Python and Machine Learning Intern",
      company: "National Institute of Computer Technology Solutions (NICTS)",
      location: "Palakkad",
      duration: "Sep 2024 – Feb 2025",
      description: "Developed an ML-Driven Fruit Freshness Analysis system using CNN (VGG16) in TensorFlow, achieving ~85% accuracy.",
      achievements: [
        "Developed ML-Driven Fruit Freshness Analysis system using CNN (VGG16)",
        "Achieved ~85% accuracy in fruit freshness classification",
        "Collected, preprocessed, and augmented fruit image datasets with OpenCV and Pandas",
        "Applied feature engineering, model tuning, and evaluation metrics (ROC-AUC, accuracy)",
        "Gained hands-on experience with Python, NumPy, Pandas, Scikit-learn, and deep learning frameworks"
      ],
      technologies: ["Python", "TensorFlow", "CNN", "VGG16", "OpenCV", "Pandas", "NumPy", "Scikit-learn", "Deep Learning"],
      type: "Machine Learning"
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
              My professional journey in data science and machine learning through internships 
              and hands-on project experience.
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
                    <h4 className="timeline-title">
                      {internship.title}
                    </h4>
                    <h5 className="text-primary mb-2">
                      <i className="fas fa-building me-2"></i>
                      {internship.company}
                    </h5>
                    <p className="text-muted mb-3">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      {internship.location}
                    </p>
                    
                    <p className="timeline-description mb-3">
                      {internship.description}
                    </p>
                    
                    <div className="achievements mb-3">
                      <h6 className="text-primary mb-2">
                        <i className="fas fa-trophy me-2"></i>
                        Key Achievements:
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
                        Technologies Used:
                      </h6>
                      <div className="project-tech">
                        {internship.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <span className={`badge ${internship.type === 'Machine Learning' ? 'bg-info' : 'bg-primary'}`}>
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
        
        <div className="row mt-5">
          <div className="col-lg-12" data-aos="fade-up">
            <div className="experience-summary">
              <h4 className="text-center mb-4">Experience Highlights</h4>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="experience-stat text-center">
                    <div className="stat-icon">
                      <i className="fas fa-brain text-primary"></i>
                    </div>
                    <h5>Deep Learning</h5>
                    <p>Hands-on experience with CNN architectures and TensorFlow</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="experience-stat text-center">
                    <div className="stat-icon">
                      <i className="fas fa-image text-success"></i>
                    </div>
                    <h5>Computer Vision</h5>
                    <p>Image processing and analysis using OpenCV and advanced ML models</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="experience-stat text-center">
                    <div className="stat-icon">
                      <i className="fas fa-chart-line text-warning"></i>
                    </div>
                    <h5>Model Performance</h5>
                    <p>Achieved 85% accuracy in real-world classification problems</p>
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

export default Internships;
