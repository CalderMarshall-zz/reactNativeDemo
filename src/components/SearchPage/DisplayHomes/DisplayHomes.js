import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

const homes = [{
  address: '230 E Court Dr SW, Atlanta, GA 30331',
  photoUrl: '../../../assets/images/east-court-house.jpg',
  quote: '$392,000',
  desc: '5bd 4ba 2,871 sq ft'
}, {
  address: '205 Chemin Die Vie Atlanta, GA 30342',
  photoUrl: '../../../assets/images/chemin-die-vie.jpg',
  quote: '$410,000',
  desc: '3bd 3+ ba 1,882 sq ft'
}, {
  address: '5460 Browne Ct Atlanta, GA 30342',
  photoUrl: '../../../assets/images/chemin-die-vie.jpg',
  quote: '$300,000',
  desc: '3bd 2+ ba 1,584 sq ft'
}]

export default class DisplayHomes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          {/* {homes.map((home, index) => (
            <View key={index}>
              <View style={styles.homeTextContainer}>
                <Text style={styles.homeText}>{home.quote}</Text>
                <Text style={styles.homeText}>{home.address}</Text>
                <Text style={styles.homeText}>{home.desc}</Text>
              </View> */}
              {/* TODO: add linear gradient --> react-native-linear-gradient  */}
              {/* <Image
                style={styles.homeImg}
                source={require('../../../assets/images/east-court-house.jpg')}
              />
            </View>
          ))} */}
          <Image
            style={styles.homeImg}
            source={require('../../../assets/images/east-court-house.jpg')}
          />
          <Image
            style={styles.homeImg}
            source={require('../../../assets/images/east-court-house.jpg')}
          />
          <Image
            style={styles.homeImg}
            source={require('../../../assets/images/east-court-house.jpg')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  homeImg: {
    width: 375,
    height: 300
  },
  homeTextContainer: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    zIndex: 100,
    backgroundColor: 'transparent'
  },
  homeText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 17
  }
});
