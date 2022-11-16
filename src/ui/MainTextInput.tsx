import React from "react";
import { Text, StyleSheet, TextInput, View, Image, TouchableOpacity } from "react-native";

export default class MainTextInput extends React.Component {

    render() {

        const value = this.props.value;

        return (
            // <SafeAreaView>
            <View style={styles.input_container}>
                <View
                    style={styles.input_box}>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.props.onChangeText}
                        placeholder={this.props.placeholder}
                        maxLength={this.props.maxLength}
                        keyboardType={this.props.keyboardType}
                        value={value}
                        secureTextEntry={this.props.secureTextEntry}
                    />
                    {value ?

                        <TouchableOpacity
                            onPress={() => this.props.onChangeText("")}>
                            <Image
                                style={styles.x}
                                source={require('../../assets/img/x.png')} />
                        </TouchableOpacity>
                        : null}
                </View>
                {this.props.value && this.props.warning ?
                    <View style={styles.war_box}>
                        <View style={styles.war} />

                        <Text style={styles.war_msg}>{this.props.warning_msg}</Text>
                    </View>
                    : null}
            </View>
            // </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    input_box: {
        flexDirection: 'row',
        height: 52,
        marginTop: 20,
        paddingStart: 12,
        paddingEnd: 8,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#06A500',
        borderWidth: 1, 
    },
    input: {
        fontSize: 14,
        flex: 1,
        color: '#191919',
    },
    x: {
        width: 28,
        height: 28,
        marginTop: 'auto',
        marginBottom: 'auto',
        alignSelf: 'center',
        marginStart: 8,
    },
    war_box: {

    },
    war: {
        height: 1,
        backgroundColor: "#E62C18"
    },
    war_msg: {
        color: "#E62C18",
        fontSize: 14,
        marginTop: 8,
    }
});
