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
import Radio from './components/Home/Home'
import Login from "./components/Login/Login";
import checkBox from "./components/checkBox/checkBox";

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar showLabel={false} style={style.tabBarStyle}>
                <Scene key="main">
                    <Scene
                        key="radioButton"
                        hideNavBar
                        component={Radio}
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
                    component={Radio}
                />
                <Scene
                    key="checkBox"
                    sceneStyle={{display: "none"}}
                    component={checkBox}
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
