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
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>Mortgage Rates</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
            $2,308
            <Text style={{ fontWeight: '300' }}>/month</Text>
          </Text>
          <Text style={{ fontSize: 13, color: '#797979', marginBottom: 20 }}>$392,000 listing price</Text>
          <View style={styles.graphCategoryContainer}>
            <Image style={{width: 15, height: 15 }} source={require('../../../assets/images/Rectangle-light-blue.png')} />
            <Text style={styles.graphDetails}>Principle And Interest</Text>
          </View>
          <View style={styles.graphCategoryContainer}>
            <Image style={{width: 15, height: 15 }} source={require('../../../assets/images/Rectangle-gold.png')} />
            <Text style={styles.graphDetails}>Property Tax</Text>
          </View>
          <View style={styles.graphCategoryContainer}>
            <Image style={{width: 15, height: 15 }} source={require('../../../assets/images/Rectangle-dark-blue.png')} />
            <Text style={styles.graphDetails}>Other Expenses</Text>
          </View>
        </View>
        <View style={styles.graphContainer}>
          <Image style={styles.graph} source={require('../../../assets/images/graph.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 40
  },
  graphContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  graph: {
    width: 250,
    height: 250
  },
  graphDetails: {
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 10
  },
  graphCategoryContainer: {
    flexDirection: 'row',
    alignContent: 'center'
  }
});