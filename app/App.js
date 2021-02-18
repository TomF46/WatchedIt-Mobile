import * as React from 'react';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import theme from './config/theme';
import Router from './Router';
import { storeCreate } from './redux/store'
import { Provider as ReduxProvider } from "react-redux";
import SplashScreen from 'react-native-splash-screen';


function App() {
  const [store, setStore] = useState(null);

  useEffect(() => {
    async function createStore() {
      let theStore = await storeCreate();
      setStore(theStore)
    }
    createStore()
    setNavigationColor('#353D47');
    setTimeout(() => SplashScreen.hide(), 1000);
  }, []);

  const setNavigationColor = color => {
    changeNavigationBarColor(color);
  };


  return (
    <>
      {store != null && (
        <ReduxProvider store={store}>
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
        </ReduxProvider>
      )}
    </>
  );
}

export default App;
