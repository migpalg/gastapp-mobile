import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Input} from '../../../components';
import styles from './login.styles';

const Login = () => {
  return (
    <View style={styles.wrapper}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={styles.formContainer}>
        <Text style={styles.headerTitle}>Gastapp!</Text>

        <Input prependIcon="account-circle" placeholder="Usuario" outline />

        <Input
          prependIcon="lock"
          style={styles.passwordInput}
          placeholder="Contraseña"
          outline
        />
      </View>
    </View>
  );
};

export default Login;
