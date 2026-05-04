import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const Contact = () => {
    const contactInfo = [
        { label: 'Full Name', value: 'Arman Mokammel' },
        { label: 'University Email', value: 'arman.mokammel@northsouth.edu', type: 'email' },
        { label: 'Personal Email', value: 'armanmokammel@gmail.com', type: 'email' },
        { label: 'Phone', value: '+880 1700-000000' },
        { label: 'Location', value: 'Dhaka, Bangladesh' },
    ];

    const onlineProfiles = [
        { name: 'GitHub', url: 'https://github.com/ArmanMokammel/', description: 'My open-source work and repositories' },
        { name: 'LinkedIn', url: 'https://linkedin.com/arman-mokammel/', description: 'Professional profile and experience' },
        { name: 'IEEE NSU Student Branch', url: 'https://ieeensusb.org/member-profile/98955436/', description: 'My Volunteering Workplace' },
    ];

    const availability = [
        { day: 'Sunday - Thursday', hours: '10:00 AM - 6:00 PM', channel: 'Email' },
        { day: 'Friday', hours: 'Unavailable', channel: '-' },
    ];

    const [formData, setFormData] = useState({
        name: '',
        nsuId: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitMessage, setSubmitMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.nsuId.trim()) {
            newErrors.nsuId = 'NSU ID is required';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }
        if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id === 'textarea' ? 'message' : id]: value,
        }));

        if (errors[id === 'textarea' ? 'message' : id]) {
            setErrors((prev) => ({
                ...prev,
                [id === 'textarea' ? 'message' : id]: '',
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate form submission
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setSubmitMessage('✓ Message sent successfully!');
            setFormData({ name: '', nsuId: '', message: '' });
            setErrors({});

            setTimeout(() => setSubmitMessage(''), 3000);
        } catch (error) {
            setSubmitMessage('✗ Error submitting form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container">
            <h1>Contact Me</h1>
            <p>
                I am always open to new opportunities, collaborations, or just a friendly conversation about technology.
                Feel free to reach out through any of the channels below.
            </p>

            <div className="alert alert-success">
                <strong>💬 Note:</strong> Use the form below to send a message with your NSU ID.
            </div>

            <div className="row gy-4">
                <div className="col-lg-7">
                    <div className="card shadow-sm mb-4">
                        <div className="card-body">
                            <h2 className="h5">Contact Information</h2>
                            {contactInfo.map((info) => (
                                <p key={info.label}>
                                    <strong>{info.label}:</strong>{' '}
                                    {info.type === 'email' ? (
                                        <a href={`mailto:${info.value}`}>{info.value}</a>
                                    ) : (
                                        info.value
                                    )}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h2 className="h5">Online Profiles</h2>
                            <ul className="list-unstyled mb-0">
                                {onlineProfiles.map((profile) => (
                                    <li key={profile.name}>
                                        <a href={profile.url} target="_blank" rel="noopener noreferrer" title={`Visit my ${profile.name}`}>
                                            {profile.name}
                                        </a>{' '}
                                        <span className="badge bg-secondary"> - {profile.description}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <h2 className="mt-4">Availability</h2>
                    <div className="table-responsive mb-4">
                        <table className="table table-bordered">
                            <thead className="table-light">
                                <tr>
                                    <th>Day</th>
                                    <th>Available Hours</th>
                                    <th>Preferred Channel</th>
                                </tr>
                            </thead>
                            <tbody>
                                {availability.map((slot) => (
                                    <tr key={slot.day}>
                                        <td>{slot.day}</td>
                                        <td>{slot.hours}</td>
                                        <td>{slot.channel}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="2">
                                        <i>Response time: usually within 24 hours</i>
                                    </td>
                                    <td>Email / LinkedIn</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h2 className="h5">Send a Message</h2>

                            {submitMessage && (
                                <div className={`alert ${submitMessage.includes('successfully') ? 'alert-success' : 'alert-danger'}`}>
                                    {submitMessage}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="nsu_id" className="form-label">
                                        NSU ID
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.nsuId ? 'is-invalid' : ''}`}
                                        id="nsu_id"
                                        value={formData.nsuId}
                                        onChange={handleChange}
                                    />
                                    {errors.nsuId && <div className="invalid-feedback d-block">{errors.nsuId}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="textarea" className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                        id="textarea"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.message && <div className="invalid-feedback d-block">{errors.message}</div>}
                                </div>

                                <Button type="submit" className="w-100" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </Button>
                            </form>
                        </div>
                    </div>

                    <Link to="/" className="mt-3" style={{ display: 'block' }}>
                        <Button variant="outline-primary" className="w-100">
                            ← Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;