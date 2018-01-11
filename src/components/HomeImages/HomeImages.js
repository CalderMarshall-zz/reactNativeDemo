import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Header from './Header/Header';

// TODO: Loop over these images
export default class HomeImages extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <Image style={styles.homeImg} source={require('../../assets/images/east-court-house.png')}/>
          <Image style={styles.homeImg} source={require('../../assets/images/home-images-2.png')} />
          <Image style={styles.homeImg} source={require('../../assets/images/home-images-3.png')} />
          <Image style={[styles.homeImg, { marginBottom: 100 }]} source={require('../../assets/images/home-images-4.png')} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40
  },
  homeImg: {
    width: '100%',
    marginTop: 4,
    marginBottom: 4,
    height: 360
  }
});
