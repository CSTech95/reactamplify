import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import MyHeader from '../../ui/MyHeader';
import MainTextInput from '../../ui/MainTextInput';
import AdBlock from "../../ui/AdBlock";
import MyButton from "../../ui/MyButton";
import SimpleButton from "../../ui/SimpleButton";
import { Auth } from 'aws-amplify';

export default class MyPage extends React.Component {

    constructor(props) {
        super(props);
        this.getAttributes();
        this.state = {
            name: "",
        }
    }

    async getAttributes() {
        const user = await Auth.currentAuthenticatedUser();
        console.log('attributes:', user.attributes);

        this.setState({
            name: user.attributes['name']
        })
        this.forceUpdate()
    }

    signOutCall = () => {
        Auth.signOut();
    }



    render() {
        return (

            <View style={styles.container}>
                <MyHeader
                    my_page="true"
                    menu="true"
                    navigation={this.props.navigation} />
                <View style={styles.contents}>
                    <View style={styles.half_box}>
                        <View style={styles.sign_box}>
                            <Text style={styles.sub_title}>Hello, {this.state.name}</Text>
                            <SimpleButton
                                title="My Profile"
                                onPress={() => this.props.navigation.navigate('MyProfile')} />
                            <SimpleButton
                                title="Payment Methods"
                                onPress={() => this.props.navigation.navigate('PaymentMethods')} />
                            <SimpleButton
                                title="My Rentals"
                                onPress={() => this.props.navigation.navigate('MyRentals')} />
                            <SimpleButton
                                title="My Help Requests"
                                onPress={() => this.props.navigation.navigate('HelpRequests')} />
                            <SimpleButton
                                title="Sign Out"
                                onPress={this.signOutCall} />
                        </View>
                    </View>

                    <View style={styles.half_box}>
                        <View style={styles.sign_box}>
                            <AdBlock />
                        </View>
                    </View>

                </View>

            </View >
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    contents: {
        marginHorizontal: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',

    },
    half_box: {
        marginTop: 12,
        marginBottom: 24,
        marginHorizontal: 12,
        minWidth: 350,
        maxWidth: 600,
        flex: 1,
        alignItems: 'center',
    },
    sign_box: {
        maxWidth: 400,
        width: '100%',
        marginHorizontal: 'auto',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column'
    },
    sub_title: {
        fontSize: 20,
        color: '#191919',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 24,

    },
    signin: {
        alignSelf: 'center',
        fontSize: 12,
        color: '#767676',
        marginTop: 24,
    },
    text_btn: {

    }
});