import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Header from './Header/Header';

export default class HomeImages extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <View>
          <Image style={styles.homeImg} source={require('../../assets/images/east-court-house.png')}/>
          <Image style={styles.homeImg} source={require('../../assets/images/Home-images-2.png')} />
          <Image style={styles.homeImg} source={require('../../assets/images/Home-images-3.png')} />
          <Image style={[styles.homeImg, { marginBottom: 100 }]} source={require('../../assets/images/Home-images-4.png')} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeImg: {
    width: 375,
    marginTop: 4,
    marginBottom: 4,
    height: 360
  }
});
