// import React from 'react';

// const Projects = () => {
//   const projects = [
//     {
//       title: "Customer Churn Prediction | Ensemble ML Models & Business Impact Analysis",
//       description: "Engineered ensemble system (Gradient Boosting, Random Forest) using SMOTE and GridSearchCV on 7K+ telecom records featuring data preprocessing, feature scaling, and Pickle serialization for real-time clinical applications.",
//       achievements: [
//         "Achieved 88% ROC-AUC score",
//         "Reduced churn by 20%",
//         "Generated $280K+ annual savings"
//       ],
//       technologies: ["Python", "Scikit-learn", "SMOTE", "GridSearchCV", "Gradient Boosting", "Random Forest", "Pickle"],
//       impact: "High Business Impact"
//     },
//     {
//       title: "Machine Learning Healthcare Prediction System | KNN Classification & Clinical Decision Support",
//       description: "Developed a diabetes prediction system using a KNN classifier with 80%+ accuracy, featuring data preprocessing, feature scaling, and Pickle serialization for real-time clinical applications.",
//       achievements: [
//         "80%+ classification accuracy",
//         "Real-time clinical decision support",
//         "Optimized for healthcare applications"
//       ],
//       technologies: ["Python", "KNN", "Scikit-learn", "Data Preprocessing", "Feature Scaling", "Pickle"],
//       impact: "Healthcare Innovation"
//     },
//     {
//       title: "Financial Data Analytics: Cryptocurrency Trading Behavior Analysis with Statistical Modeling",
//       description: "Analyzed 10,000+ trades using ANOVA and Chi-Squared hypothesis testing (p<0.001) to uncover sentiment-driven trading patterns, improving strategy profitability by 15–30%.",
//       achievements: [
//         "Analyzed 10,000+ trading records",
//         "Statistical significance (p<0.001)",
//         "15-30% strategy profitability improvement"
//       ],
//       technologies: ["Python", "Statistical Analysis", "ANOVA", "Chi-Squared Testing", "Data Visualization", "Pandas"],
//       impact: "Financial Analytics"
//     },
//     {
//       title: "NLP Email Classification System | Spam Detection with Naive Bayes & Model Deployment",
//       description: "Built NLP-based spam detection, achieving 98% accuracy with an automated Scikit-learn pipeline. Deployed serialized model for real-time classification, reducing screening time by 80%.",
//       achievements: [
//         "98% classification accuracy",
//         "Real-time classification system",
//         "80% reduction in screening time"
//       ],
//       technologies: ["Python", "NLP", "Naive Bayes", "Scikit-learn", "Model Deployment", "Pickle"],
//       impact: "Efficiency Optimization"
//     }
//   ];

//   return (
//     <section id="projects" className="section section-middle">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <h2 className="section-title" data-aos="fade-up">
//               Featured Projects
//             </h2>
//             <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="200">
//               Explore my portfolio of data science and machine learning projects that demonstrate 
//               technical expertise and real-world business impact.
//             </p>
//           </div>
//         </div>
        
//         <div className="row">
//           {projects.map((project, index) => (
//             <div key={index} className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
//               <div className="card project-card h-100">
//                 <div className="card-header">
//                   <h5 className="project-title mb-0">{project.title}</h5>
//                 </div>
//                 <div className="card-body">
//                   <p className="project-description">{project.description}</p>
                  
//                   <div className="achievements mb-3">
//                     <h6 className="text-primary mb-2">
//                       <i className="fas fa-trophy me-2"></i>
//                       Key Achievements:
//                     </h6>
//                     <ul className="list-unstyled">
//                       {project.achievements.map((achievement, idx) => (
//                         <li key={idx} className="mb-1">
//                           <i className="fas fa-check-circle text-success me-2"></i>
//                           {achievement}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <div className="technologies mb-3">
//                     <h6 className="text-primary mb-2">
//                       <i className="fas fa-tools me-2"></i>
//                       Technologies:
//                     </h6>
//                     <div className="project-tech">
//                       {project.technologies.map((tech, idx) => (
//                         <span key={idx} className="tech-badge">{tech}</span>
//                       ))}
//                     </div>
//                   </div>
                  
