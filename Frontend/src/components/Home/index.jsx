import React from 'react';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import './index.css';

const Home = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        Cookies.remove("token");
        navigate("/login");
    };
    return (
        <div className="app-container">
            <nav className="navbar">
                <div className="logo">
                    <span className="logo-icon"> <img src="https://res.cloudinary.com/dox2gerhp/image/upload/v1775458814/Gemini_Generated_Image_1zrb5o1zrb5o1zrb_ocdviu.png" alt="Fin-Hub Logo" className='logo-img' /></span> Fin-Hub
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#cards">My Cards</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className="btn-primary" onClick={handleLogout}>Logout</button>
            </nav>

            {/* Hero Section */}
            <header className="hero-section">
                <div className="hero-content">
                    <h1>Effortless Finance<br />for a Smarter Future</h1>
                    <p>Track expenses, optimize budgets, and grow wealth with our smart insights. Secure and seamless finance solutions in one platform.</p>
                    <div className="hero-actions">
                        <button className="btn-primary">Start For Free <span>→</span></button>
                    </div>
                    <div className="trust-badge">
                        <div className="avatars">
                            <div className="avatar"></div>
                            <div className="avatar"></div>
                            <div className="avatar"></div>
                        </div>
                        <div className="trust-text">
                            <strong>10 Million+</strong>
                            <p>Millions trust us our financial services to manage their smart money.</p>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    {/* Placeholder for the hand holding the card */}
                    <div className="mockup-card purple-card">
                        <p className="card-logo">Bankio</p>
                        <p className="card-number">5789 **** **** 2847</p>
                        <div className="card-details">
                            <span>Jane Doe</span>
                            <span>04/28</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stat-item">
                    <h2>524<span>M</span></h2>
                    <p>Users Worldwide</p>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <h2>124<span>+</span></h2>
                    <p>Countries</p>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <h2>184<span>M</span></h2>
                    <p>Customer Review</p>
                </div>
            </section>

            {/* Split Feature Section */}
            <section className="split-feature">
                <div className="feature-text">
                    <h2>Smarter Finance<br />Better Decisions</h2>
                    <ul>
                        <li>Get 5% Cash Back On Everyday Purchases, 2% On Everything Else</li>
                        <li>Extra Spending Power When You Have Rewards Checking Through Upgraded</li>
                    </ul>
                    <button className="btn-secondary">Explore More <span>→</span></button>
                </div>
                <div className="feature-graphics">
                    {/* Placeholder for UI cards/charts */}
                    <div className="graphic-card small-card float-1">Balance: $6,500</div>
                    <div className="graphic-card large-card float-2">Chart Graphic Here</div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="features-grid-section">
                <div className="section-header">
                    <h2>Simple, Fast & Hassle-Free</h2>
                    <p>Sign Up, Connect Accounts, And Manage Finances Effortlessly With Smart Tracking And Budgeting.</p>
                </div>
                <div className="grid-container">
                    <div className="grid-card feature-card-1">
                        <h3>Sync your bank, wallet, or cards securely.</h3>
                        <p>Create a custom card that reflects your unique style and personality.</p>
                        <div className="card-stack-illustration">
                            {/* Illustration placeholders */}
                            <div className="stack-card back"></div>
                            <div className="stack-card front"></div>
                        </div>
                    </div>
                    <div className="grid-card feature-card-2">
                        <h3>Get AI-driven insights to manage spending and grow wealth.</h3>
                        <p>Track your spending patterns, analyze income vs. expenses easily.</p>
                        <div className="insight-blocks">
                            <div className="block">Freelance: $1,500</div>
                            <div className="block">Salary: $4,000</div>
                        </div>
                    </div>
                    <div className="grid-card feature-card-3">
                        <h3>Create your account in minutes</h3>
                        <p>Create a custom card that reflects your unique style and personality.</p>
                        <div className="map-illustration"></div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="testimonial-section">
                <div className="testimonial-image">
                    {/* Placeholder for person image */}
                    <div className="person-placeholder"></div>
                </div>
                <div className="testimonial-content">
                    <h2>Join 16M+ Users Managing Money Smarter with Us</h2>
                    <div className="review-box">
                        <p>"Exceeded expectations. Made my vision a reality."</p>
                        <h4>Charlotte Anna</h4>
                        <div className="nav-arrows">
                            <span>←</span> <span className="active">→</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bottom-cta">
                <div className="cta-banner">
                    <h2>Take Control of Your Finances Today!</h2>
                    <p>Do you support international transactions? Yes, with multi-currency support.</p>
                    <button className="btn-primary">Get Started <span>→</span></button>
                </div>
            </section>

            {/* Footer */}
            <footer className="home-footer">
                <div className="footer-brand">
                    <div className="logo"><span className="logo-icon">▲</span> Bankio</div>
                    <p>Do you support international transactions? Yes, with multi-currency support.</p>
                    <div className="app-links">
                        <button className="store-btn">Google Play</button>
                        <button className="store-btn">App Store</button>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="link-column">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="link-column">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Personal Loan</a></li>
                            <li><a href="#">One Card</a></li>
                            <li><a href="#">Savings</a></li>
                        </ul>
                    </div>
                    <div className="link-column">
                        <h4>Community</h4>
                        <ul>
                            <li><a href="#">Community Hub</a></li>
                            <li><a href="#">Invite a Friend</a></li>
                            <li><a href="#">News & Blog</a></li>
                        </ul>
                    </div>
                    <div className="link-column">
                        <h4>Social Media</h4>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">YouTube</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;