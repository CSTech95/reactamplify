import React from "react";
import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View, Platform } from "react-native";

const Header = () => (
	<View style={styles.headerContainer}>
		<Text style={styles.headerTitle}>Available Vehicles</Text>
	</View>
);

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
});

export default Header;
