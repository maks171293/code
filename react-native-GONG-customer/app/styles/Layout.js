import {StyleSheet, Text, View, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    scrollContainer: {
        flex: 1,
        marginTop: 40,

    },
    containerTextCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputContainer: {
        margin: 0,
        borderWidth: 1,
        paddingLeft: 5,
        borderColor: 'gray',
        borderRadius: 5,
        height: 40,
        padding: 0,
        paddingRight: 3,
        paddingBottom: 0,
        marginBottom: 0,
    },
    textInput: {
        width: 200,
        fontSize: 14,
        backgroundColor: 'white',
        height: 37,
        borderRadius: 5,
        margin: 0,
        marginBottom: 0,
        paddingLeft: 3,
        color: '#949494'

    },
    title: {
        color: '#d20d1c',
        fontSize: 16,
        fontWeight: '600',

    },
    subTitle: {
        color: 'black',
        fontSize: 14,

    },
    notes: {
        fontSize: 8,
        color: '#949494'

    },
    btn: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderColor: '#575757',
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 10
    },
    btnText: {
        color: '#181818',
        fontSize: 16,
        fontWeight: '600',
    },
    formField: {
        flex: 1,
        width: 70,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formColumn: {
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    errorText: {
        color: 'red',
        textAlign: 'center'
    },
    successText: {
        color: 'green',
        textAlign: 'center'
    },

    footerBarBlock: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        height: 50,
        backgroundColor: '#ebebeb',
        borderTopColor: '#d0d0d0',
        borderTopWidth: 1
    },
    footerLeftBlock: {
        width: 55,
        top: 16
    },
    footerRightBlock: {
        width: width - 40,
        top: 16
    },
    footerLeftArrow: {
        width: 9,
        height: 16,
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 30
    },
    footerRightArrow: {
        width: 9,
        height: 16,
        left: width - 90,
        position: 'absolute',
        top: 1,
        zIndex: 30
    },
    footerBack: {
        left: 16,
        fontWeight: '500',
        fontSize: 15,
        top: -3,
        color: '#1f1f1f'
    },
    footerConfirm: {
        left: width - 155,
        fontWeight: '500',
        fontSize: 16,
        top: -3,
        color: '#d20d1c'
    },
    containerFlex: {
        justifyContent: 'flex-start',
        marginTop: 70
    },
    demandView: {
        borderWidth: 0.7,
        borderRadius: 5,
        height: 40,
        borderColor: 'gray',
        backgroundColor: 'rgb(255, 255, 255)',
        width: 320
    },
    demandInput: {
        fontSize: 12,
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 0,
        marginLeft: 5,
        marginBottom: 0,
        paddingLeft: 50,
        paddingRight: 1,
        paddingBottom: 2,
        color: '#424242',
        height: 30,
        width: 280
    },
    amountInput: {
        fontSize: 12,
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 0,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 0,
        paddingLeft: 2,
        paddingRight: 2,
        paddingBottom: 2,
        paddingTop: 0,
        color: '#424242',
        height: 20,
        width: 30,
        textAlign: 'right'
    },
    demandPosition: {
        width: 17,
        height: 22,
        position: 'absolute',
        left: 20,
        top: 8,
        zIndex: 30
    },
    demandCheck: {
        width: 20,
        height: 15,
        position: 'absolute',
        right: 15,
        top: 12,
        zIndex: 30,
    },
    demandService: {
        width: width,
        borderColor: '#d0d0d0',
        borderBottomWidth: 1,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contactUsText: {
        width: width,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    demandServiceIcon: {
        position: 'absolute',
        top: 2,
        left: 13,
        color: 'black'
    },
    fontColor: {
        color: '#424242'
    },
    fontSize12: {
        fontSize: 12
    },
    demandDescription: {
        height: 130,
        backgroundColor: '#ebebeb',
        borderColor: '#d0d0d0',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
    },
    fuelDescription: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: 'rgba(239, 239, 239, 0.82)'
    },
    demandBubble: {
        width: 130,
        borderColor: '#424242',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 5,
        borderWidth: 0.7,
        marginTop: 10,
        marginBottom: 5,
    },
    demandButton: {
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    demandContinue: {
        color: '#424242',
        fontSize: 13,
        fontWeight: '600'
    },
    fuelTitle: {
        fontSize: 18,
        color: '#d20d1c',
        marginBottom: 10,
        marginTop: -10
    },
    aboutUsText: {
        fontSize: 14,
        color: '#424242',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    titlePolicy: {
        fontSize: 14,
        color: '#424242',
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        fontWeight: '600',
    },
    textPolicy: {
        fontSize: 14,
        color: '#424242',
        paddingHorizontal: 10,
    },
    textTerms: {
        fontSize: 14,
        color: '#424242',
        paddingHorizontal: 20
    },
    fuelKindTitle: {
        height: 70,
        width: width,
        borderColor: '#d0d0d0',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fuelText: {
        fontSize: 16,
        color: '#424242'
    },
    selectBackground: {
        backgroundColor: '#ebebeb'
    },
    serviceTitleList: {
        position: 'absolute',
        top: height / 2 + 33,
        width: width,
        height: 250,
        borderColor: '#d0d0d0',
        borderTopWidth: 1,
        flexDirection: 'row',
        paddingTop: 8,
    },
    serviceRightTitle: {
        position: 'absolute',
        right: 20,
        fontSize: 16,
        color: '#424242',
    },
    destinationSwitch: {
        position: 'absolute',
        right: 15
    },
    serviceLeftTitle: {
        left: 20,
        fontSize: 16,
        color: '#424242',
    },
    serviceTitleListTwo: {
        position: 'absolute',
        top: height / 2 + 73,
        width: width,
        height: 40,
        borderColor: '#d0d0d0',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingTop: 8,
    },
    serviceTitleListThree: {
        position: 'absolute',
        top: height / 2 + 113,
        width: width,
        height: 40,
        borderColor: '#d0d0d0',
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingTop: 8,
    },
    destinationImageOne: {
        width: 17,
        height: 22,
        position: 'absolute',
        left: 20,
        top: 8,
        zIndex: 30
    },
    destinationImageTwo: {
        width: 20,
        height: 15,
        position: 'absolute',
        right: 15,
        top: 12,
        zIndex: 30,
    },
    servicesMapView: {
        ...StyleSheet.absoluteFillObject,
        maxHeight: height / 2 - 20,
        left: -20,
    },
    serviceMap: {
        position: 'absolute',
        width: width,
        top: 60,
        bottom: 0,
        zIndex: 10,
    },
    marker: {
        position: 'absolute',
        top: 40
    },
    addressContainer: {
        top: height / 2 - 90,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.7)',
        width: width,
        height: 60,
        paddingHorizontal: 20,
        zIndex: 15
    },
    distanceText: {
        position: 'absolute',
        borderColor: '#4285f4',
        textAlign: 'right',
        borderWidth: 1,
        right: 0,
        top: height / 2 - 65,
        zIndex: 40,
        marginTop: 5,
        width: 70,
        color: 'red'
    },
    buildRouteBtn: {
        position: 'absolute',
        right: 0,
        top: height / 2 - 100,
        borderColor: '#4285f4',
        borderWidth: 1,
        borderRadius: 50,
        zIndex: 40,
        marginTop: 5, width: 50, height: 50, backgroundColor: '#4285f4'
    },
    icoRoute: {
        position: 'absolute',
        top: 9,
        left: 9,
        color: 'white',
    }
});
