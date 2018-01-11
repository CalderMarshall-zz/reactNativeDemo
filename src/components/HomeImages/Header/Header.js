import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon style={{ marginLeft: 30 }} name="angle-left" size={40} color="#000000" />
          <Text style={styles.headerText}>230 E Court Dr SW</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
