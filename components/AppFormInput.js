import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

import colors from '../config/colors';

const AppFormInput = ({
  label,
  placeholder,
  style,
  onChangeText,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <View style={[styles.input, style]}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          {...otherProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    backgroundColor: colors.white,
    padding: 5,
    marginVertical: 2,
    borderRadius: 2,
  },
  text: {
    marginVertical: 2,
    fontSize: 20,
    fontWeight: '400',
  },
});

export default AppFormInput;
