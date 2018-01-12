import React, {Component} from 'react';
import {
    Image,
    View,
    TouchableOpacity,
    Platform,
    Dimensions,
    TextInput,
    ListView,
    FlatList,
    ScrollView,
    StatusBar,
    ImageBackground
} from 'react-native';
import {
    Container,
    Header,
    Content,
    Text,
    Button,
    Card,
    CardItem,
    Item,
    Left,
    Icon,
    Body,
    Right,
    Input,
    Spinner
} from 'native-base';
import {Actions, ActionConst} from 'react-native-router-flux';
import {Divider} from '@shoutem/ui';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Community extends Component {
    render() {
        return (
            <Container>
                <Header
                    style={{
                        backgroundColor: "white",
                        borderBottomColor: "white",
                        height: 70,
                        zIndex: 1000,
                        paddingBottom: 10
                    }}
                >
                    <Left>
                        <TouchableOpacity style={{height: 30, width: 30}} onPress={() => {
                            Actions.myPlace()
                        }}>
                            <Image
                                source={require('../../assests/images/logo_Small.png')}
                                style={{height: 30, width: 30}}
                            />
                        </TouchableOpacity>
                    </Left>
                    <Body>

                    <Text style={{fontSize: 20, color: "#00214B"}}>Community</Text>


                    </Body>
                    <Right>
                        <Icon
                            name="ios-arrow-round-up"
                            color="grey"
                            style={{color: "grey", fontSize: 27}}
                        />
                    </Right>
                </Header>
                <View style={style.outerViewContainer}>

                        <ScrollView contentContainerstyle={style.mostInnerViewContentContainer}>

                                <ImageBackground
                                    source={require('../../assests/images/phone_hand.jpg')}
                                    style={{width: deviceWidth, height: 300}}
                                    resizeMode='cover'
                                >
                                    <Card style={style.bannerCard}>
                                        <Text style={style.connectText}>Connect With Us</Text>
                                    </Card>

                                </ImageBackground>

                                <Card style={{borderColor: 'transparent', marginLeft: 0, marginBottom: 0, shadowOpacity: 0}}>
                                    <CardItem style={style.borderCard}>
                                        <Left style={{marginRight: -100}}>
                                            <Image style={style.socialImg}
                                               source={require('../../assests/images/facebook_card.jpg')}
                                               resizeMode='cover'
                                            />
                                        </Left>
                                        <Body style={{justifyContent: 'center'}}>
                                        <Text style={{fontSize: 14}}>
                                           Follow us on Facebook for the latest Updates
                                        </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem style={style.borderCard}>
                                        <Left style={{marginRight: -100}}>
                                            <Image style={style.socialImg}
                                               source={require('../../assests/images/twitter_card.png')}
                                               resizeMode='cover'
                                            />
                                        </Left>
                                        <Body style={{justifyContent: 'center'}}>
                                        <Text style={{fontSize: 14}}>
                                           Follow us on Twitter to see what we're doing!
                                        </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem style={style.borderCard}>
                                        <Left style={{marginRight: -100}}>
                                            <Image style={style.socialImg}
                                               source={require('../../assests/images/instagram_card.jpg')}
                                               resizeMode='cover'
                                            />
                                        </Left>
                                        <Body style={{justifyContent: 'center'}}>
                                            <Text style={{fontSize: 14}}>
                                            Follow us on Instagram to capture our essence!
                                            </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem style={style.borderCard}>
                                        <Left style={{marginRight: -100}}>
                                            <Image style={style.socialImg}
                                               source={require('../../assests/images/youtube_card.png')}
                                               resizeMode='cover'
                                            />
                                        </Left>
                                        <Body style={{justifyContent: 'center'}}>
                                        <Text style={{fontSize: 14}}>
                                           Subscribe to our Youtube Channel and get our up-to-date home tips
                                        </Text>
                                        </Body>
                                    </CardItem>
                                </Card>

                        </ScrollView>


                </View>
            </Container>
        )
    }
}
const style = {
    outerViewContainer: {
        height: deviceHeight,
        width: deviceWidth,
        // backgroundColor: 'transparent',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    innerViewContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        width: deviceWidth,
        backgroundColor: 'white'
    },
    mostInnerViewContentContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: deviceWidth,
        backgroundColor: 'white',
    },
    bannerCard: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'transparent',
    },
    connectText: {
        fontSize: 30,
        color: 'white',
        fontWeight: '900'
    },
    socialImg: {
        height: 65,
        width: 100,
        // marginTop: -10,
        // marginBottom: -10,
        // marginLeft: -20
    },
    borderCard: {
        borderColor: 'gray',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: deviceWidth,
        marginVertical: 5,
        backgroundColor: 'transparent',
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
        flexDirection: 'row',
    }
};