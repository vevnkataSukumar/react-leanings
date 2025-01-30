import React, { createContext, useContext, useState } from 'react';

// Create a context
export const ThemeContext = createContext();

// Create a provider
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            if (prevTheme === 'dark') {
                return 'light';
            } else {
                return 'dark';
            }
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};