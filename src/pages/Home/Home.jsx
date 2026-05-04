import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const Home = ({ isDarkMode }) => {
    const [showIntro, setShowIntro] = useState(false);

    const highlights = [
        { category: 'Degree', detail: 'B.Sc. in Computer Science' },
        { category: 'University', detail: 'North South University' },
        { category: 'Current CGPA', detail: '3.85 / 4.00' },
        { category: 'Expected Graduation', detail: 'Spring 2026' },
        { category: 'Interests', detail: 'Web Development, AI, Open Source' },
    ];

    const featuredPages = [
        { title: 'About Me', description: 'Learn more about my background and story', path: '/about' },
        { title: 'My Skills', description: 'Technologies and tools I work with', path: '/skills' },
        { title: 'Projects', description: "Things I've built and am proud of", path: '/projects' },
        { title: 'Contact', description: 'Reach out to me', path: '/contact' },
    ];

    return (
        <div className="container">
            <div className="hero card shadow-sm p-4">
                <h2>Welcome to My Portfolio</h2>
                <p>
                    Hi! I'm Arman, a Computer Science student with a love for building things.
                    Explore my work, skills, and projects below.
                </p>

                <div className="d-flex flex-wrap gap-2">
                    <Link to="/projects">
                        <Button>View My Projects</Button>
                    </Link>
                    <Link to="/contact">
                        <Button variant="outline-primary">Get In Touch</Button>
                    </Link>
                    <Button variant="secondary" onClick={() => setShowIntro(!showIntro)}>
                        Quick Intro
                    </Button>
                </div>

                {showIntro && (
                    <div className="alert alert-info mt-3">
                        Welcome! I'm Arman, a CS student passionate about building full-stack applications
                        and contributing to open-source.
                    </div>
                )}
            </div>

            <h2>Quick Highlights</h2>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Category</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {highlights.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <span className="badge bg-primary">{item.category}</span>
                                </td>
                                <td>{item.detail}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h2 className="mt-4">Featured Pages</h2>
            <ul className="list-group mb-4">
                {featuredPages.map((page) => (
                    <li className="list-group-item" key={page.path}>
                        <Link to={page.path}>{page.title}</Link> — {page.description}
                    </li>
                ))}
            </ul>

            <Card
                title="Profile"
                description="Computer Science Student @ NSU"
            >
                <p>
                    <span className="badge bg-success me-2">Full Stack</span>
                    <span className="badge bg-info text-dark me-2">Open Source</span>
                    <span className="badge bg-warning text-dark">IEEE NSU SB</span>
                </p>
                <Link to="/about">
                    <Button variant="outline-primary" className="btn-sm">Learn More</Button>
                </Link>
            </Card>
        </div>
    );
};

export default Home;