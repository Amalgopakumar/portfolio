import React from 'react';

const About = () => {
  return (
    <section id="about" className="section section-middle">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title" data-aos="fade-up">
              About Me
            </h2>
          </div>
        </div>
        
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-content">
              <h3 className="mb-4">Professional Objective</h3>
              <p className="lead mb-4">
                I am a passionate Data Science and Machine Learning professional with expertise in 
                developing end-to-end ML solutions that drive business value. My goal is to leverage 
                advanced analytics and cutting-edge AI technologies to solve complex business problems 
                and create impactful solutions.
              </p>
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <i className="fas fa-bullseye text-primary me-3"></i>
                  <span>Focus on delivering measurable business impact through data-driven solutions</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-rocket text-primary me-3"></i>
                  <span>Specialized in ensemble methods and deep learning applications</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-chart-bar text-primary me-3"></i>
                  <span>Expertise in statistical analysis and hypothesis testing</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-cogs text-primary me-3"></i>
                  <span>Experience in model deployment and production pipelines</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-stats">
              <div className="row">
                <div className="col-6 mb-4">
                  <div className="stat-card text-center">
                    <div className="stat-number">88%</div>
                    <div className="stat-label">ROC-AUC Score</div>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="stat-card text-center">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Classification Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-12" data-aos="fade-up">
            <div className="about-passion">
              <h4 className="text-center mb-4">What Drives Me</h4>
              <p className="text-center lead">
                I believe in the transformative power of data and artificial intelligence. 
                My passion lies in creating intelligent systems that not only solve technical 
                challenges but also create real-world value. From predicting customer churn 
                to building healthcare diagnostic tools, I thrive on turning complex data 
                into actionable insights that make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
