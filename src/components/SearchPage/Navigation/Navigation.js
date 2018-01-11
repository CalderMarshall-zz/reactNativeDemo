import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Icon } from "native-base";

SearchIcon = () => {
  return (
      <View style={{ alignItems: "center", paddingTop: 7 }}>
          <Icon
              name="ios-search"
              type="ionicon"
              style={{ color: "#032F5C" }}
          />
          <Text style={{ color: "#032F5C" }}>Search</Text>
      </View>
  );

};
MyPlaceIcon = () => {
  return (
      <View style={{ alignItems: "center", paddingTop: 7 }}>
          <Icon
              name="ios-home"
              type="ionicon"
              style={{ color: "#032F5C" }}
          />
          <Text style={{ color: "#032F5C" }}>My Place</Text>
      </View>
  );

};
UniversityIcon = () => {
  return (
      <View style={{ alignItems: "center", paddingTop: 7 }}>
          <Icon
              name="ios-school"
              type="ionicon"
              style={{ color: "#032F5C" }}
          />
          <Text style={{ color: "#032F5C" }}>University</Text>
      </View>
  );

};
CommunityIcon = () => {
  return (
      <View style={{ alignItems: "center", paddingTop: 7 }}>
          <Icon
              name="ios-people"
              type="ionicon"
              style={{ color: "#032F5C" }}
          />
          <Text style={{ color: "#032F5C" }}>Community</Text>
      </View>
  );

};
ProfileIcon = () => {
  return (
      <View style={{ alignItems: "center", paddingTop: 7 }}>
          <Icon
              name="md-person"
              type="ionicon"
              style={{ color: "#032F5C" }}
          />
          <Text style={{ color: "#032F5C" }}>Profile</Text>
      </View>
  );

};

const Navigation = () => (
  <View style={styles.navContainer}>
    <SearchIcon />
    <MyPlaceIcon />
    <UniversityIcon />
    <CommunityIcon />
    <ProfileIcon />
  </View>
)

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    justifyContent: 'space-between'
  },
  navText: {
    textAlign: 'center'
  }
});

export default Navigation;


// navContainer: {
//   flex: 1,
//   position: 'absolute',
//   zIndex: 100,
//   bottom: 0,
//   backgroundColor: 'white',
//   padding: 30,
//   paddingBottom: 40,
//   width: 375
// },