/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

export default class BedroomOptions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18, marginTop: 40 }}>Bedrooms</Text>
        <View>
          <FlatList
            data={[
              {key: 'Any'},
              {key: '1+'},
              {key: '2+'},
              {key: '3+'},
              {key: '4+'},
              {key: '5+'},
            ]}
            renderItem={({item}) => (
              <Text style={styles.listBdItem}>
                {item.key}
              </Text>
            )}
          />
        </View>
        <Text>Use exact match for Bedrooms</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
