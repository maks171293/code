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
    ScrollView
} from 'react-native';
import LayoutStyle from  '../styles/Layout';
import icoMoonConfig from '../assets/fonts/selection.json';
import {connect} from 'react-redux';
import Button from '../components/Button';
// import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import * as actionsJob from '../constants/actionsJob'
import {Actions} from 'react-native-router-flux';
import API from '../services/api';
import Icon from '../assets/svg/svg';
import BackgroundTimer from 'react-native-background-timer';


//translations
import {strings} from '../utilits/localStrings.js';

const {height, width} = Dimensions.get('window');
// const Icon = createIconSetFromIcoMoon(icoMoonConfig);

class JobReceives extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            daily: true,
            job: this.props.job.job,
            timeToApply: 180,
            isAssepted: false,
            isRejected: false
        };
        this.acceptJob = this.acceptJob.bind(this);
        this.rejectJob = this.rejectJob.bind(this);
    }

    componentDidMount() {
        this.runTimer();
        this.props.cleanJobWithoutAnswer();
        this.props.clearBackgroundInterval();
    }

    componentWillUnmount(){
      clearInterval(this.timer);
      console.log('this.job', this.props.job);
      console.log('is accepted', this.state.isAssepted);
      console.log('is rejected', this.state.isRejected);
      if(!this.state.isAssepted && !this.state.isRejected){
        this.props.newJob(false);
      }
    }

    runTimer() {
        this.timer = setInterval(()=> {
            if (this.state.timeToApply != 0) {
                this.setState({timeToApply: this.state.timeToApply - 5})
            } else {
                alert('time over');
                clearInterval(this.timer);

                let data = {
                    job_id: this.state.job.job_id
                };

                API.setStatusWaiting({data}, function (result) {
                    console.log(result, 'res')
                    setTimeout(Actions.driverGeolocation, 200)
                    this.props.newJob(false);
                }.bind(this));
            }
        }, 5000);
    }

    acceptJob() {
        // release mod
        let data = {
            driver_id : this.props.user.driver_id,
             job_id: this.state.job.job_id
        };

        // test mod
        // let data = {
        //     driver_id: 1,
        //     job_id: this.state.job.job_id
        // };
        this.setState({
          isAssepted: true
        })
        API.acceptJob({data}, function (result) {
            console.log(result, 'res accept job')
            alert(result.message)
            this.acceptTimer = setTimeout(Actions.jobAccepted.bind(this, {findAvailableJob: this.props.findAvailableJob}), 200)
        }.bind(this));
    }

    rejectJob() {
        // release mod
        let data = {
            token: this.props.user.token,
            data: {
              driver_id : this.props.user.driver_id,
              job_id: this.state.job.job_id
            }
        };
        this.setState({
          isRejected: true
        })
        API.rejectJob(data, function (result) {
            console.log(result, 'res reject job')
            this.rejectTimer = setTimeout(Actions.driverGeolocation, 200);
            this.props.newJob(false);
        }.bind(this));
    }

    render() {
        let job = this.state.job;
        console.log('job', job);
        return (
            <View style={[LayoutStyle.container, LayoutStyle.containerFlex, {zIndex: 2000}]}>
                <Text style={[LayoutStyle.h1, (Platform.OS === 'ios') ? {marginTop: 0} : {}]}>
                    {strings["New Job"]}
                </Text>
                <Text style={[LayoutStyle.h1, {marginTop: 10, marginBottom: 15}, (Platform.OS === 'ios') ? {marginTop: 0} : {}]}>
                    {strings["Job information"]}
                </Text>

                <ScrollView style={LayoutStyle.blockWithList} scrollEnabled={true}>
                <View style={[LayoutStyle.listItem, {paddingHorizontal: 20, justifyContent: 'space-between'}]}>
                    <Text style={styles.listItemText}>
                        {strings["Customer name"]}
                    </Text>
                    <Text style={styles.listItemText}>
                        {job.customer_name}
                    </Text>
                </View>
                <View style={[LayoutStyle.listItem, {paddingHorizontal: 20, justifyContent: 'space-between'}]}>
                    <Text style={styles.listItemText}>
                        {strings["Customer phone"]}
                    </Text>
                    <Text style={styles.listItemText}>
                        {job.customer_phone}
                    </Text>
                </View>
                <View style={[LayoutStyle.listItem, {paddingHorizontal: 20, justifyContent: 'space-between'}]}>
                    <Text style={styles.listItemText}>
                        {strings["Vehicle make"]}
                    </Text>
                    <Text style={styles.listItemText}>
                        {job.vehicle}
                    </Text>
                </View>
                <View style={[LayoutStyle.listItem, {paddingHorizontal: 20, justifyContent: 'space-between'}]}>
                    <Text style={styles.listItemText}>
                        {strings["Vehicle model"]}
                    </Text>
                    <Text style={styles.listItemText}>
                        {job.vehicle_model}
                    </Text>
                </View>
                <View style={[LayoutStyle.listItem, {paddingHorizontal: 20, justifyContent: 'space-between'}]}>
                    <Text style={styles.listItemText}>
                        {strings["license plate"]}
                    </Text>
                    <Text style={styles.listItemText}>
                        {job.vehicle_license_plate}
                    </Text>
                </View>
                <View style={[LayoutStyle.listItem, {paddingHorizontal: 20, justifyContent: 'space-between'}]}>
                    <Text style={styles.listItemText}>
                        {strings["Service type"]}
                    </Text>
                    <Text style={styles.listItemText}>
                        {job.service_name}
                    </Text>
                </View>
                <View style={[LayoutStyle.listItem, {paddingHorizontal: 20, justifyContent: 'space-between'}]}>
                    <Text style={styles.listItemText}>
                        {strings["Clarifications to service type"]}
                    </Text>
                    <Text style={styles.listItemText}>
                        {job.service_field_name}
                    </Text>
                </View>
                <View style={[LayoutStyle.listItem, {paddingHorizontal: 20, justifyContent: 'space-between'}]}>
                    <Text style={styles.listItemText}>
                        {strings["Distance to customer"]}
                    </Text>
                    <Text style={styles.listItemText}>
                        {job.distance}
                    </Text>
                </View>
                </ScrollView>
                {
                //   <View style={[styles.waitingToApply, {zIndex: 12, overflow: 'visible', marginBottom: -8}]}>
                //     <View style={{
                //         position: 'absolute',
                //         top: 0,
                //         left: 0,
                //         zIndex: 10
                //     }}>
                //         <Icon name="timer" style={{width: 80, height: 80, zIndex: 12}}/>
                //     </View>
                //     <Text style={{fontSize: 20, backgroundColor: 'transparent', zIndex: 13}}>
                //         {isNaN(this.state.timeToApply) ?
                //             this.state.timeToApply
                //         :
                //             (this.state.timeToApply).toFixed()
                //         }
                //     </Text>
                //     <Text style={{fontSize: 16, backgroundColor: 'transparent', zIndex: 13}}>{strings["sec"]}</Text>
                // </View>

                // <View style={{flexDirection: 'column', marginTop: 10, width: width - 40}}>
                //     <TouchableOpacity
                //         style={[styles.bubble, styles.button]}
                //         onPress={() => this.rejectJob()}>
                //         <Text style={styles.continueBtn}>{strings["Reject"]}</Text>
                //     </TouchableOpacity>
                //     <TouchableOpacity
                //         style={[styles.bubble, styles.button]}
                //         onPress={ () => this.acceptJob()}>
                //         <Text style={styles.continueBtn}>{strings["Accept"]}</Text>
                //     </TouchableOpacity>
                // </View>
              }
              <View style={{marginTop: 70}} >
                <Button
                  onPress={() => this.rejectJob()}
                  text={strings["Reject"]}
                  type2={true}
                  style={{marginVertical: 10}}
                  />
                <Button
                  onPress={()=>this.acceptJob()}
                  text={strings["Accept"]}
                  style={{marginBottom: 20}}
                />
                </View>
            </View>
        );
    }
}

