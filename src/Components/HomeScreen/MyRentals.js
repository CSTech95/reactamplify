import React from "react";
//import * as React from "react";
import { List } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const MyRentals = (props) => {
	const [expanded, setExpanded] = React.useState(true);

	const handlePress = () => setExpanded(!expanded);
	//TODO: Fix not scrolling on mobile device
	return (
		<View>
			<List.Section title="My Rentals">
				{props.rentals.map((rental) => (
					<View>
						<List.Accordion title={rental.vehicleType} description={rental.make} left={(props) => <List.Icon {...props} icon="car-multiple" />}>
							<List.Item title={rental.make} />
							<List.Item title={rental.model} />
						</List.Accordion>
					</View>
				))}
			</List.Section>
		</View>
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
	},
});

export default MyRentals;
