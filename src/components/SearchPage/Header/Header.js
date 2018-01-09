/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import SearchForm from './SearchForm/SearchForm';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchForm />
        <View style={styles.formBottom}>
          <Text style={{ marginLeft: 8, flex: 1 }}>5 Results</Text>
          {/* TODO: Fix that borderLeftWidth & borderLeftColor */}
          <Image
            style={{ marginRight: 8 }}
            source={require('../../../assets/images/share-icon.jpg')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  formBottom: {
    height: 30,
    width: 375,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center'
  }
});
