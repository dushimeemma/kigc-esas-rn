import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppHeader from '../components/AppHeader';
import Text from '../components/AppText';

const AuthScreen = (props) => {
  return (
    <>
      <AppHeader />
      <View style={styles.container}>
        <Text>Hello from auth screen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthScreen;
