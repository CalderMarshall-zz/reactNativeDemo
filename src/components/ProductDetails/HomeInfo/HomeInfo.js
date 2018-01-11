/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class HomeInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 10 }}>
          <Text onPress={() => Actions.homeImages()} style={{ fontWeight: 'bold', fontSize: 20 }}>$392,000</Text>
          <Text style={{ fontSize: 13, color: '#797979'}}>Est. payment 1.1k/mo | Get Pre-qualified</Text>
          <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 15 }}>230 E Court Dr SW,</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Atlanta, GA 30331</Text>
          <Text style={{ fontWeight: '400' }}>5 bd | 4 ba | 3,947 sq ft</Text>
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
