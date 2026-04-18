import React, { useState } from 'react';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import UserDetails from '../User-Details';
import './index.css';

const Home = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleLogout = () => {
        Cookies.remove("token");
        navigate("/login");
    };

    const testimonialsData = [
        {
            name: "Sarah Jenkins",
            image: "",
            review: "The expense tracker is a lifesaver. It automatically categorized my spending and I found $200 in subscriptions I forgot about!",
            rating: 4
        },
        {
            name: "David Chen",
            image: "",
            review: "Market insights are lightning fast. Would love to see a few more crypto options, but the stock data is incredibly solid.",
            rating: 5
        },
        {
            name: "Priya Sharma",
            image: "",
            review: "Chatting 1-on-1 with a financial expert cleared up all my retirement doubts. Highly recommend to anyone feeling lost.",
            rating: 4
        },
        {
            name: "Alex Turner",
            image: "",
            review: "The automated savings vault built my emergency fund without me even noticing. The UI is also incredibly smooth.",
            rating: 5
        },
        {
            name: "Marcus Ray",
            image: "",
            review: "Great app overall. The UI is clean and feels premium, though I really wish there was a dark mode toggle!",
            rating: 4
        },
        {
            name: "Elena Gomez",
            image: "",
            review: "Helped me consolidate my debts. Setting custom budget limits for weekends is exactly the feature I needed.",
            rating: 4
        },
        {
            name: "Rahul Verma",
            image: "",
            review: "The candlestick charts are good, but adding advanced technical indicators would make it perfect for day traders.",
            rating: 3
        },
        {
            name: "Jessica Wong",
            image: "",
            review: "Finally, a finance app that doesn't feel overwhelming. Beautiful design, easy to use, and no annoying hidden fees.",
            rating: 5
        }
    ];
    return (
        <div className="app-container">
            {/* Hero Section */}
            <header className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Wealth management at your fingertips</h1>
                    <p className="hero-subtitle">Track spending, understand markets, and grow your wealth—all in one place.</p>
                    <div className="hero-actions">

                        <div>
                            <button
                                className="btn-primary"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Add Basic Details
                            </button>

                            {isModalOpen && (
                                <UserDetails onClose={() => setIsModalOpen(false)} />
                            )}

                        </div>
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
                    <div className="graphic-card large-card float-2">
                        <img src="https://res.cloudinary.com/dgmmilmk5/image/upload/v1776415375/Fin-Hub_Expense_tracker_s7cyzq.png" alt="" />
                    </div>
                </div>
            </section>

            {/* Features Grid - Updated to match the 4 sections */}
            <section className="features-bento-section">
                <div className="section-header">
                    <h2>Everything You Need to Build Wealth</h2>
                    <p>From day-to-day budgeting to long-term investing, we have you covered.</p>
                </div>

                <div className="bento-grid">
                    {/* Card 1: Expenses */}
                    <div className="bento-card wide-card glass-panel">
                        <div className="card-content">
                            <h3>Expenses</h3>
                            <p>Gain complete visibility into your spending habits with AI-driven analytics.</p>
                            <div className="insight-tags">
                                <span className="glass-tag">🍔 Food: $450</span>
                                <span className="glass-tag">🏠 Rent: $1,200</span>
                            </div>
                        </div>
                        <div className="card-visual">
                            {/* CSS Bar Chart Illustration */}
                            <div className="css-bar-chart">
                                <div className="bar"><div className="fill" style={{ height: '40%' }}></div></div>
                                <div className="bar"><div className="fill highlight" style={{ height: '85%' }}></div></div>
                                <div className="bar"><div className="fill" style={{ height: '60%' }}></div></div>
                                <div className="bar"><div className="fill" style={{ height: '30%' }}></div></div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Market */}
                    <div className="bento-card tall-card glass-panel">
                        <div className="card-content">
                            <h3>Market</h3>
                            <p>Analyze trends and discover high-yield opportunities in real-time.</p>
                        </div>
                        <div className="card-visual">
                            {/* CSS Candlestick Illustration */}
                            <div className="css-candlesticks">
                                <div className="candle up"><div className="wick"></div><div className="body"></div></div>
                                <div className="candle down"><div className="wick"></div><div className="body"></div></div>
                                <div className="candle up tall"><div className="wick"></div><div className="body"></div></div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Expert Advice */}
                    <div className="bento-card square-card glass-panel">
                        <div className="card-content">
                            <h3>Expert Advice</h3>
                            <p>Connect 1-on-1 with certified advisors for tailored strategies.</p>
                        </div>
                        <div className="card-visual">
                            {/* CSS Chat Bubbles Illustration */}
                            <div className="css-chat">
                                <div className="bubble left">Hello! How can I optimize my portfolio?</div>
                                <div className="bubble right">Let's look at your risk profile.</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Savings */}
                    <div className="bento-card square-card glass-panel">
                        <div className="card-content">
                            <h3>Savings</h3>
                            <p>Automate your emergency fund and achieve milestones.</p>
                        </div>
                        <div className="card-visual">
                            {/* CSS Vault/Progress Ring Illustration */}
                            <div className="css-progress-ring">
                                <div className="inner-circle">
                                    <span>75%</span>
                                    <small>Goal Met</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonial Section */}
            <section className="scrolling-testimonials-section">
                <div className="section-header text-center">
                    <h2>Trusted by 16M+ Users</h2>
                    <p>See how people are taking control of their wealth with Fin-Hub.</p>
                </div>

                <div className="testimonials-track">
                    {testimonialsData.map((testimonial, index) => (
                        <div className="testimonial-card glass-panel" key={index}>
                            <div className="card-header">
                                <div className="avatar-circle">
                                    {testimonial.image ? (
                                        <img src={testimonial.image} alt={testimonial.name} />
                                    ) : (
                                        <span className="initial">{testimonial.name.charAt(0)}</span>
                                    )}
                                </div>
                                <div className="user-info">
                                    <h4>{testimonial.name}</h4>
                                    <div className="stars">
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                style={{
                                                    color: i < (testimonial.rating || 5) ? '#fbbf24' : '#ffffff',
                                                    textShadow: i < (testimonial.rating || 5) ? 'none' : '0 0 1px #94a3b8'
                                                }}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="review-text">"{testimonial.review}"</p>
                        </div>
                    ))}
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