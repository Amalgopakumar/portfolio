import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "JCT College of Engineering and Technology, Coimbatore",
      duration: "2022 – 2026",
      score: "8.9 CGPA",
      status: "Pursuing",
      highlights: [
        "Strong foundation in AI, data science & engineering fundamentals",
        "Hands-on experience with Python, SQL, Power BI & ML workflows",
        "Projects in sales analytics, chatbot automation & data visualization",
        "Active participation in technical training and internships"
      ],
      keySubjects: [
        "Python", "SQL", "Data Analytics", "Statistics",
        "Machine Learning", "Database Systems", "Power BI"
      ]
    },
    {
      degree: "Higher Secondary Education (Computer Science)",
      institution: "Higher Secondary Board – Kerala",
      duration: "2020 – 2022",
      score: "94%",
      status: "Completed",
      highlights: [
        "Excellent academic performance with strong computer science base",
        "Strong mathematical & analytical skills",
        "Early exposure to programming & logic building"
      ],
      keySubjects: ["Computer Science", "Mathematics", "Physics"]
    }
  ];

  return (
    <section id="education" className="section section-middle">
      <div className="container">
        
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title" data-aos="fade-up">
              Education
            </h2>
            <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="200">
              My academic background with focus on Artificial Intelligence, Data Science and Programming.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="timeline">

              {education.map((edu, index) => (
                <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 200}>
                  <div className="timeline-content">

                    <div className="timeline-date">
                      <i className="fas fa-calendar-alt me-2"></i>
                      {edu.duration}
                      <span className={`badge ms-2 ${edu.status === 'Pursuing' ? 'bg-warning' : 'bg-success'}`}>
                        {edu.status}
                      </span>
                    </div>

                    <h4 className="timeline-title">{edu.degree}</h4>
                    <h5 className="text-primary mb-2">
                      <i className="fas fa-graduation-cap me-2"></i>
                      {edu.institution}
                    </h5>

                    <div className="education-details mb-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="detail-item">
                            <i className="fas fa-star text-warning me-2"></i>
                            <strong>Score:</strong> {edu.score}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="detail-item">
                            <i className="fas fa-clock text-info me-2"></i>
                            <strong>Duration:</strong> {edu.duration}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="education-highlights mb-3">
                      <h6 className="text-primary mb-2">
                        <i className="fas fa-lightbulb me-2"></i> Key Highlights:
                      </h6>
                      <ul className="list-unstyled">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="mb-1">
                            <i className="fas fa-check-circle text-success me-2"></i>{h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="key-subjects">
                      <h6 className="text-primary mb-2">
                        <i className="fas fa-book me-2"></i> Key Subjects:
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        {edu.keySubjects.map((sub, i) => (
                          <span key={i} className="badge bg-secondary">{sub}</span>
                        ))}
                      </div>
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

export default Education;
