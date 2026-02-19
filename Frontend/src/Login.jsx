import { useState } from 'react'
import './App.css'

function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        onLoginSuccess(email,password)
    }

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h2>Welcome Back</h2>
                <p className="subtitle">Enter your credentials to access the dashboard.</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="e.g. user@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="username"
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                        />
                    </div>
                    <button type="submit" className="login-btn">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
