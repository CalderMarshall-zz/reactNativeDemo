/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class HomeInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 10 }}>
          <Text>$392,000</Text>
          <Text>Est. payment 1.1k/mo | Get Pre-qualified</Text>
          <Text>230 E Court Dr SW,</Text>
          <Text>Atlanta, GA 30331</Text>
          <Text>5 bd | 4 ba | 3,947 sq ft</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
