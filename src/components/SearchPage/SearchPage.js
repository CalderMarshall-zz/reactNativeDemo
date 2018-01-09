import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import DisplayHomes from './DisplayHomes/DisplayHomes';

export default class SearchPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header />
          <DisplayHomes />
        </ScrollView>
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 375
  }
});
