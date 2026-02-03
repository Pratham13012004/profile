import { useState, useEffect, useRef } from 'react';
import './App.css';
import './index.css';
import PageContainer from './components/PageContainer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState(0);
    const isScrolling = useRef(false);
    const scrollAccumulator = useRef(0);

    const pages = [
        <Home key="home" />,
        <About key="about" />,
        <Skills key="skills" />,
        <Experience key="experience" />,
        <Projects key="projects" />,
        <Contact key="contact" />
    ];

    const handleNavigate = (newPage) => {
        if (newPage >= 0 && newPage < pages.length && !isScrolling.current) {
            setDirection(newPage > currentPage ? 1 : -1);
            setCurrentPage(newPage);
            isScrolling.current = true;
            scrollAccumulator.current = 0;
            setTimeout(() => {
                isScrolling.current = false;
            }, 1400); // Match animation duration
        }
    };

    // Enhanced scroll navigation with flipbook behavior
    useEffect(() => {
        const handleWheel = (e) => {
            if (isScrolling.current) {
                e.preventDefault();
                return;
            }

            // Find the scrollable content area
            const scrollableElement = document.querySelector('.about, .skills, .experience, .projects, .contact');

            if (scrollableElement) {
                const { scrollTop, scrollHeight, clientHeight } = scrollableElement;
                const isAtTop = scrollTop === 0;
                const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 5;

                // Accumulate scroll delta for smoother triggering
                scrollAccumulator.current += e.deltaY;

                // Trigger page flip when accumulated scroll exceeds threshold
                const scrollThreshold = 100;

                if (scrollAccumulator.current > scrollThreshold && isAtBottom) {
                    // Scroll down - at bottom of content, flip to next page
                    e.preventDefault();
                    handleNavigate(currentPage + 1);
                    scrollAccumulator.current = 0;
                } else if (scrollAccumulator.current < -scrollThreshold && isAtTop) {
                    // Scroll up - at top of content, flip to previous page
                    e.preventDefault();
                    handleNavigate(currentPage - 1);
                    scrollAccumulator.current = 0;
                } else if (!isAtTop && !isAtBottom) {
                    // Reset accumulator when scrolling within content
                    scrollAccumulator.current = 0;
                }
                // Otherwise, allow normal scrolling within the page
            } else {
                // No scrollable content (Home page) - use scroll accumulation
                e.preventDefault();
                scrollAccumulator.current += e.deltaY;

                const scrollThreshold = 150;

                if (scrollAccumulator.current > scrollThreshold) {
                    handleNavigate(currentPage + 1);
                    scrollAccumulator.current = 0;
                } else if (scrollAccumulator.current < -scrollThreshold) {
                    handleNavigate(currentPage - 1);
                    scrollAccumulator.current = 0;
                }
            }
        };

        // Keyboard navigation for page flips
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
                e.preventDefault();
                handleNavigate(currentPage + 1);
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
                e.preventDefault();
                handleNavigate(currentPage - 1);
            } else if (e.key === 'Home') {
                e.preventDefault();
                handleNavigate(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                handleNavigate(pages.length - 1);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentPage]);

    return (
        <div className="app flipbook-container">
            <Navbar
                currentPage={currentPage}
                totalPages={pages.length}
                onNavigate={handleNavigate}
            />

            <div className="portfolio-book">
                <PageContainer currentPage={currentPage} direction={direction}>
                    {pages[currentPage]}
                </PageContainer>
            </div>

            {/* Page number indicator */}
            <div className="page-number">
                {currentPage + 1} / {pages.length}
            </div>
        </div>
    );
}

export default App;
