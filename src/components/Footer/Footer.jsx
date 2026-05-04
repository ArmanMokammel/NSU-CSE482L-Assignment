import React from 'react';

const Footer = ({ isDarkMode }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="py-4 mt-5"
            style={{
                backgroundColor: isDarkMode ? '#0d0d0d' : '#1a2a4a',
                borderTop: '4px solid #e8a838',
            }}
        >
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Section - Name */}
                    <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
                        <h6 className="fw-bold mb-0" style={{ color: '#ffffff' }}>
                            Arman Mokammel
                        </h6>
                        <small style={{ color: isDarkMode ? '#b0b0b0' : '#aac4e8' }}>
                            CSE Student @ NSU
                        </small>
                    </div>

                    {/* Middle Section - Copyright */}
                    <div className="col-md-4 text-center mb-3 mb-md-0">
                        <small style={{ color: isDarkMode ? '#666' : '#7a8ab3' }}>
                            &copy; {currentYear} Arman Mokammel
                        </small>
                    </div>

                    {/* Right Section - Links */}
                    <div className="col-md-4 text-center text-md-end">
                        <a
                            href="https://github.com/ArmanMokammel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none me-3"
                            style={{ color: isDarkMode ? '#b0b0b0' : '#aac4e8' }}
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/arman-mokammel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none me-3"
                            style={{ color: isDarkMode ? '#b0b0b0' : '#aac4e8' }}
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:armanmokammel@gmail.com"
                            className="text-decoration-none"
                            style={{ color: isDarkMode ? '#b0b0b0' : '#aac4e8' }}
                        >
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;