import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from './index.jsx';
import Cookies from 'js-cookie';

const Layout = () => {
    const token = Cookies.get('token');

    // If there's no auth token, redirect to the login page
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="layout-root">
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