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
          contentContainerStyle={{ alignContent: 'center' }}
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
              <Icon style={{ position: 'absolute', right: 0 }} name="angle-right" size={25} color="#4E92DF" />
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
    alignItems: 'center'
  },
  listItem: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'midnightblue',
    fontSize: 16,
  },
});
