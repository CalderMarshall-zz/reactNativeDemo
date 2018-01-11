import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        {/* <Image
          style={{ postion: 'absolute', top: 10 }}
          source={require('../../assets/images/transparent-heart-icon.png')}
        />
        <Image
          style={{ postion: 'absolute', top: 10 }}
          source={require('../../assets/images/transparent-share-icon.png')}
        /> */}
        <Icon style={{ marginLeft: 15, position: 'absolute', right: 10, top: 60, zIndex: 100, backgroundColor: 'transparent' }} name="share" size={25} color="#000000" />
        <Icon style={{ marginLeft: 15, position: 'absolute', right: 45, top: 60, zIndex: 100, backgroundColor: 'transparent' }} name="heart-o" size={25} color="#000000" />
        <Image
          style={styles.img}
          source={require('../../assets/images/east-court-house.png')}
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