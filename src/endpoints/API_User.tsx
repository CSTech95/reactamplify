import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../models/";

// Create User profile Info
export async function addProfile() {
	const [username, setUserName] = useState(""); //email
	const [name, setName] = useState("");
	const [birthDay, setBirthDay] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [houseNumber, setHouseNumber] = useState("");
	const [houseStreet, setHouseStreet] = useState("");
	const [zip, setZip] = useState("");
	const [state, setState] = useState("");
	const [town, setTown] = useState("");
	const [country, setCountry] = useState("");

	await DataStore.save(
		new User({
			username,
			name,
			birthDay,
			phoneNumber,
			houseNumber,
			houseStreet,
			zip,
			state,
			town,
			country,
		})
	);
}

// Get User Detail Info
export async function getUserDetails() {
	const models = await DataStore.query(User);
	console.log("user models");
	console.log(models[0]);
}

// Update User details
//export async function updateUserDetails() {
//	/* Models in DataStore are immutable. To update a record you must use the copyOf function
// to apply updates to the item’s fields rather than mutating the instance directly */
//	await DataStore.save(
//		User.copyOf(CURRENT_ITEM, (item) => {
//			// Update the values on {item} variable to update DataStore entry
//		})
//	);
//}

// Delete User Detail
export async function deleteUserDetail() {
	const modelToDelete = await DataStore.query(User, "123456789");
	DataStore.delete(modelToDelete);
}
