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
import {Actions, ActionConst} from 'react-native-router-flux';
import {Divider} from '@shoutem/ui';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemSelected: 'hey',
            itemOneSelected: false,
            itemTwoSelected: false,
            types: [
                {label: 'param1', value: 0 },
                {label: 'param2', value: 1 }
            ]
        };


    }

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
                        <TouchableOpacity style={{height: 30, width: 30, marginTop: 20}} >
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
                                <Text style={{color: 'white'}}>Stuff</Text>
                                <CardItem style={style.questionItem}>


                                </CardItem>

                                    <CardItem style={style.questionItem}>
                                    <Left>
                                        <Icon
                                            name="ios-home"
                                            type="ionicon"
                                            style={style.makeWhite}
                                        />
                                        <Text style={style.activityText}>Stuff_1</Text>
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
                                        <Text style={style.activityText}>Stuff_2</Text>
                                    </Right>

                                </CardItem>




                            </Card>


                        </ScrollView>
                        <RadioForm
                            radio_props={this.state.types}
                            initial={0}
                            formHorizontal={false}
                            labelHorizontal={true}
                            buttonColor={'#2196f3'}
                            animation={true}
                            onPress={(value) => {this.setState({value:value})}}
                        />
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
        backgroundColor: '#F18231', shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: {height: 0, width: 0},
        width: deviceWidth - 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 5,
    },
    questionItem: {
        marginVertical: 3,
        width: deviceWidth - 25,
        flexDirection: 'row',
        backgroundColor: '#F18231',
        justifyContent: 'space-between'
    },

};