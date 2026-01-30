import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { ShoppingBag, Ticket, Users } from 'lucide-react';

const DashboardOverview: React.FC = () => {
    const [stats, setStats] = useState({ products: 0, vouchers: 0, users: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            const { count: productCount } = await supabase.from('products').select('*', { count: 'exact', head: true });
            const { count: voucherCount } = await supabase.from('vouchers').select('*', { count: 'exact', head: true });

            // Note: Getting user count usually requires service role, 
            // but for this basic app we can just show dummy or skip.
            // We'll just show 0 for users for now or fetch from a profiles table if it existed.
            setStats({
                products: productCount || 0,
                vouchers: voucherCount || 0,
                users: 1 // Current user
            });
        };
        fetchStats();
    }, []);

    return (
        <div>
            <h2 style={{ marginBottom: '2rem' }}>Overview</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                <div className="premium-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px' }}>
                        <ShoppingBag size={24} />
                    </div>
                    <div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Total Products</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stats.products}</div>
                    </div>
                </div>
                <div className="premium-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px' }}>
                        <Ticket size={24} />
                    </div>
                    <div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Active Vouchers</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stats.vouchers}</div>
                    </div>
                </div>
                <div className="premium-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px' }}>
                        <Users size={24} />
                    </div>
                    <div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Users</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stats.users}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
