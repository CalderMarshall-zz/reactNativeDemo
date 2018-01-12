import React, { Component } from "react";
import {
  View,
  Image,
  ImageBackground,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Content,
  Button
} from "native-base";
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

//Variables for users device height and width
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  componenDidMount() {
    console.log("THis is a console");
  }

  handleLoginSubmit = () => {
    if(this.state.password === "" || this.state.email === "") {
      alert('Please fill in all fields')
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(data => {
          Actions.myPlace();
        })
    }
  };

  render() {
    console.log("THIS IS LOGIN STATE:", this.state);
    return (
      <ImageBackground
        source={require("../../assests/images/Login-Image.png")}
        style={{
          width: deviceWidth,
          height: deviceHeight,
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {/* White Opaque View Container */}
          <View
            style={{
              height: deviceHeight - 350,
              width: deviceWidth - 80,
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

            {/* View for Logos */}
            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
              {/* <Image
                source={require('../../assets/images/one-place-logo.png')}
              /> */}
              <Image
                source={require('../../assets/images/one-place-text.png')}
                style={{
                  width: deviceWidth - 150,
                  height: 60
                }}
              />
            </View>

            {/* View Container for Inputs */}
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: 'flex-end',
                flex: 1,
                marginBottom: 20
              }}
            >
              <TextInput
                placeholder="Email"
                placeholderTextColor="#000"
                style={{
                  height: 50,
                  width: deviceWidth / 1.5,
                  marginVertical: 30,
                  borderBottomColor: "#000",
                  borderBottomWidth: 2,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0
                }}
                onChangeText={(email) => this.setState({ email })}
                autoCapitalize={'none'}
              />

              <TextInput
                placeholder="Password"
                placeholderTextColor="#000"
                style={{
                  height: 50,
                  width: deviceWidth / 1.5,
                  borderBottomColor: "#000",
                  borderBottomWidth: 2,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0
                }}
                onChangeText={(password) => this.setState({ password })}
                autoCapitalize={'none'}
                secureTextEntry
              />
            </View>
          </View>
        </View>

        {/* View Container for Buttons */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20
          }}
        >
          <Button
            style={{
              width: deviceWidth - 120,
              height: 50,
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#0E2E59"
            }}
            onPress={() => this.handleLoginSubmit()}
          >
            <Text style={{ color: "#FFF", fontSize: 23 }}>Sign In</Text>
          </Button>
        </View>
        
        {/* View Container for sign up link */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', width: deviceWidth - 80, backgroundColor: "rgba(255, 255, 255, 0.7)", marginTop: 100}}>
            <Text style={{fontSize: 20}}>Don't have an account? </Text><TouchableOpacity onPress={() => Actions.signup()}><Text style={{fontSize: 20, color: '#C39A43'}}>Sign Up</Text></TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
