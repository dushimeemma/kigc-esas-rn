import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../config/colors';
import Icon from './AppIcon';
import Text from './AppText';

const AppHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>KIGC | ESAS</Text>
      </View>
      <View style={styles.icon}>
        <Icon
          name='home'
          color={colors.text}
          size={40}
          style={styles.iconHome}
          onPress={() => navigation.navigate('WelcomeScreen')}
        />
        <Icon
          name='menu'
          color={colors.text}
          size={40}
          style={styles.iconMenu}
          onPress={() => navigation.navigate('AuthScreen')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: colors.background,
    marginTop: StatusBar.currentHeight,
  },
  icon: {
    flex: 1 / 2,
    flexDirection: 'row',
  },
  iconHome: {
    position: 'absolute',
    left: 20,
  },
  iconMenu: {
    position: 'absolute',
    right: 20,
  },
  logo: {
    flex: 1 / 2,
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginLeft: 20,
  },
});

export default AppHeader;
