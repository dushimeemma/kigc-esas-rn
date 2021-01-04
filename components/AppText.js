import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AppText = ({ children, style }) => {
  return <Text style={[styles.container, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  container: {
    textTransform: 'capitalize',
  },
});

export default AppText;
