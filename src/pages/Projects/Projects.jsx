import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

const Projects = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: 'ASL-Java - Restaurant Management System',
            description: 'A JAVA Swing-UI based Restaurant Management System built entirely in Java. This project demonstrates core Object-Oriented Programming principles.',
            language: 'Java',
            type: 'Personal',
            stars: 0,
            features: ['Menu display and item selection', 'Order placement and billing', 'OOP design (Customer, Order, Menu, Bill)'],
            github: 'https://github.com/ArmanMokammel/ASL-Java',
        },
        {
            id: 2,
            title: 'ASP.C - Restaurant Management System in C',
            description: 'A console-based Restaurant Management System written in C. This is the predecessor project to ASL-Java.',
            language: 'C',
            type: 'Personal',
            stars: 2,
            features: ['Menu management using arrays and structs', 'Order processing and total bill calculation', 'File I/O for saving order records'],
            github: 'https://github.com/ArmanMokammel/ASP.C',
        },
        {
            id: 3,
            title: 'IEEE NSU SB - Main Website Frontend',
            description: 'The official frontend of the IEEE North South University Student Branch website. Built with TypeScript.',
            language: 'TypeScript',
            type: 'Organization',
            stars: 2,
            features: ['Modern TypeScript-based frontend architecture', 'Component-based UI', 'Responsive and publicly accessible web interface'],
            github: 'https://github.com/IEEE-NSU-SB/Main-Web-Frontend',
        },
        {
            id: 4,
            title: 'IEEE NSU SB - Django Backend',
            description: 'The core backend powering the IEEE NSU Student Branch website, built with Django.',
            language: 'Python / Django',
            type: 'Organization',
            stars: 1,
            features: ['Django-based REST API', 'Admin panel for managing events', 'Database models for members, events, and announcements'],
            github: 'https://github.com/IEEE-NSU-SB/Django-Backend',
        },
        {
            id: 5,
            title: 'IEEE NSU SB - SPAC Platform Backend',
            description: 'The backend system for the SPAC Platform - a dedicated platform developed under the IEEE NSU Student Branch.',
            language: 'Python',
            type: 'Organization',
            stars: 0,
            features: ['Backend API powering the SPAC event platform', 'Multi-contributor repository', 'Collaborative workflow'],
            github: 'https://github.com/IEEE-NSU-SB/SPAC-Platform-Backend',
        },
    ];

    const filteredProjects = selectedFilter === 'All'
        ? projects
        : projects.filter((p) => p.type === selectedFilter);

    const getTypeColor = (type) => {
        return type === 'Personal' ? 'bg-success' : 'bg-info';
    };

    const getLanguageColor = (language) => {
        const colors = {
            'Java': 'bg-secondary',
            'C': 'bg-dark',
            'TypeScript': 'bg-secondary',
            'Python / Django': 'bg-secondary',
            'Python': 'bg-secondary',
        };
        return colors[language] || 'bg-secondary';
    };

    return (
        <div className="container">
            <h1>My Projects</h1>
            <p>
                Below are the projects I have built and contributed to, ranging from personal academic work
                to collaborative open-source development as part of the <b>IEEE NSU Student Branch</b>.
            </p>

            <div className="mb-4">
                <strong>Filter by Type:</strong>
                <div className="d-flex gap-2 mt-2">
                    {['All', 'Personal', 'Organization'].map((filter) => (
                        <button
                            key={filter}
                            className={`btn ${selectedFilter === filter ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                            onClick={() => setSelectedFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                {filteredProjects.map((project) => (
                    <div className="col" key={project.id}>
                        <Card
                            title={project.title}
                            description={project.description}
                            shadow={true}
                        >
                            <div className="mb-3">
                                <span>
                                    <b>Language: </b>
                                    <span className={`badge ${getLanguageColor(project.language)}`}>
                                        {project.language}
                                    </span>
                                </span>
                                <span className="ms-2">
                                    <b>Type: </b>
                                    <span className={`badge ${getTypeColor(project.type)}`}>
                                        {project.type}
                                    </span>
                                </span>
                            </div>

                            <span>
                                <b>Key Features:</b>
                            </span>
                            <ul style={{ fontSize: '13px' }}>
                                {project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>

                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-auto">
                                <Button variant="primary" className="btn-sm">
                                    View on GitHub
                                </Button>
                            </a>
                        </Card>
                    </div>
                ))}
            </div>

            <h2 className="mt-5">Project Summary</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Project</th>
                            <th>Language / Stack</th>
                            <th>Type</th>
                            <th>Stars</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id}>
                                <td>{project.title}</td>
                                <td>{project.language}</td>
                                <td>{project.type}</td>
                                <td>
                                    {project.stars > 0 ? (
                                        <span className="badge bg-warning text-dark">
                                            {Array(project.stars).fill('★').join(' ')}
                                        </span>
                                    ) : (
                                        '-'
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Projects;