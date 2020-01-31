import React, {FunctionComponent} from 'react';
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
}

const Input: FunctionComponent<InputProps> = props => (
  <View
    style={[
      styles.inputContainer,
      props.style,
      {...(props.outline && styles.outlineInput)},
    ]}>
    {props.prependIcon && (
      <Icon size={20} style={styles.prependButton} name={props.prependIcon} />
    )}
    <TextInput {...props} style={[styles.inputText, props.textInputStyle]} />
  </View>
);

export default Input;
