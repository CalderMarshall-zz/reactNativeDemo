/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

export default class Keywords extends Component {
  state = { filter: '' }
  render() {
    return (
      <View>
        <Text style={{ fontSize: 18, marginTop: 10 }}>Keywords</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={(filter) => this.setState({filter})}
            value={this.state.filter}
            placeholder='Garage, Pool, Gazebo, etc.'
            placeholderTextColor='#C9C9C9'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  input: {
    height: 40,
    backgroundColor: '#FFFFFF',
    borderColor: 'midnightblue',
    borderWidth: 0.75,
    flex: 2,
    margin: 2,
    borderRadius: 2,
    padding: 6,
    fontSize: 20
  }
});