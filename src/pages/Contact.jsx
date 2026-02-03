import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        try {
            // Replace with your EmailJS credentials
            // You need to sign up at https://www.emailjs.com/ and get these values
            const result = await emailjs.send(
                'service_blwtmtn',  // Replace with your EmailJS service ID
                'template_rai1cvm', // Replace with your EmailJS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Pratham Kumar',
                },
                'IOFHCzoxd4nYfO0H0'  // Replace with your EmailJS public key
            );

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <div className="contact">
            <div className="contact-container">
                <motion.h1
                    className="page-title gradient-text"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Get In Touch
                </motion.h1>

                <div className="contact-content">
                    {/* Contact Information */}
                    <motion.div
                        className="contact-info-section"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="contact-card glass">
                            <h2 className="contact-subtitle">Let's Connect</h2>
                            <p className="contact-description">
                                I'm always open to discussing new projects, creative ideas, or opportunities
                                to be part of your visions. Feel free to reach out!
                            </p>

                            <div className="contact-details">
                                <a href="mailto:pratham13012004@gmail.com" className="contact-detail-item">
                                    <div className="detail-icon">
                                        <FaEnvelope />
                                    </div>
                                    <div className="detail-text">
                                        <span className="detail-label">Email</span>
                                        <span className="detail-value">pratham13012004@gmail.com</span>
                                    </div>
                                </a>

                                <a href="tel:+917258953359" className="contact-detail-item">
                                    <div className="detail-icon">
                                        <FaPhone />
                                    </div>
                                    <div className="detail-text">
                                        <span className="detail-label">Phone</span>
                                        <span className="detail-value">+91-7258953359</span>
                                    </div>
                                </a>

                                <a href="https://linkedin.com/in/pratham-kumar" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                                    <div className="detail-icon">
                                        <FaLinkedin />
                                    </div>
                                    <div className="detail-text">
                                        <span className="detail-label">LinkedIn</span>
                                        <span className="detail-value">linkedin.com/in/pratham-kumar</span>
                                    </div>
                                </a>

                                <a href="https://github.com/Pratham13012004" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                                    <div className="detail-icon">
                                        <FaGithub />
                                    </div>
                                    <div className="detail-text">
                                        <span className="detail-label">GitHub</span>
                                        <span className="detail-value">github.com/Pratham13012004</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="contact-form-section"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form className="contact-form glass" onSubmit={handleSubmit}>
                            <h2 className="form-title">Send a Message</h2>

                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    placeholder="Tell me about your project or just say hi!"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        <FaPaperPlane /> Send Message
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="form-message success">
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="form-message error">
                                    ✗ Please configure EmailJS in Contact.jsx to enable email functionality.
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