//                   <div className="impact">
//                     <span className={`badge ${project.impact === 'High Business Impact' ? 'bg-success' : 
//                       project.impact === 'Healthcare Innovation' ? 'bg-info' : 
//                       project.impact === 'Financial Analytics' ? 'bg-warning' : 'bg-primary'}`}>
//                       <i className="fas fa-star me-1"></i>
//                       {project.impact}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction | Ensemble ML Models & Business Impact Analysis",
      description: "Engineered ensemble system (Gradient Boosting, Random Forest) using SMOTE and GridSearchCV on 7K+ telecom records featuring data preprocessing, feature scaling, and Pickle serialization for real-time clinical applications.",
      achievements: [
        "Achieved 88% ROC-AUC score",
        "Reduced churn by 20%",
        "Generated $280K+ annual savings"
      ],
      technologies: ["Python", "Scikit-learn", "SMOTE", "GridSearchCV", "Gradient Boosting", "Random Forest", "Pickle"],
      impact: "High Business Impact",
      githubLink: "https://github.com/yourusername/customer-churn-prediction",
      demoLink: "https://yourdemo-link.com/churn-prediction"
    },
    {
      title: "Machine Learning Healthcare Prediction System | KNN Classification & Clinical Decision Support",
      description: "Developed a diabetes prediction system using a KNN classifier with 80%+ accuracy, featuring data preprocessing, feature scaling, and Pickle serialization for real-time clinical applications.",
      achievements: [
        "80%+ classification accuracy",
        "Real-time clinical decision support",
        "Optimized for healthcare applications"
      ],
      technologies: ["Python", "KNN", "Scikit-learn", "Data Preprocessing", "Feature Scaling", "Pickle"],
      impact: "Healthcare Innovation",
      githubLink: "https://github.com/yourusername/healthcare-prediction",
      demoLink: "https://yourdemo-link.com/healthcare-prediction"
    },
    {
      title: "Financial Data Analytics: Cryptocurrency Trading Behavior Analysis with Statistical Modeling",
      description: "Analyzed 10,000+ trades using ANOVA and Chi-Squared hypothesis testing (p<0.001) to uncover sentiment-driven trading patterns, improving strategy profitability by 15–30%.",
      achievements: [
        "Analyzed 10,000+ trading records",
        "Statistical significance (p<0.001)",
        "15-30% strategy profitability improvement"
      ],
      technologies: ["Python", "Statistical Analysis", "ANOVA", "Chi-Squared Testing", "Data Visualization", "Pandas"],
      impact: "Financial Analytics",
      githubLink: "https://github.com/yourusername/crypto-trading-analysis",
      demoLink: "https://yourdemo-link.com/crypto-analysis"
    },
    {
      title: "NLP Email Classification System | Spam Detection with Naive Bayes & Model Deployment",
      description: "Built NLP-based spam detection, achieving 98% accuracy with an automated Scikit-learn pipeline. Deployed serialized model for real-time classification, reducing screening time by 80%.",
      achievements: [
        "98% classification accuracy",
        "Real-time classification system",
        "80% reduction in screening time"
      ],
      technologies: ["Python", "NLP", "Naive Bayes", "Scikit-learn", "Model Deployment", "Pickle"],
      impact: "Efficiency Optimization",
      githubLink: "https://github.com/yourusername/email-spam-classifier",
      demoLink: "https://yourdemo-link.com/spam-classifier"
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
              Explore my portfolio of data science and machine learning projects that demonstrate 
              technical expertise and real-world business impact.
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
                  
                  {/* Project Links Section */}
                  <div className="project-links mb-3">
                    <h6 className="text-primary mb-2">
                      <i className="fas fa-external-link-alt me-2"></i>
                      Project Links:
                    </h6>
                    <div className="d-flex gap-2">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-sm"
                      >
                        <i className="fab fa-github me-1"></i>
                        GitHub
                      </a>
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <i className="fas fa-external-link-alt me-1"></i>
                        Live Demo
                      </a>
                    </div>
                  </div>
                  
                  <div className="impact">
                    <span className={`badge ${project.impact === 'High Business Impact' ? 'bg-success' : 
                      project.impact === 'Healthcare Innovation' ? 'bg-info' : 
                      project.impact === 'Financial Analytics' ? 'bg-warning' : 'bg-primary'}`}>
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
