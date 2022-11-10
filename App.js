import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
//import Amplify from "@aws-amplify/core";
import { Amplify, DataStore, Predicates } from "aws-amplify";
import awsConfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure({ ...awsConfig, Analytics: { disabled: true } });

import Home from "./src/Home";

function App() {
	return (
		<View style={styles.container}>
			<StatusBar />
			<Home />
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
