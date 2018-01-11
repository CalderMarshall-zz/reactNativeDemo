import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ImageBackground, Image, Dimensions, TextInput } from 'react-native';
import * as firebase from "firebase";

// Initialize Firebase

var config = {
  apiKey: "AIzaSyB5CYcJfw_B0FTDi1ZNERHd6eCoSzootS8",
  authDomain: "oneplace-7455a.firebaseapp.com",
  databaseURL: "https://oneplace-7455a.firebaseio.com",
  projectId: "oneplace-7455a",
  storageBucket: "oneplace-7455a.appspot.com",
  messagingSenderId: "64716409146"
};
firebase.initializeApp(config);



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <ImageBackground style={styles.imageBackground} source={require('./src/assets/images/rectangle_17_720.png')}>

          <Image style={styles.logo} source={require('./src/assets/images/onePlaceLogo.png')} />

          <View style={styles.opaqueArea}>

            <TextInput style={styles.TextInput} placeholder='username or email' placeholderTextColor='#000' />

            <TextInput style={styles.TextInput} placeholder='password' placeholderTextColor='#000' />

          </View>



        </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  imageBackground: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center'
  },

  opaqueArea: {
    width: 300,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, .5)'
  },

  logo: {

  },

  TextInput: {
    width: 250,
    height: 60,
    margin: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 1
  }
});