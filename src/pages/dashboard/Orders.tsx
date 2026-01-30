import React from 'react';
import { Package } from 'lucide-react';

const Orders: React.FC = () => {
    return (
        <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Orders</h2>
            <div className="premium-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)', padding: '0.75rem', borderRadius: '8px' }}>
                        <Package size={24} />
                    </div>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Overview of customer orders and transactions.
                    </p>
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-color)' }}>
                            <th style={{ padding: '1rem' }}>Order ID</th>
                            <th style={{ padding: '1rem' }}>Customer</th>
                            <th style={{ padding: '1rem' }}>Date</th>
                            <th style={{ padding: '1rem' }}>Total</th>
                            <th style={{ padding: '1rem' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '1rem' }}>#ORD-7392</td>
                            <td style={{ padding: '1rem' }}>John Doe</td>
                            <td style={{ padding: '1rem' }}>Jan 30, 2026</td>
                            <td style={{ padding: '1rem' }}>$249.00</td>
                            <td style={{ padding: '1rem' }}><span style={{ color: 'var(--success-color)' }}>Processed</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
