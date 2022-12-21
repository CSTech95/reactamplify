import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import { TextInput } from "react-native-paper";
import { DataStore } from "aws-amplify";
import { Vehicle } from "../models";
import Header from "./Header";
import { Auth } from "aws-amplify";

const AddVehicle = () => {
	const [make, setMake] = useState("");
	const [model, setModel] = useState("");
	//useEffect(() => {
	async function addVehicle() {
		await DataStore.save(
			new Vehicle({
				make: make,
				model: model,
				isAvailable: true,
				//year: 2018,
				//vehicleType: "SUV",
				img: "image-placeholder",
			})
		);
		console.log("Car has been added. Check the DynamoDB database on Amplify. Or Check Content tab in Amplify Studio SideBar");
		setMake("");
		setModel("");
		//addVehicle();
	}

	return (
		<>
			<View>
				<TextInput style={{ height: 40 }} placeholder="Enter Make" onChangeText={(newMake) => setMake(newMake)} defaultValue={make} />
			</View>
			<View>
				<TextInput style={{ height: 40 }} placeholder="Enter Model" onChangeText={(newModel) => setModel(newModel)} defaultValue={model} />
			</View>

			<Pressable onPress={addVehicle} style={styles.buttonContainer}>
				<Text style={styles.buttonText}>Add Vehicle</Text>
			</Pressable>

			<Pressable onPress={() => Auth.signOut()} style={styles.buttonContainer}>
				<Text style={styles.buttonText}>Sign out</Text>
			</Pressable>
		</>
	);
};

const Home = () => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<AddVehicle />
		</>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: "#4696ec",
		paddingTop: Platform.OS === "ios" ? 44 : 0,
	},
	headerTitle: {
		color: "#fff",
		fontSize: 20,
		fontWeight: "600",
		paddingVertical: 16,
		textAlign: "center",
	},
	todoContainer: {
		alignItems: "center",
		backgroundColor: "#fff",
		borderRadius: 2,
		elevation: 4,
		flexDirection: "row",
		marginHorizontal: 8,
		marginVertical: 4,
		padding: 8,
		shadowOffset: {
			height: 1,
			width: 1,
		},
		shadowOpacity: 0.3,
		shadowRadius: 2,
	},
	todoHeading: {
		fontSize: 20,
		fontWeight: "600",
	},
	checkbox: {
		borderRadius: 2,
		borderWidth: 2,
		fontWeight: "700",
		height: 20,
		marginLeft: "auto",
		textAlign: "center",
		width: 20,
	},
	completedCheckbox: {
		backgroundColor: "#000",
		color: "#fff",
	},
	buttonText: {
		color: "#fff",
		fontWeight: "600",
		padding: 16,
	},
	buttonContainer: {
		alignSelf: "center",
		backgroundColor: "#4696ec",
		borderRadius: 99,
		paddingHorizontal: 8,
	},
	floatingButton: {
		position: "absolute",
		bottom: 44,
		elevation: 6,
		shadowOffset: {
			height: 4,
			width: 1,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4,
	},
	modalContainer: {
		backgroundColor: "rgba(0,0,0,0.5)",
		flex: 1,
		justifyContent: "center",
		padding: 16,
	},
	modalInnerContainer: {
		backgroundColor: "#fff",
		borderRadius: 16,
		justifyContent: "center",
		padding: 16,
	},
	modalInput: {
		borderBottomWidth: 1,
		marginBottom: 16,
		padding: 8,
	},
	modalDismissButton: {
		marginLeft: "auto",
	},
	modalDismissText: {
		fontSize: 20,
		fontWeight: "700",
	},
});

export default Home;
