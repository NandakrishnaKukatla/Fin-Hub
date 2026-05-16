import { useEffect, useState } from "react";
import "./index.css";

export default function Market() {
    const [stock, setStock] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStock() {
            try {
                const res = await fetch(
                    "https://finnhub.io/api/v1/quote?symbol=AAPL&token=d83c89pr01qjsh1l0ihgd83c89pr01qjsh1l0ii0"
                );
                const data = await res.json();
                setStock(data);
                console.log(data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        fetchStock();
    }, []);

    const isPositive = stock && stock.d >= 0;

    return (
        <div className="market-container">
            <div className="market-header">
                <h1>Market Dashboard</h1>
                <p>Real-time data and insights for your tracked assets.</p>
            </div>

            {loading ? (
                <div className="loading-state">
                    <div className="spinner"></div>
                    <p>Loading market data...</p>
                </div>
            ) : stock ? (
                <div className="dashboard-grid">
                    {/* Main Ticker Card */}
                    <div className="main-ticker-card">
                        <div className="ticker-info">
                            <h2>AAPL</h2>
                            <span className="company-name">Apple Inc.</span>
                        </div>
                        <div className="ticker-price-wrapper">
                            <h1 className="current-price">${stock.c.toFixed(2)}</h1>
                            <div className={`price-change ${isPositive ? 'positive' : 'negative'}`}>
                                <span className="change-icon">{isPositive ? '▲' : '▼'}</span>
                                <span>{Math.abs(stock.d).toFixed(2)} ({Math.abs(stock.dp).toFixed(2)}%)</span>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Metrics Grid */}
                    <div className="metrics-container">
                        <div className="metric-card">
                            <span className="metric-label">Open Price</span>
                            <span className="metric-value">${stock.o.toFixed(2)}</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-label">Previous Close</span>
                            <span className="metric-value">${stock.pc.toFixed(2)}</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-label">High Today</span>
                            <span className="metric-value">${stock.h.toFixed(2)}</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-label">Low Today</span>
                            <span className="metric-value">${stock.l.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="error-state">
                    <p>Failed to load market data. Please try again later.</p>
                </div>
            )}
        </div>
    );
}