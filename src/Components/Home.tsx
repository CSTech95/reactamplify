import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import MyHeader from "../ui/MyHeader";
import MyRentals from "../renders/myRentals";
import AvailableVehicles from "../renders/AvailableVehicles";
//import { Inventory } from "../models";

//import { DataStore } from "aws-amplify";
//import { Vehicle } from "../models/";
export default class Home extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<MyHeader my_page="true" menu="true" navigation={this.props.navigation} />
				<Image style={styles.bg} source={require("../../assets/img/home_bg.jpg")} />
				<MyRentals />
				<Text>Separator</Text>
				<AvailableVehicles />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ffffff",
		flex: 1,
	},
	contents: {
		marginHorizontal: 12,
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center",
	},
	bg: {
		width: "100%",
		height: 300,
	},
});
