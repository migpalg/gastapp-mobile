import React, {Component} from 'react';
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

class Input extends Component<InputProps> {
  render() {
    return (
      <View
        style={[
          styles.inputContainer,
          {...(this.props.outline && styles.outlineInput)},
          this.props.style,
        ]}>
        {this.props.prependIcon && (
          <Icon
            size={20}
            style={styles.prependButton}
            color={this.props.iconColor}
            name={this.props.prependIcon}
          />
        )}
        <TextInput
          {...this.props}
          style={[styles.inputText, this.props.textInputStyle]}
        />
      </View>
    );
  }
}

export default Input;
