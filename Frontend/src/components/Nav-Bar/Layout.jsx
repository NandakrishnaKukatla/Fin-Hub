import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './index.jsx';

const Layout = () => {
    return (
        <div className="app-container">
            {/* The Navbar stays here permanently */}
            <Navbar />

            {/* The Outlet acts as a placeholder. React Router swaps your page content in right here! */}
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;