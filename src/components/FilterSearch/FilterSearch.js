/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Slider,
  StyleSheet,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FilterSearch extends Component {
  state = { filter: '', value: 0 }
  change = value => {
    this.setState(() => {
      return {
        value: parseFloat(value)
      }
    })
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, marginLeft: 20 }}>Cancel</Text>
          <Text style={{ paddingLeft: 50, paddingRight: 50, fontSize: 25 }}>Filter Search</Text>
          <Text style={{ fontSize: 18, marginRight: 20 }}>Apply</Text>
        </View>
        <View style={{ backgroundColor: '#efefef', width: 375, padding: 20 }}>
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
          <Text style={{ fontSize: 18, marginTop: 40 }}>Price</Text>
          {/* Range Slider */}
          <Slider
            step={1}
            maximumValue={100}
            onValueChanage={this.change}
            value={this.state.value}
          />
          <Text style={{ fontSize: 18, marginTop: 40 }}>Bedrooms</Text>
          <View>
            <FlatList
              data={[
                {key: 'Any'},
                {key: '1+'},
                {key: '2+'},
                {key: '3+'},
                {key: '4+'},
                {key: '5+'},
              ]}
              renderItem={({item}) => (
                <Text style={styles.listBdItem}>
                  {item.key}
                </Text>
              )}
            />
          </View>
          <Text>Use exact match for Bedrooms</Text>
          <Text style={{ fontSize: 18, marginTop: 40 }}>Bathrooms</Text>
          <View>
            <FlatList
              data={[
                {key: 'Any'},
                {key: '1+'},
                {key: '2+'},
                {key: '3+'},
                {key: '4+'},
                {key: '5+'},
              ]}
              renderItem={({item}) => (
                <Text style={styles.listBdItem}>
                  {item.key}
                </Text>
              )}
            />
          </View>
          <Text>Use exact match for Bathrooms</Text>
        </View>
        <View style={{ borderTopColor: 'midnightblue', borderTopWidth: 0.75, borderBottomWidth: 0.75, borderBottomColor: 'midnightblue', marginBottom: 100 }}>
          <FlatList
            data={[
              {key: 'Buying Type'},
              {key: 'Home Type'},
              {key: 'Square Feet'},
              {key: 'Year Built'},
              {key: 'Days on Market'},
            ]}
            renderItem={({item}) => (
              <Text style={styles.listItem}>
                {item.key}
                <Icon style={{ textAlign: 'right' }} name="angle-right" size={30} color="#900" />
              </Text>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 320,
    height: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
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
  },
  listItem: {
    padding: 15,
    borderWidth: 0.75,
    borderColor: 'midnightblue',
    fontSize: 18,
    alignItems: 'center'
  }
});
