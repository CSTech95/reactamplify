import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import MyHeader from '../../ui/MyHeader';
import MainTextInput from '../../ui/MainTextInput';
import AdBlock from "../../ui/AdBlock";
import MyButton from "../../ui/MyButton";
import { Auth } from 'aws-amplify';
import SubHeader from "../../ui/SubHeader";

export default class MyProfile extends React.Component {

    constructor(props) {
        super(props);
        this.getAttributes();
        this.state = {
            name: "",
            birthday: "",
            phone: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipcode: "",
        }
    }

    async getAttributes() {
        const user = await Auth.currentAuthenticatedUser();
        console.log('attributes:', user.attributes);

        this.setState({
            name: user.attributes['name'],
            birthday: user.attributes['birthday'],
            phone: user.attributes['phone'],
            address1: user.attributes['address1'],
            address2: user.attributes['address2'],
            city: user.attributes['city'],
            state: user.attributes['state'],
            zipcode: user.attributes['zipcode'],
        })
        this.forceUpdate()
    }

    SaveChanges = () => {
        //HERE IS WHERE YOU NEED TO WORK ON

        //WHEN EVERYTHING IS COMPLETED
        this.props.navigation.goBack(null)
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
                                title="My Profile"
                            />
                            <MainTextInput
                                placeholder="Full Name"
                                title="Name"
                                value={this.state.name}
                                maxLength={255}
                                keyboardType="name"
                                onChangeText={(str) => this.setState({ name: str })} />
                            <MainTextInput
                                placeholder="MM/DD/YY"
                                title="Date of Birth"
                                value={this.state.birthday}
                                maxLength={255}
                                keyboardType="birthdate-full"
                                onChangeText={(str) => this.setState({ birthday: str })} />
                            <MainTextInput
                                placeholder="Phone Number"
                                title="Phone Number"
                                value={this.state.phone}
                                maxLength={255}
                                keyboardType="tel"
                                onChangeText={(str) => this.setState({ phone: str })} />
                            <MainTextInput
                                placeholder="Street Address"
                                title="Address 1"
                                value={this.state.address1}
                                maxLength={255}
                                keyboardType="tel"
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
                                title="SAVE CHANGES"
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