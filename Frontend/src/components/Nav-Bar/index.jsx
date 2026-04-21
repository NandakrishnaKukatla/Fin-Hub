import React, { useState, useEffect } from 'react'; // Added hooks here
import { Link, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import './index.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogout = () => {
        Cookies.remove("token");
        navigate("/login", { replace: true });
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <span className="logo-icon">
                    <img
                        src="https://res.cloudinary.com/dox2gerhp/image/upload/v1775458814/Gemini_Generated_Image_1zrb5o1zrb5o1zrb_ocdviu.png"
                        alt="Fin-Hub Logo"
                        className='logo-img'
                    />
                </span> Fin-Hub
            </div>
            <ul className="nav-links">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/expenses">Expenses</Link></li>
                <li><Link className="nav-link" to="/market">Market</Link></li>
                <li><Link className="nav-link" to="/expert-advice">Expert Advice</Link></li>
                <li><Link className="nav-link" to="/savings">Savings</Link></li>
            </ul>
            <button className="btn-primary" onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;