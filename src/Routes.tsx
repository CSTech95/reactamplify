import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import MyPage from "./components/MyPage";

const Stack = createStackNavigator()

export default class Routes extends React.Component {

    render() {
        return (
            <NavigationContainer >
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                    <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                    <Stack.Screen name="MyPage" component={MyPage} options={{ headerShown: false }} />

                    
                </Stack.Navigator>

            </NavigationContainer>
        );
    }
};

