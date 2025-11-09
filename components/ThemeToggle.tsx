import React, { useState, useEffect } from 'react';

const portfolio = 'portfolio';
const business = 'business';

export const ThemeToggle: React.FC = () => {

    const [theme, setTheme] = useState<'portfolio' | 'business' | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Get saved theme or use system preference
        const savedTheme = localStorage.getItem('theme') as 'portfolio' | 'business' | null;

        if (savedTheme) {
            setTheme(savedTheme);
            applyTheme(savedTheme);
        } else {
            // Detect system preference
            const prefersDark = globalThis.matchMedia('(prefers-color-scheme: dark)').matches;
            const defaultTheme: 'portfolio' | 'business' = prefersDark ? business : portfolio;
            setTheme(defaultTheme);
            applyTheme(defaultTheme);
        }
    }, []);

    const applyTheme = (newTheme: 'portfolio' | 'business') => {
        // Remove all theme attributes first
        delete document.documentElement.dataset.theme;

        // Set new theme
        document.documentElement.dataset.theme = newTheme;

        // Also set it on document for DaisyUI
        document.documentElement.classList.toggle('dark', newTheme === business);

        // Save to localStorage
        localStorage.setItem('theme', newTheme);

        // Update state
        setTheme(newTheme);
    };

    const toggleTheme = () => {
        const newTheme = theme === portfolio ? business : portfolio;
        applyTheme(newTheme);
    };

    if (!mounted) {
        return (
            <button className="btn btn-sm btn-ghost rounded-full" disabled>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15a5 5 0 100-10 5 5 0 000 10z" />
                </svg>
            </button>
        );
    }

    const isLight = theme === portfolio;

    return (
        <button
            onClick={toggleTheme}
            className="btn btn-sm btn-ghost rounded-full gap-2"
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            title={isLight ? 'Dark Mode' : 'Light Mode'}
        >
            {/* Sun Icon - shows in light mode */}
            <svg
                className={`w-5 h-5 transition-all duration-300 ${
                    isLight ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <circle cx="12" cy="12" r="5" strokeWidth="2" />
                <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2" />
                <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2" />
                <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2" />
                <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2" />
            </svg>

            {/* Moon Icon - shows in dark mode */}
            <svg
                className={`w-5 h-5 transition-all duration-300 absolute ${
                    isLight ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
        </button>
    );
};
