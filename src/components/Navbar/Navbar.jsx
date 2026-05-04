import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={isDarkMode ? 'navbar-dark-mode' : ''} style={{ borderBottom: '4px solid #e8a838' }}>
      <div className="py-4" style={{ backgroundColor: isDarkMode ? '#0d0d0d' : '#1a2a4a', textAlign: 'center' }}>
        <div className="container">
          <h1 className="display-5 mb-2 fw-bold" style={{ color: '#ffffff' }}>Arman Mokammel</h1>
          <p className="lead mb-0" style={{ color: isDarkMode ? '#b0b0b0' : '#aac4e8' }}>
            Computer Science Student @ North South University
          </p>
        </div>
      </div>

      <nav className={`navbar navbar-expand-lg navbar-dark ${isDarkMode ? 'navbar-dark-bg' : ''}`}
        style={{ backgroundColor: isDarkMode ? '#1a1a1a' : '#243d6e' }}>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarMain">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {navItems.map((item) => (
                <li className="nav-item" key={item.path}>
                  <Link
                    className={`nav-link fw-500 ${isActive(item.path) ? 'active' : ''}`}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    style={{
                      color: isActive(item.path) ? '#e8a838' : '#ffffff',
                      borderBottom: isActive(item.path) ? '3px solid #e8a838' : 'none',
                      paddingBottom: isActive(item.path) ? '0.5rem' : '0.5rem',
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;