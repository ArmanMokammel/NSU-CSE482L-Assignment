import React from 'react';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const About = () => {
    const education = [
        { degree: 'B.Sc. Computer Science', institution: 'North South University', year: '2022 - Present', result: 'CGPA 4.85' },
        { degree: 'A-Levels', institution: 'Playpen School', year: '2022', result: 'GPA 4.00' },
        { degree: 'O-Levels', institution: 'Playpen School', year: '2020', result: 'GPA 4.00' },
    ];

    const interests = [
        'Building small web applications and browser tools',
        'Reading about Artificial Intelligence and Machine Learning',
        'Contributing to open-source repositories on GitHub',
        'Playing chess online',
        'Photography and photo editing',
    ];

    return (
        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-4">
                    <Card
                        image="https://api.ieeensusb.org/media_files/user_profile_pictures/98955436_profile_picture.jpg"
                        title="Arman Mokammel"
                        description="CSE Student @ NSU"
                    >
                        <p>
                            <span className="badge bg-primary me-2">Full Stack</span>
                            <span className="badge bg-info text-dark me-2">Open Source</span>
                            <span className="badge bg-warning text-dark">IEEE NSU SB</span>
                        </p>
                        <Link to="/projects">
                            <Button variant="primary" className="btn-sm">View Projects</Button>
                        </Link>
                    </Card>
                </div>

                <div className="col-lg-8">
                    <h2>Who Am I?</h2>
                    <p>
                        My name is <b>Arman Mokammel</b> and I am a fourth-year <mark>Computer Science</mark> student
                        at North South University, Dhaka. I am passionate about technology and love solving complex problems.
                    </p>
                    <p>
                        I started programming in Class 6 when I wrote my first "Hello, World!" program in C#.
                        Since then I have never stopped learning. Today I work with web technologies, databases,
                        and web infrastructure on a daily basis.
                    </p>

                    <h2 className="mt-4">Education</h2>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>Degree / Level</th>
                                    <th>Institution</th>
                                    <th>Year</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {education.map((edu, index) => (
                                    <tr key={index}>
                                        <td>{edu.degree}</td>
                                        <td>{edu.institution}</td>
                                        <td>{edu.year}</td>
                                        <td>{edu.result}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h2 className="mt-4">Interests & Hobbies</h2>
                    <ul className="list-group mb-4">
                        {interests.map((interest, index) => (
                            <li className="list-group-item" key={index}>{interest}</li>
                        ))}
                    </ul>

                    <h2>Languages</h2>
                    <dl>
                        <dt>Bangla</dt>
                        <dd>Native speaker</dd>
                        <dt>English</dt>
                        <dd>Fluent</dd>
                    </dl>

                    <Link to="/projects">
                        <Button variant="outline-primary" className="mt-3">
                            See My Projects →
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;