import React from "react"
import { View, StyleSheet, Text } from 'react-native'
import MyHeader from './MyHeader';

export default class SignUp extends React.Component {

    render() {
        return (

            <View style={styles.container}>
                <MyHeader
                    title="SignUp"
                    navigation={this.props.navigation} />
                <Text>SignUp</Text>
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