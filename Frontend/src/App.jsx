import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
import AnimatedBackground from './components/AnimatedBackground'
import CustomCursor from './components/CustomCursor'
import './App.css'
import { handleLoginSuccess } from './app'

function App() {
    const [currentPage, setCurrentPage] = useState('login')


    return (
        <>
            <AnimatedBackground />
            <CustomCursor />
            <div className="app-container">
                {currentPage === 'login' && <Login onLoginSuccess={(email, password) => handleLoginSuccess(email, password, setCurrentPage)} onNavigate={setCurrentPage} />}
                {currentPage === 'signup' && <Signup onNavigate={setCurrentPage} />}
                {currentPage === 'dashboard' && <Dashboard />}
            </div>
        </>
    )
}

export default App
