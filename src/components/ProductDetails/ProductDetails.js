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
        <View style={{ padding: 10, marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>Open More</Text>
          <Text style={{
            fontSize: 16,
            marginBottom: 20,
            fontWeight: '300',
            letterSpacing: 0.3
          }}>No Open Houses Currently Scheduled</Text>
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
    height: 300,
    borderWidth: 0.2,
    borderColor: '#032F5C'
  }
});
