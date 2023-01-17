import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Vehicle } from "../models/";

//This model is for users rentals, not for searching available rentals at our company
// To search for available rentals at our company, work with the inventory model

// Create Rental
export async function createRental() {
	const [make, setMake] = useState("");
	const [model, setModel] = useState("");
	const [year, setYear] = useState();
	const [vehicleType, setVehicleType] = useState("");
	const [img, setImg] = useState("");
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");
	await DataStore.save(
		new Vehicle({
			make,
			model,
			year,
			vehicleType,
			img,
			startTime,
			endTime,
		})
	);
}

// Query Rentals
export async function getRentals() {
	const models = await DataStore.query(Vehicle);
	console.log(models);

	return models;
}

// Update Rental
//export async function updateRental() {
//	/* Models in DataStore are immutable. To update a record you must use the copyOf function
// to apply updates to the item’s fields rather than mutating the instance directly */
//	await DataStore.save(
//		Vehicle.copyOf(CURRENT_ITEM, (item) => {
//			// Update the values on {item} variable to update DataStore entry
//		})
//	);
//}

// Delete Rental
export async function deleteRental() {
	const modelToDelete = await DataStore.query(Vehicle, "123456789");
	DataStore.delete(modelToDelete);
}
