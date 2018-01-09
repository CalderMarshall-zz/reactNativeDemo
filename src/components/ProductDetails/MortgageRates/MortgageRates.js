/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class MortgageRates extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 10 }}>
          <Text>Mortgage Rates</Text>
          <Text>$2,308/month</Text>
          <Text>$392,000 listing price</Text>
          <Text>Principle And Interest</Text>
          <Text>Property Tax</Text>
          <Text>Other Expenses</Text>
        </View>
        <Image style={styles.graph} source={require('../../../assets/images/graph.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  graph: {
    width: 250,
    height: 250
  }
});
