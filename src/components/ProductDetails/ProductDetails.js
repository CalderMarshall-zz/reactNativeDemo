import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProductDetails extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Icon style={{ marginLeft: 15 }} name="angle-left" size={40} color="#900" />
          <Text style={styles.headerText}>230 E Court Dr SW</Text>
          <Icon style={{ marginRight: 5 }}name="angle-up" size={40} color="#900" />
          <Icon style={{ marginLeft: 5, marginRight: 10 }} name="angle-down" size={40} color="#900" />
        </View>
        <Image
          style={styles.img}
          source={require('../../assets/images/east-court-house.jpg')}
        />
        <View style={{ padding: 10 }}>
          <Text>$392,000</Text>
          <Text>Est. payment 1.1k/mo | Get Pre-qualified</Text>
          <Text>230 E Court Dr SW,</Text>
          <Text>Atlanta, GA 30331</Text>
          <Text>5 bd | 4 ba | 3,947 sq ft</Text>
        </View>
        <View style={{ backgroundColor: '#dedede', padding: 10 }}>
          <Text>Description</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut sit amet est porttitor, commodo tortor dapibus, feugiat lectus.
          </Text>
          <Text>More</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Text>Open More</Text>
          <Text>No Open Houses Currently Scheduled</Text>
        </View>
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
        <View style={{ padding: 10 }}>
          <Text>Mortgage Rates</Text>
          <Text>$2,308/month</Text>
          <Text>$392,000 listing price</Text>
          <Text>Principle And Interest</Text>
          <Text>Property Tax</Text>
          <Text>Other Expenses</Text>
        </View>
        <Image style={styles.graph} source={require('../../assets/images/graph.jpg')} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 375,
    height: 50
  },
  headerText: {
    flex: 1,
    width: 30,
    marginLeft: 60,
    marginRight: 10,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.5
  },
  img: {
    width: 375,
    height: 300
  },
  graph: {
    width: 250,
    height: 250
  }
});
