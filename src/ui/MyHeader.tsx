import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Auth } from 'aws-amplify';
import { Hub } from 'aws-amplify';


export default class MyHeader extends React.Component {
    // const [modalVisible, setModalVisible] = useState(false);

    constructor(props) {
        super(props);
        this.state = {
            name: "",
        }
        Hub.listen('auth', (data) => {
            switch (data.payload.event) {
                case 'signIn':
                    props.navigation.navigate('Home');

                    console.log('user signed in');
                    break;
                case 'signUp':
                    props.navigation.navigate('SignIn');
                    console.log('user signed up');
                    break;
                case 'signOut':
                    props.navigation.navigate('SignUp');
                    console.log('user signed out');
                    this.setState({
                        name:""
                    });
                    break;
                case 'signIn_failure':
                    window.alert("wrong email or password")
                    break;
                case 'configured':
                    console.log('the Auth module is configured');
            }
        });
    }

    componentWillMount() {
        this.getAttributes();
    }

    componentWillUnmount() {
        const hubListenerCancelToken = Hub.listen(/.*/, (data) => {
            console.log('Listening for all messages: ', data.payload.data);
        });
        hubListenerCancelToken();
    }

    async getAttributes() {
        const user = await Auth.currentAuthenticatedUser();
        console.log('attributes:', user.attributes);

        this.setState({
            name: user.attributes['name']
        })
        this.forceUpdate()
    }

    render() {
        console.log("state : ");
        console.log(this.state);
        var name = this.state.name;
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

                {this.state.name &&
                    <Text>Hello {this.state.name}</Text>
                }

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