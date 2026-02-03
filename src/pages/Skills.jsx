import { motion } from 'framer-motion';
import { FaCode, FaReact, FaPython, FaTools, FaPencilRuler } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            icon: <FaCode />,
            title: 'Programming',
            skills: ['Python', 'HTML5', 'CSS3'],
            color: '#ff006e'
        },
        {
            icon: <FaReact />,
            title: 'Frameworks',
            skills: ['React.js', 'Flask', 'TensorFlow', 'Tailwind CSS', 'Bootstrap'],
            color: '#7b2cbf'
        },
        {
            icon: <FaTools />,
            title: 'Tools',
            skills: ['Jupyter Notebook', 'VS Code', 'Google Colab', 'GitHub', 'Excel'],
            color: '#9d4edd'
        },
        {
            icon: <FaPencilRuler />,
            title: 'Design',
            skills: ['Photoshop', 'Illustrator', 'Blender (3D Modeling & Animation)'],
            color: '#ff4da6'
        }
    ];

    const coreSkills = [
        'Responsive Web Design',
        'UI/UX Prototyping',
        'Machine Learning',
        'Graphic Design',
        'Client Communication'
    ];

    return (
        <div className="skills">
            <div className="skills-container">
                <motion.h1
                    className="page-title gradient-text"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Skills & Expertise
                </motion.h1>

                {/* Technical Skills Grid */}
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="skill-card glass"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="skill-header" style={{ color: category.color }}>
                                <div className="skill-icon">{category.icon}</div>
                                <h2 className="skill-title">{category.title}</h2>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Core Skills */}
                <motion.div
                    className="core-skills glass"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2 className="core-skills-title gradient-text">Core Competencies</h2>
                    <div className="core-skills-grid">
                        {coreSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="core-skill-item"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                            >
                                <div className="core-skill-bullet"></div>
                                <span>{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
