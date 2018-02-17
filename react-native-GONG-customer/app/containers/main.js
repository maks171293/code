import  React, {Component, PropTypes} from 'react';
import  {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    Platform,
    TouchableOpacity
} from 'react-native';
import {strings} from '../utilits/localStrings.js';
import {Actions} from 'react-native-router-flux';
import * as UAction from '../constants/actionsUser'
import * as global from '../constants/global'
import Storage from 'react-native-storage';
import {connect} from 'react-redux';
/**
 * setup custom icons from iconMoon
 */
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/fonts/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

/**
 * main side menu
 */
class Main extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.onSelect = this.onSelect.bind(this);
        this.onLogout = this.onLogout.bind(this);

        this.storage = new Storage({
            size: 8000,
            storageBackend: AsyncStorage,
            defaultExpires: 1000 * 3600 * 24,
            enableCache: true,
            sync: {}
        });

    }

    onSelect(callback) {
        this.props.close();
        setTimeout(callback, 200);
    }

    onLogout() {
        this.props.close();
        this.storage.remove({
            key: global.LOGIN
        });

        this.props.onChangeUser({user_id: null, token: null});

        Actions.login();


    }

    render() {
        console.log(this.props);
        return ( <View style={styles.container} onClick={()=>this.props.close()}>
                <Icon
                    size={45}
                    name="Menu"
                    onPress={ () => this.props.close()}
                    fontSize="2"
                    style={{
                        position: 'absolute',
                        top: (Platform.OS === 'ios') ? 15 : 5,
                        right: 2,
                        color: 'rgba(255, 255, 255, 0.2)'
                    }}/>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=> {
                        this.onSelect(Actions.aboutUs)
                    }}
                >
                    <Text
                        style={styles.btnText}>
                        About Us
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=> {
                        this.onSelect(Actions.terms)
                    }}
                >
                    <Text
                        style={styles.btnText}>
                        Terms of business
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=> {
                        this.onSelect(Actions.contactUs)
                    }}
                >
                    <Text
                        style={styles.btnText}>
                        Contact Us
                    </Text>
                </TouchableOpacity>
                {
                    !this.props.user.user_id ?
                        <View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={()=> {
                                    this.onSelect(Actions.login)
                                }}
                            >
                                <Text
                                    style={styles.btnText}>
                                    {strings.login}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={()=> {
                                    this.onSelect(Actions.signup)
                                }}
                            >
                                <Text
                                    style={styles.btnText}>
                                    {strings.signUp}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={()=> {
                                    this.onSelect(Actions.personalSettings)
                                }}
                            >
                                <Text
                                    style={styles.btnText}>
                                    Personal Settings
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={()=> {
                                    this.onSelect(Actions.payment)
                                }}
                            >
                                <Text
                                    style={styles.btnText}>
                                    Payment screen
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={()=> {
                                    this.onSelect(Actions.vehicleChange)
                                }}
                            >
                                <Text
                                    style={styles.btnText}>
                                    Vehicle screen
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.btn}
                                onPress={()=> {
                                    this.onSelect(Actions.roadsideService)
                                }}
                            >
                                <Text
                                    style={styles.btnText}>
                                    Roadside Service
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={()=> {
                                    this.onLogout()
                                }}
                            >
                                <Text
                                    style={styles.btnText}>
                                    Logout
                                </Text>
                            </TouchableOpacity>
                        </View>
                }
            </View>
        );
    }

}


export default connect(
    state => ({
        user: state.user
    }),
    dispatch => ({
        onChangeUser: (user) => {
            dispatch({type: UAction.UPDATE_USER, user: user});
        }
    })
)(Main);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.78)'
    },
    btn: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderColor: '#0086b3',
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 10
    },
    btnText: {
        color: '#0086b3'
    }
});
