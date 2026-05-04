import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import React, { useState, useEffect } from 'react';

function MainLayout() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));

        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <Navbar isDarkMode={isDarkMode} />

            <div className="py-1" style={{
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f9fa',
                borderBottom: `1px solid ${isDarkMode ? '#404040' : '#dee2e6'}`
            }}>
                <div className="container">
                    <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
                </div>
            </div>

            <main className="p-4">
                <Outlet />
            </main>
            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
export default MainLayout;