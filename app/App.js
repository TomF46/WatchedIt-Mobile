import * as React from 'react';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import theme from './config/theme';
import Router from './Router';


function App() {

  useEffect(() => {
    setNavigationColor('#353D47');
  });

  const setNavigationColor = color => {
    changeNavigationBarColor(color);
  };

  return (
    <>
      <StatusBar barStyle="light-content" style={theme.StatusBar} />
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Header
            centerComponent={{ text: 'WatchedIT', style: { color: '#fff', fontSize: 24 } }}
            containerStyle={theme.Header}
          />
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
}

export default App;
