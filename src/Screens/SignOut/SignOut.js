import { Text, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Button, TextInput } from "react-native-paper";
import { Auth } from "aws-amplify";

export class SignOut extends Component {
	render() {
		return (
			<Button onPress={() => Auth.signOut()} mode="contained" style={styles.buttonContainer}>
				<Text style={styles.buttonText}>Sign out</Text>
			</Button>
		);
	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		//alignSelf: "center",
		//backgroundColor: "#4696ec",
		borderRadius: 30,
		//paddingHorizontal: 2,
		margin: 5,
	},
	buttonText: {
		color: "#fff",
		fontWeight: "600",
		padding: 16,
	},
	container: {
		//flex: 1,
		flexDirection: "row",
		justifyContent: "center",
	},
});

export default SignOut;
