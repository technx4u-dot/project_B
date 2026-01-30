import React from 'react';
import { Truck } from 'lucide-react';

const ShippingManagement: React.FC = () => {
    return (
        <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Shipping Management</h2>
            <div className="premium-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)', padding: '0.75rem', borderRadius: '8px' }}>
                        <Truck size={24} />
                    </div>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Manage and track all outgoing shipments here.
                    </p>
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-color)' }}>
                            <th style={{ padding: '1rem' }}>Order ID</th>
                            <th style={{ padding: '1rem' }}>Destination</th>
                            <th style={{ padding: '1rem' }}>Status</th>
                            <th style={{ padding: '1rem' }}>Carrier</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '1rem' }}>#ORD-7392</td>
                            <td style={{ padding: '1rem' }}>San Francisco, CA</td>
                            <td style={{ padding: '1rem' }}><span style={{ color: 'var(--success-color)' }}>In Transit</span></td>
                            <td style={{ padding: '1rem' }}>FedEx</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShippingManagement;
