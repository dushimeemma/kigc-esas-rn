import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import colors from '../config/colors';
import Text from './AppText';

const AppFormButton = ({ style, title, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container]}>
        <Text style={[styles.text, style]}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    padding: 10,
    justifyContent: 'center',
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    color: colors.white,
  },
});

export default AppFormButton;
