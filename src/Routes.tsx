import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const Stack = createStackNavigator()

const Routes = () => {

    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />

                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default Routes;
