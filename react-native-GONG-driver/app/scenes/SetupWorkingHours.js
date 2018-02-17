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
    TouchableWithoutFeedback,
} from 'react-native';
const dismissKeyboard = require('dismissKeyboard');
import LayoutStyle from  '../styles/Layout';
import SelectInput from '../components/SelectInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from '../assets/svg/svg';
import Button from '../components/Button';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import API from '../services/api';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import * as RouteActions from '../constants/actionsRoute'
import * as RegistrationActions from '../constants/actionsRegistration'

//translations
import {strings} from '../utilits/localStrings.js';

const IS_OPEN_HOURS = true;

class SetupsWorkingHours extends React.Component {

    constructor(props) {

        super(props);

        this.timeOptions = [];

        for (let h = 0; h < 24; h++) {
            let hours = (h < 10) ? '0'+h : ''+h;
            this.timeOptions.push(hours+':00');
            this.timeOptions.push(hours+':30');
        }
        this.timeOptions.push('24:00')

        this.state = {
            daily: true,
            errorMessage: '',
            isLoaderVisible: false,
            days: [
                {
                    id: 1,
                    title: strings['Monday'],
                    isWorking: true,
                    open: 0,
                    close: this.timeOptions.length-1,
                },
                {
                    id: 2,
                    title: strings['Tuesday'],
                    isWorking: true,
                    open: 0,
                    close: this.timeOptions.length-1,
                },
                {
                    id: 3,
                    title: strings['Wednesday'],
                    isWorking: true,
                    open: 0,
                    close: this.timeOptions.length-1,
                },
                {
                    id: 4,
                    title: strings['Thursday'],
                    isWorking: true,
                    open: 0,
                    close: this.timeOptions.length-1,
                },
                {
                    id: 5,
                    title: strings['Friday'],
                    isWorking: true,
                    open: 0,
                    close: this.timeOptions.length-1,
                },
                {
                    id: 6,
                    title: strings['Saturday'],
                    isWorking: true,
                    open: 0,
                    close: this.timeOptions.length-1,
                },
                {
                    id: 7,
                    title: strings['Sunday'],
                    isWorking: true,
                    open: 0,
                    close: this.timeOptions.length-1,
                },
            ]
        };

        this.submit = this.submit.bind(this);
    }

    componentWillMount () {
        if (this.props.registration['workingHoursFields']) {
            this.setState({...this.props.registration['workingHoursFields']});
        }
    }

    componentDidMount () {

        // setTimeout(()=>{
        // console.log('asdasd', this.props);
            /* at Registration chain */
            if (this.props.registrationProcess) {
            // if (true) {
                let historyItem = this.props.route.history[this.props.route.history.length-2];
                let scene = (historyItem && historyItem.scene);
                this.props.changeBackButton(
                    scene,
                    {registrationProcess: this.props.registrationProcess}
                );
                return;
            }

            let data = {
                token: this.props.user.token,
            };

            this.setState({isLoaderVisible: true});

            API.getWorkingHours(data, (result) => {
                this.setState({isLoaderVisible: false});

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

                result.workflow = JSON.parse(result.workflow);

                console.log(result);
                if (result.work_always) {
                    this.setState({daily: false});
                    return;
                }

                result.workflow.forEach((item) => {
                    if (!item.isWorking) return;
                    item.open = this.timeOptions.indexOf(item.open);
                    item.close = this.timeOptions.indexOf(item.close);
                });

                result.workflow[0].title = strings["Monday"];
                result.workflow[1].title = strings["Tuesday"];
                result.workflow[2].title = strings["Wednesday"];
                result.workflow[3].title = strings["Thursday"];
                result.workflow[4].title = strings["Friday"];
                result.workflow[5].title = strings["Saturday"];
                result.workflow[6].title = strings["Sunday"];

                this.setState({
                    days: result.workflow
                });
            });
        // }, 0);

    }

    changeWorkingDay(dayId) {
        let days = [...this.state.days];

        days.forEach((day, index) => {
            if (day.id == dayId) {
                let tempObj = {...day};
                tempObj.isWorking = !tempObj.isWorking;
                days.splice(index, 1, tempObj);
            }
        });
        this.setState({days})
    }

    setHours(dayId, isOpenHours, value) {
        let days = [...this.state.days];

        days.map((day, index) => {
            if (day.id == dayId) {
                let tempObj = {...day};
                tempObj[isOpenHours? 'open' : 'close'] = value;
                days.splice(index, 1, tempObj);

            }
        });
        this.setState({days: days})
    }

