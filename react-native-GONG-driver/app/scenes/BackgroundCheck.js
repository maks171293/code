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
    Modal,
} from 'react-native';
import Button from '../components/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import API from '../services/api';
import {Actions} from 'react-native-router-flux';
import PopupDialog from 'react-native-popup-dialog';

import {connect} from 'react-redux';
import {width} from "../styles/Variables";
import LayoutStyle from  '../styles/Layout';
import ImagePicker from 'react-native-image-crop-picker';
import * as RouteActions from '../constants/actionsRoute'
import * as RegistrationActions from '../constants/actionsRegistration'

//translations
import {strings} from '../utilits/localStrings.js';

const RNFS = require('react-native-fs');

class BackgroundCheck extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSubmitAllowed: false,
            photoGallery: [],
            photoGalleryAlreadySent: [],
            isLoaderVisible: false,
        };

        this.submit = this.submit.bind(this);
    }

    componentWillMount () {
        if (this.props.registration['backgroundCheckFields']) {
            this.setState({photoGalleryAlreadySent: this.props.registration['backgroundCheckFields']});
            if (this.props.registration['backgroundCheckFields'].length) {
                this.setState({isSubmitAllowed: true});
            }
        }

    }

    componentDidMount () {
        // setTimeout(()=>{


        if (this.props.registrationProcess) {
            this.props.changeBackButton(
                this.props.route.history[this.props.route.history.length - 2].scene,
                {
                    service: {id: 7},
                    registrationProcess: this.props.registrationProcess
                }
            );
        }

            // let data = {
            //     token: this.props.user.token
            // };

            // API.getDocumentPhoto(data, (response) => {

            //     // console.log(response);
            // })

        // }, 0);
    }

    submit () {

        // if (!this.state.isSubmitAllowed) {
        //     alert('You need to add at least one photo')
        //     return;
        // }

        this.setState({isLoaderVisible: true});


        this.props.setSignUpFields([...this.state.photoGalleryAlreadySent, ...this.state.photoGallery]);


        async function getEncodeImages() {
            let tempArr = [];

            this.state.photoGallery.forEach(filePath => {
                tempArr.push(RNFS.readFile(filePath, "base64"));
            });

            return await Promise.all(tempArr);
        }

        getEncodeImages.apply(this).then(resultArr => {

            const data = {
                token: this.props.user.token,
                photos: resultArr
            };
            // console.log('resarr', resultArr);
            // console.log('data', data);

            API.setDocumentPhoto(data, (result) => {
                // console.log(result, 'send_photo_result');
                this.setState({
                  isLoaderVisible: false
                });

                if (this.props.registrationProcess) {
                    Actions['partnerAgreement']({registrationProcess: this.props.registrationProcess});
                } else {
                    this.popupDialog.show();
                    // Actions['driverGeolocation']();
                }
            });
        });
    }

    takePhoto() {
        // alert('take photo begin');
        ImagePicker.openCamera({
            // width: 300,
            // height: 400,
            // multiple: true,
            mediaType: 'photo',
        }).then(image => {
            // alert('take photo then begin');
            this.setState({
                isSubmitAllowed: true,
                photoGallery: this.state.photoGallery.concat(image.path)
            });
            // alert('take photo then end');
        }).catch(err => {
            // alert('take photo error');
            switch(err.code) {
                case "E_PICKER_CANCELLED":
                    // alert('take photo E_PICKER_CANCELLED');
                    break;
                case "E_NO_IMAGE_DATA_FOUND":
                    alert(err.toString()+'.\nTry to load another image');
                    break;
                default:
                    alert(err,toString);
            }
        });

    }

    chooseFromGallery() {
        // alert('choose photo begin');
        ImagePicker.openPicker({
            // width: 300,
            // height: 400,
            multiple: true,
            mediaType: 'photo',
        }).then(imagesArr => {
            // alert('choose photo then begin');

            let tempArr = imagesArr.map(image => image.path );

            //Check if there is equal images
            let isRepeatedImages = false;
            this.state.photoGallery.forEach((item) => {
                for (let i = 0; i <= tempArr.length; i++) {
                    if (item == tempArr[i]) {
                        tempArr.splice(i--, 1);
                        isRepeatedImages = true;
                    }
                }
            });
            // alert('choose photo then middle');

            tempArr = this.state.photoGallery.concat(tempArr);

            this.setState({
                isSubmitAllowed: true,
                photoGallery: tempArr
            });
            // alert('choose photo then after setstate');

            if (isRepeatedImages) {
                alert(strings['Some images were already uploaded earlier']);
            }
            // alert('choose photo then end');

        }).catch(err => {
            // alert('choose photo error begin');
            switch(err.code) {
                case "E_PICKER_CANCELLED":
                    // alert(strings['chose photo E_PICKER_CANCELLED']);
                    break;
                case "E_NO_IMAGE_DATA_FOUND":
                    alert(err.toString()+'.\nTry to load another image');
                    break;
                default:
                    alert(err.toString());
            }
        });
    }

    removeImageFromGallery (item) {
        let tempArr = [...this.state.photoGallery];
        for (let i = 0; i <= tempArr.length; i++) {
            if (tempArr[i] === item) {
                tempArr.splice(i, 1);
                break;
            }
        }
        if (!tempArr.length) {
            this.setState({isSubmitAllowed: false});
        }
        this.setState({photoGallery: tempArr});
    }

    render() {
      console.log('state', this.state);

        return (
            <View style={{flex: 1}}>
                <KeyboardAwareScrollView
                    style={LayoutStyle.contentContainer}
                >
                    <View style={{flex: 1}}>

                        <Text style={LayoutStyle.h1}>
                            {strings["Background check"]}
                        </Text>

                        <View style={{marginBottom: 20, padding: 10}}>
                            <Text style={{color: '#242424'}}>
                                {strings["If you have your documents already scanned, please send them to admin@gong.com. If you have papers, you can take photos and add them to the system by clicking button below."]}
                            </Text>
                        </View>

                        <View style={{flex: 1}}>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                {this.state.photoGalleryAlreadySent.map((item) => (
                                    <View
                                        key={item}
                                        style={styles.imageWrapper}
                                    >
                                        <Image
                                            source={{uri: item}}
                                            style={styles.imagePreview}
                                            resizeMode={'contain'}
                                        />
                                    </View>
                                ))}
                                {this.state.photoGallery.map((item) => (
                                    <View
                                        key={item}
                                        style={styles.imageWrapper}
                                    >
                                        <Image
                                            source={{uri: item}}
                                            style={styles.imagePreview}
                                            resizeMode={'contain'}
                                        />

                                        <TouchableOpacity
                                            style={styles.removeBtnWrapper}
                                            onPress={this.removeImageFromGallery.bind(this, item)}
                                        >
                                            <Text style={styles.removeBtnText}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </View>
                        </View>

                    </View>
                </KeyboardAwareScrollView>

                <Button
                    onPress={this.takePhoto.bind(this)}
                    text={strings["Take photo"]}
                    type2
                    style={{marginVertical: 5}}
                />

                <Button
                    onPress={this.chooseFromGallery.bind(this)}
                    text={strings["Choose from library"]}
                    type2
                    style={{marginVertical: 5}}
                />

                <Button
                    onPress={this.submit}
                    text={strings["Send"]}
                    style={[{marginTop: 5, marginBottom: 10}]}
                />

                <OrientationLoadingOverlay
                    visible={this.state.isLoaderVisible}
                    color="white"
                    indicatorSize="large"
                    messageFontSize={24}
                />
                <PopupDialog
                    dialogTitle={null}
                    width={width - 20}
                    height={100}
                    dismissOnTouchOutside={false}
                    dialogStyle={styles.dialogWrapper}
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                >
                    <View style={{flex:1, justifyContent: 'center', paddingLeft: 10, paddingRight: 10,  alignItems: 'center', marginTop:10}}>
                        <Text style={{fontSize: 14, textAlign: 'center'}}>{strings["Your documents was successfully sent to GONG administrator."]}</Text>
                    </View>
                    <Button
                        onPress={()=>{
                          Actions['driverGeolocation']();
                        }}
                        //onPress={()=>{}}
                        text={strings["Confirm"]}
                        style={{marginVertical: 10}}
                    />
                </PopupDialog>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    removeBtnWrapper: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 40,
        height: 40,
        backgroundColor: '#bbb',
        justifyContent: 'center',
        alignItems: 'center'
    },
    removeBtnText: {
        transform: [{ rotate: '45deg'}],
        fontSize: 35,
        lineHeight: 35,
        backgroundColor: 'transparent',
        // backgroundColor: 'red',
        color: '#fff',
    },
    imagePreview: {
        flex: 1,
        backgroundColor: '#ddd',
    },
    imageWrapper: {
        width: width/2 - 30,
        height: width/2 - 30,
        margin: 10,
        justifyContent: 'center',
    },
    dialogWrapper: {
        // zIndex: 300,
        padding: 0,
        marginTop: -35
    },
});

export default connect(
    state => ( {
        registration: state.registration,
        route: state.routes,
        user: state.user,
    }),
    dispatch => ({
        setSignUpFields: (data) => {
            dispatch({type: RegistrationActions.UPDATE_PAGE_FIELDS, page: 'backgroundCheckFields', data});
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
        // }
    })
)
(BackgroundCheck);
