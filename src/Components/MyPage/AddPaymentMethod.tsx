import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import MyHeader from '../../ui/MyHeader';
import MainTextInput from '../../ui/MainTextInput';
import AdBlock from "../../ui/AdBlock";
import MyButton from "../../ui/MyButton";
import { Auth } from 'aws-amplify';
import SubHeader from "../../ui/SubHeader";

export default class AddPaymentMethod extends React.Component {

    constructor(props) {
        super(props);
        // this.getAttributes();
        this.state = {
            c_type: "",
            c_name: "",
            c_num: "",
            exp_date: "",
            cvv: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipcode: "",
        }
    }

    // async getAttributes() {
    //     const user = await Auth.currentAuthenticatedUser();
    //     console.log('attributes:', user.attributes);

    //     this.setState({
    //         name: user.attributes['name']
    //     })
    //     this.forceUpdate()
    // }

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
                            <SubHeader
                                back="true"
                                navigation={this.props.navigation}
                                title="Add Payment Method"
                            />
                            <MainTextInput
                                placeholder="Visa/Master/etc"
                                title="Card Type"
                                value={this.state.c_type}
                                maxLength={255}
                                keyboardType="default"
                                onChangeText={(str) => this.setState({ c_type: str })} />
                            <MainTextInput
                                placeholder="Full name"
                                title="Cardholder Name"
                                value={this.state.c_name}
                                maxLength={255}
                                keyboardType="name"
                                onChangeText={(str) => this.setState({ c_name: str })} />
                            <MainTextInput
                                placeholder="XXXX - XXXX - XXXX - XXXX"
                                title="Card Number"
                                value={this.state.c_num}
                                maxLength={255}
                                keyboardType="default"
                                onChangeText={(str) => this.setState({ c_num: str })} />
                            <MainTextInput
                                placeholder="MM/DD"
                                title="Expire Date"
                                value={this.state.exp_date}
                                maxLength={255}
                                keyboardType="default"
                                onChangeText={(str) => this.setState({ exp_date: str })} />
                            <MainTextInput
                                placeholder="3 digit number"
                                title="CVV"
                                value={this.state.cvv}
                                maxLength={255}
                                keyboardType="default"
                                onChangeText={(str) => this.setState({ cvv: str })} />
                            <MainTextInput
                                placeholder="Street Address"
                                title="Address 1"
                                value={this.state.address1}
                                maxLength={255}
                                keyboardType="default"
                                onChangeText={(str) => this.setState({ address1: str })} />
                            <MainTextInput
                                placeholder="Apt, Suite, Unit, Building (optional)"
                                title="Address 2"
                                value={this.state.address2}
                                maxLength={255}
                                keyboardType="default"
                                onChangeText={(str) => this.setState({ address2: str })} />
                            <MainTextInput
                                placeholder="City"
                                title="City"
                                value={this.state.city}
                                maxLength={255}
                                keyboardType="default"
                                onChangeText={(str) => this.setState({ city: str })} />
                            <MainTextInput
                                placeholder="State"
                                title="State"
                                value={this.state.state}
                                maxLength={255}
                                keyboardType="default"
                                onChangeText={(str) => this.setState({ state: str })} />
                            <MainTextInput
                                placeholder="5 digit number"
                                title="Zip Code"
                                value={this.state.zipcode}
                                maxLength={255}
                                keyboardType="postal-code"
                                onChangeText={(str) => this.setState({ zipcode: str })} />
                            <MyButton
                                title="ADD PAYMENT METHOD"
                                color="#06A500"
                                titleColor="#ffffff"
                                onPress={this.saveChanges} />

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