export default connect(
    state => ({
        job: state.job,
        user: state.user
    }),
    dispatch => ({
        jobWithoutAnswer: (jobId) => {
            dispatch({
                type: actionsJob.CHANGE_JOB_WITHOUT_ANSWER,
                jobId: jobId,
            });
        },
        cleanJobWithoutAnswer: () => {
            dispatch({
                type: actionsJob.CLEAN_JOB_WITHOUT_ANSWER,
            });
        },
        newJob: (job) => {
          dispatch({
            type: actionsJob.CHANGE_NEW_JOB,
            job: job
          })
        }
    })
)(JobReceives);

const styles = StyleSheet.create({
    textLeft: {
        width: width / 2 - 20,
        fontSize: 16
    },
    textRight: {
        width: width / 2 - 20,
        fontSize: 16,
        textAlign: 'right'
    },
    textRow: {
        flexDirection: 'row',
        marginTop: 15,
        width: width - 40
    },
    button: {
        paddingHorizontal: 12,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        zIndex: 12,
        bottom: 50,
    },
    buttonEditDetailsContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
        bottom: 110,
    },
    continueBtn: {
        color: 'gray',
        fontSize: 16,
        fontWeight: '600',
    },
    bubble: {
        width: 150,
        borderColor: 'gray',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 5,
        borderWidth: 0.7,
    },
    waitingToApply: {
        top: 0,
        overflow: 'visible',
        left: width/2-40,
        height: 80,
        width: 80,
        zIndex: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
