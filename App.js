import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchPage from './src/components/SearchPage/SearchPage';
import ProductDetails from './src/components/ProductDetails/ProductDetails';
import FilterSearch from './src/components/FilterSearch/FilterSearch';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchPage />
        {/* <ProductDetails /> */}
        {/* <FilterSearch /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
