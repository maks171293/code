import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Platform, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import  LayoutStyle from  '../styles/Layout';
import  * as global from '../constants/global';
import API from '../services/api';
import {Actions} from 'react-native-router-flux';
import Icon from '../assets/svg/svg';
import Button from '../components/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

//translations
import {strings} from '../utilits/localStrings.js';

const dismissKeyboard = require('dismissKeyboard');

class SetupRates extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            services: [],
            loader: true
        };

        this.submitForm = this.submitForm.bind(this);

    }

    componentWillMount () {
        setTimeout(()=>{
            if (!this.props.user.user_id) { Actions.login()}
        });
    }

    componentDidMount () {

        this.getServicesTimeout = setTimeout(()=>{
            API.getServices({
                token: this.props.user.token,
                // language: global.LANGUAGES[this.props.language.index].code
                language: 'en'
            }, result => {
                // console.log(result);
                if (result.error) {
                    this.setState({
                        loader: false
                    });
                    return;
                }
                this.setState({
                    services: result,
                    loader: false
                });
            });
        }, 10);
    }

    componentWillUnmount () {
        clearTimeout(this.getServicesTimeout);
    }

    submitForm() {
        //todo submit
        console.log(this.state.services);
        Actions.driverGeolocation();
    }

    render() {
        return (
            <KeyboardAwareScrollView
                ref="keyboardAwareScrollView"
                enableAutoAutomaticScroll={true}
                style={LayoutStyle.contentContainer}
                contentContainerStyle={LayoutStyle.scrollViewContentContainer}
                keyboardShouldPersistTaps={'always'}
            >
                <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1}}>
                            <Text style={LayoutStyle.h1}>{strings["Setup rates"]}</Text>
                            {this.state.services.map((service, index) => {
                                return (
                                    <TouchableOpacity
                                        key={service.id}
                                        style={[LayoutStyle.listItem, (index == 0 ? {borderTopWidth: 1} : {})]}
                                        onPress={()=>{
                                            Actions[service.id == 4 ? 'winchAndTowService' : service.key]({service: service});
                                        }}
                                    >
                                        <View style={LayoutStyle.listItemIconWrapper}>
                                            {service.id == 4 ?
                                                <Icon name='winchAndTowService'/>
                                                :
                                                <Icon name={service.key}/>
                                            }
                                        </View>
                                        <Text style={[LayoutStyle.listItemText, styles.listItemText]}>
                                            {service.id == 1 ? strings['Fuel'] : strings[service.name]}
                                        </Text>
                                        <Icon name="arrowNext"/>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                        <Button
                            onPress={this.submitForm}
                            text={strings["Confirm"]}
                            style={{marginVertical: 10}}
                        />

                        <OrientationLoadingOverlay
                            visible={this.state.loader}
                            color="white"
                            indicatorSize="large"
                            messageFontSize={24}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    listItemText: {
        color: '#424242',
        textAlign: 'center',
        marginRight: 10,
    }
});

export default connect(
    state => ({
        services: state.services,
        user: state.user,
        language: state.language,
        route: state.routes
    })
)(SetupRates);
