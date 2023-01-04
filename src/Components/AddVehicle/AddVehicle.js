import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { DataStore } from "aws-amplify";
import { Vehicle } from "../../models/";

const AddVehicle = () => {
	const [make, setMake] = useState("");
	const [model, setModel] = useState("");

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
		console.log("Vehicle has been added. Check the DynamoDB database on Amplify. Or Check Content tab in Amplify Studio SideBar");
		setMake("");
		setModel("");
		//addVehicle();
	}

	return (
		<View>
			<View style={styles.textDivider}>
				<View style={styles.innerTextGroup}>
					<TextInput style={styles.innerText} placeholder="Enter Make" value={make} onChangeText={(newMake) => setMake(newMake)} />
					<TextInput style={styles.innerText} placeholder="Enter Model" value={model} onChangeText={(newModel) => setModel(newModel)} />
				</View>
				<View style={styles.textPreviewGroup}>
					<Text style={{ height: 25 }}>{make}</Text>
					<Text style={{ height: 25 }}>{model}</Text>
				</View>
			</View>
			<View style={styles.container}>
				<Button onPress={addVehicle} mode="contained" style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Add Vehicle</Text>
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		alignSelf: "center",
		backgroundColor: "black",
		borderRadius: 30,
		paddingHorizontal: 2,
	},
	buttonText: {
		color: "#fff",
		fontWeight: "600",
		padding: 16,
	},
	container: {
		//flex: 1,
		marginTop: 2,
		flexDirection: "row",
		justifyContent: "center",
	},
	innerText: {
		height: 25,
		backgroundColor: "#e8f0f8",
	},
	innerTextGroup: {
		flex: 0.5,
		borderColor: "black",
		borderWidth: 1,
	},
	textDivider: {
		flexDirection: "row",
		margin: 2,
	},
	textPreviewGroup: {
		flex: 0.5,
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		borderColor: "black",
		borderWidth: 1,
	},
});

export default AddVehicle;
