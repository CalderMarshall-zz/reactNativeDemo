import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchPage from './src/components/SearchPage/SearchPage';
import ProductDetails from './src/components/ProductDetails/ProductDetails';
import FilterSearch from './src/components/FilterSearch/FilterSearch';
import HomeImages from './src/components/HomeImages/HomeImages';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchPage />
        {/* <ProductDetails /> */}
        {/* <FilterSearch /> */}
        {/* <HomeImages /> */}
      </View>
    )
  }
}

// import Router from './src/Router'
// import Home from './src/components/Home/Home'
// export default class App extends React.Component {
//   render() {
//     return (
//       <Router />
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
