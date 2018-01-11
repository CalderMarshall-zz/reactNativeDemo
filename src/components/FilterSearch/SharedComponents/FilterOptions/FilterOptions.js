/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Option = (props) => {
  return (
    <Text
    onPress={props.onPress}
    style={[styles.option, props.any && styles.optionActive]}
    >
      {props.children}
    </Text>
  )
}

export default class FilterOptions extends Component {
  state = {
    any: true
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', width: 330 }}>
        <Text
          onPress={() => this.setState({ any: !this.state.any })}
          style={[styles.option, this.state.any && styles.optionActive]}
        >
          Any
        </Text>
        <Text style={styles.option}>1+</Text>
        <Text style={styles.option}>2+</Text>
        <Text style={styles.option}>3+</Text>
        <Text style={styles.option}>4+</Text>
        <Text style={styles.option}>5+</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  optionActive: {
    backgroundColor: '#CC9B38',
    color: '#FFFFFF'
  },
  option: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingBottom: 15,
    paddingRight: 20,
    borderColor: '#454545',
    borderWidth: 0.8
  }
});
