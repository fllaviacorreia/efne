import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import AppNavigation from '@/navigation/AppNavigaton';
import AuthProvider from '@/context/AuthContext';
import { ThemeProvider, useThemeContext } from '@/context/ThemeContext';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { customMapping } from './custom-mapping';
import { default as customTheme } from './custom-theme.json';

function App() {
  const { theme } = useThemeContext();


  return (
    <ThemeProvider>
      <AuthProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={ theme === 'light' ? {...eva.light, ...customTheme} : {...eva.dark, ...customTheme}} customMapping={customMapping}>
          <NavigationContainer>
          <AppNavigation />
          </NavigationContainer>
        </ApplicationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
