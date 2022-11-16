import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class MyButton extends React.Component {

    render() {

        return (
            <TouchableOpacity style={[
                styles.button,
                { backgroundColor: this.props.color }
            ]}
                onPress={this.props.onPress}
                disabled={this.props.disabled}>
                <Text style={[
                    styles.title,
                    { color: this.props.titleColor }
                ]}>{this.props.title}</Text>
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
    }
});
