import { Text, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Button, TextInput } from "react-native-paper";
import { Auth } from "aws-amplify";
import { View } from "react-native-web";

export class SignOut extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Button style={styles.buttonContainer} onPress={() => Auth.signOut()} mode="contained-tonal">
					<Text style={styles.buttonText}>SignOut</Text>
				</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		width: 85,
		marginRight: 5,
		flex: 1,
		backgroundColor: "black",
		justifyContent: "center",
		flexWrap: "wrap",
	},
	container: {
		flex: 0.4,
		flexWrap: "wrap",
		width: 85,
		marginRight: 5,
	},
	buttonText: {
		color: "#fff",
		fontWeight: "600",
		fontSize: 11,
	},
});

export default SignOut;
