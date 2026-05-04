import React from 'react';
import Button from '../Button/Button';

const ThemeToggle = ({ isDarkMode, onToggle }) => {
    return (
        <div className="theme-toggle-container" style={{ padding: '10px 0' }}>
            <Button
                variant={isDarkMode ? 'warning' : 'info'}
                onClick={onToggle}
                className="btn-sm"
            >
                {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </Button>
        </div>
    );
};

export default ThemeToggle;