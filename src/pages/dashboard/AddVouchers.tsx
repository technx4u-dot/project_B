import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const AddVouchers: React.FC = () => {
    const [code, setCode] = useState('');
    const [discount, setDiscount] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleAddVoucher = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.from('vouchers').insert([
            { code, discount_amount: parseFloat(discount) }
        ]);

        if (error) {
            setMessage(`Error: ${error.message}`);
        } else {
            setMessage('Voucher added successfully!');
            setCode('');
            setDiscount('');
        }
        setLoading(false);
    };

    return (
        <div style={{ maxWidth: '600px' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Add New Voucher</h2>
            <form onSubmit={handleAddVoucher} className="premium-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Voucher Code</label>
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                        placeholder="e.g. WELCOME20"
                        style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Discount Amount ($)</label>
                    <input
                        type="number"
                        step="0.01"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        required
                        style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                    />
                </div>
                {message && <p style={{ color: message.startsWith('Error') ? 'var(--error-color)' : 'var(--success-color)', fontSize: '0.9rem' }}>{message}</p>}
                <button type="submit" disabled={loading} className="btn-primary">
                    {loading ? 'Adding...' : 'Add Voucher'}
                </button>
            </form>
        </div>
    );
};

export default AddVouchers;
