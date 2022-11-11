import React from "react"
import { View, StyleSheet, Text } from 'react-native'
import MyHeader from '../ui/MyHeader';

export default class SignIn extends React.Component {

    render() {
        return (

            <View style={styles.container}>
                <MyHeader
                    my_page="true"
                    menu="true"
                    navigation={this.props.navigation} />
                <Text>SignIn</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SignUp')}
                >
                    <Text>I don't have an account</Text>
                </TouchableOpacity>
            </View>
        );
    }
};
//Aser's work

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
});