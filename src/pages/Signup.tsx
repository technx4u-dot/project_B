import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const Signup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error: authError } = await supabase.auth.signUp({
            email,
            password,
        });

        if (authError) {
            setError(authError.message);
        } else {
            setSuccess(true);
            setTimeout(() => navigate('/login'), 3000);
        }
        setLoading(false);
    };

    if (success) {
        return (
            <div style={{ textAlign: 'center' }}>
                <h2 style={{ marginBottom: '1rem', color: 'var(--success-color)' }}>Success!</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Please check your email to verify your account. Redirecting to login...</p>
            </div>
        );
    }

    return (
        <div>
            <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Create Account</h2>
            <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                    {loading ? 'Creating account...' : 'Sign Up'}
                </button>
            </form>
            <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Already have an account? <Link to="/login" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Login</Link>
            </p>
        </div>
    );
};

export default Signup;
