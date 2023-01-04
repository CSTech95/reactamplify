import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import MyHeader from '../ui/MyHeader';
import MainTextInput from '../ui/MainTextInput';
import AdBlock from "../ui/AdBlock";
import MyButton from "../ui/MyButton";
import { Auth } from 'aws-amplify';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            psw1: "",
            psw2: "",
            name_war: false,
            name_war_msg: "You can only type letters. Type your full name.",
            email_war: false,
            psw1_war: false,
            psw1_war_msg: "",
            psw2_war: false,
            email_war_msg: "",
            radio: false,
        }
        this.onChangeName.bind(this);
        this.onChangeEmail.bind(this);
        this.signUpCall.bind(this);

        
    }

    onChangeName = (name) => {
        var regExp = /^[a-zA-Z ,.'-]+$/i
        var isValid = regExp.test(name);
        this.setState({
            name: name,
            name_war: !isValid
        })
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

    //test

    checkPassword = (psw1, psw2) => {
        var regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
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
        var namee = this.state.name;

        Auth.signUp({
            username: emaill, 
            password: psww,
            attributes: {
                email: emaill, name: namee
            }
        });

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
                            <Text style={styles.sub_title}>Create An Account</Text>

                            <MainTextInput
                                placeholder="Full Name"
                                onChangeText={this.onChangeName}
                                keyboardType="default"
                                warning={this.state.name_war}
                                maxLength={64}
                                warning_msg={this.state.name_war_msg}
                                value={this.state.name} />

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
                                warning_msg="Use 8 to 16 characters. Have at least one lowercase letter, one uppercase letter, one number, and one special character"
                                onChangeText={this.onChangePassword} />

                            <MainTextInput
                                placeholder="ConfirmPassword"
                                value={this.state.psw2}
                                maxLength={16}
                                keyboardType="visible-password"
                                secureTextEntry={true}
                                warning={this.state.psw2_war}
                                warning_msg="Password is not the same"
                                onChangeText={this.onChangeConfirmPassword} />

                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('SignIn')}
                            >
                                <Text style={styles.signin}>I already have an account</Text>
                            </TouchableOpacity>
                            <MyButton
                                title="SIGN UP"
                                color="#06A500"
                                titleColor="#ffffff"
                                onPress={this.signUpCall} />
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