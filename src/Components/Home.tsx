import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import MyHeader from "../ui/MyHeader";
import MyRentals from "../renders/myRentals";
import AvailableVehicles from "../renders/AvailableVehicles";
import SelectDropdown from "react-native-select-dropdown";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import MyButton from "../ui/MyButton";
import VehicleItem from "../ui/VehicleItem";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { Inventory, Vehicle } from "../models";
import { DataStore } from "@aws-amplify/datastore";
import VehicleInfo from "./VehicleInfo";
//import { Inventory } from "../models";

import { getRentals } from "../endpoints/API_Vehicle"; // Gets user rentals

//import { DataStore } from "aws-amplify";
//import { Vehicle } from "../models/";
export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show_pickup: false,
			show_dropoff: false,
			pickup_date: "Pick Up Date",
			dropoff_date: "Drop Off Date",
			pickup_loc: "Pick Up Location",
			dropoff_loc: "Drop Off Location",
			inventories: [],
		};
	}

	componentDidMount() {
		this.getInventory();
	}

	async getInventory() {
		const models = await DataStore.query(Inventory);
		this.setState({
			inventories: models,
		});
	}

	showPickUp = () => {
		this.setState({
			show_pickup: true,
			show_dropoff: false,
		});
		this.forceUpdate();
	};

	showDropOff = () => {
		this.setState({
			show_pickup: false,
			show_dropoff: true,
		});
		this.forceUpdate();
	};

	pickUpDateChanged = (date) => {
		this.setState({
			show_pickup: false,
			pickup_date: date,
		});
	};
	dropOffDateChanged = (date) => {
		this.setState({
			show_dropoff: false,
			dropoff_date: date,
		});
	};

	handleConfirm = (date) => {
		console.warn("A date has been picked: ", date);
		this.hideDatePicker();
	};

	vehicleInfo = (key) => {
		this.props.navigation.navigate("VehicleInfo", {
			key: key,
		});
	};

	render() {
		const countries = ["Bridgeport", "Stratford", "Milford"];
		return (
			<View style={styles.container}>
				<MyHeader my_page="true" menu="true" navigation={this.props.navigation} />
				<Image style={styles.bg} source={require("../../assets/img/home_bg.jpg")} />
				<View style={styles.contents}>
					<View style={styles.box}>
						<SelectDropdown
							defaultButtonText="Pick Up Location"
							buttonStyle={styles.drop}
							buttonTextStyle={styles.drop_txt}
							data={countries}
							onSelect={(selectedItem, index) => {
								console.log(selectedItem, index);
							}}
							buttonTextAfterSelection={(selectedItem, index) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem;
							}}
							rowTextForSelection={(item, index) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item;
							}}
						/>
						<SelectDropdown
							defaultButtonText="Drop Off Location"
							buttonStyle={styles.drop}
							buttonTextStyle={styles.drop_txt}
							data={countries}
							onSelect={(selectedItem, index) => {
								console.log(selectedItem, index);
							}}
							buttonTextAfterSelection={(selectedItem, index) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem;
							}}
							rowTextForSelection={(item, index) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item;
							}}
						/>
					</View>
					<View style={styles.box}>
						<TouchableOpacity style={styles.drop} onPress={this.showPickUp}>
							<Text style={styles.drop_txt}>{this.state.pickup_date}</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.drop} onPress={this.showDropOff}>
							<Text style={styles.drop_txt}>{this.state.dropoff_date}</Text>
						</TouchableOpacity>
					</View>

					{this.state.show_pickup && (
						<DatePicker
							options={{
								backgroundColor: "#090C08",
								textHeaderColor: "#FFA25B",
								textDefaultColor: "#F6E7C1",
								selectedTextColor: "#fff",
								mainColor: "#F4722B",
								textSecondaryColor: "#D6C7A1",
								borderColor: "rgba(122, 146, 165, 0.1)",
							}}
							mode="calendar"
							style={{ borderRadius: 10, maxWidth: 300 }}
							selected={getFormatedDate(new Date(), "jYYYY/jMM/jDD")}
							onDateChange={this.pickUpDateChanged}
						/>
					)}
					{this.state.show_dropoff && (
						<DatePicker
							options={{
								backgroundColor: "#090C08",
								textHeaderColor: "#FFA25B",
								textDefaultColor: "#F6E7C1",
								selectedTextColor: "#fff",
								mainColor: "#F4722B",
								textSecondaryColor: "#D6C7A1",
								borderColor: "rgba(122, 146, 165, 0.1)",
							}}
							mode="calendar"
							style={{ borderRadius: 10, maxWidth: 300 }}
							selected={getFormatedDate(new Date(), "jYYYY/jMM/jDD")}
							onDateChange={this.dropOffDateChanged}
						/>
					)}
					<View style={styles.half_box}>
						<View style={styles.sign_box}>
							<MyButton style={styles.btn} title="SEARCH VEHICLE" color="#06A500" titleColor="#ffffff" onPress={() => getRentals()} />
						</View>
					</View>
					<View style={styles.v_box}>
						{this.state.inventories.map((vehicle) => {
							return (
								<VehicleItem
									key={vehicle.id}
									onPress={() =>
										this.props.navigation.navigate("VehicleInfo", {
											key: vehicle.id,
										})
									}
									img={vehicle.img}
									year={vehicle.year}
									model={vehicle.make+ " "+vehicle.model}
								/>
							);
						})}
					</View>
				</View>

				{/* <AvailableVehicles
					navigation={this.props.navigation}
					styles={styles.avail}
				/> */}

				{/* <MyRentals /> */}
				{/*<View style={styles.titlecontainer}>*/}
				{/* <Text>Rent a Vehicle down below</Text> */}
				{/*</View>*/}
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
		padding: 24,
	},
	bg: {
		width: "100%",
		height: 300,
		backgroundColor: "#ffffff",
	},
	box: {
		flexDirection: "row",
		marginVertical: 5,
	},
	drop: {
		backgroundColor: "#ffffff",
		flexDirection: "row",
		height: 52,
		paddingStart: 12,
		width: 190,
		paddingEnd: 8,
		marginHorizontal: 9,
		justifyContent: "center",
		borderColor: "#E5E5E5",
		borderWidth: 1,
		alignItems: "center",
	},
	drop_txt: {
		fontSize: 14,
		alignSelf: "center",
	},
	titlecontainer: {
		textAlign: "center",
	},
	btn: {
		width: 350,
		flex: 1,
	},
	half_box: {
		marginBottom: 24,
		marginHorizontal: 12,
		minWidth: 350,
		maxWidth: 600,
		flex: 1,
		alignItems: "center",
	},
	sign_box: {
		maxWidth: 400,
		width: "100%",
		marginHorizontal: "auto",
		justifyContent: "center",
		flex: 1,
		flexDirection: "column",
	},
	avail: {
		marginRight: 24,
		marginLeft: 24,
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
	},
	v_box: {
		flexDirection: "row",
		width: "100%",
		flexWrap: "wrap",
		marginHorizontal: "auto",
	},
});
