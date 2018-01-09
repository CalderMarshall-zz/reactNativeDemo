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
      <View style={styles.container}>
        <Text style={{ fontSize: 18, marginTop: 10 }}>Keywords</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={(filter) => this.setState({filter})}
            value={this.state.filter}
            placeholder='Garage, Pool, Gazebo, etc.'
            placeholderTextColor='#787878'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 320,
    height: 60,
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
  }
});
