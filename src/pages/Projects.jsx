import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Calories Burn Predictor',
            description: 'Built a real-time web app to estimate calories burned using user-specific inputs. Trained and evaluated ML models including Regression, Random Forest, XGBoost, and Neural Networks.',
            technologies: ['Python', 'TensorFlow', 'Flask'],
            highlights: [
                'Real-time calorie estimation using ML',
                'Trained multiple models for best accuracy',
                'Deployed via Flask UI and Ngrok for public access'
            ],
            type: 'Machine Learning',
            color: '#ff006e'
        },
        {
            title: 'Tata Motors Webpage Clone',
            description: 'Developed a responsive clone of Tata Motors\' official website with pixel-perfect design and cross-browser compatibility.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            highlights: [
                'Responsive design for all devices',
                'Cross-browser compatible',
                'Mobile-first approach with performance optimization'
            ],
            type: 'Web Development',
            color: '#7b2cbf'
        }
    ];

    return (
        <div className="projects">
            <div className="projects-container">
                <motion.h1
                    className="page-title gradient-text"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Featured Projects
                </motion.h1>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="project-header">
                                <div className="project-type" style={{ borderColor: project.color }}>
                                    <span style={{ color: project.color }}>{project.type}</span>
                                </div>
                            </div>

                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>

                            <div className="project-highlights">
                                <h3>Key Features:</h3>
                                <ul>
                                    {project.highlights.map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-tech">
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className="tech-tag" style={{ borderColor: project.color }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* GitHub CTA */}
                <motion.div
                    className="github-cta glass"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <FaGithub className="github-icon" />
                    <div className="github-text">
                        <h3>More Projects on GitHub</h3>
                        <p>Check out more of my work and open-source contributions</p>
                    </div>
                    <a
                        href="https://github.com/Pratham13012004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        View GitHub <FaExternalLinkAlt />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
