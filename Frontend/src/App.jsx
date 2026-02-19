import { useState } from 'react'
import Login from './Login'
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
                {currentPage === 'login' && <Login onLoginSuccess={(email,password) => handleLoginSuccess(email,password,setCurrentPage)} />}
                {currentPage === 'dashboard' && <Dashboard />}
            </div>
        </>
    )
}

export default App
