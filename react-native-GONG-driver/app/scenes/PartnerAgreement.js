import  React, {Component} from 'react';
import  {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    TextInput,
    Image,
    Dimensions,
    AsyncStorage,
    Switch,
} from 'react-native';
import LayoutStyle from  '../styles/Layout';
import CheckBox from 'react-native-checkbox';
import {connect} from 'react-redux';
import Button from '../components/Button';
import {Actions} from 'react-native-router-flux';
import * as RouteActions from '../constants/actionsRoute'
import * as RegistrationActions from '../constants/actionsRegistration'

//translations
import {strings} from '../utilits/localStrings.js';

class PartnerAgreement extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            isAgreementConfirmed: false,
            errorMessage: ''
        };

        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        if (this.props.registrationProcess) {
            this.props.changeBackButton(
                this.props.route.history[this.props.route.history.length - 2].scene,
                {registrationProcess: this.props.registrationProcess}
            );
        }
    }

    submit () {

        if (!this.state.isAgreementConfirmed) {
            this.setState({errorMessage: strings['You need to confirm partner agreement']});
            return;
        }

        // this.props.disableDrawer(false);
        this.props.clearSignUpFields();
        Actions['driverGeolocation']();
    }

    render() {
        return (
            <ScrollView
                style={LayoutStyle.contentContainer}
                contentContainerStyle={LayoutStyle.scrollViewContentContainer}
            >
                <View style={{flex:1}}>
                    <View style={{flex:1}}>
                        <Text style={[LayoutStyle.h1]}>
                            {strings["Partner agreement"]}
                        </Text>
                        <Text style={[styles.textPolicy]}>
                            {strings["Lorem ipsum dolor sit amet, consectetur adipisicing elit. \nAd doloribus ducimus ipsa ipsum labore modi possimus provident, reprehenderit tempora veritatis. \nAt autem cupiditate, delectus distinctio eveniet expedita fugit quisquam sunt."]}
                        </Text>

                        <View style={[styles.checkboxWrapper]}>
                            <CheckBox
                                checkboxStyle={{
                                    width: 14,
                                    height: 14
                                }}
                                label={strings['I agree']}
                                labelStyle={{color:'#242424'}}
                                onChange={(checked) => {
                                    console.log(checked);
                                    this.setState({isAgreementConfirmed: !checked})
                                }}
                                checked={this.state.isAgreementConfirmed}
                            />
                        </View>
                    </View>

                    <View style={[styles.errorWrapper, this.state.errorMessage && {marginTop:5}]}>
                        <Text style={LayoutStyle.errorText}>{this.state.errorMessage}</Text>
                    </View>

                    <Button
                        onPress={this.submit}
                        text={strings["Confirm"]}
                        style={{marginVertical: 10}}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    errorWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxWrapper:{
        marginLeft: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    textPolicy: {
        fontSize: 14,
        color: '#242424',
        paddingHorizontal: 10,
    },
});

export default connect(
    state => ({
        registration: state.registration,
        route: state.routes,
    }),
    dispatch => ({
        clearSignUpFields: () => {
            dispatch({type: RegistrationActions.CLEAR_PAGE_FIELDS});
        },
        changeBackButton: (scene, props) => {
            dispatch({
                type: RouteActions.CHANGE_BACK_BUTTON,
                scene,
                props
            })
        },
        // disableDrawer: (status) => {
        //     dispatch({
        //         type: RouteActions.DISABLE_DRAWER,
        //         status: status
        //     });
        // },
    })
)(PartnerAgreement);
