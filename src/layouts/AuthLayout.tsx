import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--bg-primary)',
            padding: '1rem'
        }}>
            <div className="premium-card" style={{ width: '100%', maxWidth: '400px' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;
