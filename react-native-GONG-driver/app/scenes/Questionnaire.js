import  React, {Component} from 'react';
import  {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    TextInput,
    Image,
    Dimensions,
    AsyncStorage,
    Switch,
    TouchableWithoutFeedback,
} from 'react-native';
import LayoutStyle from  '../styles/Layout';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RadioButton from '../components/RadioButton';
import API from '../services/api';
import Icon from '../assets/svg/svg';
import Button from '../components/Button';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import * as RouteActions from '../constants/actionsRoute'
import * as RegistrationActions from '../constants/actionsRegistration'

//translations
import {strings} from '../utilits/localStrings.js';

const dismissKeyboard = require('dismissKeyboard');

class Questionnaire extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            years_business: '',

            wear_uniform: 0,
            marked_company_logo: 0,
            carry_smartphones: 0,
            other_motor_clubs: 0,
            police_rotation: 0,

            emptyValue: [],
            isInputActive: false,
            errorMessage: '',
            isLoaderVisible: false
        };

        this.questions = [
            {
                id: 1,
                title: strings['Do your drivers wear uniform?'],
                icon: 'policeCap',
                value: 'wear_uniform',
                options: [
                    {
                        id: 1,
                        title: strings['Yes'],
                    },
                    {
                        id: 2,
                        title: strings['No'],
                    }
                ]
            },
            {
                id: 2,
                title: strings['Are your vehicles marked with company logo?'],
                icon: 'star',
                value: 'marked_company_logo',
                options: [
                    {
                        id: 1,
                        title: strings['Yes'],
                    },
                    {
                        id: 2,
                        title: strings['No'],
                    }
                ]
            },
            {
                id: 3,
                title: strings['Do you and your drives carry smartphones?'],
                icon: 'phone',
                value: 'carry_smartphones',
                options: [
                    {
                        id: 1,
                        title: strings['Yes'],
                    },
                    {
                        id: 2,
                        title: strings['No'],
                    },
                    {
                        id: 3,
                        title: strings['Some'],
                    }
                ]
            },
            {
                id: 4,
                title: strings['Do you currently work with other motor clubs?'],
                icon: 'wrench',
                value: 'other_motor_clubs',
                options: [
                    {
                        id: 1,
                        title: strings['Yes'],
                    },
                    {
                        id: 2,
                        title: strings['No'],
                    }
                ]
            },
            {
                id: 5,
                title: strings['Are you on a police rotation?'],
                icon: 'policeBadge',
                value: 'police_rotation',
                options: [
                    {
                        id: 1,
                        title: strings['Yes'],
                    },
                    {
                        id: 2,
                        title: strings['No'],
                    }
                ]
            }
        ];

    }

    componentWillMount () {
        if (this.props.registration['questionnaireFields']) {
            this.setState({...this.props.registration['questionnaireFields']});
        }
    }

    componentDidMount() {
        if (this.props.registrationProcess) {
            this.props.changeBackButton(
                this.props.route.history[this.props.route.history.length - 2].scene,
                {registrationProcess: this.props.registrationProcess}
            );
        }
    }

    submit() {

        this.setState({errorMessage: ''});

        if (!this.state.years_business) {
            this.setState({
                errorMessage: strings['You need to feel required fields'],
            });
            return;
        }

        let result = {
            token: this.props.user.token,
            driver_id: this.props.user.driver_id,
            years_business: this.state.years_business,
            data: {}
        };

        this.questions.map(question => {
           result.data[question.value] = this.state[question.value];
        });

        this.setState({isLoaderVisible: true});

        API.setDriverFillsQuestionnaire(result, (result) => {
            this.setState({isLoaderVisible: false});

            // console.log('11232312', result);

            if (result instanceof Error) {
                this.setState({errorMessage: strings['Server Error']});
                console.log(result);
                return;
            }

            if (result.error) {
                this.setState({errorMessage: strings['something went wrong, try again later']});
                console.log(result);
                return;
            }

            /* If there are no errors */
            if (this.props.registrationProcess) {
                this.props.setSignUpFields({
                    years_business: this.state.years_business,
                    wear_uniform: this.state.wear_uniform,
                    marked_company_logo: this.state.marked_company_logo,
                    carry_smartphones: this.state.carry_smartphones,
                    other_motor_clubs: this.state.other_motor_clubs,
                    police_rotation: this.state.police_rotation,
                });
                Actions['setupWorkingHours']({registrationProcess: this.props.registrationProcess});
            } else {
                Actions['driverGeolocation']();
            }

        });
    }

    render() {
        return (
            <KeyboardAwareScrollView
                automaticallyAdjustContentInsets={false}
                style={LayoutStyle.contentContainer}
                contentContainerStyle={LayoutStyle.scrollViewContentContainer}
                keyboardShouldPersistTaps={'always'}
            >
                <TouchableWithoutFeedback onPress={()=> dismissKeyboard()}>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1}}>

                            <Text style={LayoutStyle.h1}>
                                {strings["Your company"]}
                            </Text>

                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    borderColor: '#dcdcdc',
                                    borderBottomWidth: 1,
                                    borderTopWidth: 1,
                                    paddingBottom: 10,
                                    paddingTop: 10,
                                }}
                                onPress={() => this.refs.business.focus()}
                            >
                                <View style={LayoutStyle.listItemIconWrapper}>
                                    <Icon
                                        name="calendar"
                                        style={{height: 25}}
                                        color={(this.state.errorMessage && !this.state.years_business) ? 'red' : null}
                                    />
                                </View>

                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Text style={{color: (this.state.errorMessage && !this.state.years_business) ? 'red' : '#232323', flex:1}}>
                                        How long have you been in business?
                                    </Text>

                                    <TextInput
                                        underlineColorAndroid={'transparent'}
                                        placeholder={strings["year(s)"]}
                                        returnKeyType={"done"}
                                        ref="business"
                                        maxLength={3}
                                        keyboardType='numeric'
                                        value={this.state.years_business}
                                        onChangeText={years_business => this.setState({years_business})}
                                        onFocus={()=>this.setState({isInputActive: true})}
                                        onBlur={()=>this.setState({isInputActive: false})}
                                        style={[
                                            LayoutStyle.listItemText,
                                            {color: '#424242', textAlign: 'right', flex: 0, minWidth: 60}
                                        ]}
                                    />
                                </View>

                                <View style={{alignItems: 'center', width: 40, justifyContent: 'center'}}>
                                    <Icon
                                        name="arrowDown"
                                        style={this.state.isInputActive && {transform: [{rotate: '180deg'}]}}
                                    />
                                </View>
                            </TouchableOpacity>


                            {this.questions.map((question, index) => (
                                <View key={question.id} style={styles.questionWrapper}>

                                    <View style={[LayoutStyle.listItemIconWrapper]}>
                                        <Icon name={question.icon}/>
                                    </View>

                                    <View style={{flex: 1}}>

                                        <Text
                                            style={styles.questionText}
                                        >
                                            {question.title}
                                        </Text>

                                        <View style={{flexDirection: 'row'}}>
                                            {question.options.map((option, index, optionsArr) => (
                                                <View
                                                    key={option.id}
                                                    style={{flexDirection: 'row', alignItems: 'center'}}
                                                >
                                                    <RadioButton
                                                        //innerColor='#575757'
                                                        //outerColor='#575757'
                                                        //size={11}
                                                        //animation={'bounceIn'}
                                                        isSelected={this.state[question.value] == option.id}
                                                        onPress={() => {
                                                            this.setState({[question.value]: option.id})
                                                        }}
                                                    />
                                                    <Text style={{paddingLeft: 10, paddingRight: 20, color: '#292929'}}>
                                                        {option.title}
                                                    </Text>
                                                </View>
                                            ))}
                                        </View>
                                    </View>
                                </View>
                            ))}

                        </View>

                        <View style={styles.errorWrapper}>
                            <Text style={LayoutStyle.errorText}>{this.state.errorMessage}</Text>
                        </View>

                        <Button
                            onPress={()=>this.submit()}
                            text={strings["Confirm"]}
                            style={{marginBottom: 10}}
                        />

                    </View>
                </TouchableWithoutFeedback>
                <OrientationLoadingOverlay
                    visible={this.state.isLoaderVisible}
                    color="white"
                    indicatorSize="large"
                    messageFontSize={24}
                />
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    questionWrapper: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#D8D8D8',
        flexDirection: 'row',
    },
    questionText: {
        paddingHorizontal: 0,
        marginBottom: 10,
        color: '#292929',
        fontSize: 14,
    },
    errorWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
});

export default connect(
    state => ({
        registration: state.registration,
        user: state.user,
        route: state.routes,
    }),
    dispatch => ({
        setSignUpFields: (data) => {
            dispatch({type: RegistrationActions.UPDATE_PAGE_FIELDS, page: 'questionnaireFields', data});
        },
        changeBackButton: (scene, props) => {
            dispatch({
                type: RouteActions.CHANGE_BACK_BUTTON,
                scene,
                props
            })
        },
        disableDrawer: (status) => {
            dispatch({
                type: RouteActions.DISABLE_DRAWER,
                status: status
            });
        },
    })
)(Questionnaire);
