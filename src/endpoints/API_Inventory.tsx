import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Inventory } from "../models/";

// Add a Vehicle to company Inventory
export async function createInventory() {
	const [make, setMake] = useState("");
	const [model, setModel] = useState("");
	const [isAvailable, setIsAvailable] = useState(true);
	const [year, setYear] = useState();
	const [vehicleType, setVehicleType] = useState("");
	const [img, setImg] = useState("");
	await DataStore.save(
		new Inventory({
			make,
			model,
			isAvailable,
			year,
			vehicleType,
			img,
		})
	);
}

// Query Inventory
export async function getInventory() {
	const models = await DataStore.query(Inventory);
	console.log(models);
}

// Update Inventory
//export async function updateInventory() {
//	/* Models in DataStore are immutable. To update a record you must use the copyOf function
// to apply updates to the item’s fields rather than mutating the instance directly */
//	await DataStore.save(
//		Inventory.copyOf(CURRENT_ITEM, (item) => {
//			// Update the values on {item} variable to update DataStore entry
//		})
//	);
//}

// Delete Inventory
export async function deleteInventory() {
	const modelToDelete = await DataStore.query(Inventory, "123456789");
	DataStore.delete(modelToDelete);
}
