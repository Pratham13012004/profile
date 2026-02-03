import { motion, AnimatePresence } from 'framer-motion';
import './PageContainer.css';

const PageContainer = ({ children, currentPage, direction }) => {
    // Advanced flipbook page-turn animation with page curl
    const pageVariants = {
        enter: (direction) => ({
            rotateY: direction > 0 ? 90 : -90,
            opacity: 0,
            x: direction > 0 ? '100%' : '-100%',
            transformOrigin: direction > 0 ? '0% 50%' : '100% 50%',
            scale: 0.95,
            filter: 'brightness(0.8)',
        }),
        center: {
            rotateY: 0,
            opacity: 1,
            x: 0,
            transformOrigin: '50% 50%',
            scale: 1,
            filter: 'brightness(1)',
        },
        exit: (direction) => ({
            rotateY: direction > 0 ? -90 : 90,
            opacity: 0.3,
            x: direction > 0 ? '-30%' : '30%',
            transformOrigin: direction > 0 ? '100% 50%' : '0% 50%',
            scale: 0.95,
            filter: 'brightness(0.6)',
        }),
    };

    const pageTransition = {
        duration: 1.3,
        ease: [0.45, 0, 0.55, 1],
    };

    // Shadow overlay for depth effect during flip
    const shadowVariants = {
        enter: {
            opacity: 0,
        },
        center: {
            opacity: 0,
        },
        exit: (direction) => ({
            opacity: [0, 0.3, 0],
        }),
    };

    return (
        <div className="page-wrapper">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={currentPage}
                    custom={direction}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={pageTransition}
                    className="animated-page"
                    style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                    }}
                >
                    {children}
                    {/* Page shadow for curl effect */}
                    <motion.div
                        className="page-shadow"
                        custom={direction}
                        variants={shadowVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={pageTransition}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default PageContainer;
