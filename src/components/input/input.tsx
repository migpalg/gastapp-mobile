import React, {forwardRef} from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './input.style';

export interface InputProps extends TextInputProps {
  prependIcon?: string;
  style?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  outline?: boolean;
  iconColor?: string;
}

export type InputRef = TextInput;

const Input = forwardRef<InputRef, InputProps>((props, ref) => (
  <View
    style={[
      styles.inputContainer,
      {...(props.outline && styles.outlineInput)},
      props.style,
    ]}>
    {props.prependIcon && (
      <Icon
        size={20}
        style={styles.prependButton}
        color={props.iconColor}
        name={props.prependIcon}
      />
    )}
    <TextInput
      ref={ref}
      {...props}
      style={[styles.inputText, props.textInputStyle]}
    />
  </View>
));

export default Input;
