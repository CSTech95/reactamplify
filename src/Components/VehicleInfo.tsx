import React from "react"
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import MyHeader from '../ui/MyHeader';
import MainTextInput from '../ui/MainTextInput';
import AdBlock from "../ui/AdBlock";
import MyButton from "../ui/MyButton";
import { Auth } from 'aws-amplify';
import SubHeader from "../ui/SubHeader";
import SimpleButton from "../ui/SimpleButton";

export default class VehicleInfo extends React.Component {

    constructor(props) {
        super(props);
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
                                title="Vehicle Info"
                            />
                            <Image style={styles.img}
                                />
                        </View>
                    </View>

                    {/* <View style={styles.half_box}>
                        <View style={styles.sign_box}>
                            <AdBlock />
                        </View>
                    </View> */}

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
    img: {
        maxWidth: 350,
        maxHeight: 221,
        backgroundColor: "#F5F4F4",
        width: '100%',
        height: '100%',
    }
});