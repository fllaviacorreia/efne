import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { customMapping } from './custom-mapping';
import { default as customTheme } from './custom-theme.json';
import { AthletesProvider } from './src/context/AthletesContext';
import { CategoriesProvider } from './src/context/CategoriesContext';
import { AuthProvider } from './src/context/AuthContext';
import { ThemeProvider, useThemeContext } from './src/context/ThemeContext';
import AppNavigation from './src/navigation/AppNavigaton';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  const { theme } = useThemeContext();


  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <AuthProvider>
          <CategoriesProvider>
            <AthletesProvider>
              <IconRegistry icons={EvaIconsPack} />
              <ApplicationProvider {...eva} theme={theme === 'light' ? { ...eva.light, ...customTheme } : { ...eva.dark, ...customTheme }} customMapping={customMapping}>
                <NavigationContainer>
                  <AppNavigation />
                </NavigationContainer>
              </ApplicationProvider>
            </AthletesProvider>
          </CategoriesProvider>
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

export default App;
