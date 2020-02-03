import React, {FunctionComponent} from 'react';
import {TouchableOpacityProps, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './button.style';

export interface ButtonProps extends TouchableOpacityProps {
  textColor?: string;
}

const Button: FunctionComponent<ButtonProps> = props => (
  <TouchableOpacity {...props} style={[styles.button, props.style]}>
    <Text style={[styles.buttonText, {color: props.textColor}]}>
      {props.children}
    </Text>
  </TouchableOpacity>
);

export default Button;
