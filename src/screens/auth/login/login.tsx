import React, {FunctionComponent} from 'react';
import {View, Text, StatusBar, Animated, Easing} from 'react-native';
import {Button} from '../../../components';
import {createInput} from '../../../components/input/input';
import {NavigationStackProp} from 'react-navigation-stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import styles from './login.styles';
import colors from '../../../styles/colors';

/**
 * Custom input for the Login page,
 */
const LoginInput = createInput({
  iconColor: colors.white(1),
  textInputStyle: styles.loginInputText,
  style: [styles.loginInput],
  placeholderTextColor: colors.white(0.6),
  selectionColor: colors.primary(0.6),
  outline: true,
});

interface LoginProps {
  navigation: NavigationStackProp;
}

const Login: FunctionComponent<LoginProps> = props => {
  // States of the component
  const [rotateAnim] = React.useState(new Animated.Value(0));

  // Response to state update
  React.useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        duration: 20000,
        toValue: Math.PI,
        easing: Easing.linear,
      }),
    ).start();
  }, [rotateAnim]);

  /**
   * Handler of click on "create account" link
   */
  const handleRegisterButtonPress = () => props.navigation.navigate('Register');

  /**
   * Handle userame input submit
   * TODO: Input validations
   */
  const handleUserInputSubmit = () => inputsRefs.password.focus();

  // TODO: App authentication service
  const handleSubmit = () => props.navigation.navigate('App');

  // Reference of the objects
  let inputsRefs: {
    user: any;
    password: any;
  } = {user: null, password: null};

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
            onSubmitEditing={handleUserInputSubmit}
            ref={ref => {
              inputsRefs.user = ref;
            }}
          />

          <LoginInput
            autoCapitalize="none"
            secureTextEntry={true}
            returnKeyType="send"
            placeholder="Contraseña"
            prependIcon="lock"
            style={styles.withMargin}
            ref={ref => {
              inputsRefs.password = ref;
            }}
          />

          <Button
            activeOpacity={0.8}
            onPress={handleSubmit}
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
