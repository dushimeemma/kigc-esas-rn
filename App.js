import React from 'react';
import { StyleSheet, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from './screens/AuthScreen';
import AppFooter from './components/AppFooter';
import store from './redux/store';
import WelcomeScreen from './screens/WelcomeScreen';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
          <Stack.Screen name='AuthScreen' component={AuthScreen} />
        </Stack.Navigator>
        <AppFooter />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
