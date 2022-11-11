import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import MyHeader from '../ui/MyHeader';
import MainTextInput from '../ui/MainTextInput';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            psw1: "",
            psw2: "",
            email_war: false,
            psw1_war: false,
            psw1_war_msg: "",
            psw2_war: false,
            email_war_msg: "",
            radio: false,
        }
        this.onChangeEmail.bind(this);
        this.signUpCall.bind(this);
    }

    onChangeEmail = (email) => {
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        var isValid = regExp.test(email);
        this.setState({
            email: email,
            email_war: !isValid,
            email_war_msg: "Please enter a valid email address"
        })
    }

    onChangePassword = (psw) => {
        this.checkPassword(psw, this.state.psw2)
    }

    onChangeConfirmPassword = (psw) => {
        this.checkPassword(this.state.psw1, psw)
    }

    checkPassword = (psw1, psw2) => {
        var regExp = /^(?=.*?[A-Z])(?=.*\d)(?=.*?[a-z])[a-zA-Z\d]{8,16}$/
        var isValid1 = regExp.test(psw1);
        var isValid2 = psw1 == psw2
        var psw1_war_msg = ""
        if (!isValid1) {
            psw1_war_msg = "Password is not following the correct format";
        }
        this.setState({
            psw1: psw1,
            psw2: psw2,
            psw1_war: !isValid1,
            psw1_war_msg: psw1_war_msg,
            psw2_war: !isValid2,
        })
    }

    onSuccess = () => {
        this.props.navigation.navigate('SignIn')
    }

    onError = (errorMessage) => {
        if (errorMessage == undefined) {
            errorMessage = "An error has occurred please try again";
        }
        console.log(errorMessage);
        this.setState({
            email_war: true,
            email_war_msg: errorMessage
        })
    }

    isSignUpValid = () => {
        if (this.state.email.length > 0 && this.state.psw1.length > 0 && this.state.email_war == false && this.state.psw1_war == false && this.state.psw2_war == false && this.state.radio == true) {
            console.log("Valid")
            return true;
        }
        console.log("InValid")
        return false;
    }


    signUpCall = () => {

        //api 호출
        var emaill = this.state.email;
        var psww = this.state.psw1;

        firebaseService.signUpUser(emaill, psww, this.onSuccess, this.onError)

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

                            <MainTextInput
                                placeholder="Email Address"
                                onChangeText={this.onChangeEmail}
                                keyboardType="email-address"
                                warning={this.state.email_war}
                                maxLength={320}
                                warning_msg={this.state.email_war_msg}
                                value={this.state.email} />

                            <MainTextInput
                                placeholder="Password"
                                value={this.state.psw1}
                                maxLength={16}
                                keyboardType="visible-password"
                                secureTextEntry={true}
                                warning={this.state.psw1_war}
                                warning_msg="Password is not following the correct format"
                                onChangeText={this.onChangePassword} />
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('SignIn')}
                            >
                                <Text>I already have an account</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>aa</Text>
                    </View>

                    <View style={styles.half_box}>
                        <Text>Next box</Text>
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
        marginVertical: 12,
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
        flexDirection:'column'
    }
});