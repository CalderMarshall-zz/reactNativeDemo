import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Navigation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm the Navigation component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    zIndex: 100,
    bottom: 0,
    backgroundColor: 'white',
    padding: 30,
    paddingBottom: 40,
    width: 375
  },
  text: {
    textAlign: 'center'
  }
});
