import React, { useState } from 'react';
import './Auth.css'; // Import CSS for styling

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle authentication logic here
        console.log(isLogin ? 'Logging in' : 'Signing up', { email, password });
    };

    return (
        <div className="auth-container">
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                <p onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Create an account' : 'Already have an account?'}
                </p>
            </form>
        </div>
    );
};

export default Auth;