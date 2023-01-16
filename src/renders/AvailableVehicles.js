import React, { useState, useEffect } from "react";
import { Alert, FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View, Platform, Image } from "react-native";
import { DataStore } from "@aws-amplify/datastore";
import { Inventory, Vehicle } from "../models/";

function AvailableVehicles() {
	const [inventory, setInventory] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);
	const [modalData, setModalData] = useState({});

	async function getInventory() {
		const models = await DataStore.query(Inventory);
		//console.log(models);
		setInventory(models);
	}

	async function createRental() {
		console.log(modalData);
		await DataStore.save(
			new Vehicle({
				make: modalData[0].make,
				model: modalData[0].model,
				year: modalData[0].year,
				vehicleType: modalData[0].vehicleType,
				img: modalData[0].img,
				startTime: "1/15/2023",
				endTime: "1/30/2023",
			})
		);
		console.log("Rental has been created");
	}

	useEffect(() => {
		getInventory();

		return () => {
			console.log(inventory);
		};
	}, []);
	return (
		<View style={styles.container}>
			{/*<View style={styles.centeredView}>
				<View style={styles.modalView}>*/}
			{/*{console.log(inventory)}*/}
			{inventory.map((vehicle) => (
				<View key={vehicle.id} style={styles.card}>
					<Image style={styles.imgContainer} source={vehicle.img} />
					<Text style={styles.year}>{vehicle.year}</Text>
					<Text style={styles.model_txt}>{`${vehicle.make} ${vehicle.model}`}</Text>

					{/* <View style={{ paddingTop: 5 }}>
						<Pressable
							style={[styles.button, styles.buttonOpen]}
							onPress={() => {
								setModalData(inventory);
								setModalVisible(true);
								//console.log(modalData);
							}}
						>
							<Text style={styles.textStyle}>Show Info</Text>
						</Pressable>
					</View> */}
				</View>
			))}
			{/*</View>
			</View>*/}
			<View>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						//Alert.alert("Modal has been closed.");
						setModalVisible(!modalVisible);
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<View style={styles.modelContainer}>
								<View>
									<Image style={styles.imgContainer} source={modalData.img} />
								</View>
								<View style={styles.modalTextContainer}>
									<Text>Make: {modalData.make}</Text>
									<Text>Model: {modalData.model}</Text>
									<Text>Year: {modalData.year}</Text>
								</View>
							</View>
							<View style={{ paddingTop: 15 }}>
								<Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
									<Text style={styles.textStyle}>Close</Text>
								</Pressable>
								{/*Check if vehicle is available 1st in function*/}
								<Pressable style={[styles.button, styles.buttonClose]} onPress={createRental}>
									<Text style={styles.textStyle}>Rent</Text>
								</Pressable>
							</View>
						</View>
					</View>
				</Modal>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modelContainer: {
		flexDirection: "row",
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	modalTextContainer: {
		flexDirection: "column",
		paddingLeft: 10,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "black",
	},
	buttonClose: {
		backgroundColor: "black",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
	card: {
		borderColor: "#E5E5E5",
		borderWidth: 1,
		margin: 15,
		flexDirection: 'column'
	},
	container: {
		marginHorizontal: "auto",
		//width: 100,
		flexDirection: "row",
		flexWrap: "wrap",
	},
	imgContainer: {
		//flex: 1,
		width: 150,
		height: 100,
		backgroundColor: "#F5F4F4"
	}, year: {
		color: "#939393",
		fontSize: 10,
		marginTop: 10,
		marginLeft: 12,
	},
	model_txt: {
		fontSize: 14,
		paddingLeft: 12,
		marginTop: 5,
		marginBottom: 12
	}
});

export default AvailableVehicles;
