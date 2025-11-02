// import React from 'react';

// const Education = () => {
//   const education = [
//     {
//       degree: "Bachelor of Computer Applications",
//       institution: "Mercy College, Kerala",
//       duration: "2022 – 2025",
//       cgpa: "7.408",
//       status: "Pursuing",
//       highlights: [
//         "Strong foundation in computer science fundamentals",
//         "Focus on programming, data structures, and algorithms",
//         "Coursework in database management and software engineering",
//         "Practical projects in web development and data analysis"
//       ]
//     }
//   ];

//   return (
//     <section id="education" className="section section-middle">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <h2 className="section-title" data-aos="fade-up">
//               Education
//             </h2>
//             <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="200">
//               My academic journey in computer science and applications, building a strong 
//               foundation for a career in data science and machine learning.
//             </p>
//           </div>
//         </div>
        
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="timeline">
//               {education.map((edu, index) => (
//                 <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 200}>
//                   <div className="timeline-content">
//                     <div className="timeline-date">
//                       <i className="fas fa-calendar-alt me-2"></i>
//                       {edu.duration}
//                       <span className={`badge ms-2 ${edu.status === 'Pursuing' ? 'bg-warning' : 'bg-success'}`}>
//                         {edu.status}
//                       </span>
//                     </div>
//                     <h4 className="timeline-title">
//                       {edu.degree}
//                     </h4>
//                     <h5 className="text-primary mb-2">
//                       <i className="fas fa-graduation-cap me-2"></i>
//                       {edu.institution}
//                     </h5>
                    
//                     <div className="education-details mb-3">
//                       <div className="row">
//                         <div className="col-md-6">
//                           <div className="detail-item">
//                             <i className="fas fa-star text-warning me-2"></i>
//                             <strong>CGPA:</strong> {edu.cgpa}
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="detail-item">
//                             <i className="fas fa-clock text-info me-2"></i>
//                             <strong>Duration:</strong> {edu.duration}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="education-highlights">
//                       <h6 className="text-primary mb-2">
//                         <i className="fas fa-lightbulb me-2"></i>
//                         Key Highlights:
//                       </h6>
//                       <ul className="list-unstyled">
//                         {edu.highlights.map((highlight, idx) => (
//                           <li key={idx} className="mb-1">
//                             <i className="fas fa-check-circle text-success me-2"></i>
//                             {highlight}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default Education;





import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Professional Diploma in AI",
      institution: "IPCS GLOBAL, Palakkad, Kerala",
      duration: "July 2025 – December 2025",
      score: "6 months course",
      status: "Pursuing",
      highlights: [
        "Comprehensive training in artificial intelligence and machine learning",
        "Hands-on experience with Python for data science and AI applications",
        "Advanced coursework in Natural Language Processing and Deep Learning",
        "Business intelligence tools including Power BI for data visualization"
      ],
      keySubjects: ["Python", "SQL", "Statistics", "Machine Learning", "Natural Language Processing", "Deep Learning", "AI", "Power BI"]
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Mercy College, University of Calicut, Kerala",
      duration: "2022 – 2025",
      score: "74.08% CGPA",
      status: "Completed",
      highlights: [
        "Strong foundation in computer science fundamentals",
        "Focus on programming, data structures, and algorithms",
        "Coursework in database management and software engineering",
        "Practical projects in web development and data analysis"
      ],
      keySubjects: ["Data Analytics", "Python Programming", "Database Management", "Statistics"]
    },
    {
      degree: "Higher Secondary Education (Science Stream)",
      institution: "Sree Sankara Oriental Higher Secondary School, Lakkidi",
      duration: "March 2022",
      score: "90%",
      status: "Completed",
      highlights: [
        "Excellent performance in science stream with 90% marks",
        "Strong foundation in mathematics and analytical thinking",
        "Early exposure to computer science and programming concepts",
        "Consistent academic excellence throughout secondary education"
      ],
      keySubjects: ["Mathematics", "Physics", "Computer Science"]
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
              My academic journey from secondary education to specialized AI training, 
              building a comprehensive foundation for a career in data science and artificial intelligence.
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
                    <h4 className="timeline-title">
                      {edu.degree}
                    </h4>
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
                        <i className="fas fa-lightbulb me-2"></i>
                        Key Highlights:
                      </h6>
                      <ul className="list-unstyled">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="mb-1">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="key-subjects">
                      <h6 className="text-primary mb-2">
                        <i className="fas fa-book me-2"></i>
                        Key Subjects:
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        {edu.keySubjects.map((subject, idx) => (
                          <span key={idx} className="badge bg-secondary">
                            {subject}
                          </span>
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