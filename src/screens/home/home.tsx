import React, {FunctionComponent} from 'react';
import {View, StatusBar, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './home.style';
import {Input} from '../../components';
import {SubscriptionCard} from '../../components/card';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../styles/colors';

const Home: FunctionComponent = () => (
  <View style={styles.container}>
    <StatusBar
      translucent
      backgroundColor="rgba(0, 0, 0, 0.3)"
      barStyle="light-content"
    />
    <View style={styles.hero}>
      <LinearGradient
        colors={[colors.primary(1), colors.primary(0.7)]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.heroBgWrapper}>
        <View style={styles.heroFloatCircle} />
        <View style={styles.heroFloatRect} />
      </LinearGradient>
      <View style={styles.heroHeader}>
        <Icon name="menu" size={20} color="#FFF" />
        <Text style={styles.heroText}>Balance Actual</Text>
        <Icon name="face" size={20} color="#FFF" />
      </View>
      <Text style={styles.balanceText}>$500.000,32</Text>
      <Input
        returnKeyType="search"
        placeholder="Tu búsqueda"
        prependIcon="search"
        textInputStyle={styles.searchBarInput}
        style={styles.searchBar}
      />
    </View>

    <ScrollView style={styles.contentContainer}>
      <View style={styles.contentTopSizedBox} />

      <Text style={styles.contentTitle}>Tus gastos fijos</Text>
      {[1, 2, 3, 4, 5, 6].map(item => (
        <SubscriptionCard key={`${item}`} style={styles.subscriptionCard}>
          <Text style={styles.text}>{item}</Text>
        </SubscriptionCard>
      ))}
    </ScrollView>
  </View>
);

export default Home;
