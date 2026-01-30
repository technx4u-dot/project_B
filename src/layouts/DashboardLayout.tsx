import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, ShoppingBag, Ticket, LogOut, Menu, X, Package, Truck } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const DashboardLayout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/login');
    };

    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'User Management', path: '/dashboard/users', icon: <Users size={20} /> },
        { name: 'Add Products', path: '/dashboard/products', icon: <ShoppingBag size={20} /> },
        { name: 'Add Vouchers', path: '/dashboard/vouchers', icon: <Ticket size={20} /> },
        { name: 'Orders', path: '/dashboard/orders', icon: <Package size={20} /> },
        { name: 'Shipping', path: '/dashboard/shipping', icon: <Truck size={20} /> },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
            {/* Sidebar */}
            <aside style={{
                width: isSidebarOpen ? '260px' : '0',
                transition: 'width 0.3s ease',
                backgroundColor: 'var(--bg-secondary)',
                borderRight: '1px solid var(--border-color)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
            }}>
                <div style={{ padding: '2rem 1.5rem', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                    TEMPLATE A
                </div>

                <nav style={{ flex: 1, padding: '0 1rem' }}>
                    {navItems.map((item) => (
                        <div
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '0.75rem 1rem',
                                margin: '4px 0',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                backgroundColor: location.pathname === item.path ? 'var(--text-primary)' : 'transparent',
                                color: location.pathname === item.path ? 'var(--bg-primary)' : 'var(--text-secondary)',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {item.icon}
                            <span style={{ fontWeight: 500 }}>{item.name}</span>
                        </div>
                    ))}
                </nav>

                <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)' }}>
                    <button
                        onClick={handleLogout}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '0.75rem 1rem',
                            width: '100%',
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: 'var(--error-color)',
                            fontWeight: 500
                        }}
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <header style={{
                    height: '64px',
                    borderBottom: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 1.5rem',
                    justifyContent: 'space-between',
                    backgroundColor: 'var(--bg-primary)'
                }}>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)' }}
                    >
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div style={{ fontWeight: 500 }}>
                        {navItems.find(item => location.pathname === item.path)?.name || 'Dashboard'}
                    </div>

                    <div style={{ width: '24px' }} /> {/* Spacer */}
                </header>

                <section style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
                    <Outlet />
                </section>
            </main>
        </div>
    );
};

export default DashboardLayout;
