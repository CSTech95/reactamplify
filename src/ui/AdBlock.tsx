import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { autoShowTooltip } from "aws-amplify";

export default class AdBlock extends React.Component {

    render() {

        return (
            <TouchableOpacity style={[
                styles.button,
                { backgroundColor: this.props.color }
            ]}
                onPress={this.props.onPress}
                disabled={this.props.disabled}>
                <Image
                    style={styles.ad}
                    source={require('../../assets/img/ad.png')} />
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 350,
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
        fontSize: 36,
    },
    ad: {
        width: '100%',
        maxWidth: '100%',
        height: 370,
    }

});
