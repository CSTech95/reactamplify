import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";


export default class MyHeader extends React.Component {
    // const [modalVisible, setModalVisible] = useState(false);
    render() {
        return (
            <View style={styles.header_box}>
                {this.props.menu &&
                    <TouchableOpacity
                        style={styles.icon_box}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Image
                            style={styles.left}
                            source={require('../../assets/img/menu.png')} />
                    </TouchableOpacity>
                }
                {this.props.back &&
                    <TouchableOpacity
                        style={styles.icon_box}
                        onPress={() => this.props.navigation.goBack(null)}
                    >
                        <Image
                            style={styles.left}
                            source={require('../../assets/img/back.png')} />
                    </TouchableOpacity>
                }
                
                <View style={styles.title_box}>
                    <Text style={styles.title}>
                        Car Renting
                    </Text>
                </View>
                
                {this.props.my_page &&
                    <TouchableOpacity
                        style={styles.icon_box}
                        onPress={() =>
                            this.props.navigation.navigate('SignUp')}
                    >
                        <Image
                            style={styles.right}
                            source={require('../../assets/img/my_page.png')} />
                    </TouchableOpacity>
                }
                {
                    this.props.save &&
                    <TouchableOpacity
                        onPress={() => this.props.onSave()}
                    >
                        <Text style={styles.title}>SAVE</Text>
                    </TouchableOpacity>
                }
                {this.props.emptyRight &&
                    <View style={styles.icon_box}></View>
                }

            </View>
        );
    }
};

const styles = StyleSheet.create({
    header_box: {
        height: 60,
        alignItems: 'center',
        paddingStart: 24,
        paddingEnd: 24,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },
    icon_box: {
        height: 28,
        width: 28,
    },
    left: {
        height: 28,
        width: 28,
    },
    right: {
        height: 28,
        width: 28,
    },
    title_box: {
        alignSelf: "center",
        marginStart: 'auto',
        marginEnd: 'auto'
    },
    title: {
        fontSize: 20,
    }
});