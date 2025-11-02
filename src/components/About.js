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
          
          {/* About Content */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-content">
              <h3 className="mb-4">Professional Summary</h3>
              <p className="lead mb-4">
                Aspiring Data Analyst with strong skills in SQL, Python, Power BI, and Excel.
                Skilled in data cleaning, exploratory analysis, and building dashboards to uncover insights
                and support data-driven decision making. Passionate about turning complex datasets into
                meaningful business insights.
              </p>
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <i className="fas fa-database text-primary me-3"></i>
                  <span>Strong foundation in SQL & relational databases</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-chart-line text-primary me-3"></i>
                  <span>Hands-on experience building dashboards in Power BI</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-code text-primary me-3"></i>
                  <span>Python for data cleaning, EDA & visualization</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-file-excel text-primary me-3"></i>
                  <span>Advanced Excel (Pivot tables, Lookups, Charts)</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-stats">
              <div className="row">
                <div className="col-6 mb-4">
                  <div className="stat-card text-center">
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Dashboards & Reports</div>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="stat-card text-center">
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Data Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Passion Section */}
        <div className="row mt-5">
          <div className="col-lg-12" data-aos="fade-up">
            <div className="about-passion">
              <h4 className="text-center mb-4">My Passion</h4>
              <p className="text-center lead">
                I love working with data to solve real-world problems — whether it's analyzing business 
                performance, identifying trends, or building automation and reporting systems that help 
                teams work smarter. My goal is to build a career creating meaningful insights and turning 
                data into decisions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
