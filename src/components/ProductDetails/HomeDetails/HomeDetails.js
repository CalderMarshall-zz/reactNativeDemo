/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

export default class HomeDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#dedede', padding: 10 }}>
          <Text>Details</Text>
          <FlatList
            data={[
              {key: '5 beds'},
              {key: '4 baths'},
              {key: 'Dining Room'},
              {key: 'Living Room'},
              {key: 'Patio'},
              {key: 'Private Backyard'},
            ]}
            renderItem={({item}) => <Text>{item.key}</Text>}
          />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut sit amet est porttitor, commodo tortor dapibus, feugiat lectus.
          </Text>
          <Text>More</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
