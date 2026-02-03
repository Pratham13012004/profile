import { motion } from 'framer-motion';
import { FaGraduationCap, FaLanguage, FaTrophy } from 'react-icons/fa';
import './About.css';

const About = () => {
    const education = [
        {
            institution: 'Kalinga Institute of Industrial Technology (KIIT University)',
            degree: 'B.Tech in Computer Science and Engineering',
            period: 'Sept 2022 – Present',
            location: 'Bhubaneswar'
        },
        {
            institution: 'Montfort Inter College',
            degree: 'CBSE Class XII',
            grade: '76%',
            period: '2022',
            location: 'Lucknow'
        },
        {
            institution: 'Montfort School',
            degree: 'CBSE Class X',
            grade: '89%',
            period: '2020',
            location: 'Lucknow'
        }
    ];

    const languages = ['English', 'Hindi', 'Bengali', 'Japanese (N5)'];

    const achievements = [
        'Awarded First Prize in North Zone Art Competition – Presented by Dr. A.P.J. Abdul Kalam',
        'Multiple recognitions for excellence in art, design, and creative projects',
        'Event Organizer, KIIT Fest (2023 & 2024) – Led logistics, branding, and design',
        'Managed exclusive merchandise branding and packaging for college societies'
    ];

    return (
        <div className="about">
            <div className="about-container">
                <motion.h1
                    className="page-title gradient-text"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h1>

                <div className="about-grid">
                    {/* Objective Section */}
                    <motion.div
                        className="about-card objective-card glass"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="card-title">Objective</h2>
                        <p className="card-text">
                            Aspiring Software Developer and Designer with hands-on experience in web development,
                            machine learning, and UI/UX design. Skilled in building responsive applications,
                            integrating AI models, and delivering creative design solutions. Seeking to leverage
                            technical expertise and problem-solving abilities in a dynamic organization.
                        </p>
                    </motion.div>

                    {/* Education Section */}
                    <motion.div
                        className="about-card glass"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="card-header">
                            <FaGraduationCap className="section-icon" />
                            <h2 className="card-title">Education</h2>
                        </div>
                        <div className="education-list">
                            {education.map((edu, index) => (
                                <div key={index} className="education-item">
                                    <h3 className="edu-institution">{edu.institution}</h3>
                                    <p className="edu-degree">{edu.degree}</p>
                                    {edu.grade && <p className="edu-grade">Grade: {edu.grade}</p>}
                                    <p className="edu-period">{edu.period} • {edu.location}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Languages Section */}
                    <motion.div
                        className="about-card glass"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="card-header">
                            <FaLanguage className="section-icon" />
                            <h2 className="card-title">Languages</h2>
                        </div>
                        <div className="languages-grid">
                            {languages.map((lang, index) => (
                                <div key={index} className="language-tag">
                                    {lang}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Achievements Section */}
                    <motion.div
                        className="about-card glass"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="card-header">
                            <FaTrophy className="section-icon" />
                            <h2 className="card-title">Achievements & Leadership</h2>
                        </div>
                        <ul className="achievements-list">
                            {achievements.map((achievement, index) => (
                                <li key={index} className="achievement-item">
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
