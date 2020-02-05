import React, {FunctionComponent} from 'react';
import {View, Text, StatusBar, Animated, Easing} from 'react-native';
import {Input, Button} from '../../../components';
import {InputProps} from '../../../components/input/input';
import styles from './login.styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../styles/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationStackProp} from 'react-navigation-stack';

const LoginInput: React.FC<InputProps> = props => (
  <Input
    {...props}
    iconColor={colors.white(1)}
    textInputStyle={styles.loginInputText}
    style={[styles.loginInput, props.style]}
    placeholderTextColor={colors.white(0.6)}
    selectionColor={colors.primary(0.6)}
    outline
  />
);

interface LoginProps {
  navigation: NavigationStackProp;
}

const Login: FunctionComponent<LoginProps> = props => {
  const [rotateAnim] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        duration: 20000,
        toValue: Math.PI,
        easing: Easing.linear,
      }),
    ).start();
  });

  const handleRegisterButtonPress = () => props.navigation.navigate('Register');

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[colors.primary(1), colors.primary(0.4)]}
        style={styles.container}>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <Animated.View
          style={[
            styles.decoration,
            styles.decorationTopLeft,
            {transform: [{rotate: rotateAnim}]},
          ]}
        />
        <View style={[styles.decoration, styles.decorationBottomRight]} />
        <View style={styles.formContainer}>
          <Text style={styles.headerTitle}>gastapp</Text>

          <LoginInput
            autoCapitalize="none"
            returnKeyType="next"
            placeholder="Usuario"
            prependIcon="account-circle"
          />

          <LoginInput
            autoCapitalize="none"
            secureTextEntry={true}
            returnKeyType="send"
            placeholder="Contraseña"
            prependIcon="lock"
            style={styles.withMargin}
          />

          <Button
            activeOpacity={0.8}
            style={[styles.withMargin, styles.loginButton]}>
            Iniciar sesión
          </Button>
        </View>

        <TouchableOpacity onPress={handleRegisterButtonPress}>
          <Text style={styles.registerLinkText}>Crear una cuenta</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Login;
