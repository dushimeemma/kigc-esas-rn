import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AppIcon = ({ style, name, size, color, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <MaterialCommunityIcons
        style={[style]}
        name={name}
        size={size}
        color={color}
      />
    </TouchableWithoutFeedback>
  );
};

export default AppIcon;
