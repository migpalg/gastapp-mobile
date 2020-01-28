import React, {FunctionComponent} from 'react';
import Card from '../base';
import {StyleProp, ViewStyle, Image, View, Text} from 'react-native';
import styles from './subscription-card.style';

export interface SubscriptionCardProps {
  style?: StyleProp<ViewStyle>;
}

const SubscriptionCard: FunctionComponent<SubscriptionCardProps> = props => (
  <Card style={[styles.card, props.style]}>
    <View style={styles.cardImageContainer}>
      <Image
        style={styles.cardImage}
        source={{
          uri:
            'https://cdn.dribbble.com/users/2328503/screenshots/4683829/cat_icon_color_400_by_400.png',
        }}
        resizeMode="cover"
      />
    </View>
    <View style={styles.cardTextContainer}>
      <Text style={styles.cardTitle}>Comida del gato</Text>
      <Text style={styles.cardSubtitle}>
        $24,000 <Text style={styles.cardSubtitleAppend}>/mes</Text>
      </Text>
    </View>
    <View style={styles.dateContainer}>
      <Text style={[styles.cardSubtitle, styles.dateContainerText]}>Since</Text>
      <Text
        style={[
          styles.cardTitle,
          styles.dateContainerText,
          styles.dateContainerNumber,
        ]}>
        28
      </Text>
      <Text style={[styles.cardSubtitle, styles.dateContainerText]}>Sep</Text>
    </View>
  </Card>
);

export default SubscriptionCard;
