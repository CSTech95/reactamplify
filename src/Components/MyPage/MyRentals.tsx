import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import MyHeader from '../../ui/MyHeader';
import MainTextInput from '../../ui/MainTextInput';
import AdBlock from "../../ui/AdBlock";
import MyButton from "../../ui/MyButton";
import { Auth } from 'aws-amplify';
import SubHeader from "../../ui/SubHeader";
import SimpleButton from "../../ui/SimpleButton";
import { getRentals } from "../../endpoints/API_Vehicle";
import RentalItem from "../../ui/RentalItem";

export default class MyRentals extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rentals: [],

        }
    }

    componentDidMount() {
        const list = getRentals();
        list.then(res => {
            console.log(res)
            this.setState({
                rentals: res
            })
        })
        // console.log(typeof (list))
        // console.log(list);

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
                                title="MyRentals"
                            />

                            <View>

                                {this.state.rentals && this.state.rentals.map((rental) => {
                                console.log(rental)
                                return (
                                    <RentalItem
                                        onPress={() => { console.log(rental.id + "clicked") }}
                                        img={rental.img}
                                        year={rental.year}
                                        model={rental.make + " " + rental.model}
                                        start={rental.startTime}
                                        end={rental.endTime}
                                    />
                                )
                            })}
                            </View>
                            
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