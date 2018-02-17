import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';
import Icon from '../assets/svg/svg'
import LayoutStyle from  '../styles/Layout'
import {height} from '../styles/Variables'
import {strings} from '../utilits/localStrings.js'
import * as UserActions from '../constants/actionsUser'
import * as actionsJob from '../constants/actionsJob'
import BackgroundTimer from 'react-native-background-timer';
import API from '../services/api';

const Permissions = require('react-native-permissions');

/**
 * main Side Menu
 */
class DrawerMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
          job: null,
          isApproved: false
        }
        this._onSelect = this._onSelect.bind(this);
        this._onLogout = this._onLogout.bind(this);
        this._isLoggedIn = this._isLoggedIn.bind(this);
        this.sendLocationToServer = this.sendLocationToServer.bind(this);
        this.findAvailableJob = this.findAvailableJob.bind(this);
        this.clearBackgroundInterval = this.clearBackgroundInterval.bind(this);
        this.initBackgroundInterval = this.initBackgroundInterval.bind(this);
    }

    componentWillUnmount () {
      clearTimeout(this.onSelectTimeout);
      this.clearBackgroundInterval()
      // BackgroundTimer.clearInterval(this.backgroundJobInterval);
      // clearInterval(this.locationInterval);
      // clearTimeout(this.backgroundLocationInterval);
    }

    clearBackgroundInterval(){
      BackgroundTimer.clearInterval(this.backgroundJobInterval);
      BackgroundTimer.clearInterval(this.backgroundLocationInterval);
    }

    initBackgroundInterval(){
      this.backgroundJobInterval = BackgroundTimer.setInterval(this.findAvailableJob, 5000)
      this.backgroundLocationInterval = BackgroundTimer.setInterval(this.sendLocationToServer, 5000);
    }

    _onSelect(callback) {
        this.props.close();
        this.onSelectTimeout = setTimeout(callback, 300);
    }

    _onLogout() {
        this.props.close();

        /**
         * clear User from store and storage
         */
        this.props.clearStorageUser(() => Actions['login']());

    }

    componentDidMount(){
      Permissions.requestPermission('location')
      .then(()=>{
        // this.sendLocationToServer();
        this.initBackgroundInterval();
        // this.locationInterval = setInterval(this.sendLocationToServer, 5000);
        // this.backgroundLocationInterval = BackgroundTimer.setInterval(this.sendLocationToServer, 5000);
      }, (res)=>{
        alert(strings["You need to accept location permissions"]);
      })
      .catch((res)=>{
        alert(strings["You need to accept location permissions"]);
      })
    }

    _isLoggedIn() {
        return (this.props.user && this.props.user.user_id);
    }

    componentWillMount(){

    }

    findAvailableJob(){
      if(!this.state.isApproved){
        return;
      }
      navigator.geolocation.getCurrentPosition((position) => {
          position = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
          };
          let data = {
            token: this.props.user.token,
            data: {
              driver_id: this.props.user.driver_id,
              driver_latitude: position.latitude,
              driver_longitude: position.longitude,
              language: 'en'
            }
          }
          API.findJob(data, (result)=>{
            console.log('findJob result', result);
            if(result.error === false){
              this.props.newJob(result.job)
              Actions.jobReceives({
                  findAvailableJob: this.findAvailableJob,
                  clearBackgroundInterval: this.clearBackgroundInterval,
                  initBackgroundInterval: this.initBackgroundInterval});
            }
          })
      },
      (error) => {
          alert(strings['GPS no available.']);
          console.log(error);
      },
      {
          enableHighAccuracy: false,
          timeout: 999999,
          maximumAge: 1000
      });
    }

    componentWillReceiveProps(nextProps){
      if(this.props.job.job !== nextProps.job.job){
        if(nextProps.job.job !== false){
          this.clearBackgroundInterval();
        }else if(nextProps.job.job === false){
          this.initBackgroundInterval();
        }

      }
    }

    sendLocationToServer () {
        navigator.geolocation.getCurrentPosition((position) => {
            position = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            };

            let data = {
                token: this.props.user.token,
                location: {
                    lat: position.latitude,
                    lng: position.longitude
                }
            };
            API.sendLocation(data, (result) => {
              console.log('send location result', result);
                if (typeof result.success !== 'undefined') {
                    this.setState({isApproved: result.success})
                }
            });
        },
        (error) => {
            alert(strings['GPS no available.']);
            console.log(error);
        },
        {
            enableHighAccuracy: false,
            timeout: 999999,
            maximumAge: 1000
        });
    }

    render() {
      console.log('props nav', this.props);
        return (
            <View
                style={[styles.container, this.props.style]}
                onClick={()=>this.props.close()}
            >
                <View style={styles.upperBlock}>
                    {this._isLoggedIn() ?
                        <View style={styles.upperBlockInner}>
                            <Icon name="user"/>
                            <Text style={styles.upperBlockText}>
                                {this.props.user.first_name + ' ' + this.props.user.last_name}
                            </Text>
                        </View>
                        :
                        null
                    }
                </View>
                {this._isLoggedIn() ?
                    <View>
                        <View>
                            <TouchableOpacity
                                style={[LayoutStyle.listItem, styles.menuItem]}
                                onPress={()=> {
                                    this._onSelect(Actions['personalSettings'])
                                }}
                            >
                                <Icon
                                    name="personalSettings"
                                    color="#909090"
                                />
                                <Text style={styles.textMenu}>
                                    {strings["Profile"]}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity
                                style={[LayoutStyle.listItem, styles.menuItem]}
                                onPress={()=> {
                                    this._onSelect(Actions['setupWorkingHours'])
                                }}
                            >
                                <Icon
                                    name="clock"
                                    color="#909090"
                                />
                                <Text style={styles.textMenu}>
                                    {strings["Setup working hours"]}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={[LayoutStyle.listItem, styles.menuItem]}
                                onPress={()=> {
                                    this._onSelect(Actions['rates'])
                                }}
                            >
                                <Icon
                                    name="dollar"
                                    color="#909090"
                                />
                                <Text style={styles.textMenu}>
                                    {strings["Setup rates"]}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={[LayoutStyle.listItem, styles.menuItem]}
                                onPress={()=> {
                                    this._onSelect(Actions['companySettings'])
                                }}
                            >
                                <Icon
                                    name="personalSettings"
                                    color="#909090"
                                />
                                <Text style={styles.textMenu}>
                                    {strings["Company settings"]}
                                    Company settings
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={[LayoutStyle.listItem, styles.menuItem]}
                                onPress={()=> {
                                    this._onSelect(Actions['backgroundCheck'])
                                }}
                            >
                                <Icon
                                    name="terms"
                                    color="#909090"
                                />
                                <Text style={styles.textMenu}>
                                    {strings["Upload documents"]}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={[LayoutStyle.listItem, styles.menuItem]}
                                onPress={()=> {
                                    this._onLogout()
                                }}
                            >
                                <Icon
                                    name="logout"
                                    color="#909090"
                                />
                                <Text style={styles.textMenu}>
                                    {strings["Logout"]}
                                </Text>
                            </TouchableOpacity>
                        </View>




                        {/*<View>*/}
                            {/*<TouchableOpacity*/}
                            {/*style={[LayoutStyle.listItem, styles.menuItem]}*/}
                            {/*onPress={()=> {*/}
                            {/*this._onSelect(Actions['becomePartner'])*/}
                            {/*}}*/}
                            {/*>*/}
                            {/*<Icon*/}
                            {/*name="settings"*/}
                            {/*color="#909090"*/}
                            {/*/>*/}
                            {/*<Text style={styles.textMenu}>*/}
                            {/*Become Partner*/}
                            {/*</Text>*/}
                            {/*</TouchableOpacity>*/}
                        {/*</View>*/}
                        {/*<View>*/}
                        {/*<TouchableOpacity*/}
                        {/*style={[LayoutStyle.listItem, styles.menuItem}*/}
                        {/*onPress={()=> {*/}
                        {/*this._onSelect(Actions['questionnaire'])*/}
                        {/*}}*/}
                        {/*>*/}
                        {/*<Icon*/}
                        {/*name="settings"*/}
                        {/*color="#909090"*/}
                        {/*/>*/}
                        {/*<Text style={styles.textMenu}>*/}
                        {/*Questionnaire*/}
                        {/*</Text>*/}
                        {/*</TouchableOpacity>*/}
                        {/*</View>*/}
                        {/*<View>*/}
                        {/*<TouchableOpacity*/}
                        {/*style={[LayoutStyle.listItem, styles.menuItem}*/}
                        {/*onPress={()=> {*/}
                        {/*this._onSelect(Actions['partnerAgreement'])*/}
                        {/*}}*/}
                        {/*>*/}
                        {/*<Icon*/}
                        {/*name="settings"*/}
                        {/*color="#909090"*/}
                        {/*/>*/}
                        {/*<Text style={styles.textMenu}>*/}
                        {/*Partner agreement*/}
                        {/*</Text>*/}
                        {/*</TouchableOpacity>*/}
                        {/*</View>*/}
                    </View>
                    :
                    <View>
                        <View>
                            <TouchableOpacity
                                style={[LayoutStyle.listItem, styles.menuItem]}
                                onPress={()=> {
                                    this._onSelect(Actions['login'])
                                }}
                            >
                                <View style={{width: 70, alignItems: 'center'}}>
                                    <Icon
                                        name="login"
                                        color="#909090"
                                    />
                                </View>
                                <Text style={styles.textMenu}>
                                    {strings.login}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={[LayoutStyle.listItem, styles.menuItem]}
                                onPress={()=> {
                                    this._onSelect(Actions['signUp'])
                                }}
                            >
                                <View style={{width: 70, alignItems: 'center'}}>
                                    <Icon
                                        name="signUp"
                                        color="#909090"
                                    />
                                </View>
                                <Text style={styles.textMenu}>
                                    {strings.signUp}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        marginTop: 0,
        alignItems: 'stretch',
    },
    upperBlock: {
        height: height * .2,
        backgroundColor: '#c9c9c9',
        borderWidth: 1,
        borderColor: '#c9c9c9',
    },
    upperBlockInner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    upperBlockText: {
        color: "#202020",
        fontSize: 16
    },
    menuItem: {
        borderColor: '#626262',
    },
    textMenu: {
        flex: 1,
        color: '#b9b7b9',
        fontSize: 16
    },
});

export default connect(
    state => ({
        user: state.user,
        job: state.job,
        registration: state.registration
    }),
    dispatch => ({
        clearStorageUser: (callback) => {
            dispatch({type: UserActions.CLEAR_USER, callback});
        },
        newJob: (job) => {
          dispatch({
            type: actionsJob.CHANGE_NEW_JOB,
            job: job
          })
        }
    })
)(DrawerMenu);
