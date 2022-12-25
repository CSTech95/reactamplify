import React, { useState, useEffect } from "react";
//import * as React from "react";
import { DataStore } from "aws-amplify";
import { Vehicle } from "../../models/";
import { List } from "react-native-paper";
import { StyleSheet, View, ScrollView, Text } from "react-native";

const MyRentals = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [myRentals, setMyRentals] = useState([]);

	useEffect(() => {
		async function getRentals() {
			const rentals = await DataStore.query(Vehicle);
			console.log(rentals);
			console.log("Got vehicle");
			setMyRentals(rentals);
		}
		getRentals();
	}, []);
	const [expanded, setExpanded] = React.useState(true);

	const handlePress = () => setExpanded(!expanded);
	return (
		<ScrollView>
			<List.Section title="My Rentals">
				{myRentals.map((rental) => (
					<List.Accordion title={rental.vehicleType} description={rental.make} left={(props) => <List.Icon {...props} icon="car-multiple" />}>
						<View>
							<List.Item title={rental.make} />
							<List.Item title={rental.model} />
						</View>
					</List.Accordion>
				))}
			</List.Section>
		</ScrollView>
		//<List.Section title="Accordions">
		//	<List.Accordion title="My Rentals" left={(props) => <List.Icon {...props} icon="car-multiple" />}>
		//		<List.Item title="First item" />
		//		{props.rentals.map((rental) => (
		//			<>
		//				<List.Item title={rental.make} />
		//				<List.Item title={rental.model} />
		//			</>
		//		))}
		//	</List.Accordion>
		//</List.Section>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
		flexDirection: "row",
		//width: wp(50),
		//width: "100%",
	},
	//scrollContainer: {
	//},
});

export default MyRentals;
