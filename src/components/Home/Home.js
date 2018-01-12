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
    StatusBar
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


export default class Home extends Component {
    render() {
        return (
            <Container style={{backgroundColor: '#FFF', display: 'flex', flex: 1}}>
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
                        <TouchableOpacity style={{height: 30, width: 30, marginTop: 40}} onPress={() => {
                            Actions.home()
                        }}>
                            <Image
                                source={require('../../assests/images/logo_Small.png')}
                                style={{height: 30, width: 30}}
                            />
                        </TouchableOpacity>
                    </Left>
                    <Body>

                    <Text style={{fontSize: 20, color: "#00214B", marginTop: 110}}>My Place</Text>
                    <Divider style={{width: 1000, borderWidth: 2, borderColor: '#02214B', marginLeft: -200}}
                             styleName="line"/>

                    <Text style={{
                        backgroundColor: '#F1F1F1',
                        width: 200,
                        paddingVertical: 5,
                        marginVertical: 3,
                        textAlign: 'center',
                        fontSize: 10,
                        color: '#AFAFAF'
                    }}>SEARCH</Text>
                    <Divider style={{width: 1000, borderWidth: 1, borderColor: '#02214B', marginLeft: -200}}
                             styleName="line"/>


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
                    <View style={style.innerViewContainer}>
                        <ScrollView contentContainerStyle={style.scrollViewContentContainer}>
                            <Card style={{
                                backgroundColor: '#02214B', shadowOpacity: 0.75,
                                shadowRadius: 5,
                                shadowColor: 'black',
                                shadowOffset: {height: 0, width: 0},
                            }}>
                                <CardItem style={{
                                    backgroundColor: '#02214B',
                                    width: deviceWidth - 20,
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{color: 'white'}}>
                                        transaction tracking
                                    </Text>
                                </CardItem>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center', marginBottom: -30
                                }}>
                                    <Image resizeMode='contain' source={require('../../assests/images/oval_Large.png')}
                                           style={{
                                               height: 140, width: null, flexGrow: 1,
                                               alignItems: 'center',
                                               justifyContent: 'center'
                                           }}/>

                                    <View style={{bottom: 90, backgroundColor: 'transparent'}}>
                                        <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>86%</Text>
                                        <Text
                                            style={{color: 'white', textAlign: 'center', fontSize: 20}}>completed</Text>
                                    </View>


                                </View>
                            </Card>
                            <Card style={{
                                display: 'flex', flexDirection: 'row',
                                width: deviceWidth - 20,
                                justifyContent: 'center', marginTop: -5,
                                shadowOpacity: 0.75,
                                shadowRadius: 5,
                                shadowColor: 'black',
                                shadowOffset: {height: 0, width: 0},
                            }}>
                                <CardItem style={style.ovalCard}>
                                    <Text style={style.ovalText}>tasks completed</Text>
                                    <Text style={{fontSize: 16}}>20</Text>
                                </CardItem>

                                <CardItem style={style.ovalCard}>
                                    <Text style={style.ovalText}>task at hand</Text>
                                    <Text style={{fontSize: 12}}>Due Diligence</Text>
                                </CardItem>

                                <CardItem style={style.ovalCardLast}>
                                    <Text style={style.ovalText}>tasks in progress</Text>
                                    <Text style={{fontSize: 16}}>4</Text>
                                </CardItem>
                            </Card>

                            <View style={style.spinnerCard}>
                                <Image resizeMode='contain' style={{height: 30, width: 30}}
                                       source={require('../../assests/images/oval_Small.png')}/>
                                <Text style={style.redOvalText}>Due Diligence</Text>
                                <Text style={style.redOvalText}>02/28</Text>
                            </View>

                            <Card style={style.propertyActivity}>
                                <Text style={{color: 'white'}}>Property Activity</Text>
                                <CardItem style={style.propertyActivityCardItem}>
                                    <Left>
                                        <Icon
                                            name="ios-home"
                                            type="ionicon"
                                            style={style.makeWhite}
                                        />
                                        <Text style={style.activityText}>Open House</Text>
                                    </Left>
                                    <Right style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                        <Icon
                                            name="ios-time"
                                            type="ionicon"
                                            style={style.timeIcon}
                                        >
                                        </Icon>
                                        <Text style={style.activityText}>3d ago</Text>
                                    </Right>


                                </CardItem>

                                <CardItem style={style.propertyActivityCardItem}>
                                    <Left>
                                        <Icon
                                            name="ios-home"
                                            type="ionicon"
                                            style={style.makeWhite}
                                        />
                                        <Text style={style.activityText}>Floors Installed</Text>
                                    </Left>

                                    <Right style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                        <Icon
                                            name="ios-time"
                                            type="ionicon"
                                            style={style.timeIcon}
                                        >
                                        </Icon>
                                        <Text style={style.activityText}>3d ago</Text>
                                    </Right>

                                </CardItem>

                                <CardItem style={style.propertyActivityCardItem}>
                                    <Left>
                                        <Icon
                                            name="ios-home"
                                            type="ionicon"
                                            style={style.makeWhite}
                                        />
                                        <Text style={style.activityText}>New Windows Installed</Text>
                                    </Left>

                                    <Right style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                        <Icon
                                            name="ios-time"
                                            type="ionicon"
                                            style={style.timeIcon}
                                        >
                                        </Icon>
                                        <Text style={style.activityText}>1w ago</Text>
                                    </Right>

                                </CardItem>

                                <CardItem style={style.propertyActivityCardItem}>
                                    <Left>
                                        <Icon
                                            name="ios-home"
                                            type="ionicon"
                                            style={style.makeWhite}
                                        />
                                        <Text style={style.activityText}>New Roof</Text>
                                    </Left>

                                    <Right style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                        <Icon
                                            name="ios-time"
                                            type="ionicon"
                                            style={style.timeIcon}
                                        >
                                        </Icon>
                                        <Text style={style.activityText}>3w ago</Text>
                                    </Right>

                                </CardItem>

                            </Card>

                            <Card>
                                <CardItem style={style.onePlaceUniversityCard}>
                                    <Text style={{color: 'white'}}>
                                        One Place University
                                    </Text>
                                </CardItem>

                                    <CardItem style={style.borderBottomCardItem}>
                                        <Left style={{marginRight: -100}}>
                                            <Image style={style.uniImg}
                                                   source={require('../../assests/images/table.jpg')}/>
                                        </Left>
                                        <Body>
                                            <Text style={{fontSize: 9}}>
                                                At vero eos et accusamus et iusto odio dignissimos ducimus
                                                qui blanditiis praesentium voluptatum
                                            </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem style={style.borderBottomCardItem}>
                                        <Left style={{marginRight: -100}}>
                                            <Image style={style.uniImg}
                                                   source={require('../../assests/images/clock.jpg')}/>
                                        </Left>
                                        <Body>
                                            <Text style={{fontSize: 9}}>
                                                At vero eos et accusamus et iusto odio dignissimos ducimus
                                                qui blanditiis praesentium voluptatum
                                            </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem style={style.borderBottomCardItem}>
                                        <Left style={{marginRight: -100}}>
                                            <Image style={style.uniImg}
                                                   source={require('../../assests/images/silly_room.jpg')}/>
                                        </Left>
                                        <Body>
                                            <Text style={{fontSize: 9}}>
                                                At vero eos et accusamus et iusto odio dignissimos ducimus
                                                qui blanditiis praesentium voluptatum
                                            </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem style={style.borderBottomCardItem}>
                                        <Left style={{marginRight: -100}}>
                                            <Image style={style.uniImg}
                                                   source={require('../../assests/images/laptops.png')}/>
                                        </Left>
                                        <Body>
                                            <Text style={{fontSize: 9}}>
                                                At vero eos et accusamus et iusto odio dignissimos ducimus
                                                qui blanditiis praesentium voluptatum
                                            </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem>
                                        <Left style={{marginRight: -100}}>
                                            <Image style={style.uniImg}
                                                   source={require('../../assests/images/CREAM.jpg')}/>
                                        </Left>
                                        <Body>
                                            <Text style={{fontSize: 9}}>
                                                At vero eos et accusamus et iusto odio dignissimos ducimus
                                                qui blanditiis praesentium voluptatum
                                            </Text>
                                        </Body>
                                    </CardItem>
                            </Card>

                            <Card style={{backgroundColor: '#01224A', width: deviceWidth - 20, borderColor: 'transparent',shadowOpacity: 0.75,
                                shadowRadius: 5,
                                marginTop: 20,
                                marginBottom: 30,
                                shadowColor: 'black',
                                shadowOffset: {height: 0, width: 0},}}>
                                <Image
                                    style={{ width: '100%', paddingRight: 0, height: 118}}
                                    source={require('../../assests/images/card_Com.jpg')}
                                    resizeMode='cover'
                                >
                                </Image>
                            </Card>
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
        width: deviceWidth,
        // backgroundColor: 'transparent',
        justifyContent: 'center',
        flex: 1,
    },
    innerViewContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        width: deviceWidth,
    },
    scrollView: {
        flexDirection: 'column',
        height: deviceHeight,
        width: deviceWidth,
    },
    scrollViewContentContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: deviceWidth,
        marginTop: 10,
    },
    ovalText: {
        fontSize: 11,
        paddingBottom: 10
    },
    redOvalText: {
        color: 'white'
    },
    activityText: {
        color: 'white',
        fontSize: 12,
    },
    makeWhite: {
        color: 'white',
        fontSize: 16
    },
    timeIcon: {
        color: 'white',
        fontSize: 16,
        paddingHorizontal: 15
    },
    ovalCard: {
        display: 'flex',
        flexDirection: 'column',
        borderRightWidth: 1,
        borderRightColor: 'gray',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    ovalCardLast: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    spinnerCard: {
        backgroundColor: '#01224A', shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: {height: 0, width: 0},
        width: deviceWidth - 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 5,
        marginVertical: 10
    },
    propertyActivity: {
        backgroundColor: '#01224A', shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: {height: 0, width: 0},
        width: deviceWidth - 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 5,
        marginVertical: 10
    },
    propertyActivityCardItem: {
        marginVertical: 3,
        width: deviceWidth - 25,
        flexDirection: 'row',
        backgroundColor: '#01224A',
        justifyContent: 'space-between'
    },
    onePlaceUniversityCard: {
        backgroundColor: '#01224A', shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: {height: 0, width: 0},
        width: deviceWidth - 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    uniImg: {
        height: 52,
        width: 100,
        marginLeft: -15,
        marginTop: -10,
        marginBottom: -10
    },
    borderBottomCardItem: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    }
};