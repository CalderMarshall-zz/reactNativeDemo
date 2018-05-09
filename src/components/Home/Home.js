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


export default class Radio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemSelected: 'hey',
            itemOneSelected: false,
            itemTwoSelected: false,
            types: [
                {label: 'Shovels', value: 0 },
                {label: 'Paint', value: 0 },
                {label: 'Epoxy', value: 0 },
                {label: 'Chicken', value: 0 },

            ],
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false
        };


    }



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
                        <TouchableOpacity
                            style={{height: 30, width: 30, marginTop: 20}}
                            onPress={() => Actions.pop()}
                        >
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
                                <Text style={{color: 'black', fontSize: 20}}>Which of these does Home Depot not sell?</Text>
                                    <CardItem style={style.questionItem}>
                                        <RadioForm
                                            radio_props={this.state.types}
                                            initial={0}
                                            formHorizontal={true}
                                            labelHorizontal={false}
                                            buttonInnerColor={"#2B98F0"}
                                            buttonColor={"#2B98F0"}
                                            animation={true}
                                            labelStyle={{fontSize: 20, color: 'black', paddingTop: 10}}
                                            onPress={(value) => {this.setState({value:value})}}
                                        />
                                </CardItem>
                            </Card>
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
                                    onPress={() => Actions.checkBox()}
                                >
                                    <Text style={{ color: "black", fontSize: 24 }}>Next</Text>
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

};