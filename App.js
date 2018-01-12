import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ImageBackground, Image, Dimensions, TextInput } from 'react-native';
import * as firebase from "firebase";
import Router from './src/components/Router';

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
      <Router />
    );
  }
}
