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
        <View style={{ backgroundColor: '#dedede', padding: 10 }}>
          <Text>Description</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut sit amet est porttitor, commodo tortor dapibus, feugiat lectus.
          </Text>
          <Text>More</Text>
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
