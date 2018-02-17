import {Platform, StyleSheet,} from "react-native";
import {height, width, menuHeight} from "./Variables";

export default LayoutStyle = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginTop: 40,
    // },
    // scrollContainer: {
    //     flex: 1,
    //     marginTop: 40,
    //
    // },
    // containerTextCenter: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // textInputContainer: {
    //     margin: 0,
    //     borderWidth: 1,
    //     paddingLeft: 5,
    //     borderColor: 'gray',
    //     borderRadius: 5,
    //     height: 40,
    //     padding: 0,
    //     paddingRight: 3,
    //     paddingBottom: 0,
    //     marginBottom: 0,
    // },
    // textInput: {
    //     width: 200,
    //     fontSize: 14,
    //     backgroundColor: 'white',
    //     height: 37,
    //     borderRadius: 5,
    //     margin: 0,
    //     marginBottom: 0,
    //     paddingLeft: 3,
    //     color: '#949494',
    //     borderWidth: 1,
    //     borderColor: '#a7a7a7',
    // },
    // title: {
    //     color: '#d20d1c',
    //     fontSize: 16,
    //     fontWeight: '600',
    // },
    // subTitle: {
    //     color: 'black',
    //     fontSize: 14,
    // },
    // notes: {
    //     fontSize: 8,
    //     color: '#949494'
    // },
    // btn: {
    //
    //     paddingHorizontal: 15,
    //     borderColor: '#575757',
    //     borderWidth: 1,
    //     borderRadius: 4,
    //
    // },
    // btnText: {
    //     color: '#181818',
    //     fontSize: 16,
    //     fontWeight: '600',
    // },
    // formField: {
    //     flex: 1,
    //     width: 70,
    //     paddingTop: 10,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // ratesTitle: {
    //     fontSize: 16,
    //     textAlign: 'center',
    // },
    // footerBarBlock: {
    //     flexDirection: 'row',
    //     paddingHorizontal: 15,
    //     height: 50,
    //     backgroundColor: '#ebebeb',
    //     borderTopColor: '#d0d0d0',
    //     borderTopWidth: 1
    // },
    // radio: {
    //     paddingTop: 10,
    //     flexDirection: 'row',
    //     marginBottom: 5,
    //     paddingVertical: 5,
    //     paddingHorizontal: 15,
    // },
    // footerLeftBlock: {
    //     width: 55,
    //     top: 16
    // },
    // footerRightBlock: {
    //     width: width - 40,
    //     top: 16
    // },
    // footerLeftArrow: {
    //     width: 9,
    //     height: 16,
    //     position: 'absolute',
    //     left: 0,
    //     top: 0,
    //     zIndex: 30
    // },
    // footerRightArrow: {
    //     width: 9,
    //     height: 16,
    //     left: width - 90,
    //     position: 'absolute',
    //     top: 1,
    //     zIndex: 30
    // },
    // footerBack: {
    //     left: 16,
    //     fontWeight: '500',
    //     fontSize: 15,
    //     top: -3,
    //     color: '#1f1f1f'
    // },
    // ratesContainer: {
    //     justifyContent: 'flex-start',
    //     marginTop: 70,
    //     paddingLeft: 10
    // },
    // ratesDescriptionBlock: {
    //     marginTop: 20,
    //     marginBottom: 30
    // },
    // ratesForm: {
    //     flexDirection: 'row',
    //     alignItems: 'flex-start',
    //     justifyContent: 'flex-start',
    // },
    // ratesDescription: {
    //     textAlign: 'left',
    //     fontSize: 13
    // },
    // ratesErrorText: {
    //     textAlign: 'left',
    //     fontSize: 12,
    //     color: 'red'
    // },
    // footerConfirm: {
    //     left: width - 155,
    //     fontWeight: '500',
    //     fontSize: 16,
    //     top: -3,
    //     color: '#d20d1c'
    // },
    // containerFlex: {
    //     justifyContent: 'flex-start',
    //     marginTop: 70
    // },
    // demandView: {
    //     borderRadius: 5,
    //     height: 40,
    //     backgroundColor: 'rgb(255, 255, 255)',
    //     width: 340,
    //     borderWidth: 1,
    //     borderColor: '#a7a7a7',
    // },
    // activateView: {
    //     borderWidth: 0.7,
    //     borderRadius: 5,
    //     height: 40,
    //     borderColor: 'gray',
    //     backgroundColor: 'rgb(255, 255, 255)',
    //     width: 320,
    //     marginTop: 20
    // },
    // demandInput: {
    //     fontSize: 14,
    //     backgroundColor: 'white',
    //     borderRadius: 5,
    //     margin: 0,
    //     marginLeft: 5,
    //     marginBottom: 0,
    //     marginTop: (Platform.OS === 'ios') ? 10 : 0,
    //     height: (Platform.OS === 'ios') ? 20 : 30,
    //     paddingLeft: Platform.OS === 'ios' ? 50 : 30,
    //     paddingRight: Platform.OS === 'ios' ? 1 : 21,
    //     paddingBottom: 2,
    //     color: '#949494',
    //     width: 280,
    //     borderWidth: 1,
    //     borderColor: '#a7a7a7',
    // },
    // activateInput: {
    //     fontSize: 12,
    //     backgroundColor: 'white',
    //     borderRadius: 5,
    //     margin: 0,
    //     marginLeft: 5,
    //     marginBottom: 0,
    //     paddingLeft: 10,
    //     paddingRight: 10,
    //     paddingBottom: 2,
    //     color: '#424242',
    //     height: 30,
    //     width: 310
    // },
    // demandPosition: {
    //     width: 17,
    //     height: 22,
    //     position: 'absolute',
    //     left: 20,
    //     top: 8,
    //     zIndex: 30
    // },
    // demandCheck: {
    //     width: 20,
    //     height: 15,
    //     position: 'absolute',
    //     right: 15,
    //     top: 12,
    //     zIndex: 30,
    // },
    // selectBackground: {
    //     backgroundColor: '#ebebeb'
    // },
    // fuelTitle: {
    //     fontSize: 18,
    //     color: '#d20d1c',
    //     marginBottom: 10,
    //     marginTop: (Platform.OS === 'ios') ? -10 : 0
    // },
    // h3grey: {
    //     fontSize: 14,
    //     color: 'gray',
    //     marginBottom: 10,
    //     marginTop: (Platform.OS === 'ios') ? -10 : 0
    // },
    // demandService: {
    //     width: width,
    //     borderColor: '#d0d0d0',
    //     borderBottomWidth: 1,
    //     height: 45,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // demandServiceIcon: {
    //     position: 'absolute',
    //     top: 2,
    //     left: 13,
    //     color: 'black'
    // },
    // fontColor: {
    //     color: '#424242'
    // },
    // fontSize12: {
    //     fontSize: 12
    // },
    // demandDescription: {
    //     height: 130,
    //     backgroundColor: '#ebebeb',
    //     borderColor: '#d0d0d0',
    //     borderBottomWidth: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     paddingVertical: 6,
    // },
    // demandBubble: {
    //     width: 130,
    //     borderColor: '#424242',
    //     paddingHorizontal: 14,
    //     paddingVertical: 6,
    //     borderRadius: 5,
    //     borderWidth: 0.7,
    //     marginTop: 10,
    //     marginBottom: 5,
    // },
    // demandButton: {
    //     paddingHorizontal: 12,
    //     alignItems: 'center',
    //     marginHorizontal: 10,
    // },
    // demandContinue: {
    //     color: '#424242',
    //     fontSize: 13,
    //     fontWeight: '600'
    // },
    // textPolicy: {
    //     fontSize: 14,
    //     color: '#242424',
    //     paddingHorizontal: 10,
    // },
    // inputView: {
    //     borderBottomWidth: 1.5,
    //     borderTopWidth: 1.5,
    //     borderColor: '#e6e6e6',
    //     height: 50,
    //     width: width,
    // },
    // inputViewSecond: {
    //     borderBottomWidth: 1.5,
    //     borderColor: '#e6e6e6',
    //     height: 45,
    //     width: width,
    // },
    // iconInput:{
    //     position: 'absolute',
    //     left: width/10,
    //     zIndex: 10,
    //     marginTop: 2,
    // },
    // inputField:{
    //     paddingLeft: width / 4,
    //     width: width-width/4,
    //     fontSize: 16,
    //     marginTop: 7,
    //     paddingTop: 3,
    //     backgroundColor: 'white',
    //     height: 37,
    //     color: '#949494'
    // },
    // inputFieldSecond:{
    //     paddingLeft: width / 5,
    //     width: width - width / 5,
    //     fontSize: 14,
    //     backgroundColor: 'white',
    //     height: 35,
    //     color: '#949494'
    // },
    // inputSecond: {
    //     marginTop: 10,
    //     flex: 1,
    //     width: 70,
    //     paddingTop: 10,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    // newDemandBubble: {
    //     width: width - 20,
    //     borderColor: '#d42127',
    //     backgroundColor: '#d42027',
    //     paddingHorizontal: 14,
    //     paddingVertical: 8,
    //     borderRadius: 5,
    //     borderWidth: 0.7,
    //     marginTop: 10,
    //     marginBottom: 20,
    // },
    // newDemandButton: {
    //     paddingHorizontal: 8,
    //     alignItems: 'center',
    //     marginHorizontal: 6,
    // },
    // newDemandContinue: {
    //     color: 'white',
    //     fontSize: 16,
    //     fontWeight: '400'
    // },
    // pointInput: {
    //     width: 14,
    //     height: 14,
    //     position: 'absolute',
    //     // left: 30,
    //     // top: 13,
    //     // zIndex: 30
    // },
    // rightServiceIcon: {
    //     position: 'absolute',
    //     top: 12,
    //     right: 20,
    //     width: 20,
    //     height: 20
    // },
    // listItemSelected: {
    //     backgroundColor: '#ebebeb'
    // },
    // autocompleteContainer: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     padding:10,
    //     backgroundColor: 'rgba(255, 255, 255, .7)',
    // },
    // mapView: {
    //     flex: 1,
    //     marginBottom: -25,
    //     //zIndex: 0,
    // },
    // destinationImageTwo: {
    //     width: 20,
    //     height: 16,
    //     position: 'absolute',
    //     // right: 15,
    //     // top: 12,
    //     // zIndex: 30,
    // },

    /**
     * Layout
     */
    appContainer: {
        //because of borderTop, we need to do marginTop lower
        marginTop: (Platform.OS === 'ios') ? 19 : -1,
        borderTopWidth: 1,
        borderTopColor: '#e6e6e6',
        overflow: 'hidden',
    },
    contentContainer: {
        flex:1,
        marginTop: menuHeight,
    },
    scrollViewContentContainer: {
        minHeight: height,
        justifyContent: 'space-between'
    },
    blockWithList: {
        borderTopWidth: 1,
        borderColor: '#dcdcdc'
    },
    listItem: {
        flexDirection: 'row',
        minHeight: 45,
        paddingVertical: 0,
        alignItems: 'center',
        borderColor: '#dcdcdc',
        borderBottomWidth: 1,
    },
    listItemIconWrapper: {
        width: 70,
        alignItems: 'center',
    },
    dropList: {
        height: (Platform.OS === 'ios') ? 220 : 150,
        backgroundColor: '#ebebeb',
    },


    /**
     * Text
     */
    h1: {
        fontSize: 18,
        color: '#d20d1c',
        marginVertical: 20,
        textAlign: 'center'
    },
    fontColor: {
        color: '#424242'
    },
    aboutUsText: {
        fontSize: 14,
        color: '#424242',
        textAlign: 'justify'
    },
    successText: {
        color: 'green',
        textAlign: 'center'
    },
    errorText: {
        lineHeight: 20,
        color: 'red',
        textAlign: 'center'
    },
    listItemText: {
        backgroundColor: 'transparent',
        flex: 1,
        fontSize: 14,
        paddingVertical: 0,
        paddingHorizontal: 0,
        color: '#949494',
        textAlignVertical: 'center',
        ...Platform.select({android: {alignSelf: 'stretch'}}),
    },
    waitingDriverDiagram: {
        position: 'absolute',
        top: -65,
        left: width/2-40,
        height: 80,
        width: 80,
        zIndex: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
