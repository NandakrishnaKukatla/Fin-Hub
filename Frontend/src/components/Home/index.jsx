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
                    <span className="logo-icon">
                        <img
                            src="https://res.cloudinary.com/dox2gerhp/image/upload/v1775458814/Gemini_Generated_Image_1zrb5o1zrb5o1zrb_ocdviu.png"
                            alt="Fin-Hub Logo"
                            className='logo-img'
                        />
                    </span> Fin-Hub
                </div>
                <ul className="nav-links">
                    <li><a className="nav-link" href="#expense">Expenses</a></li>
                    <li><a className="nav-link" href="#market">Market</a></li>
                    <li><a className="nav-link" href="#expert-advice">Expert Advice</a></li>
                    <li><a className="nav-link" href="#savings">Savings</a></li>
                </ul>
                <button className="btn-primary" onClick={handleLogout}>Logout</button>
            </nav>

            {/* Hero Section */}
            <header className="hero-section">
                <div className="hero-content">
                    <h1>Take Control of Your Money—and Make It Grow</h1>
                    <p>Track every expense, navigate market trends, consult with top financial experts, and build your savings—all in one unified platform.</p>
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
                            <p>Millions trust us to guide their wealth-building journey.</p>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    {/* Replaced physical card with a unified financial dashboard placeholder */}
                    <div className="mockup-dashboard purple-card">
                        <p className="dashboard-header">Portfolio Overview</p>
                        <div className="dashboard-stats">
                            <div className="stat-box">
                                <span>Total Savings</span>
                                <strong>$24,500</strong>
                            </div>
                            <div className="stat-box">
                                <span>Market Growth</span>
                                <strong>+12.4%</strong>
                            </div>
                        </div>
                        <div className="dashboard-chart-placeholder">
                            {/* Placeholder for a line chart */}
                        </div>
                    </div>
                </div>
            </header>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stat-item">
                    <h2>524<span>M</span></h2>
                    <p>Transactions Tracked</p>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <h2>124<span>+</span></h2>
                    <p>Market Indices</p>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <h2>10<span>k+</span></h2>
                    <p>Verified Experts</p>
                </div>
            </section>

            {/* Split Feature Section */}
            <section className="split-feature">
                <div className="feature-text">
                    <h2>Smarter Tracking,<br />Better Decisions</h2>
                    <ul>
                        <li><strong>Expense Tracking:</strong> Auto-categorize your spending and pinpoint exactly where your money goes every month.</li>
                        <li><strong>Market Insights:</strong> Get real-time updates on stocks, crypto, and mutual funds tailored to your portfolio.</li>
                    </ul>
                    <button className="btn-secondary">Explore Dashboard <span>→</span></button>
                </div>
                <div className="feature-graphics">
                    {/* Placeholder for Market/Expense UI cards */}
                    <div className="graphic-card small-card float-1">Monthly Expenses: $2,150</div>
                    <div className="graphic-card large-card float-2">Market Trend Chart Graphic Here</div>
                </div>
            </section>

            {/* Features Grid - Updated to match the 4 sections */}
            <section className="features-grid-section">
                <div className="section-header">
                    <h2>Everything You Need to Build Wealth</h2>
                    <p>From day-to-day budgeting to long-term investing, we have you covered.</p>
                </div>
                <div className="grid-container four-col-grid">
                    <div className="grid-card feature-card-1">
                        <h3>Expenses</h3>
                        <p>Gain complete visibility into your spending habits with AI-driven analytics and custom budget limits.</p>
                        <div className="insight-blocks">
                            <div className="block">Food: $450</div>
                            <div className="block">Rent: $1,200</div>
                        </div>
                    </div>
                    <div className="grid-card feature-card-2">
                        <h3>Market</h3>
                        <p>Stay ahead with real-time market data. Analyze trends and discover high-yield investment opportunities.</p>
                        <div className="chart-illustration">
                            {/* Placeholder for candlestick chart */}
                        </div>
                    </div>
                    <div className="grid-card feature-card-3">
                        <h3>Expert Advice</h3>
                        <p>Connect 1-on-1 with certified financial advisors to tailor a strategy specifically for your goals.</p>
                        <div className="chat-illustration">
                            {/* Placeholder for chat bubbles */}
                        </div>
                    </div>
                    <div className="grid-card feature-card-4">
                        <h3>Savings</h3>
                        <p>Set automated rules to grow your emergency fund and achieve your long-term financial milestones effortlessly.</p>
                        <div className="vault-illustration">
                            {/* Placeholder for a vault or piggy bank */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="testimonial-section">
                <div className="testimonial-image">
                    <div className="person-placeholder"></div>
                </div>
                <div className="testimonial-content">
                    <h2>Join 16M+ Users Taking Control of Their Wealth</h2>
                    <div className="review-box">
                        <p>"The expert advice feature completely changed how I invest in the market, while the expense tracker keeps my daily budget in check."</p>
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
                    <h2>Ready to Optimize Your Financial Life?</h2>
                    <p>Join today to track expenses, explore markets, talk to experts, and boost your savings.</p>
                    <button className="btn-primary">Get Started Now <span>→</span></button>
                </div>
            </section>

            {/* Footer */}
            <footer className="home-footer">
                <div className="footer-brand">
                    <div className="logo"><span className="logo-icon"> <img src="https://res.cloudinary.com/dox2gerhp/image/upload/v1775458814/Gemini_Generated_Image_1zrb5o1zrb5o1zrb_ocdviu.png" alt="Fin-Hub Logo" className='logo-img' /> </span> Fin-Hub</div>
                    <p>Your complete ecosystem for tracking, investing, and growing your wealth.</p>
                    <div className="app-links">
                        <button className="store-btn">Google Play</button>
                        <button className="store-btn">App Store</button>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="link-column">
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="#expense">Expense Tracker</a></li>
                            <li><a href="#market">Market Watch</a></li>
                            <li><a href="#expert-advice">Find an Expert</a></li>
                            <li><a href="#savings">Savings Goals</a></li>
                        </ul>
                    </div>
                    <div className="link-column">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Market News</a></li>
                            <li><a href="#">Financial Calculators</a></li>
                            <li><a href="#">Investment Guides</a></li>
                        </ul>
                    </div>
                    <div className="link-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact Support</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="link-column">
                        <h4>Social Media</h4>
                        <ul>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;