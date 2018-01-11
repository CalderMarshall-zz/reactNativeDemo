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
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flex: 1 }}>
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
    paddingTop: 10,
    paddingLeft: 15,
    paddingBottom: 10,
    paddingRight: 15,
    borderColor: '#454545',
    borderLeftWidth: 0.8,
    borderTopWidth: 0.8,
    borderBottomWidth: 0.8
  }
});
