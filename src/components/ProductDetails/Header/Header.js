import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Actions } from 'react-native-router-flux';

export default class Header extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Icon onPress={() => Actions.pop()} style={{ marginLeft: 15 }} name="angle-left" size={40} color="#000000" />
          <Text style={styles.headerText}>230 E Court Dr SW</Text>
          <Icon style={{ marginRight: 5 }} name="angle-up" size={40} color="#999999" />
          <Icon style={{ marginLeft: 5, marginRight: 10 }} name="angle-down" size={40} color="#999999" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 375,
    height: 50,
  },
  headerText: {
    flex: 1,
    width: 30,
    marginLeft: 60,
    marginRight: 10,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.5
  },
});

