import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia",
      type: "Job Simulation",
      category: "Data Analytics",
      description: "Comprehensive simulation covering real-world data analytics scenarios and business intelligence solutions."
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "TATA India",
      type: "Job Simulation",
      category: "Data Analytics",
      description: "Industry-focused simulation program covering advanced data analytics techniques and business applications."
    },
    {
      title: "Employability Skills Training",
      issuer: "Mahindra Pride Classroom & Naandi Foundation",
      type: "Skills Training",
      category: "Professional Development",
      description: "Comprehensive training program focusing on professional skills and workplace readiness."
    },
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      type: "Certification",
      category: "Programming",
      description: "Specialized certification in Python programming for data science applications and analytics.",
      date: "January 2024"
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      type: "Certification",
      category: "Artificial Intelligence",
      description: "Foundational certification covering AI principles, machine learning, and artificial intelligence applications.",
      date: "October 2024"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Data Analytics':
        return 'bg-primary';
      case 'Professional Development':
        return 'bg-success';
      case 'Programming':
        return 'bg-warning';
      case 'Artificial Intelligence':
        return 'bg-info';
      default:
        return 'bg-secondary';
    }
  };

  // Define a gradient style that is suitable for modern, professional portfolios.
  // This can be adjusted to match your site's UI colors if needed.
  const gradientBackground = {
    background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #dbeafe 100%)",
    minHeight: "100vh",
    paddingTop: "40px",
    paddingBottom: "40px"
  };

  return (
    <section
      id="certifications"
      className="section section-middle"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title" data-aos="fade-up">
              Certifications & Training
            </h2>
            <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="200">
              Professional certifications and training programs that demonstrate my commitment 
              to continuous learning and industry expertise.
            </p>
          </div>
        </div>
        
        <div className="row">
          {certifications.map((cert, index) => (
            <div key={index} className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="certification-item">
                <div className="certification-header">
                  <h5 className="certification-title">{cert.title}</h5>
                  <span className={`badge ${getCategoryColor(cert.category)} mb-2`}>
                    {cert.category}
                  </span>
                </div>
                <div className="certification-details">
                  <p className="certification-issuer mb-2">
                    <i className="fas fa-building me-2"></i>
                    <strong>Issuer:</strong> {cert.issuer}
                  </p>
                  <p className="certification-type mb-2">
                    <i className="fas fa-certificate me-2"></i>
                    <strong>Type:</strong> {cert.type}
                  </p>
                  {cert.date && (
                    <p className="certification-date mb-2">
                      <i className="fas fa-calendar me-2"></i>
                      <strong>Completed:</strong> {cert.date}
                    </p>
                  )}
                  <p className="certification-description">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Certifications;
