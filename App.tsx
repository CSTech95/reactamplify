import React from "react";
import { StatusBar, StyleSheet, View, SafeAreaView } from "react-native";
//import Amplify from "@aws-amplify/core";
import { Amplify, DataStore, Predicates } from "aws-amplify";
import awsConfig from "./src/aws-exports";
// import { withAuthenticator } from "aws-amplify-react-native";
import Routes from "./src/Routes";

Amplify.configure({ ...awsConfig, Analytics: { disabled: true } });

function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Routes></Routes>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
