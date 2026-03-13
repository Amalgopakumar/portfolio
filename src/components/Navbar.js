import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'home',         label: 'Home',       icon: 'fa-home' },
  { id: 'about',        label: 'About',      icon: 'fa-user' },
  { id: 'projects',     label: 'Projects',   icon: 'fa-code-branch' },
  { id: 'internships',  label: 'Experience', icon: 'fa-briefcase' },
  { id: 'education',    label: 'Education',  icon: 'fa-graduation-cap' },
  { id: 'skills',       label: 'Skills',     icon: 'fa-lightbulb' },
  { id: 'contact',      label: 'Contact',    icon: 'fa-envelope' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let found = 'home';
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && window.scrollY >= el.offsetTop - 80) {
          found = link.id;
        }
      }
      setActiveSection(found);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top${isScrolled ? ' scrolled' : ''}`}>
      <div className="container">
        {/* Brand */}
        <a
          className="navbar-brand"
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
        >
          AG<span>.</span>
        </a>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMobileMenuOpen(o => !o)}
          style={{ padding: '0.35rem 0.6rem' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className={`collapse navbar-collapse${isMobileMenuOpen ? ' show' : ''}`}>
          <ul className="navbar-nav ms-auto gap-1">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  className={`nav-link${activeSection === link.id ? ' active' : ''}`}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                >
                  {link.label}
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
