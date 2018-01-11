/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FilterSearchBottom extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={[
            {key: 'Buying Type'},
            {key: 'Home Type'},
            {key: 'Square Feet'},
            {key: 'Year Built'},
            {key: 'Days on Market'},
          ]}
          renderItem={({item}) => (
            <View style={styles.listContainer}>
              <Text style={styles.itemText}>{item.key}</Text>
              <Icon style={{ paddingRight: 20 }} name="angle-right" size={30} color="#4E92DF" />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    borderColor: '#333',
    backgroundColor: '#FFF',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemText: {
    flex: 2,
    fontSize: 16,
    padding: 14
  }
});
