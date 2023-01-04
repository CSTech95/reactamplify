import React, { useState, useEffect } from "react";
//import * as React from "react";
import { DataStore } from "aws-amplify";
import { HelpMemo } from "../../models/";
import { List } from "react-native-paper";
import { StyleSheet, View, ScrollView, Text } from "react-native";


const HelpMemos = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [helpMemos, setHelpMemos] = useState([]);

	useEffect(() => {
		async function getHelpMemos() {
			const hMemos = await DataStore.query(HelpMemo);
			console.log(hMemos);
			console.log("Got hMemos");
			setHelpMemos(helpMemos);
		}
		getHelpMemos();
	}, []);
	const [expanded, setExpanded] = React.useState(true);

	const handlePress = () => setExpanded(!expanded);

	return (
		<ScrollView>
			<List.Section title="Help Memos">
				{
					helpMemos.map((memo) => (
						<List.Accordion title={memo.type} description={memo.description}>
							<View></View>
						</List.Accordion>
					))
				}
			</List.Section>
            {/* <RentalsCreateForm /> */}
		</ScrollView>
	)
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

export default HelpMemos;
