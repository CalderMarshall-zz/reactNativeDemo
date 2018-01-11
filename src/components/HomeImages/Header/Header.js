import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export default class Header extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Icon onPress={() => Actions.pop()} style={{ marginLeft: 30 }} name="angle-left" size={40} color="#000000" />
          <Text style={styles.headerText}>230 E Court Dr SW</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800',
    letterSpacing: 0.5
  },
});
