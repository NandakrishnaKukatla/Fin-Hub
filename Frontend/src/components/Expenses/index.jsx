import React from 'react';
import './index.css';

const Expenses = () => {
    return (
        <div className="ledger-app">


            <div className="expenses-container">
                {/* Sidebar */}
                {/* <aside className="sidebar">
                    <div className="sidebar-brand">
                        <div className="brand-icon">
                            <span className="material-symbols-outlined icon-filled">
                                account_balance
                            </span>
                        </div>
                        <div className="brand-text">
                            <h2>Capital Alpha</h2>
                            <p>Wealth Management</p>
                        </div>
                    </div>

                    <div className="sidebar-menu">
                        <a className="sidebar-item active" href="#">
                            <span className="material-symbols-outlined">dashboard</span>
                            <span>Overview</span>
                        </a>
                        <a className="sidebar-item" href="#">
                            <span className="material-symbols-outlined">account_balance_wallet</span>
                            <span>Ledger</span>
                        </a>
                        <a className="sidebar-item" href="#">
                            <span className="material-symbols-outlined">insights</span>
                            <span>Analytics</span>
                        </a>
                        <a className="sidebar-item" href="#">
                            <span className="material-symbols-outlined">payments</span>
                            <span>Budget</span>
                        </a>
                        <a className="sidebar-item" href="#">
                            <span className="material-symbols-outlined">settings</span>
                            <span>Settings</span>
                        </a>
                    </div>

                    <div className="sidebar-footer">
                        <button className="btn-new-entry">
                            <span className="material-symbols-outlined">add</span>
                            New Entry
                        </button>
                    </div>
                </aside> */}

                {/* Main Content */}
                <main className="main-content">
                    <header className="header-section">
                        <div className="header-text">
                            <h1 className="font-headline text-primary">Financial Hub.</h1>
                            <p>Manage your capital with surgical precision. Monitor every transaction, optimize every category.</p>
                        </div>
                        <div className="header-stats">
                            <div className="stat-card">
                                <p className="stat-label">Total Spending</p>
                                <p className="stat-value">$12,450.00</p>
                            </div>
                            <div className="stat-card">
                                <p className="stat-label">Highest Category</p>
                                <div className="stat-inline">
                                    <span className="stat-value text-tertiary">Rent</span>
                                    <span className="stat-badge">42%</span>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Bento Grid Layout */}
                    <div className="bento-grid">
                        {/* Log Expense Form */}
                        <section className="card grid-col-4">
                            <h2 className="card-title font-headline text-primary">
                                <span className="material-symbols-outlined text-tertiary">receipt_long</span>
                                Log Expense
                            </h2>
                            <form>
                                <div className="form-group">
                                    <label className="form-label">Amount</label>
                                    <div className="input-wrapper">
                                        <span className="input-prefix">$</span>
                                        <input className="form-input has-prefix" placeholder="0.00" step="0.01" type="number" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Category</label>
                                    <select className="form-select">
                                        <option>Food & Dining</option>
                                        <option>Transport</option>
                                        <option>Rent & Utilities</option>
                                        <option>Entertainment</option>
                                        <option>Healthcare</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Notes</label>
                                    <textarea className="form-textarea" placeholder="Brief description..."></textarea>
                                </div>
                                <button className="btn-submit" type="submit">
                                    Commit Entry
                                </button>
                            </form>
                        </section>

                        {/* Visual Breakdown & Transactions Area */}
                        <section className="grid-col-8 visual-section">

                            {/* Chart Section */}
                            <div className="card">
                                <h2 className="card-title font-headline text-primary" style={{ marginBottom: '0.5rem' }}>Spending Breakdown</h2>
                                <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '2rem' }}>Monthly allocation of capital</p>

                                {/* Donut Visual */}
                                <div className="donut-container">
                                    <div className="donut-chart">
                                        <div className="donut-segment"></div>
                                        <div className="donut-center-text">
                                            <p className="stat-label">Total</p>
                                            <p className="donut-total text-primary">$4.2k</p>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginTop: '1rem' }}>
                                    <div className="legend-item">
                                        <div className="legend-label">
                                            <div className="legend-dot dot-tertiary"></div>
                                            <span>Rent & Utilities</span>
                                        </div>
                                        <span className="legend-value">$1,800</span>
                                    </div>
                                    <div className="legend-item">
                                        <div className="legend-label">
                                            <div className="legend-dot dot-primary"></div>
                                            <span>Food & Dining</span>
                                        </div>
                                        <span className="legend-value">$940</span>
                                    </div>
                                    <div className="legend-item">
                                        <div className="legend-label">
                                            <div className="legend-dot dot-secondary"></div>
                                            <span>Entertainment</span>
                                        </div>
                                        <span className="legend-value">$610</span>
                                    </div>
                                </div>
                            </div>

                            {/* Market Insights */}
                            <div className="insight-card">
                                {/* Note: I kept the original image source you provided */}
                                <img
                                    className="insight-bg"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1MVJQSBHsL2Jzla5yZLCu-sXSXaJEN4WVzUOMk0wi9Is3mUTk6xcHV0uyiwXbkabeXGL7RgPe8K_KWRl5gABy2qD3gwTMZrKHwTJjrPsU47eNgX8_zBYPmguTAVfxpdBIPh32v8TJc-h683KNEzIQTHeRM-FH4v6DvTF8GtKLjQdqYuy-RiEt02mQh1Ba9atsg-GzgA8POIvRG8TxSYiVTqDyvSI1waOyoiDibKwsvsOlBpQZ9kjpnrmpONzsgkzUQCu8jiuOnws"
                                    alt="Market Insights Background"
                                />
                                <div className="insight-content">
                                    <span className="insight-tag">Capital Insight</span>
                                    <h3 className="insight-title font-headline">Your spending on Transport decreased by 12% this month.</h3>
                                    <p className="insight-desc">Consider reallocating these savings into your primary investment ledger or high-yield savings account.</p>
                                </div>
                            </div>

                            {/* Recent Transactions */}
                            <div className="card transactions-full">
                                <div className="transactions-header">
                                    <h2 className="card-title font-headline text-primary" style={{ marginBottom: 0 }}>Recent Transactions</h2>
                                    <button className="btn-text">View All Ledger</button>
                                </div>

                                <div className="transaction-list">
                                    <div className="transaction-item">
                                        <div className="tx-info">
                                            <div className="tx-icon icon-tertiary">
                                                <span className="material-symbols-outlined">restaurant</span>
                                            </div>
                                            <div>
                                                <p className="tx-name">The Gilded Fork</p>
                                                <p className="tx-date">Food & Dining • Oct 24, 2023</p>
                                            </div>
                                        </div>
                                        <div className="tx-amount">
                                            <p className="tx-price">-$142.50</p>
                                            <p className="tx-status">Approved</p>
                                        </div>
                                    </div>

                                    <div className="transaction-item">
                                        <div className="tx-info">
                                            <div className="tx-icon icon-secondary">
                                                <span className="material-symbols-outlined">bolt</span>
                                            </div>
                                            <div>
                                                <p className="tx-name">City Grid Energy</p>
                                                <p className="tx-date">Rent & Utilities • Oct 22, 2023</p>
                                            </div>
                                        </div>
                                        <div className="tx-amount">
                                            <p className="tx-price">-$89.00</p>
                                            <p className="tx-status">Pending</p>
                                        </div>
                                    </div>

                                    <div className="transaction-item">
                                        <div className="tx-info">
                                            <div className="tx-icon icon-primary">
                                                <span className="material-symbols-outlined">commute</span>
                                            </div>
                                            <div>
                                                <p className="tx-name">Metro Transit</p>
                                                <p className="tx-date">Transport • Oct 21, 2023</p>
                                            </div>
                                        </div>
                                        <div className="tx-amount">
                                            <p className="tx-price">-$4.50</p>
                                            <p className="tx-status">Approved</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>

            {/* BottomNavBar (Mobile Only) */}
            <nav className="mobile-nav">
                <a href="#" className="mobile-nav-item active">
                    <span className="material-symbols-outlined icon-filled">home</span>
                    <span>Home</span>
                </a>
                <a href="#" className="mobile-nav-item">
                    <span className="material-symbols-outlined">list_alt</span>
                    <span>Ledger</span>
                </a>
                <a href="#" className="mobile-nav-item">
                    <span className="material-symbols-outlined">bar_chart</span>
                    <span>Stats</span>
                </a>
                <a href="#" className="mobile-nav-item">
                    <span className="material-symbols-outlined">person</span>
                    <span>Profile</span>
                </a>
            </nav>

            {/* Contextual FAB */}
            <button className="fab">
                <span className="material-symbols-outlined" style={{ fontSize: '1.875rem' }}>add</span>
            </button>
        </div>
    );
}


export default Expenses;