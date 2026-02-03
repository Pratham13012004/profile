import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: 'Full Stack Developer & Graphic Designer Intern',
            company: 'SYNTALIX',
            period: 'Mar 2025 – Jul 2025',
            location: 'Remote',
            type: 'Internship',
            responsibilities: [
                'Developed React.js interfaces styled with Tailwind CSS for consistent UI',
                'Designed engaging graphics and UI assets for internal projects',
                'Participated in iterative design sessions and peer reviews'
            ]
        },
        {
            title: 'Graphic Designer Intern',
            company: 'Cannibals Media',
            period: 'Feb 2025 – Jul 2025',
            location: 'Remote',
            type: 'Internship',
            responsibilities: [
                'Designed posters, logos, and social media graphics for 130+ clients globally',
                'Improved delivery efficiency by 25% via collaboration with design teams',
                'Enhanced client communication skills through active feedback sessions'
            ]
        },
        {
            title: 'Frontend Developer Intern',
            company: 'Tata Motors',
            period: 'May 2024 – Jun 2024',
            location: 'Lucknow',
            type: 'Internship',
            responsibilities: [
                'Built responsive web apps using HTML, CSS, and JavaScript with mobile-first design',
                'Improved site usability by 20% via performance optimization and cross-browser testing',
                'Collaborated in Agile sprints and peer code reviews'
            ]
        }
    ];

    const certifications = [
        'AICTE Internship Completion (AICTE)',
        'React Bootcamp (Let\'sUpgrade)',
        'Frontend Developer Internship Certificate (Tata Motors)',
        'Event Organization Certificate (KIIT University)'
    ];

    return (
        <div className="experience">
            <div className="experience-container">
                <motion.h1
                    className="page-title gradient-text"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Experience & Certifications
                </motion.h1>

                {/* Experience Timeline */}
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="experience-item glass"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="exp-header">
                                <div className="exp-icon">
                                    <FaBriefcase />
                                </div>
                                <div className="exp-title-section">
                                    <h2 className="exp-title">{exp.title}</h2>
                                    <h3 className="exp-company gradient-text">{exp.company}</h3>
                                </div>
                            </div>

                            <div className="exp-meta">
                                <span className="exp-meta-item">
                                    <FaCalendar /> {exp.period}
                                </span>
                                <span className="exp-meta-item">
                                    <FaMapMarkerAlt /> {exp.location}
                                </span>
                            </div>

                            <ul className="exp-responsibilities">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <motion.div
                    className="certifications glass"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h2 className="cert-title">Certifications</h2>
                    <div className="cert-grid">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="cert-badge"
                                whileHover={{ scale: 1.05 }}
                            >
                                {cert}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;
