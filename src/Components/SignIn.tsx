import React from "react"
import { View, StyleSheet, Text } from 'react-native'
import MyHeader from './MyHeader';

export default class SignIn extends React.Component {

    render() {
        return (

            <View style={styles.container}>
                <MyHeader
                    title="SignIn"
                    navigation={this.props.navigation} />
                <Text>SignIn</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
});