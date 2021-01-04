import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';
import Text from './AppText';

const AppFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        &copy; {new Date().getFullYear()}. KIGC | ESAS
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    height: 50,
    justifyContent: 'center',
    marginTop: 2,
    width: '100%',
  },
  text: {
    color: colors.text,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default AppFooter;
