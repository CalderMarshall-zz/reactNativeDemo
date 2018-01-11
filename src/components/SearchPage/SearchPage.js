import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Header from './Header/Header';
import DisplayHomes from './DisplayHomes/DisplayHomes';

// TODO: Looping over images
export default class SearchPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <DisplayHomes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

