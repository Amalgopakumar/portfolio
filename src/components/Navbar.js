import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'home', label: 'Home', icon: 'fa-home' },
  { id: 'about', label: 'About', icon: 'fa-user' },
  { id: 'projects', label: 'Projects', icon: 'fa-code-branch' },
  { id: 'internships', label: 'Experience', icon: 'fa-briefcase' },
  { id: 'education', label: 'Education', icon: 'fa-graduation-cap' },
  { id: 'skills', label: 'Skills', icon: 'fa-lightbulb' },
  { id: 'contact', label: 'Contact', icon: 'fa-envelope' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Highlight active section
      let foundSection = 'home';
      for (const link of NAV_LINKS) {
        const section = document.getElementById(link.id);
        if (section) {
          const offset = section.offsetTop - 70; // navbar height
          if (scrollTop >= offset) {
            foundSection = link.id;
          }
        }
      }
      setActiveSection(foundSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  // Only show brand icon, no "Portfolio" heading, as per instruction for a more professional look
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top shadow-sm
      ${isScrolled ? 'bg-white navbar-scrolled' : 'bg-transparent'}`}
      style={{
        transition: 'background 0.25s, box-shadow 0.25s',
        backdropFilter: isScrolled ? 'blur(6px)' : 'none',
        borderBottom: isScrolled ? '1px solid #e9ecef' : 'none',
      }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home" style={{ fontSize: '1.35rem', fontWeight: 600, color: '#185adb' }}>
          <i className="fas fa-code me-2" style={{ fontSize: '1.5rem' }}></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMobileMenuOpen(open => !open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse${isMobileMenuOpen ? ' show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  className={`nav-link d-flex align-items-center px-3${activeSection === link.id ? ' active fw-bold text-primary' : ''}`}
                  href={`#${link.id}`}
                  style={{
                    transition: "color 0.15s, background 0.15s",
                    borderRadius: "0.85rem",
                    background:
                      activeSection === link.id
                        ? "rgba(24, 90, 219, 0.07)"
                        : "transparent",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  tabIndex={0}
                >
                  <i className={`fas ${link.icon} me-2`} />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
