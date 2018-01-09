import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';

import Header from './Header/Header';
import HomeInfo from './HomeInfo/HomeInfo';
import HomeDesc from './HomeDesc/HomeDesc';
import HomeDetails from './HomeDetails/HomeDetails';
import MortgageRates from './MortgageRates/MortgageRates';

export default class ProductDetails extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <Image
          style={styles.img}
          source={require('../../assets/images/east-court-house.jpg')}
        />
        <HomeInfo />
        <HomeDesc />
        <View style={{ padding: 10 }}>
          <Text>Open More</Text>
          <Text>No Open Houses Currently Scheduled</Text>
        </View>
        <HomeDetails />
        <MortgageRates />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  img: {
    width: 375,
    height: 300
  }
});
