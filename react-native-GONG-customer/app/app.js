import React, {Component} from 'react';
import {
    Scene,
    Router,
    Actions,
} from 'react-native-router-flux'
import {connect, Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';

import {Navigator, View, Text, Modal, Image, Menu, Platform} from 'react-native';
import {strings} from './utilits/localStrings.js';
import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';
import Dimensions from 'Dimensions'
import Main from './containers/main';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import customerGeolocation from './components/CustomerGeolocation'
import NavigationDrawer from './components/NavigationDrawer'
import PaymentScreen from './components/PaymentScreen';
import VehicleChange from './components/VehicleChange';
import RoadsideService from './components/RoadsideService';
import Settings from './components/Settings';
import FuelService from './components/services/FuelService';
import WinchService from './components/services/WinchService';
import LockedService from './components/services/LockedService';
import TowService from './components/services/TowService';
import JumpStartService from './components/services/JumpStartService';
import FlatTiresService from './components/services/FlatTiresService';
import AboutUs from './containers/aboutUs';
import Terms from './containers/terms';
import PrivacyPolicy from './containers/privacyPolicy';
import LocationsTerms from './containers/locationsTerms';
import ContactUs from './containers/contactUs';

/**
 * setup custom icons from iconMoon
 */
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './assets/fonts/selection.json';
import  * as global from './constants/global'
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
const RouterWithRedux = connect()(Router);

/**
 *  create store
 */

const middleware = [/* ...your middleware (i.e. thunk) */];
const store = compose(applyMiddleware(...middleware))(createStore)(reducers);



const scenes = Actions.create(
    <Scene key="root">
        <Scene key="drawer"
               component={NavigationDrawer}
               modalOpen={false}
               hideNavBar
               open={false}
               strings={strings}
               type="replace">
            <Scene key="main1"
                   strings={strings}
                   tabs={false}
                   title="Gong"
                   renderTitle={ () => {
                       const language = store.getState().language;
                       let icon = global.LANGUAGES[language.index].icon;
                       let {height, width} = Dimensions.get('window');
                       return (
                           <View>
                               <Icon size={45} name={icon} fontSize="2"
                                     style={{
                                         position: 'absolute',
                                         top: (Platform.OS === 'ios') ? 15 : 5,
                                         right: 47,
                                         color: 'black'
                                     }}/>

                               <Image source={require('./assets/images/logo.png')} resizeMode={'contain'}
                                      style={{
                                          width: 80,
                                          height: 30,
                                          position: 'absolute',
                                          left: width / 2 - 35,
                                          top: (Platform.OS === 'ios') ? 25 : 15,
                                      }}/>

                               <Icon
                                   size={45}
                                   name="Menu"
                                   onPress={ () => Actions.refresh({key: 'drawer', open: value => !value})}
                                   fontSize="2"
                                   style={{
                                       position: 'absolute',
                                       zIndex: 11322132,
                                       top: (Platform.OS === 'ios') ? 15 : 5,
                                       right: 2,
                                       color: 'black'
                                   }}/>
                           </View>)

                   }}>

                <Scene key="customerGeolocation"
                       renderBackButton={function () {
                           return <Icon size={45} name="Searching" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black'
                           }}/>
                       }}
                       doShowConfirm={() => Actions.refresh({
                           key: 'drawer',
                           showConfirm: true,
                           showBack: false,
                           nextScreen: 'login'
                       })}
                       component={customerGeolocation}
                       type="replace"
                />
                <Scene key="login"
                       renderBackButton={function () {
                           return <Icon size={45} name="Exit" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black'
                           }}/>
                       }}
                       component={LoginForm}
                       type="replace"
                       strings={strings}/>
                <Scene key="main"
                       type="replace"
                       component={Main}/>
                <Scene key="payment"
                       renderBackButton={function () {
                           return <Icon size={45} name="Credit-cards" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black'
                           }}/>
                       }}
                       type="replace"
                       component={PaymentScreen}/>
                <Scene key="vehicleChange"
                       renderBackButton={function () {
                           return <Icon size={45} name="Settings" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black'
                           }}/>
                       }}
                       type="replace"
                       component={VehicleChange}/>
                <Scene key="roadsideService"
                       renderBackButton={function () {
                           return <Icon size={45} name="Settings" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black'
                           }}/>
                       }}
                       type="replace"
                       doShow={() => Actions.refresh({
                           key: 'drawer',
                           showConfirm: false,
                           showBack: false
                       })}
                       component={RoadsideService}
                />
                <Scene key="towService"
                       renderBackButton={function () {
                           return <Icon size={45} name="Settings" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black'
                           }}/>
                       }}
                       type="replace"
                       doShow={() => Actions.refresh({
                           key: 'drawer',
                           showConfirm: false,
                           showBack: true,
                           backScreen: 'roadsideService'
                       })}
                       component={TowService}
                />

                <Scene key="fuelService"
                       type="replace"
                       renderBackButton={function () {
                           return <Icon size={45} name="Fuel" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black'
                           }}/>
                       }}
                       doShow={() => Actions.refresh({
                           key: 'drawer',
                           showConfirm: false,
                           showBack: true,
                           backScreen: 'roadsideService'
                       })}
                       component={FuelService}
                />
                <Scene key="winchService"
                       type="replace"
                       renderBackButton={function () {
                           return <Icon size={45} name="Winch" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black'
                           }}/>
                       }}
                       doShow={() => Actions.refresh({
                           key: 'drawer',
                           showConfirm: false,
                           showBack: true,
                           backScreen: 'roadsideService'
                       })}
                       component={WinchService}
                />
                <Scene key="lockedService"
                       type="replace"
                       renderBackButton={function () {
                           return <Icon size={45} name="Lock" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black'
                           }}/>
                       }}
                       doShow={() => Actions.refresh({
                           key: 'drawer',
                           showConfirm: false,
                           showBack: true,
                           backScreen: 'roadsideService'
                       })}
                       component={LockedService}
                />
                <Scene key="flatTiresService"
                       type="replace"
                       renderBackButton={function () {
                           return <Icon size={45} name="Lock" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black'
                           }}/>
                       }}
                       doShow={() => Actions.refresh({
                           key: 'drawer',
                           showConfirm: false,
                           showBack: true,
                           backScreen: 'roadsideService'
                       })}
                       component={FlatTiresService}
                />
                <Scene key="jumpStartService"
                       type="replace"
                       renderBackButton={function () {
                           return <Icon size={45} name="Lock" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black'
                           }}/>
                       }}
                       doShow={() => Actions.refresh({
                           key: 'drawer',
                           showConfirm: false,
                           showBack: true,
                           backScreen: 'roadsideService'
                       })}
                       component={JumpStartService}
                />
                <Scene key="aboutUs"
                       renderBackButton={function () {
                           return <Icon size={45} name="Lock" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black',
                           }}/>
                       }}
                       doShow={() => Actions.refresh({
                           key: 'drawer',
                           showConfirm: false,
                           showBack: true,
                       })}
                       type="replace"
                       component={AboutUs}
                />
                <Scene key="terms"
                       type="replace"
                       renderBackButton={function () {
                           return <Icon size={45} name="Lock" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black',
                           }}/>
                       }}
                       doShow={() => Actions.refresh({
                           key: 'drawer',
                           showConfirm: false,
                           showBack: true,
                       })}
                       component={Terms}
                />
                <Scene key="personalSettings"
                       type="replace"
                       renderBackButton={function () {
                           return <Icon size={45} name="Settings" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black',
                           }}/>
                       }}
                       doShow={() => Actions.refresh({
                           key: 'drawer',
                           showConfirm: false,
                           showBack: true,
                       })}
                       component={Settings}
                       strings={strings}
                />
                <Scene key="privacyPolicy"
                       type="replace"
                       renderBackButton={function () {
                           return <Icon size={45} name="Lock" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black',
                           }}/>
                       }}
                       doShow={() => Actions.refresh({
                           key: 'drawer',
                           showConfirm: false,
                           showBack: true,
                       })}
                       component={PrivacyPolicy}
                />
                <Scene key="locationsTerms"
                       type="replace"
                       renderBackButton={function () {
                           return <Icon size={45} name="Lock" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black',
                           }}/>
                       }}
                       doShow={() => Actions.refresh({
                           key: 'drawer',
                           showConfirm: false,
                           showBack: true,
                       })}
                       component={LocationsTerms}
                />
                <Scene key="contactUs"
                       type="replace"
                       renderBackButton={function () {
                           return <Icon size={45} name="Lock" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black',
                           }}/>
                       }}
                       doShow={() => Actions.refresh({
                           key: 'drawer',
                           showConfirm: false,
                           showBack: true,
                       })}
                       component={ContactUs}
                />
                <Scene key="signup"
                       renderBackButton={function () {
                           return <Icon size={45} name="Exit" fontSize="2" style={{
                               position: 'absolute',
                               top: -3,
                               left: 2, color: 'black'
                           }}/>
                       }}
                       type="replace"
                       component={SignUpForm}
                       doShow={() => Actions.refresh({key: 'drawer', showConfirm: false, showBack: true})}/>
            </Scene>
        </Scene>

    </Scene>
);

const router = connect()(Router);
/**
 *  main class
 */

export default class App extends Component {
    constructor(props) {
        super();
        this.state = {
            modalOpen: false,
            openLanguageModal: false,
            showBack: false,
            showConfirm: false,
        };
        this.storage = new Storage({
            size: 8000,
            storageBackend: AsyncStorage,
            defaultExpires: 1000 * 3600 * 24,
            enableCache: true,
            sync: {
                // we'll talk about the details later.
            }
        });
    }

    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux navigationBarStyle={{
                    backgroundColor: '#ffffff',
                    borderBottomWidth: 2,
                    borderBottomColor: '#e6e6e6'
                }} scenes={scenes}/>
            </Provider>
        );
    }
}
