/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class SearchForm extends Component {
  state = { search: '' }
  render() {
    return (
      <View>
        <View style={styles.form}>
          <Text style={styles.text}>[Logo]</Text>
          <TextInput
            style={styles.input}
            onChangeText={(search) => this.setState({search})}
            value={this.state.search}
            placeholder='Address, City, Zip'
            placeholderTextColor='#787878'
          />
          <Text style={styles.text}>Filter</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 375,
    height: 60
  },
  input: {
    height: 34,
    borderColor: 'midnightblue',
    borderWidth: 2,
    flex: 2,
    margin: 2,
    borderRadius: 3,
    padding: 4,
    paddingLeft: 8,
    fontSize: 20
  },
  text: {
    color: 'midnightblue',
    marginLeft: 8,
    marginRight: 8
  }
});
