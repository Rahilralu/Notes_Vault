import { useState, useEffect } from 'react'

function Dashboard() {
    const [token, setToken] = useState('')

    useEffect(() => {
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return null;
        }

        const t = getCookie('token')
        if (t) {
            setToken(t)
        } else {
            setToken('No token found in cookie.')
        }
    }, [])

    return (
        <div className="dashboard-container">
            <div className="token-display">
                JWT Token: {token}
            </div>
        </div>
    )
}

export default Dashboard
