import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class RentalItem extends React.Component {

    render() {

        return (
            <TouchableOpacity
                style={styles.card}
                onPress={this.props.onPress}
                disabled={this.props.disabled}>
                <Image style={styles.imgContainer} source={this.props.img} />
                <View>
                    <Text style={styles.year}>{this.props.year}</Text>
                    <Text style={styles.model_txt}>{this.props.model}</Text>
                    <View style={styles.d_box}>
                        <Text style={styles.date}>{this.props.start}</Text>
                        <Text style={styles.date}> - </Text>
                        <Text style={styles.date}>{this.props.end}</Text>
                    </View>
                    <Text>{this.props.state}</Text>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    button: {
        height: 52,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
        fontSize: 36,
    },
    title: {
        fontSize: 16,
        alignSelf: "center",
        fontWeight: 'bold'
    }, card: {
        borderColor: "#E5E5E5",
        borderWidth: 1,
        margin: 15,
        height: 100,
        flexDirection: 'row'
    }, imgContainer: {
        //flex: 1,
        width: 150,
        height: 100,
        backgroundColor: "#F5F4F4"
    }, year: {
        color: "#939393",
        fontSize: 10,
        marginTop: 12,
        marginLeft: 12,
    },
    model_txt: {
        fontSize: 14,
        paddingLeft: 12,
        marginTop: 12,
        marginBottom: 12
    },
    date: {
        fontSize: 12,
        color: "#939393",
    },
    state: {
        fontSize: 10,
        color: "#939393",
        fontWeight: 'bold'
    },d_box:{
        marginLeft: 12,
        flexDirection: 'row',
    }
});
