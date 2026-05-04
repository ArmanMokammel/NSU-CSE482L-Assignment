import React, { useState } from 'react';
import Card from '../../components/Card/Card';

const Skills = () => {
    const [expandedCourse, setExpandedCourse] = useState(null);

    const languages = [
        { name: 'Python', proficiency: 'Advanced', years: '3 years' },
        { name: 'JavaScript', proficiency: 'Intermediate', years: '2 years' },
        { name: 'Java', proficiency: 'Intermediate', years: '3 years' },
        { name: 'C / C++', proficiency: 'Intermediate', years: '3 years' },
        { name: 'SQL', proficiency: 'Intermediate', years: '3 years' },
    ];

    const webTechnologies = [
        { tech: 'HTML5', description: 'Semantic markup, forms, multimedia' },
        { tech: 'JavaScript', description: 'DOM manipulation, events, fetch API' },
        { tech: 'Django (Python)', description: 'REST APIs, Server Backend, templates' },
    ];

    const tools = [
        'Git & GitHub - version control and collaboration',
        'VS Code - primary code editor',
        'MySQL & PostgreSQL - relational databases',
        'Linux (Ubuntu) - development environment',
        'Figma - UI/UX wireframing and prototyping',
    ];

    const courses = [
        {
            id: 1,
            title: 'CSE115 - Programming Language I',
            description: 'Introduction to Python; variables, loops, functions, file handling.',
        },
        {
            id: 2,
            title: 'CSE225 - Data Structures',
            description: 'Arrays, linked lists, stacks, queues, trees, graphs, sorting & searching algorithms.',
        },
        {
            id: 3,
            title: 'CSE311 - Database Systems',
            description: 'Relational model, SQL, normalization, transactions.',
        },
        {
            id: 4,
            title: 'CSE370 - Software Engineering',
            description: 'SDLC, Agile methodology, requirements analysis, design patterns.',
        },
        {
            id: 5,
            title: 'CSE465 - Machine Learning',
            description: 'Supervised / unsupervised learning, neural networks, evaluation metrics.',
        },
    ];

    const getProficiencyBadge = (proficiency) => {
        const colors = {
            Advanced: 'bg-success',
            Intermediate: 'bg-info',
            Beginner: 'bg-warning',
        };
        return colors[proficiency] || 'bg-secondary';
    };

    return (
        <div className="container">
            <h1>My Skills</h1>
            <p>Below is a summary of the technologies and tools I have learned and used throughout my studies and personal projects.</p>

            <h2 className="mt-4">Programming Languages</h2>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Language</th>
                            <th>Proficiency Level</th>
                            <th>Years of Use</th>
                        </tr>
                    </thead>
                    <tbody>
                        {languages.map((lang) => (
                            <tr key={lang.name}>
                                <td>{lang.name}</td>
                                <td>
                                    <span className={`badge ${getProficiencyBadge(lang.proficiency)}`}>
                                        {lang.proficiency}
                                    </span>
                                </td>
                                <td>{lang.years}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h2 className="mt-4">Web Technologies</h2>
            <Card>
                <ul className="list-unstyled mb-0">
                    {webTechnologies.map((item) => (
                        <li key={item.tech}>
                            <span className="badge bg-primary me-2">{item.tech}</span> {item.description}
                        </li>
                    ))}
                </ul>
            </Card>

            <h2 className="mt-4">Tools & Platforms</h2>
            <ol className="list-group list-group-numbered mb-4">
                {tools.map((tool, index) => (
                    <li className="list-group-item" key={index}>{tool}</li>
                ))}
            </ol>

            <h2>Relevant Coursework</h2>
            <div className="accordion" id="courseworkAccordion">
                {courses.map((course) => (
                    <div className="accordion-item" key={course.id}>
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button ${expandedCourse === course.id ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                                aria-expanded={expandedCourse === course.id}
                            >
                                {course.title}
                            </button>
                        </h2>
                        {expandedCourse === course.id && (
                            <div className="accordion-body">
                                {course.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;