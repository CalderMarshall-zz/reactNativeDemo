/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FilterSearchBottom extends Component {
  render() {
    return (
      <View style={{ borderTopColor: 'midnightblue', borderTopWidth: 0.75, borderBottomWidth: 0.75, borderBottomColor: 'midnightblue', marginBottom: 100 }}>
        <FlatList
          data={[
            {key: 'Buying Type'},
            {key: 'Home Type'},
            {key: 'Square Feet'},
            {key: 'Year Built'},
            {key: 'Days on Market'},
          ]}
          renderItem={({item}) => (
            <Text style={styles.listItem}>
              {item.key}
              <Icon style={{ textAlign: 'right' }} name="angle-right" size={30} color="#900" />
            </Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    padding: 15,
    borderWidth: 0.75,
    borderColor: 'midnightblue',
    fontSize: 18,
    alignItems: 'center'
  },
});
