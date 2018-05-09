import React, {Component} from "react";
import {
    Scene,
    Router,
    Actions,
    Reducer,
    Stack
} from "react-native-router-flux";
import {Text, View, Image, StyleSheet, StatusBar} from "react-native";
import {Icon} from "native-base";
import Home from './components/Home/Home'
import SearchPage from './components/SearchPage/SearchPage';
import FilterSearch from './components/FilterSearch/FilterSearch';
import ProductDetails from './components/ProductDetails/ProductDetails';
import HomeImages from './components/HomeImages/HomeImages';
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Community from './components/Community/Community'

SearchIcon = () => {
    return (
        <View style={{alignItems: "center", paddingTop: 7}}>
            <Icon name="ios-search" type="ionicon" style={{color: "#032F5C"}}/>
            <Text style={{color: "#032F5C"}}>Search</Text>
        </View>
    );
};
MyPlaceIcon = () => {
    return (
        <View style={{alignItems: "center", paddingTop: 7}}>
            <Icon name="ios-home" type="ionicon" style={{color: "#032F5C"}}/>
            <Text style={{color: "#032F5C"}}>My Place</Text>
        </View>
    );
};
UniversityIcon = () => {
    return (
        <View style={{alignItems: "center", paddingTop: 7}}>
            <Icon name="ios-school" type="ionicon" style={{color: "#032F5C"}}/>
            <Text style={{color: "#032F5C"}}>University</Text>
        </View>
    );
};
CommunityIcon = () => {
    return (
        <View style={{alignItems: "center", paddingTop: 7}}>
            <Icon name="ios-people" type="ionicon" style={{color: "#032F5C"}}/>
            <Text style={{color: "#032F5C"}}>Community</Text>
        </View>
    );
};
ProfileIcon = () => {
    return (
        <View style={{alignItems: "center", paddingTop: 7}}>
            <Icon name="md-person" type="ionicon" style={{color: "#032F5C"}}/>
            <Text style={{color: "#032F5C"}}>Profile</Text>
        </View>
    );
};

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar showLabel={false} style={style.tabBarStyle}>
                <Scene key="main">
                    <Scene
                        key="radioButton"
                        hideNavBar
                        component={Home}
                    />
                </Scene>

                <Scene
                    key="login"
                    sceneStyle={{display: "none"}}
                    component={Login}
                    initial
                />
                <Scene
                    key="radioButton"
                    sceneStyle={{display: "none"}}
                    component={Home}
                />
            </Stack>
        </Router>
    );
};
const style = StyleSheet.create({
    tabBarStyle: {
        height: 65,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: '#02214B'
    },
    icons: {
        color: "black"
    }
});
export default RouterComponent;
