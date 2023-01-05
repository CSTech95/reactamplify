import React from "react"
import { View, StyleSheet, Image } from 'react-native'
import MyHeader from '../ui/MyHeader';

export default class Home extends React.Component {

    render() {
        return (

            <View style={styles.container}>
                <MyHeader
                    my_page="true"
                    menu="true"
                    navigation={this.props.navigation} />
                <Image
                    style={styles.bg}
                    source={require('../../assets/img/home_bg.jpg')} />
                <View style={styles.contents}>


                </View>
            </View>
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
    bg: {
        width: "100%",
        height: 300,
    }
});