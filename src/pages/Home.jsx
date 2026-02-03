import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import profilePhoto from '../assets/profile-photo.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                {/* Decorative Elements */}
                <div className="decorative-star" style={{ top: '10%', left: '5%' }}>✦</div>
                <div className="decorative-star" style={{ bottom: '15%', right: '10%' }}>✨</div>
                <div className="decorative-star small" style={{ top: '60%', left: '15%' }}>★</div>
                <div className="decorative-circle" style={{ top: '5%', right: '15%' }}></div>
                <div className="decorative-circle" style={{ bottom: '10%', left: '20%', opacity: 0.5 }}></div>

                {/* Content */}
                <div className="home-content">
                    {/* Photo Section */}
                    <motion.div
                        className="photo-section"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="photo-frame">
                            <div className="photo-decoration top-left">✦</div>
                            <div className="photo-decoration bottom-right">✦</div>
                            <img src={profilePhoto} alt="Pratham Kumar" className="profile-photo" />
                        </div>
                    </motion.div>

                    {/* Text Section */}
                    <div className="text-section">
                        {/* Large Decorative PORTFOLIO Text */}
                        <motion.div
                            className="portfolio-display"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h1 className="portfolio-word line1">PORTFOLIO</h1>
                            <h1 className="portfolio-word line2 gradient-stroke">PORTFOLIO</h1>
                            <h1 className="portfolio-word line3 gradient-fill">RTFOLIO</h1>
                            <h1 className="portfolio-word line4 outlined">RTFOLIO</h1>
                        </motion.div>

                        {/* Info Card */}
                        <motion.div
                            className="info-card glass"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <h2 className="name">Pratham Kumar</h2>
                            <p className="title gradient-text">Software Developer & Designer</p>

                            <div className="quick-contact">
                                <div className="contact-item">
                                    <FaMapMarkerAlt />
                                    <span>Bhubaneswar, Odisha</span>
                                </div>
                            </div>

                            <p className="tagline">
                                Crafting beautiful interfaces & intelligent solutions through code and design
                            </p>

                            <div className="social-links">
                                <a href="https://linkedin.com/in/pratham-kumar" target="_blank" rel="noopener noreferrer" className="social-btn">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/Pratham13012004" target="_blank" rel="noopener noreferrer" className="social-btn">
                                    <FaGithub />
                                </a>
                                <a href="mailto:pratham13012004@gmail.com" className="social-btn">
                                    <FaEnvelope />
                                </a>
                                <a href="tel:+917258953359" className="social-btn">
                                    <FaPhone />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Hint */}
                <motion.div
                    className="scroll-hint"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                >
                    <span>Scroll to explore</span>
                    <div className="scroll-icon">↓</div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
