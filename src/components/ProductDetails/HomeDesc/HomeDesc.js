/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class HomeDesc extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#F7F6F6', padding: 10 }}>
          <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 20 }}>Description</Text>
          <Text style={{ marginTop: 20, fontSize: 16, fontWeight: '300', letterSpacing: 0.3 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut sit amet est porttitor, commodo tortor dapibus, feugiat lectus.
          </Text>
          <Text style={{ color: '#8E8D8D', marginTop: 20, marginBottom: 10, fontSize: 16 }}>More</Text>
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
