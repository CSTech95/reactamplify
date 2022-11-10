import React from "react"
import { View, StyleSheet, Text } from 'react-native'
import MyHeader from './MyHeader';

export default class Home extends React.Component {

    render() {
        return (

            <View style={styles.container}>
                <MyHeader
                    title="Home"
                    navigation={this.props.navigation} />
                <Text>Home</Text>
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