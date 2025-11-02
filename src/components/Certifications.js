import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "IBM SkillsBuild",
      type: "Certification",
      category: "Programming",
      description: "Completed industry-aligned training focused on Python, data handling, data structures, statistical analysis, and visualization for analytics applications."
    },
    {
      title: "Python for Data Science & AI",
      issuer: "Microsoft",
      type: "Certification",
      category: "Programming",
      description: "Learned Python fundamentals, data analytics workflows, and introduction to AI techniques used in business environments."
    },
    {
      title: "Intermediate SQL",
      issuer: "Datacamp",
      type: "Certification",
      category: "Data Analytics",
      description: "Gained hands-on experience in SQL joins, filtering, data aggregation, sub-queries, and real-world analytical SQL scenarios."
    }
  ];

  const categoryColors = {
    "Data Analytics": "bg-primary",
    "Professional Development": "bg-success",
    Programming: "bg-warning",
  };

  return (
    <section id="certifications" className="section section-middle">
      <div className="container">

        <div className="row mb-4 text-center">
          <div className="col-lg-12">
            <h2 className="section-title" data-aos="fade-up">
              Certifications & Training
            </h2>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="100">
              Verified learning programs and industry-recognized certifications strengthening my data analytics foundation.
            </p>
          </div>
        </div>

        <div className="row">
          {certifications.map((cert, i) => (
            <div key={i} className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="p-4 border rounded shadow-sm bg-white h-100">
                <div className="d-flex justify-content-between mb-2">
                  <h5 className="fw-bold">{cert.title}</h5>
                  <span className={`badge ${categoryColors[cert.category] || "bg-secondary"}`}>
                    {cert.category}
                  </span>
                </div>

                <p className="mb-2">
                  <i className="fas fa-building me-2"></i> 
                  <strong>Issuer:</strong> {cert.issuer}
                </p>

                <p className="mb-2">
                  <i className="fas fa-certificate me-2"></i>
                  <strong>Type:</strong> {cert.type}
                </p>

                <p className="text-muted">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
