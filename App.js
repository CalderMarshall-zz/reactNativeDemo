import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchPage from './src/components/SearchPage/SearchPage';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
