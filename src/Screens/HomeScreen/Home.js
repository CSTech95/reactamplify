import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import { Button, TextInput } from "react-native-paper";

import { DataStore } from "aws-amplify";
import { Vehicle } from "../../models";

import { Auth } from "aws-amplify";

import { User } from "../../models";
import MyRentals from "../MyRentals/MyRentals";
import AddVehicle from "../../Components/AddVehicle";

const Home = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [vehicles, setVehicles] = useState([]);

	//useEffect(() => {
	//	async function asyncCall() {
	//		const vehicleS = await DataStore.query(Vehicle);
	//		console.log(vehicleS);
	//		console.log("Got vehicle");
	//		setVehicles(vehicleS);
	//	}
	//	asyncCall();
	//}, []);

	return (
		<View>
			<AddVehicle />
			{/*<MyRentals rentals={vehicles} />*/}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		flexDirection: "row",
		justifyContent: "center",
	},

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
		//backgroundColor: "#4696ec",
		borderRadius: 30,
		paddingHorizontal: 2,
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