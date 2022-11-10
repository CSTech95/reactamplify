import React, { useState, useEffect } from "react";
import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View, Platform } from "react-native";
//import { DataStore } from "@aws-amplify/datastore";
import { DataStore } from "aws-amplify";
import { Vehicle } from "./models";
import Header from "./Components/Header";
import { Auth } from "aws-amplify";

//Helloaaa

//const AddTodoModal = ({ modalVisible, setModalVisible }) => {
//	const [make, setMake] = useState("");
//	const [model, setModel] = useState("");

//	async function addVehicle() {
//		await DataStore.save(new Cars({ make, model, isComplete: false }));
//		setModalVisible(false);
//		setMake("");
//		setModel("");
//	}

//	function closeModal() {
//		setModalVisible(false);
//	}

//	return (
//		<Modal animationType="fade" onRequestClose={closeModal} transparent visible={modalVisible}>
//			<View style={styles.modalContainer}>
//				<View style={styles.modalInnerContainer}>
//					<Pressable onPress={closeModal} style={styles.modalDismissButton}>
//						<Text style={styles.modalDismissText}>X</Text>
//					</Pressable>
//					<TextInput onChangeText={setMake} placeholder="Make" style={styles.modalInput} />
//					<TextInput onChangeText={setModel} placeholder="Model" style={styles.modalInput} />
//					<Pressable onPress={addVehicle} style={styles.buttonContainer}>
//						<Text style={styles.buttonText}>Add Vehicle</Text>
//					</Pressable>
//				</View>
//			</View>
//		</Modal>
//	);
//};

const TodoList = () => {
	const [cars, setCars] = useState([]);

	//useEffect(() => {
	//	//query the initial todolist and subscribe to data updates
	//	const subscription = DataStore.observeQuery(Cars).subscribe((snapshot) => {
	//		//isSynced can be used to show a loading spinner when the list is being loaded.
	//		const { items, isSynced } = snapshot;
	//		setCars(items);
	//	});

	//	//unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
	//	return function cleanup() {
	//		subscription.unsubscribe();
	//	};
	//}, []);

	async function deleteTodo(todo) {
		try {
			await DataStore.delete(todo);
		} catch (e) {
			console.log("Delete failed: $e");
		}
	}

	async function setComplete(updateValue, car) {
		//update the todo item with updateValue
		await DataStore.save(
			Cars.copyOf(car, (updated) => {
				updated.isComplete = updateValue;
			})
		);
	}

	const renderItem = ({ item }) => (
		<Pressable
			onLongPress={() => {
				deleteTodo(item);
			}}
			onPress={() => {
				setComplete(!item.isComplete, item);
			}}
			style={styles.todoContainer}
		>
			<Text>
				<Text style={styles.todoHeading}>{item.make}</Text>
				{`\n${item.model}`}
			</Text>
			<Text style={[styles.checkbox, item.isComplete && styles.completedCheckbox]}>{item.isComplete ? "✓" : ""}</Text>
		</Pressable>
	);

	return <FlatList data={cars} keyExtractor={({ id }) => id} renderItem={renderItem} />;
};

const AddVehicle = () => {
	const [make, setMake] = useState("");
	const [model, setModel] = useState("");
	//useEffect(() => {
	async function addVehicle() {
		await DataStore.save(
			new Vehicle({
				Make: "Lorem ipsum dolor sit amet",
				Model: "Lorem ipsum dolor sit amet",
				isAvailable: true,
				year: 1020,
				//vehicleType: VehicleTypes.SEDAN,
				userID: "0cd84528-c3ca-41f1-afb9-c886058b5b15",
				//rentedBy: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
			})
		);
		//setMake("");
		//setModel("");
		//addVehicle();
	}
	//});

	return (
		<>
			<Pressable onPress={() => Auth.signOut()} style={styles.buttonContainer}>
				<Text style={styles.buttonText}>Sign out</Text>
			</Pressable>

			<Pressable onPress={addVehicle} style={styles.buttonContainer}>
				<Text style={styles.buttonText}>Add Vehicle</Text>
			</Pressable>
		</>
	);
};

const Home = () => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<Text>Home Screen</Text>
			<AddVehicle />
			{/*<Header />
			<TodoList />
			<Pressable
				onPress={() => {
					setModalVisible(true);
				}}
				style={[styles.buttonContainer, styles.floatingButton]}
			>
				<Text style={styles.buttonText}>+ Add Vehicle</Text>
			</Pressable>
			<AddTodoModal modalVisible={modalVisible} setModalVisible={setModalVisible} />*/}
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
