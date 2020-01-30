import React, {FunctionComponent, useState} from 'react';
import Card from '../base';
import {
  StyleProp,
  ViewStyle,
  Image,
  View,
  Text,
  Animated,
  Easing,
} from 'react-native';
import styles from './subscription-card.style';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerStateChangeEvent,
  State,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface SubscriptionCardProps {
  style?: StyleProp<ViewStyle>;
}

const SubscriptionCard: FunctionComponent<SubscriptionCardProps> = props => {
  const OPEN_WIDTH = 80;

  const [xOffsetAnim] = useState(new Animated.Value(0));
  const [isOpen, setIsOpen] = useState(false);

  const handleCardSwipe = (event: PanGestureHandlerGestureEvent) => {
    const {translationX} = event.nativeEvent;
    const eventOffsetX = translationX;

    if (translationX < 0) {
      xOffsetAnim.setValue(eventOffsetX);
    }

    setIsOpen(eventOffsetX <= -OPEN_WIDTH);
  };

  const handleCardTap = (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.END) {
      Animated.timing(xOffsetAnim, {
        toValue: isOpen ? -OPEN_WIDTH : 0,
        duration: 400,
        easing: Easing.bounce,
      }).start();
    }
  };

  return (
    <Card style={[styles.card, props.style]}>
      <View style={styles.optionContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.optionContainerContent}>
          <Icon name="remove-red-eye" size={25} color="#FFF" />
        </TouchableOpacity>
      </View>
      <PanGestureHandler
        minOffsetY={1000}
        minDeltaX={10}
        onGestureEvent={handleCardSwipe}
        onHandlerStateChange={handleCardTap}>
        <Animated.View
          style={[
            styles.cardContent,
            {transform: [{translateX: xOffsetAnim}]},
          ]}>
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
            <Text style={[styles.cardSubtitle, styles.dateContainerText]}>
              Since
            </Text>
            <Text
              style={[
                styles.cardTitle,
                styles.dateContainerText,
                styles.dateContainerNumber,
              ]}>
              28
            </Text>
            <Text style={[styles.cardSubtitle, styles.dateContainerText]}>
              {/* Sep */}
            </Text>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Card>
  );
};

export default SubscriptionCard;
