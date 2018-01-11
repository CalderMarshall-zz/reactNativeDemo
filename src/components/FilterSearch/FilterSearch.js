/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

import FilterSearchBottom from './FilterSearchBottom/FilterSearchBottom';
import KeywordSearch from './KeywordSearch/KeywordSearch';
import PriceOptions from './PriceOptions/PriceOptions';
import BedroomOptions from './BedroomOptions/BedroomOptions';
import BathroomOptions from './BathroomOptions/BathroomOptions';

export default class FilterSearch extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, marginLeft: 20 }} onPress={() => Actions.pop()}>Cancel</Text>
          <Text style={{ paddingLeft: 50, paddingRight: 50, fontSize: 25 }}>Filter Search</Text>
          <Text style={{ fontSize: 18, marginRight: 20 }} onPress={() => Actions.home()}>Apply</Text>
        </View>
        <View style={{
          backgroundColor: '#efefef',
          width: 375,
          padding: 20
        }}>
          <KeywordSearch />
          <PriceOptions />
          <BedroomOptions />
          <BathroomOptions />
        </View>
        <FilterSearchBottom />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 50,
    backgroundColor: '#FFF',
    borderBottomColor: '#032A5E',
    borderBottomWidth: 1
  }
});