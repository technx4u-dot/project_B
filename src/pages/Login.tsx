import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error: authError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (authError) {
            setError(authError.message);
        } else {
            navigate('/dashboard');
        }
        setLoading(false);
    };

    return (
        <div>
            <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Login</h2>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            padding: '0.75rem',
                            borderRadius: '4px',
                            border: '1px solid var(--border-color)',
                            backgroundColor: 'var(--bg-primary)',
                            color: 'var(--text-primary)'
                        }}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                            padding: '0.75rem',
                            borderRadius: '4px',
                            border: '1px solid var(--border-color)',
                            backgroundColor: 'var(--bg-primary)',
                            color: 'var(--text-primary)'
                        }}
                    />
                </div>
                {error && <p style={{ color: 'var(--error-color)', fontSize: '0.85rem' }}>{error}</p>}
                <button type="submit" disabled={loading} className="btn-primary" style={{ marginTop: '0.5rem' }}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Don't have an account? <Link to="/signup" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Sign up</Link>
            </p>
        </div>
    );
};

export default Login;
