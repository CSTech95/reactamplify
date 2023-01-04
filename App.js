import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
//import Amplify from "@aws-amplify/core";
import { NavigationContainer } from "@react-navigation/native";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Amplify, DataStore, Predicates } from "aws-amplify";
import awsConfig from "./src/aws-exports";
//import "react-native-gesture-handler";
import { Button, TextInput } from "react-native-paper";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure({ ...awsConfig, Analytics: { disabled: true } });

import Home from "./src/Screens/Home/Home";
import MyRentals from "./src/Screens/MyRentals/MyRentals";
<<<<<<< HEAD
import HelpMemos from "./src/Screens/HelpMemos/HelpMemos";
=======
import { HelpMemos } from "./src/Components/HelpMemos/HelpMemos";
>>>>>>> d11f476d6753260bb5ea71388d8a7e48212d7f85
import { RentVehicles } from "./src/Screens/RentVehicles/RentVehicles";
import { Payments } from "./src/Screens/Account/Account";
import SignOut from "./src/Components/SignOut/SignOut";

//const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

//const Drawer = createDrawerNavigator();

function MyTabs() {
	return (
		<Tab.Navigator style={styles.container}>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					headerRight: () => <SignOut />,
				}}
			/>
			<Tab.Screen
				name="My Rentals"
				component={MyRentals}
				options={{
					headerRight: () => <SignOut style={styles.signoutBtn} />,
				}}
			/>
			<Tab.Screen
				name="Find Rentals"
				component={RentVehicles}
				options={{
					headerRight: () => <SignOut style={styles.signoutBtn} />,
				}}
			/>
			<Tab.Screen
				name="Help"
				component={HelpMemos}
				options={{
					headerRight: () => <SignOut style={styles.signoutBtn} />,
				}}
			/>
			<Tab.Screen
				//TODO:: Make Account Screen that has profile & payment details
				name="Account"
				component={Payments}
				options={{
					headerRight: () => <SignOut style={styles.signoutBtn} />,
				}}
			/>
		</Tab.Navigator>
	);
}
//function MyDrawer() {
//	return (
//		<Drawer.Navigator initialRouteName="Home">
//			<Drawer.Screen name="Home" component={Home} />
//			<Drawer.Screen name="My Rentals" component={MyRentals} />
//		</Drawer.Navigator>
//	);
//}

function App() {
	return (
		<NavigationContainer>
			{/*<Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: "center" }}>
					<Stack.Screen name="Home" component={Home} />
				</Stack.Navigator>*/}
			<View style={styles.container}>
				<MyTabs />
			</View>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
	},
	signoutBtn: {
		//flex: 1,
		margin: 9,
	},
});

export default withAuthenticator(App);
