import React from "react";
import * as SecureStore from 'expo-secure-store';

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {},
});

function ThemeProvider({ children }: any) {
    const [theme, setTheme] = React.useState('light');

    const getTheme = async () => {
        const theme = await SecureStore.getItemAsync('@efne-theme');

        if(theme) { 
            setTheme(theme);
        }
    };

    React.useEffect(() => {
        getTheme();
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        SecureStore.setItemAsync('@efne-theme', theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
const useThemeContext = () => React.useContext(ThemeContext);

export { ThemeProvider, useThemeContext };