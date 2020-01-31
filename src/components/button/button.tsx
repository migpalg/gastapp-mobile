import React, {FunctionComponent} from 'react';
import {TouchableOpacityProps, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './button.style';

export interface ButtonProps extends TouchableOpacityProps {}

const Button: FunctionComponent<ButtonProps> = props => (
  <TouchableOpacity {...props} style={[styles.button, props.style]}>
    <Text style={styles.buttonText}>{props.children}</Text>
  </TouchableOpacity>
);

export default Button;
