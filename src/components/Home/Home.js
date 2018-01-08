import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform, Dimensions, TextInput, ListView, FlatList, ScrollView, StatusBar } from 'react-native';
import { Container, Header, Content, Text, Button, Card, Item, Left, Icon, Body, Right, Input, Spinner } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import {Divider} from '@shoutem/ui';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


export default class Home extends Component {
    render () {
        return (
            <Container style={{ backgroundColor: '#FFF', display: 'flex', flex: 1}}>
                <Header
                    style={{
                        backgroundColor: "white",
                        borderBottomColor: "white",
                        height: 30,
                        paddingBottom: 10,
                        zIndex: 1000
                    }}
                >
                    <Left>
                        <TouchableOpacity style={{height: 30, width: 30, marginTop: 40}} onPress={() => {Actions.home()}}>
                            <Image
                                source={{uri: 'http://res.cloudinary.com/mahmusiclee/image/upload/v1515442358/corner_logo_yirut8.png'}}
                                style={{height: 30, width: 30}}
                            />
                        </TouchableOpacity>
                    </Left>
                    <Body>

                        <Text style={{fontSize: 20, color: "#00214B", marginTop: 110}}>My Place</Text>
                        <Divider style={{width: 1000, borderWidth: 2, borderColor: '#02214B', marginLeft: -200}} styleName="line" />

                        <Text style={{backgroundColor: '#F1F1F1', width: 200, paddingVertical: 5, marginVertical: 3, textAlign: 'center', fontSize: 10, color: '#AFAFAF'}}>SEARCH</Text>
                        <Divider style={{width: 1000, borderWidth: 1, borderColor: '#02214B', marginLeft: -200}} styleName="line" />



                    </Body>
                    <Right>
                        <Icon
                            name="ios-arrow-round-up"
                            color="grey"
                            style={{ color: "grey", fontSize: 27 }}
                        />
                    </Right>
                </Header>
                <View style={style.outerViewContainer}>
                    <View style={style.innerViewContainer}>
                        <ScrollView contentContainerStyle={style.scrollViewContentContainer}>
                            <Image
                                source={{uri: 'http://res.cloudinary.com/mahmusiclee/image/upload/v1515444278/home_5_khtnrg.png'}}
                                style={{width: 200, height: 80}}
                            />
                            <Image
                                source={{uri: 'http://res.cloudinary.com/mahmusiclee/image/upload/v1515444278/home_5_khtnrg.png'}}
                                style={{width: 200, height: 80}}
                            />
                            <Image
                                source={{uri: 'http://res.cloudinary.com/mahmusiclee/image/upload/v1515444278/home_5_khtnrg.png'}}
                                style={{width: 200, height: 80}}
                            />
                            <Image
                                source={{uri: 'http://res.cloudinary.com/mahmusiclee/image/upload/v1515444278/home_5_khtnrg.png'}}
                                style={{width: 200, height: 80}}
                            />
                            <Image
                                source={{uri: 'http://res.cloudinary.com/mahmusiclee/image/upload/v1515444278/home_5_khtnrg.png'}}
                                style={{width: 200, height: 80}}
                            />
                            <Image
                                source={{uri: 'http://res.cloudinary.com/mahmusiclee/image/upload/v1515444278/home_5_khtnrg.png'}}
                                style={{width: 200, height: 80}}
                            />
                            <Image
                                source={{uri: 'http://res.cloudinary.com/mahmusiclee/image/upload/v1515444278/home_5_khtnrg.png'}}
                                style={{width: 200, height: 80}}
                            />
                            <Image
                                source={{uri: 'http://res.cloudinary.com/mahmusiclee/image/upload/v1515444278/home_5_khtnrg.png'}}
                                style={{width: 200, height: 80}}
                            />
                            <Image
                                source={{uri: 'http://res.cloudinary.com/mahmusiclee/image/upload/v1515444278/home_5_khtnrg.png'}}
                                style={{width: 200, height: 80}}
                            />
                            <Image
                                source={{uri: 'http://res.cloudinary.com/mahmusiclee/image/upload/v1515444278/home_5_khtnrg.png'}}
                                style={{width: 200, height: 80}}
                            />
                            <Image
                                source={{uri: 'http://res.cloudinary.com/mahmusiclee/image/upload/v1515444278/home_5_khtnrg.png'}}
                                style={{width: 200, height: 80}}
                            />
                        </ScrollView>
                    </View>
                </View>

            </Container>
        )

    }

}
const style = {
    outerViewContainer: {
        height: deviceHeight,
        marginTop: 75,
        // backgroundColor: 'transparent',
        justifyContent: 'center',


    },
    innerViewContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        flex: 1,

    },
    scrollView: {
        flexDirection: 'column',
        height: deviceHeight,

    },
    scrollViewContentContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
};