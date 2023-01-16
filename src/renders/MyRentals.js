import React, { useState, useEffect } from "react";
import { Alert, FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View, Platform, Image } from "react-native";
import { DataStore } from "@aws-amplify/datastore";
import { Vehicle } from "../models";

//getRentals();
function MyRentals() {
	const [rentals, setRentals] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);
	const [modalData, setModalData] = useState({});

	async function getRentals() {
		const models = await DataStore.query(Vehicle);
		setRentals(models);
		//console.log(models);
	}

	useEffect(() => {
		getRentals();

		return () => {
			console.log(rentals);
		};
	}, []);
	return (
		<View style={styles.container}>
			<Text>You have {rentals.length} rentals</Text>
			{/*<View style={styles.centeredView}>
				<View style={styles.modalView}>*/}
			{/*{console.log(rentals)}*/}
			{rentals.map((rental) => (
				<View key={rental.id} style={styles.card}>
					<Text>{rental.year}</Text>
					<Text>{`${rental.make} ${rental.model}`}</Text>
					<Image style={styles.imgContainer} source={rental.img} />
					<View style={{ paddingTop: 5 }}>
						<Pressable
							style={[styles.button, styles.buttonOpen]}
							onPress={() => {
								setModalData(rental);
								setModalVisible(true);
								console.log(modalData);
							}}
						>
							<Text style={styles.textStyle}>Show Info</Text>
						</Pressable>
					</View>
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
									<Text>{`Start Time: ${modalData.startTime} `}</Text>
									<Text>{`End Time: ${modalData.endTime} `}</Text>
								</View>
							</View>
							<View style={{ paddingTop: 15 }}>
								<Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
									<Text style={styles.textStyle}>Close</Text>
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
		textAlign: "center",
		padding: 30,
	},
	container: {
		marginHorizontal: "auto",
		//width: 100,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	imgContainer: {
		//flex: 1,
		width: 100,
		height: 100,
		padding: 25,
	},
});

export default MyRentals;
