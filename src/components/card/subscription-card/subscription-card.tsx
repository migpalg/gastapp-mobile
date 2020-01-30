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
import LinearGradient from 'react-native-linear-gradient';

export interface SubscriptionCardProps {
  style?: StyleProp<ViewStyle>;
  onOpen?: () => void;
}

const SubscriptionCard: FunctionComponent<SubscriptionCardProps> = props => {
  const OPEN_WIDTH = 80;

  const [xOffsetAnim] = useState(new Animated.Value(0));
  const [isOpen, setIsOpen] = useState(false);
  const [lastOffsetX, setLastOffsetX] = useState(0);

  /**
   * Handle when the user Swipes on X
   * @param event react-native-gesture-handler PanGesture event
   */
  const handleCardSwipe = (event: PanGestureHandlerGestureEvent) => {
    const {translationX} = event.nativeEvent;
    const eventOffsetX = translationX + lastOffsetX;

    if (translationX + lastOffsetX < 0) {
      xOffsetAnim.setValue(eventOffsetX);
    }

    setIsOpen(eventOffsetX <= -OPEN_WIDTH);
  };

  /**
   * Handle when the the user taps the card
   * @param event react-native-gesture-handler event
   */
  const handleCardTap = (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.END) {
      const finalValue = isOpen ? -OPEN_WIDTH : 0;

      Animated.timing(xOffsetAnim, {
        toValue: finalValue,
        duration: 400,
        easing: Easing.bounce,
      }).start(() => setLastOffsetX(finalValue));

      if (isOpen && props.onOpen) {
        props.onOpen();
      }
    }
  };

  return (
    <Card style={[styles.card, props.style]}>
      <LinearGradient
        start={{x: 0.95, y: 0}}
        end={{x: 0.7, y: 0}}
        colors={['#000', '#444']}
        style={styles.optionContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.optionContainerContent}>
          <Icon name="remove-red-eye" size={25} color="#FFF" />
        </TouchableOpacity>
      </LinearGradient>
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
