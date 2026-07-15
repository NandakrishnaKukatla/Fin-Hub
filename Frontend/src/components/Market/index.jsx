import { useEffect, useState } from "react";
import "./index.css";

// --- SECURITY NOTE ---
// In a real app, never hardcode your API key. 
// If using Vite, use: import.meta.env.VITE_FINNHUB_API_KEY
const API_KEY = "d83c89pr01qjsh1l0ihgd83c89pr01qjsh1l0ii0";
const BASE_URL = "https://finnhub.io/api/v1";
const WATCHLIST = ["AAPL", "MSFT", "GOOGL", "NVDA"];

export default function Market() {
    const [marketData, setMarketData] = useState({
        stocks: [],
        news: [],
        forex: null
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMarketData() {
            const cachedData = sessionStorage.getItem("marketData");
            const cacheTimestamp = sessionStorage.getItem("marketDataTimestamp");

            if (cachedData && cacheTimestamp && (Date.now() - cacheTimestamp < 300000)) {
                setMarketData(JSON.parse(cachedData));
                setLoading(false);
                return;
            }

            try {
                const stockPromises = WATCHLIST.map(symbol =>
                    fetch(`${BASE_URL}/quote?symbol=${symbol}&token=${API_KEY}`)
                        .then(res => {
                            if (!res.ok) throw new Error("Rate limit exceeded or API error on Stocks");
                            return res.json();
                        })
                        .then(data => ({ symbol, ...data }))
                );

                const newsPromise = fetch(`${BASE_URL}/news?category=general&token=${API_KEY}`)
                    .then(res => {
                        if (!res.ok) throw new Error("Rate limit exceeded or API error on News");
                        return res.json();
                    });

                // 4. Fetch Forex
                const forexPromise = fetch(`${BASE_URL}/forex/rates?base=USD&token=${API_KEY}`)
                    .then(res => {
                        if (!res.ok) throw new Error("Rate limit exceeded or API error on Forex");
                        return res.json();
                    });

                // Resolve everything
                const [stocksData, newsData, forexData] = await Promise.all([
                    Promise.all(stockPromises),
                    newsPromise,
                    forexPromise
                ]);

                const newData = {
                    stocks: stocksData,
                    news: newsData.slice(0, 5),
                    forex: forexData.quote
                };

                setMarketData(newData);
                sessionStorage.setItem("marketData", JSON.stringify(newData));
                sessionStorage.setItem("marketDataTimestamp", Date.now().toString());

            } catch (err) {
                console.error("Error fetching market data:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchMarketData();
    }, []);

    if (loading) {
        return (
            <div className="market-container">
                <div className="loading-state">
                    <div className="spinner"></div>
                    <p>Loading market data...</p>
                </div>
            </div>
        );
    }

    // Render Error State
    if (error) {
        return (
            <div className="market-container">
                <div className="error-state">
                    <p>Failed to load market data: {error}</p>
                    <button onClick={() => sessionStorage.clear()}>Clear Cache & Retry</button>
                </div>
            </div>
        );
    }

    // Main Render
    return (
        <div className="market-container">
            <div className="market-header">
                <h1>Market Dashboard</h1>
                <p>Real-time data and insights for your tracked assets.</p>
            </div>

            <div className="dashboard-grid">
                <StockGrid stocks={marketData.stocks} />
                <NewsFeed news={marketData.news} />
                <ForexWidget forex={marketData.forex} />
            </div>
        </div>
    );
}

// ==========================================
// CHILD COMPONENTS
// ==========================================

function StockGrid({ stocks }) {
    if (!stocks || stocks.length === 0) return null;

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ color: "var(--purple-900)", fontSize: "1.5rem", borderBottom: "2px solid var(--border-light)", paddingBottom: "0.5rem" }}>
                My Watchlist
            </h2>
            <div className="metrics-container">
                {stocks.map((stock) => {
                    const isPositive = stock.d >= 0;
                    return (
                        <div className="metric-card" key={stock.symbol}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                                <span style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--purple-900)" }}>
                                    {stock.symbol}
                                </span>
                                <div className={`price-change ${isPositive ? 'positive' : 'negative'}`} style={{ padding: "0.25rem 0.5rem", fontSize: "0.85rem" }}>
                                    <span className="change-icon">{isPositive ? '▲' : '▼'}</span>
                                    <span>{Math.abs(stock.dp).toFixed(2)}%</span>
                                </div>
                            </div>

                            <span className="metric-value">
                                ${stock.c.toFixed(2)}
                            </span>

                            <span className="metric-label" style={{ marginTop: "0.5rem", fontSize: "0.8rem" }}>
                                {isPositive ? '+' : '-'}${Math.abs(stock.d).toFixed(2)} Today
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function NewsFeed({ news }) {
    if (!news || news.length === 0) return null;

    return (
        <div style={{ marginTop: "1rem" }}>
            <h2 style={{ color: "var(--purple-900)", fontSize: "1.5rem", borderBottom: "2px solid var(--border-light)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
                Latest Market News
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {news.map((article) => {
                    const date = new Date(article.datetime * 1000).toLocaleDateString();

                    return (
                        <a
                            key={article.id}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="metric-card"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "1.5rem",
                                textDecoration: "none",
                                padding: "1.25rem",
                                alignItems: "center"
                            }}
                        >
                            {article.image ? (
                                <img
                                    src={article.image}
                                    alt="news thumbnail"
                                    style={{ width: "140px", height: "90px", objectFit: "cover", borderRadius: "6px", flexShrink: 0 }}
                                />
                            ) : (
                                <div style={{ width: "140px", height: "90px", backgroundColor: "var(--border-light)", borderRadius: "6px", flexShrink: 0 }} />
                            )}

                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <h3 style={{ fontSize: "1.1rem", color: "var(--purple-900)", margin: 0, lineHeight: "1.3" }}>
                                    {article.headline}
                                </h3>
                                <p style={{ fontSize: "0.95rem", color: "var(--text-light)", margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                    {article.summary}
                                </p>
                                <span style={{ fontSize: "0.8rem", fontWeight: "600", color: "var(--purple-600)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                    {article.source} • {date}
                                </span>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

function ForexWidget({ forex }) {
    if (!forex) return null;

    const majorPairs = ["EUR", "GBP", "JPY", "CAD", "AUD", "CHF"];

    return (
        <div style={{ marginTop: "1rem", paddingBottom: "2rem" }}>
            <h2 style={{ color: "var(--purple-900)", fontSize: "1.5rem", borderBottom: "2px solid var(--border-light)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
                Global Exchange Rates (USD Base)
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
                {majorPairs.map((currency) => {
                    const rate = forex[currency];

                    if (!rate) return null;

                    return (
                        <div
                            key={currency}
                            className="metric-card"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "1.5rem 1rem",
                                gap: "0.5rem",
                                textAlign: "center"
                            }}
                        >
                            <span style={{ fontSize: "1rem", fontWeight: "600", color: "var(--text-light)", letterSpacing: "0.05em" }}>
                                USD / {currency}
                            </span>
                            <span style={{ fontSize: "1.4rem", color: "var(--text-dark)", fontWeight: "700" }}>
                                {rate.toFixed(4)}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}