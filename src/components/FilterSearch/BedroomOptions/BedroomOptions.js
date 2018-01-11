/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import FilterOptions from '../SharedComponents/FilterOptions/FilterOptions';

export default class BedroomOptions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18, marginTop: 40 }}>Bedrooms</Text>
        <FilterOptions />
        <Text>Use exact match for Bedrooms</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
