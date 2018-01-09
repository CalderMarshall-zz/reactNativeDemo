/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class FilterOptions extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', width: 330 }}>
        <Text style={[styles.optionActive, styles.option]}>Any</Text>
        <Text style={styles.option}>1+</Text>
        <Text style={styles.option}>2+</Text>
        <Text style={styles.option}>3+</Text>
        <Text style={styles.option}>4+</Text>
        <Text style={styles.option}>5+</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  optionActive: {
    backgroundColor: '#CC9B38',
    color: '#FFFFFF'
  },
  option: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingBottom: 15,
    paddingRight: 20,
    borderColor: '#979797',
    borderWidth: 0.8
  }
});
