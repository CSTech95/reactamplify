import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import { Button, TextInput } from "react-native-paper";

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
			{/*{vehicles.map((vehicle) => (
				<Text>{vehicle.make}</Text>
			))}*/}
			<View style={{ marginBottom: 3 }}>
				<TextInput style={{ height: 40 }} placeholder="Enter Make" onChangeText={(newMake) => setMake(newMake)} defaultValue={make} />
				<TextInput style={{ height: 40 }} placeholder="Enter Model" onChangeText={(newModel) => setModel(newModel)} defaultValue={model} />
			</View>
			<View style={styles.container}>
				<Button onPress={addVehicle} mode="contained" style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Add Vehicle</Text>
				</Button>
				{/*<Button onPress={() => Auth.signOut()} mode="contained" style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Sign out</Text>
				</Button>*/}
			</View>
			{/*<MyRentals rentals={vehicles} />*/}
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		alignSelf: "center",
		//backgroundColor: "#4696ec",
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
		flexDirection: "row",
		justifyContent: "center",
	},
});

export default AddVehicle;
