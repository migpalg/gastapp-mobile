import React, {FunctionComponent} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import styles from './card.style';

export interface CardProps {
  style?: StyleProp<ViewStyle>;
}

const Card: FunctionComponent<CardProps> = props => (
  <View style={[styles.card, props.style]}>{props.children}</View>
);

export default Card;
