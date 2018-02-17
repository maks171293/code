import React, {Component} from 'react';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import {Scene, Router, Actions} from 'react-native-router-flux'
import reducers from './reducers';
import * as ActionR from './constants/actionsRoute';
import LayoutStyle from  './styles/Layout';
import InitialAppState from './components/InitialAppState';
import Test from './scenes/Test';
import LoginForm from './scenes/LoginForm';
import SignUpForm from './scenes/SignUpForm';
import BecomePartner from './scenes/BecomePartner';
import SetupWorkingHours from './scenes/SetupWorkingHours';
import SetupRates from './scenes/SetupRates';
import PartnerAgreement from './scenes/PartnerAgreement';
import PersonalSettings from './scenes/PersonalSettings';
import Questionnaire from './scenes/Questionnaire';
import Winch from './scenes/services/Winch';
import BackgroundCheck from './scenes/BackgroundCheck';
import LockedOut from './scenes/services/LockedOut';
import NeedFuel from './scenes/services/NeedFuel';
import JumpStart from './scenes/services/JumpStart';
import FlatTires from './scenes/services/FlatTires';
import WinchAndTow from './scenes/services/WinchAndTow';
import Tow from './scenes/services/Tow';
import NavBar from './components/NavBar';
import NavigationDrawer from './components/NavigationDrawer';
import DriverGeolocation from './scenes/DriverGeolocation';
import ActivateAccount from './scenes/ActivateAccount';
import JobReceives from './scenes/JobReceives';
import JobAccepted from './scenes/JobAccepted';
import CompanySettings from './scenes/CompanySettings';

import {AsyncStorage} from 'react-native';
//translations
// import I18n from 'react-native-i18n';
import {strings} from './utilits/localStrings.js';
import {LANGUAGES} from './constants/global';
/**
 *  create store
 */
const RouterWithRedux = connect()(Router);
const store = createStore(reducers);


//Translate to current Language
AsyncStorage.getItem('LANGUAGE')
.then(res => {
  res = JSON.parse(res);
  res = (res == null) ? {index: 0} : res;
  const currentLang = LANGUAGES[res.index].code;
  strings.setLanguage(currentLang);
})
.catch(err => {
  console.log('Storage error', err);
});


/**
 * Define Scenes
 */
const scenes = Actions.create(
    <Scene
        key="root"
        style={LayoutStyle.appContainer}
    >
        <Scene
            key="drawer"
            component={NavigationDrawer}
            modalOpen={false}
            open={false}
        >
            <Scene
                key="wrapper"
                navBar={(props) => <NavBar renderBackButton={props.renderBackButton}/>}
            >
                <Scene
                    key="initialAppState"
                    component={InitialAppState}
                    initial={true}
                    type="replace"
                />
                <Scene
                    key="login"
                    component={LoginForm}
                    type="replace"
                />
                <Scene
                    key="becomePartner"
                    type="replace"
                    component={BecomePartner}
                />
                <Scene
                    key="companySettings"
                    type="replace"
                    component={CompanySettings}
                />
                <Scene
                    key="rates"
                    type="replace"
                    component={SetupRates}
                />
                <Scene
                    key="signUp"
                    type="replace"
                    component={SignUpForm}
                />
                <Scene
                    key="winchService"
                    type="replace"
                    component={Winch}
                    renderBackButton='rates'
                />
                <Scene
                    key="lockedService"
                    type="replace"
                    component={LockedOut}
                    renderBackButton='rates'
                />
                <Scene
                    key="fuelService"
                    type="replace"
                    component={NeedFuel}
                    renderBackButton='rates'
                />
                <Scene
                    key="jumpStartService"
                    type="replace"
                    component={JumpStart}
                    renderBackButton='rates'
                />
                <Scene
                    key="flatTiresService"
                    type="replace"
                    component={FlatTires}
                    renderBackButton='rates'
                />
                <Scene
                    key="winchAndTowService"
                    type="replace"
                    component={WinchAndTow}
                    renderBackButton='rates'
                />
                <Scene
                    key="towService"
                    type="replace"
                    component={Tow}
                    renderBackButton='rates'
                />
                <Scene
                    key="setupWorkingHours"
                    type="replace"
                    component={SetupWorkingHours}
                />
                <Scene
                    key="backgroundCheck"
                    type="replace"
                    component={BackgroundCheck}
                />
                <Scene
                    key="partnerAgreement"
                    type="replace"
                    component={PartnerAgreement}
                />
                <Scene
                    key="driverGeolocation"
                    type="replace"
                    component={DriverGeolocation}
                />
                <Scene
                    key="activateAccount"
                    type="replace"
                    component={ActivateAccount}
                />
                <Scene
                    key="questionnaire"
                    type="replace"
                    component={Questionnaire}
                />
                <Scene
                    key="personalSettings"
                    type="replace"
                    component={PersonalSettings}
                />
                <Scene
                    key="jobReceives"
                    type="replace"
                    component={JobReceives}
                />
                <Scene
                    key="jobAccepted"
                    type="replace"
                    component={JobAccepted}
                />
                <Scene
                    key="test"
                    type="replace"
                    component={Test}
                />
            </Scene>
        </Scene>
    </Scene>
);

export default class App extends Component {

    constructor(props) {
        super(props);
        this.backAndroidHandler = this.backAndroidHandler.bind(this);

        this.backAndroidButtonTimeout;
    }

    doBack() {
        store.dispatch({
            type: ActionR.DO_ROUTE,
        });
    }

    backAndroidHandler () {
        clearTimeout(this.backAndroidButtonTimeout);
        this.backAndroidButtonTimeout = setTimeout(() => {
            // console.log('yaaa');

            let storeStates = store.getState();

            if (storeStates.routes.history.length != 0) {

                let currentScene = scenes[storeStates.routes.history[storeStates.routes.history.length - 1].scene];

                if (storeStates.routes.disabledDrawer) return true;

                store.dispatch({
                    type: 'DISABLE_DRAWER',
                    status: true,
                });

                if (storeStates.routes.backButton) {
                    this.doBack();
                    Actions[storeStates.routes.backButton.route](storeStates.routes.backButton.props);
                } else if (typeof currentScene.renderBackButton != 'undefined') {
                    Actions[currentScene.renderBackButton]();
                }
                store.dispatch({
                    type: 'DISABLE_DRAWER',
                    status: false,
                });

            }
        }, 0)
        return true;
    }

    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux
                    backAndroidHandler={this.backAndroidHandler}
                    scenes={scenes}
                />
            </Provider>
        );
    }
}
