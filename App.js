import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
//import Amplify from "@aws-amplify/core";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Amplify, DataStore, Predicates } from "aws-amplify";
import awsConfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure({ ...awsConfig, Analytics: { disabled: true } });

import Home from "./src/Components/HomeScreen/Home";

const Stack = createNativeStackNavigator();

function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: "center" }}>
					{/*<StatusBar />*/}
					{/*<Home />*/}
					<Stack.Screen name="Home" component={Home} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
	},
});

export default withAuthenticator(App);
