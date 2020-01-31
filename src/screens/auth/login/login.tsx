import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Input, Button} from '../../../components';
import {InputProps} from '../../../components/input/input';
import styles from './login.styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../styles/colors';

const LoginInput: React.FC<InputProps> = props => (
  <Input
    {...props}
    iconColor={colors.white(1)}
    textInputStyle={styles.loginInputText}
    style={[styles.loginInput, props.style]}
    placeholderTextColor={colors.white(0.6)}
    outline
  />
);

const Login = () => {
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        start={{x: 0.2, y: 0.2}}
        end={{x: 0.8, y: 0.8}}
        colors={[colors.primary(1), colors.primary(0.5)]}
        style={styles.container}>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <View style={styles.formContainer}>
          <Text style={styles.headerTitle}>gastapp</Text>

          <LoginInput
            returnKeyType="next"
            placeholder="Usuario"
            prependIcon="account-circle"
          />

          <LoginInput
            secureTextEntry={true}
            returnKeyType="send"
            placeholder="Contraseña"
            prependIcon="lock"
            style={styles.withMargin}
          />

          <Button activeOpacity={0.8} style={styles.withMargin}>
            Iniciar sesión
          </Button>
        </View>

        <Text style={styles.registerLinkText}>Crear una cuenta</Text>
      </LinearGradient>
    </View>
  );
};

export default Login;