    submit () {

        this.setState({errorMessage: ''});

        let data = {
            token: this.props.user.token,
            workAlways: !this.state.daily
        };

        if (this.state.daily) {
            /* Validation */
            let days = [...this.state.days];
            for (let i = 0; i < days.length; i++) {
                let element = {...days[i]};

                if (!element.isWorking) continue;

                if (!element.close) {
                    this.setState({errorMessage: strings['End time can not be zero']})
                    return;
                }

                if (this.checkIfOpenMoreThanClose(element, true, element.open)) {
                    return;
                }
            }

            days.forEach( (tempEl, index) => {
                let element = {...tempEl};

                if (!element.isWorking) {
                    element.open = element.close = 0;
                    return;
                }

                element.open = this.timeOptions[element.open];
                element.close = this.timeOptions[element.close];

                days.splice(index, 1, element);
            });

            data.days = days;
        }

        this.setState({isLoaderVisible: true});

        API.setWorkingHours(data, (result) => {

            if (result instanceof Error) {
                this.setState({errorMessage: strings['Server Error'], isLoaderVisible: false});
                console.log(result);
                return;
            }

            if (result.error) {
                this.setState({errorMessage: strings['something went wrong, try again later'], isLoaderVisible: false});
                console.log(result);
                return;
            }

            console.log(result);

            /* If there are no errors */
            if (this.props.registrationProcess) {
            // if (true) {
                this.props.setSignUpFields({
                    daily: this.state.daily,
                    days: this.state.days,
                });
                Actions['fuelService']({service: {id: 1}, registrationProcess: true});
            } else {
                Actions['driverGeolocation']();
            }
        })

    }

    checkIfOpenMoreThanClose (day, isOpenHours, index) {
        if (isOpenHours ? (index > day.close) : (index < day.open)) {
            this.setState({errorMessage: (isOpenHours ? strings['First value can\'t be bigger than second'] : strings['Second value can\'t be lower than first'])});
            return true;
        }
        return false;
    }

    renderDropdownInput(day, isOpenHours) {
        return (
            <View
                style={{
                    borderWidth: 1,
                    borderRadius: 3,
                    borderColor: '#dcdcdc',
                }}
            >
                <SelectInput
                    dropdownStyle={styles.inputDropdown}
                    style={styles.input}
                    defaultValue={this.timeOptions[ isOpenHours ? day.open : day.close]}
                    options={this.timeOptions}
                    onSelect={index => {
                        index = +index;

                        if ((isOpenHours ? day.close : day.open) != 0) {
                            if (this.checkIfOpenMoreThanClose(day, isOpenHours, index)) {
                              return false
                            }
                        }

                        this.setState({errorMessage: ''});

                        this.setHours(day.id, isOpenHours, index);
                    }}
                />
                <View
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                        top: 0,
                        right: 5,
                        bottom:0,
                        justifyContent: 'center'
                    }}
                >
                    <Icon name="triangleDown"/>
                </View>
            </View>
        )
    }

    render() {
        return (
            <KeyboardAwareScrollView
                style={LayoutStyle.contentContainer}
                contentContainerStyle={LayoutStyle.scrollViewContentContainer}
            >
                <View style={{flex: 1}}>
                    <View style={{flex: 1}}>

                        <Text style={LayoutStyle.h1}>{strings["Operating Hours"]}</Text>

                        <View style={styles.dailyOrNotBlock}>
                            <Icon name="hours24" style={{width: 30}}/>
                            <Text style={{color: '#292929', fontSize: 14}}>
                                {strings["24 hours"]}
                            </Text>
                            <Switch
                                onValueChange={() => this.setState({daily: !this.state.daily})}
                                value={this.state.daily}
                            />
                            <Text style={{color: '#292929', fontSize: 14}}>
                                {strings["Set my hours"]}
                            </Text>
                            <Icon name="clock" style={{width: 30}}/>
                        </View>

                        <View style={LayoutStyle.blockWithList}>
                            {this.state.daily && this.state.days.map((day, index) => (

                                <View key={day.id} style={styles.dayWrapper}>
                                    <Switch
                                        onValueChange={() => this.changeWorkingDay(day.id)}
                                        value={day.isWorking}
                                    />
                                    <Text style={styles.dayTitle}>
                                        {day.title}
                                    </Text>
                                    { day.isWorking ?
                                        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end'}}>

                                            {this.renderDropdownInput(day, IS_OPEN_HOURS)}

                                            <View style={{justifyContent: 'center'}}>
                                                <Text style={{color: '#292929', marginHorizontal: 10,}}>
                                                    {strings["to"]}
                                                </Text>
                                            </View>

                                            {this.renderDropdownInput(day, !IS_OPEN_HOURS)}

                                        </View>
                                        :
                                        null
                                    }
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={styles.errorWrapper}>
                        <Text style={LayoutStyle.errorText}>{this.state.errorMessage}</Text>
                    </View>

                    <Button
                        onPress={this.submit}
                        text={strings["Confirm"]}
                        style={{marginBottom: 10}}
                    />

                </View>
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
    dailyOrNotBlock: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    dayWrapper: {
        flexDirection: 'row',
        height: 49,
        borderBottomWidth: 1,
        borderColor: '#dcdcdc',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 10,
    },
    dayTitle: {
        color: '#242424',
        flex: 1,
        fontSize: 14,
        paddingLeft: 10
    },
    inputDropdown: {
        marginLeft: -1,
        borderWidth: 1,
        width: 62,
        borderRadius: 2,
        padding: 3,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    input: {
        zIndex: 2,
        borderWidth: 0,
        backgroundColor: 'transparent',
        height: 30,
        width: 60,
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
        route: state.routes,
        user: state.user,
    }),
    dispatch => ({
        setSignUpFields: (data) => {
            dispatch({type: RegistrationActions.UPDATE_PAGE_FIELDS, page: 'workingHoursFields', data});
        },
        changeBackButton: (scene, props) => {
            dispatch({
                type: RouteActions.CHANGE_BACK_BUTTON,
                scene,
                props
            })
        }
    })
)(SetupsWorkingHours);
