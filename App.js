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

import Home from "./src/Screens/HomeScreen/Home";
import MyRentals from "./src/Screens/MyRentals/MyRentals";
import HelpMemos from "./src/Screens/HelpMemos/HelpMemos";
import { RentVehicles } from "./src/Screens/RentVehicles/RentVehicles";
import { Payments } from "./src/Screens/Payments/Payments";
import SignOut from "./src/Screens/SignOut/SignOut";

//const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

//const Drawer = createDrawerNavigator();

function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					headerRight: () => <SignOut style={styles.signoutBtn} />,
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
				name="Help Memos"
				component={HelpMemos}
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
				name="Payments"
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
		<View style={styles.container}>
			<NavigationContainer>
				{/*<Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: "center" }}>
					<Stack.Screen name="Home" component={Home} />
				</Stack.Navigator>*/}
				<MyTabs />
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
	},
	signoutBtn: {
		//flex: 1,
	},
});

export default withAuthenticator(App);
