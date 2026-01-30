import React from 'react';

const UserManagement: React.FC = () => {
    return (
        <div>
            <h2 style={{ marginBottom: '1.5rem' }}>User Management</h2>
            <div className="premium-card">
                <p style={{ color: 'var(--text-secondary)' }}>
                    User management module. In a basic setup, you can list and manage user profiles here.
                </p>
                <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ textAlign: 'left', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-color)' }}>
                                <th style={{ padding: '1rem' }}>User</th>
                                <th style={{ padding: '1rem' }}>Status</th>
                                <th style={{ padding: '1rem' }}>Joined</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '1rem' }}>admin@example.com</td>
                                <td style={{ padding: '1rem' }}><span style={{ color: 'var(--success-color)' }}>Active</span></td>
                                <td style={{ padding: '1rem' }}>Jan 30, 2026</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
