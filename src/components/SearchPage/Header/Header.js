/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';

export default class Header extends Component {
  state = { search: '' }
  render() {
    return (
      <View style={styles.container}>
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
        <View style={styles.formBottom}>
          <Text style={{ marginLeft: 4, flex: 2 }}>5 Results</Text>
          {/* Fix that borderLeftWidth & borderLeftColor */}
          <Text style={{ marginRight: 4, borderLeftWidth: 3, borderLeftColor: 'red' }}>[Share Icon]</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },

  form: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 375,
    height: 60
  },

  formBottom: {
    height: 30,
    width: 375,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center'
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
