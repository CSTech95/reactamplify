import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { HelpMemo, HelpTypes } from "../models/";

// Create HelpMemo
export async function createMemo() {
	const [description, setDescription] = useState("");
	const [createdAt, setCreatedAt] = useState("");
	await DataStore.save(
		new HelpMemo({
			type: HelpTypes.GENERAL,
			description,
			createdAt,
		})
	);
}

// Query HelpMemos
export async function getMemos() {
	const models = await DataStore.query(HelpMemo);
	console.log(models);
}

//Update HelpMemo
//export async function updateMemo() {
//	/* Models in DataStore are immutable. To update a record you must use the copyOf function
// to apply updates to the item’s fields rather than mutating the instance directly */
//	await DataStore.save(
//		HelpMemo.copyOf(CURRENT_ITEM, (item) => {
//			// Update the values on {item} variable to update DataStore entry
//		})
//	);
//}

// Delete HelpMemo
export async function deleteMemo() {
	const modelToDelete = await DataStore.query(HelpMemo, "memoID");
	DataStore.delete(modelToDelete);
}
