import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Cards } from "../models/";
// DataStore and Models must be imported in
// file using these function

//Create a Payment Card
export async function addCard() {
	const [cardNumber, setCardNumber] = useState();
	const [fName, setFName] = useState("");
	const [lName, setLName] = useState("");
	const [expMonth, setExpMonth] = useState();
	const [expYear, setExpYear] = useState();
	const [secCode, setSecCode] = useState();
	const [address, setAddress] = useState("");
	const [zip, setZip] = useState();
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [state, setState] = useState("");
	await DataStore.save(
		new Cards({
			cardNumber,
			fName,
			lName,
			expMonth,
			expYear,
			secCode,
			address,
			zip,
			city,
			country,
			state,
		})
	);
}

// Query Cards
export async function getCards() {
	const models = await DataStore.query(Cards);
	console.log(models);
}

// Update Cards
//export async function updateCard() {
//	/* Models in DataStore are immutable. To update a record you must use the copyOf function
// to apply updates to the item’s fields rather than mutating the instance directly */
//	await DataStore.save(
//		Cards.copyOf(CURRENT_ITEM, (item) => {
//			// Update the values on {item} variable to update DataStore entry
//		})
//	);
//}

//Delete Card
export async function deleteCard() {
	const modelToDelete = await DataStore.query(Cards, "cardID");
	DataStore.delete(modelToDelete);
}
