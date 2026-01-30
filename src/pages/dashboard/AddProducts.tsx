import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const AddProducts: React.FC = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleAddProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.from('products').insert([
            { name, price: parseFloat(price), description }
        ]);

        if (error) {
            setMessage(`Error: ${error.message}`);
        } else {
            setMessage('Product added successfully!');
            setName('');
            setPrice('');
            setDescription('');
        }
        setLoading(false);
    };

    return (
        <div style={{ maxWidth: '600px' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Add New Product</h2>
            <form onSubmit={handleAddProduct} className="premium-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Product Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Price ($)</label>
                    <input
                        type="number"
                        step="0.01"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', resize: 'vertical' }}
                    />
                </div>
                {message && <p style={{ color: message.startsWith('Error') ? 'var(--error-color)' : 'var(--success-color)', fontSize: '0.9rem' }}>{message}</p>}
                <button type="submit" disabled={loading} className="btn-primary">
                    {loading ? 'Adding...' : 'Add Product'}
                </button>
            </form>
        </div>
    );
};

export default AddProducts;
