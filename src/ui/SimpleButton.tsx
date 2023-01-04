import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class SimpleButton extends React.Component {

    render() {

        return (
            <TouchableOpacity style={[
                styles.button,
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
        marginTop: 12,
        justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 14,
        borderWidth: 1,
        borderColor: "#E5E5E5",
        padding: 14,
    },
    title: {
        fontSize: 14,
        color: "#191919",
    }
});
