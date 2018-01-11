/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SearchForm extends Component {
  state = { search: '' }
  render() {
    return (
      <View>
        <View style={styles.form}>
          <Image
            style={styles.logo}
            source={require('../../../../assets/images/one-place-logo.png')}
          />
          <TextInput
            style={styles.input}
            onChangeText={(search) => this.setState({search})}
            value={this.state.search}
            placeholder='Address, City, Zip'
            placeholderTextColor='#787878'
          />
          <Text onPress={() => Actions.filterSearch()} style={styles.filterText}>Filter</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60
  },
  input: {
    height: 34,
    borderColor: 'midnightblue',
    borderWidth: 2,
    flex: 1,
    margin: 2,
    borderRadius: 3,
    padding: 4,
    paddingLeft: 8,
    fontSize: 20
  },
  filterText: {
    color: 'midnightblue',
    marginLeft: 10,
    marginRight: 10
  },
  logo: {
    width: 25,
    height: 25,
    marginLeft: 10,
    marginRight: 10
  }
});
