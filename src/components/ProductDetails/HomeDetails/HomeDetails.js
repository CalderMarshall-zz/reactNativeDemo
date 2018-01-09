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
        <View style={{ backgroundColor: '#F7F6F6', padding: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10, marginBottom: 10 }}>Details</Text>
          <FlatList
            data={[
              {key: '5 beds'},
              {key: '4 baths'},
              {key: 'Dining Room'},
              {key: 'Living Room'},
              {key: 'Patio'},
              {key: 'Private Backyard'},
            ]}
            renderItem={({item}) => (
              <Text style={styles.detail}>
                {`\u2022 ${item.key}`}
              </Text>
            )}
          />
          <Text style={{ color: '#8E8D8D', marginTop: 20, marginBottom: 10, fontSize: 16 }}>More</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detail: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: '300',
    letterSpacing: 0.3
  }
});
