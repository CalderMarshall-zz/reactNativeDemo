/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Slider,
  StyleSheet,
} from 'react-native';

export default class Price extends Component {
  state = { value: 0 }
  change = value => {
    this.setState(() => {
      return {
        value: parseFloat(value)
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18, marginTop: 40 }}>Price</Text>
        {/* Range Slider */}
        <Slider
          step={1}
          maximumValue={100}
          onValueChanage={this.change}
          value={this.state.value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
