import './Navbar.css';

const Navbar = ({ currentPage, totalPages, onNavigate }) => {
    const pages = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

    return (
        <>
            {/* Navigation Dots */}
            <div className="nav-dots">
                {pages.map((page, index) => (
                    <div
                        key={index}
                        className={`nav-dot ${currentPage === index ? 'active' : ''}`}
                        onClick={() => onNavigate(index)}
                    >
                        <span className="nav-dot-label">{page}</span>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="nav-arrows">
                <button
                    className="nav-arrow"
                    onClick={() => onNavigate(currentPage - 1)}
                    disabled={currentPage === 0}
                >
                    ←
                </button>
                <button
                    className="nav-arrow"
                    onClick={() => onNavigate(currentPage + 1)}
                    disabled={currentPage === totalPages - 1}
                >
                    →
                </button>
            </div>
        </>
    );
};

export default Navbar;
