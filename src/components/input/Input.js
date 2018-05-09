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
    ListItem,
    CardItem,
    Item,
    Left,
    Icon,
    Body,
    Right,
    Input,
    Spinner
} from 'native-base';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { CheckBox } from 'react-native-elements'

import {Actions, ActionConst} from 'react-native-router-flux';
import {Divider} from '@shoutem/ui';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


export default class inputBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: ""
        };



    }
        showColor = () => {
            return (
                <View>
                    <Text>You chose {this.state.color}</Text>
                </View>
            )
        };


    render() {
        console.log("this.state.checkbox1", this.state.checkbox1);
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
                        <TouchableOpacity style={{height: 30, width: 30, marginTop: 20}}
                                          onPress={() => Actions.pop()}>
                            <Text style={{fontSize: 24}}>{"<"}</Text>
                        </TouchableOpacity>
                    </Left>
                    <Body>

                    <Text style={{fontSize: 20, color: "#00214B", marginTop: 60}}>Test App</Text>






                    </Body>
                    <Right>

                    </Right>
                </Header>
                <View style={style.outerViewContainer}>
                    <View style={style.innerViewContainer}>
                        <ScrollView contentContainerStyle={style.scrollViewContentContainer}>


                            <Card style={style.question}>
                                <Text style={{color: 'black', fontSize: 16, paddingVertical: 10}}>Type Your Favorite Color</Text>
                                <TextInput
                                    placeholder="Your Color"
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
                                    onChangeText={(color) => this.setState({ color })}
                                    autoCapitalize={'none'}
                                />


                            </Card>



                            {/*<View style={style.buttonView}>*/}
                                {/*<Button*/}
                                    {/*large*/}
                                    {/*style={{*/}
                                        {/*width: deviceWidth - 120,*/}
                                        {/*height: 50,*/}
                                        {/*flexDirection: "row",*/}
                                        {/*justifyContent: "center",*/}
                                        {/*backgroundColor: "#DAD9DA"*/}
                                    {/*}}*/}
                                    {/*onPress={() => Actions.login()}*/}
                                {/*>*/}
                                    {/*<Text style={{ color: "black", fontSize: 24 }}>Submit</Text>*/}
                                {/*</Button>*/}
                            {/*</View>*/}



                            <View style={style.buttonView}>
                                <Button
                                    large
                                    style={{
                                        width: deviceWidth - 120,
                                        height: 50,
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        backgroundColor: "#DAD9DA"
                                    }}
                                    onPress={() => Actions.login()}
                                >
                                    <Text style={{ color: "black", fontSize: 24 }}>Back to Login</Text>
                                </Button>
                            </View>







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
        marginTop: 35,
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
    radio: {
        width: deviceWidth - 50
    },
    question: {
        backgroundColor: "#DAD9DA",
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: {height: 0, width: 0},
        width: deviceWidth - 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,

    },
    buttonView: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,

    },
    questionItem: {
        marginVertical: 10,
        width: deviceWidth - 25,
        flexDirection: 'row',
        backgroundColor: "#DAD9DA",
        justifyContent: 'space-around',
    },
    colorView: {
        width: deviceWidth - 50,
    },

};