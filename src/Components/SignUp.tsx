import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import MyHeader from '../ui/MyHeader';

export default class SignUp extends React.Component {

    render() {
        return (

            <View style={styles.container}>
                <MyHeader
                    my_page="true"
                    menu="true"
                    navigation={this.props.navigation} />
                <Text>SignUp</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SignIn')}
                >
                    <Text>I already have an account</Text>
                </TouchableOpacity>
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