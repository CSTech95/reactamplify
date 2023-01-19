import React from "react"
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import MyHeader from '../ui/MyHeader';
import MainTextInput from '../ui/MainTextInput';
import AdBlock from "../ui/AdBlock";
import MyButton from "../ui/MyButton";
import { Auth } from 'aws-amplify';
import SubHeader from "../ui/SubHeader";
import SimpleButton from "../ui/SimpleButton";
import { DataStore } from "@aws-amplify/datastore";
import SelectDropdown from "react-native-select-dropdown";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { Vehicle } from "../models";

export default class VehicleInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            img: this.props.route.params.img,
            year: this.props.route.params.year,
            model_txt: this.props.route.params.model_txt,
            model: this.props.route.params.model,
            make: this.props.route.params.make,
            type: this.props.route.params.type,
            show_pickup: false,
            show_dropoff: false,
            pickup_date: this.props.route.params.pickup_date,
            dropoff_date: this.props.route.params.dropoff_date,
            pickup_loc: this.props.route.params.pickup_loc,
            dropoff_loc: this.props.route.params.dropoff_loc
        }
    }

    async rentVehicle() {
        await DataStore.save(
            new Vehicle({
                make: this.state.make,
                model: this.state.model,
                year: this.state.year,
                vehicleType: this.state.type,
                img: this.state.img,
                startTime: this.state.pickup_date,
                endTime: this.state.dropoff_date
            })
        ).then(res => {
            console.log("Rental has been added");
            this.props.navigation.goBack(null);
            this.props.navigation.navigate('MyRentals');
        });
        

    }

    showPickUp = () => {
        this.setState({
            show_pickup: true,
            show_dropoff: false,
        });
        this.forceUpdate();
    };

    showDropOff = () => {
        this.setState({
            show_pickup: false,
            show_dropoff: true,
        });
        this.forceUpdate();
    };

    pickUpDateChanged = (date) => {
        this.setState({
            show_pickup: false,
            pickup_date: date,
        });
    };
    dropOffDateChanged = (date) => {
        this.setState({
            show_dropoff: false,
            dropoff_date: date,
        });
    };


    render() {
        const countries = ["Bridgeport", "Stratford", "Milford"];
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
                                source={this.state.img}
                            />
                            <Text style={styles.model_txt}>{this.state.model_txt}</Text>

                            <Text style={styles.des}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua.</Text>
                            <View style={styles.g_box}>
                                <Text style={styles.txt}>Year : {this.state.year}</Text>
                                <Text style={styles.txt}>Make : {this.state.make}</Text>
                                <Text style={styles.txt}>Model : {this.state.model}</Text>
                                <Text style={styles.txt}>Type : {this.state.type}</Text>
                            </View>
                        </View>
                        <View style={styles.contents}>
                            <View style={styles.box}>
                                <SelectDropdown
                                    defaultButtonText="Pick Up Location"
                                    buttonStyle={styles.drop}
                                    buttonTextStyle={styles.drop_txt}
                                    data={countries}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index);
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem;
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item;
                                    }}
                                />
                                <SelectDropdown
                                    defaultButtonText="Drop Off Location"
                                    buttonStyle={styles.drop}
                                    buttonTextStyle={styles.drop_txt}
                                    data={countries}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index);
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem;
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item;
                                    }}
                                />
                            </View>
                            <View style={styles.box}>
                                <TouchableOpacity style={styles.drop} onPress={this.showPickUp}>
                                    <Text style={styles.drop_txt}>{this.state.pickup_date}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.drop} onPress={this.showDropOff}>
                                    <Text style={styles.drop_txt}>{this.state.dropoff_date}</Text>
                                </TouchableOpacity>
                            </View>

                            {this.state.show_pickup && (
                                <DatePicker
                                    options={{
                                        backgroundColor: "#090C08",
                                        textHeaderColor: "#FFA25B",
                                        textDefaultColor: "#F6E7C1",
                                        selectedTextColor: "#fff",
                                        mainColor: "#F4722B",
                                        textSecondaryColor: "#D6C7A1",
                                        borderColor: "rgba(122, 146, 165, 0.1)",
                                    }}
                                    mode="calendar"
                                    style={{ borderRadius: 10, maxWidth: 300 }}
                                    selected={getFormatedDate(new Date(), "jYYYY/jMM/jDD")}
                                    onDateChange={this.pickUpDateChanged}
                                />
                            )}
                            {this.state.show_dropoff && (
                                <DatePicker
                                    options={{
                                        backgroundColor: "#090C08",
                                        textHeaderColor: "#FFA25B",
                                        textDefaultColor: "#F6E7C1",
                                        selectedTextColor: "#fff",
                                        mainColor: "#F4722B",
                                        textSecondaryColor: "#D6C7A1",
                                        borderColor: "rgba(122, 146, 165, 0.1)",
                                    }}
                                    mode="calendar"
                                    style={{ borderRadius: 10, maxWidth: 300 }}
                                    selected={getFormatedDate(new Date(), "jYYYY/jMM/jDD")}
                                    onDateChange={this.dropOffDateChanged}
                                />
                            )}
                            <View style={styles.half_box}>
                                <View style={styles.sign_box}>
                                    <MyButton style={styles.btn} title="RENT THIS VEHICLE" color="#06A500" titleColor="#ffffff" onPress={() => this.rentVehicle()} />
                                </View>
                            </View>
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
        width: 380,
        height: 221,
    }, model_txt: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
    }, des: {
        fontSize: 14,
        marginTop: 15,
    }, g_box: {
        backgroundColor: '#F5F4F4',
        padding: 12,
        marginTop: 15,
        marginBottom: 15,
    }, txt: {
        fontSize: 12,
        color: '#939393'

    }, drop: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
        height: 52,
        paddingStart: 12,
        width: 190,
        paddingEnd: 8,
        marginHorizontal: 9,
        justifyContent: "center",
        borderColor: "#E5E5E5",
        borderWidth: 1,
        alignItems: "center",
    },
    drop_txt: {
        fontSize: 14,
        alignSelf: "center",
    },
    titlecontainer: {
        textAlign: "center",
    },
    btn: {
        width: 350,
        flex: 1,
    },
    avail: {
        marginRight: 24,
        marginLeft: 24,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    v_box: {
        flexDirection: "row",
        width: "100%",
        flexWrap: "wrap",
        marginHorizontal: "auto",
    }, box: {
        flexDirection: "row",
        marginVertical: 5,
    },
});