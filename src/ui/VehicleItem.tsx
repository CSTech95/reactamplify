import React from "react";
import { SafeAreaView, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Vehicle extends React.Component {

    render() {

        return (
            <TouchableOpacity
            style={styles.card}
                key={this.props.key}
                onPress={this.props.onPress}
                disabled={this.props.disabled}>
                <Image style={styles.imgContainer} source={this.props.img} />
                <Text style={styles.year}>{this.props.year}</Text>
                <Text style={styles.model_txt}>{this.props.model}</Text>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    button: {
        height: 52,
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
        fontSize: 36,
    },
    title: {
        fontSize: 16,
        alignSelf: "center",
        fontWeight: 'bold'
    },card: {
		borderColor: "#E5E5E5",
		borderWidth: 1,
        margin: 15,
        width: 150,
	},imgContainer: {
		//flex: 1,
		width: 150,
		height: 100,
		backgroundColor: "#F5F4F4"
	}, year: {
		color: "#939393",
		fontSize: 10,
		marginTop: 10,
		marginLeft: 12,
	},
	model_txt: {
		fontSize: 14,
		paddingLeft: 12,
		marginTop: 5,
		marginBottom: 12
	}
});
