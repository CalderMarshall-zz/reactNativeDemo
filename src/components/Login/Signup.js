import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View, ImageBackground, Dimensions, Image } from "react-native";
import {
    Container,
    Header,
    Left,
    Right,
    Body,
    Content,
    Button
  } from "native-base";
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';

//Variables for users device height and width
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;


export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: '',
            confirmPassword: '',
            email: ''
        }
    }

    // firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)

    handleCreateUser = () => {
        if(this.state.password !== this.state.confirmPassword) {
            alert('Passwords do not match')
        } else {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(data => {
                firebase.database().ref(`users/${data.uid}`).set({
                    name: this.state.name,
                    email: this.state.email,
                    userId: data.uid
                });
                Actions.myPlace();
            }).catch(error => {
                alert(error)
            })
        }
    }

    render() {
        return (
            <ImageBackground
                source={require('../../assets/images/Signup-Background.png')}
                style={{
                    width: deviceWidth,
                    height: deviceHeight,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        height: deviceHeight - 150,
                        width: deviceWidth - 60,
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <View style={{marginTop: 40}}>
                        <Image
                            source={require('../../assets/images/one-place-text.png')}
                            style={{
                            width: deviceWidth - 150,
                            height: 60
                            }}
                        />
                    </View>

                    <View
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            justifyContent: 'flex-end',
                            flex: 1
                        }}
                    >
                        <TextInput
                            placeholder="Name"
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
                            onChangeText={(name) => this.setState({ name })}
                            autoCapitalize={'words'}
                        />
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
                            secureTextEntry
                            autoCapitalize={'none'}
                        />
                        <TextInput
                            placeholder="Confirm Password"
                            placeholderTextColor="#000"
                            style={{
                                height: 50,
                                width: deviceWidth / 1.5,
                                borderBottomColor: "#000",
                                borderBottomWidth: 2,
                                marginVertical: 30,
                                borderTopWidth: 0,
                                borderLeftWidth: 0,
                                borderRightWidth: 0
                            }}
                            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                            secureTextEntry
                            autoCapitalize={'none'}
                        />
                    </View>

                    {/* View Container for Buttons */}
                    <View
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 20
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
                            onPress={() => this.handleCreateUser()}
                        >
                            <Text style={{ color: "#FFF", fontSize: 23 }}>Get Started</Text>
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}