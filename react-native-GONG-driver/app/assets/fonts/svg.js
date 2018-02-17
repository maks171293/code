import React, {Component} from 'react';
import {StyleSheet, Image,} from 'react-native';
import Svg, {
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

export default class CarsLogo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.car) {
            case 'AUDI':
                return (
                    <Image source={require('../images/car_brands/AUDI.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'ALFA':
                return (
                    <Image source={require('../images/car_brands/ALFA.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'ASTON':
                return (
                    <Image source={require('../images/car_brands/ASTON.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'AVANTI':
                return (
                    <Image source={require('../images/car_brands/AVANTI.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'BENTL':
                return (
                    <Image source={require('../images/car_brands/BENTL.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'BMW':
                return (
                    <Image source={require('../images/car_brands/BMW.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'BUICK':
                return (
                    <Image source={require('../images/car_brands/BUICK.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'CAD':
                return (
                    <Image source={require('../images/car_brands/CAD.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'CHEV':
                return (
                    <Image source={require('../images/car_brands/CHEV.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'CHRY':
                return (
                    <Image source={require('../images/car_brands/CHRY.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'DAEW':
                return (
                    <Image source={require('../images/car_brands/DAEW.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'DAIHAT':
                return (
                    <Image source={require('../images/car_brands/DAIHAT.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'DODGE':
                return (
                    <Image source={require('../images/car_brands/DODGE.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'DELOREAN':
                return (
                    <Image source={require('../images/car_brands/DELOREAN.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'FREIGHT':
                return (
                    <Image source={require('../images/car_brands/FREIGHT.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'GEO':
                return (
                    <Image source={require('../images/car_brands/GEO.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'FER':
                return (
                    <Image source={require('../images/car_brands/FER.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'FIAT':
                return (
                    <Image source={require('../images/car_brands/FIAT.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'FORD':
                return (
                    <Image source={require('../images/car_brands/FORD.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'HONDA':
                return (
                    <Image source={require('../images/car_brands/HONDA.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'HYUND':
                return (
                    <Image source={require('../images/car_brands/HYUND.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'INFIN':
                return (
                    <Image source={require('../images/car_brands/INFIN.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'JEEP':
                return (
                    <Image source={require('../images/car_brands/JEEP.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'KIA':
                return (
                    <Image source={require('../images/car_brands/KIA.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'LAM':
                return (
                    <Image source={require('../images/car_brands/LAM.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'ROV':
                return (
                    <Image source={require('../images/car_brands/ROV.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'LEXUS':
                return (
                    <Image source={require('../images/car_brands/LEXUS.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'LOTUS':
                return (
                    <Image source={require('../images/car_brands/LOTUS.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'MAS':
                return (
                    <Image source={require('../images/car_brands/MAS.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'MB':
                return (
                    <Image source={require('../images/car_brands/MB.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'MINI':
                return (
                    <Image source={require('../images/car_brands/MINI.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'MIT':
                return (
                    <Image source={require('../images/car_brands/MIT.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'MAZDA':
                return (
                    <Image source={require('../images/car_brands/MAZDA.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'NISSAN':
                return (
                    <Image source={require('../images/car_brands/NISSAN.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'LAN':
                return (
                    <Image source={require('../images/car_brands/LAN.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'SUB':
                return (
                    <Image source={require('../images/car_brands/SUB.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'TOYOTA':
                return (
                    <Image source={require('../images/car_brands/TOYOTA.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'VOLKS':
                return (
                    <Image source={require('../images/car_brands/VOLKS.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'AMC':
                return (
                    <Image source={require('../images/car_brands/AMC.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'DATSUN':
                return (
                    <Image source={require('../images/car_brands/DATSUN.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'EAGLE':
                return (
                    <Image source={require('../images/car_brands/EAGLE.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'FISK':
                return (
                    <Image source={require('../images/car_brands/FISK.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'ISU':
                return (
                    <Image source={require('../images/car_brands/ISU.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'AMGEN':
                return (
                    <Image source={require('../images/car_brands/AMGEN.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'JAG':
                return (
                    <Image source={require('../images/car_brands/JAG.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'LINC':
                return (
                    <Image source={require('../images/car_brands/LINC.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'MAYBACH':
                return (
                    <Image source={require('../images/car_brands/MAYBACH.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'GMC':
                return (
                    <Image source={require('../images/car_brands/GMC.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'MCLAREN':
                return (
                    <Image source={require('../images/car_brands/MCLAREN.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'MERC':
                return (
                    <Image source={require('../images/car_brands/MERC.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'MERKUR':
                return (
                    <Image source={require('../images/car_brands/MERKUR.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'OLDS':
                return (
                    <Image source={require('../images/car_brands/OLDS.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'PEUG':
                return (
                    <Image source={require('../images/car_brands/PEUG.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'PLYM':
                return (
                    <Image source={require('../images/car_brands/PLYM.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'PONT':
                return (
                    <Image source={require('../images/car_brands/PONT.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'POR':
                return (
                    <Image source={require('../images/car_brands/POR.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'RAM':
                return (
                    <Image source={require('../images/car_brands/RAM.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'REN':
                return (
                    <Image source={require('../images/car_brands/REN.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'RR':
                return (
                    <Image source={require('../images/car_brands/RR.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'SAAB':
                return (
                    <Image source={require('../images/car_brands/SAAB.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'SATURN':
                return (
                    <Image source={require('../images/car_brands/SATURN.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'SRT':
                return (
                    <Image source={require('../images/car_brands/SRT.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'SCION':
                return (
                    <Image source={require('../images/car_brands/SCION.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'SMART':
                return (
                    <Image source={require('../images/car_brands/SMART.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'STERL':
                return (
                    <Image source={require('../images/car_brands/STERL.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'SUZUKI':
                return (
                    <Image source={require('../images/car_brands/SUZUKI.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'TESLA':
                return (
                    <Image source={require('../images/car_brands/TESLA.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'TRI':
                return (
                    <Image source={require('../images/car_brands/TRI.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'VOLVO':
                return (
                    <Image source={require('../images/car_brands/VOLVO.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'YUGO':
                return (
                    <Image source={require('../images/car_brands/YUGO.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );

                break;
            case 'ACURA':
                return (
                    <Image source={require('../images/car_brands/ACURA.png')}
                           resizeMode={'contain'}
                           style={[styles.imageStyle, this.props.style]}
                    />
                );
                break;
            case 'aboutUs':
                return (
                    <Svg viewBox="0 0 55 60" style={{
                            position: 'absolute',
                            top: -12,
                            left: 10,
                            height: 35,
                            width: 55
                        }}>
                        <G id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <G id="about-us" fill="#979797">
                                <Path
                                    d="M41,22 C41,11.5065898 32.4934102,3 22,3 C11.5065898,3 3,11.5065898 3,22 C3,32.4934102 11.5065898,41 22,41 C32.4934102,41 41,32.4934102 41,22 Z M0,22 C0,9.8497355 9.8497355,0 22,0 C34.1502645,0 44,9.8497355 44,22 C44,34.1502645 34.1502645,44 22,44 C9.8497355,44 0,34.1502645 0,22 Z"
                                    id="Oval-3"></Path>
                                <Path
                                    d="M22.5,34 C21.671625,34 21,33.4370285 21,32.7426655 L21,20.2573345 C21,19.5629715 21.671625,19 22.5,19 C23.328375,19 24,19.5629715 24,20.2573345 L24,32.7426655 C24,33.4370285 23.328375,34 22.5,34 L22.5,34 Z"
                                    id="Shape"></Path>
                                <Path
                                    d="M22.500092,15 C21.6728422,15 21,14.3268311 21,13.4996319 C21,12.6728009 21.6730262,12 22.500092,12 C23.3271578,12 24,12.6728009 24,13.4996319 C24,14.3268311 23.3271578,15 22.500092,15 L22.500092,15 Z"
                                    id="Shape"></Path>
                            </G>
                        </G>
                    </Svg>
                );
                break;
            case 'terms':
                return (
                    <Svg viewBox="0 0 55 60" style={{
                            position: 'absolute',
                            top: -13,
                            left: 12,
                            height: 35,
                            width: 55
                        }}>
                        <G id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <G id="terms-of-business" fill="#979797">
                                <Path
                                    d="M3,43.9938589 C3,43.4444977 2.55521925,43 2.00746124,43 L32.9925388,43 C32.444149,43 32,43.4436166 32,43.9938589 L32,2.0061411 C32,2.55550229 32.4447808,3 32.9925388,3 L2.00746124,3 C2.55585099,3 3,2.55638341 3,2.0061411 L3,43.9938589 Z M2.00746124,0 L32.9925388,0 C34.101229,0 35,0.898241717 35,2.0061411 L35,43.9938589 C35,45.10182 34.0996545,46 32.9925388,46 L2.00746124,46 C0.89877101,46 0,45.1017583 0,43.9938589 L0,2.0061411 C0,0.898179965 0.900345519,0 2.00746124,0 Z"
                                    id="Rectangle-10"></Path>
                                <Rect id="Rectangle-11-Copy" x="7" y="9" width="18" height="2"></Rect>
                                <Rect id="Rectangle-11-Copy-2" x="7" y="18" width="18" height="2"></Rect>
                                <Rect id="Rectangle-11-Copy-3" x="7" y="27" width="18" height="2"></Rect>
                            </G>
                        </G>
                    </Svg>
                );
                break;
            case 'contactUs':
                return (
                    <Svg viewBox="0 0 60 65" style={{
                            position: 'absolute',
                            top: -8,
                            left: 8,
                            height: 40,
                            width: 60,
                        }}>
                        <G id="Page-1" strokeWidth="1">
                            <G id="contact-us">
                                <Path fill="#979797"
                                      d="M9,21.1823567 C9,22.1826798 9.83938809,23 10.8722377,23 L36.1277623,23 C37.1677259,23 38,22.1888353 38,21.1823567 L38,3.81764334 C38,2.81732021 37.1606119,2 36.1277623,2 L10.8722377,2 C9.83227412,2 9,2.81116468 9,3.81764334 L9,6.78121816 L9,21.1823567 Z M10.0013575,0 L36.9986425,0 C38.6562465,0 40,1.34410858 40,2.99075223 L40,22.0092478 C40,23.6609946 38.6654891,25 36.9986425,25 L10.0013575,25 C8.34375352,25 7,23.6558914 7,22.0092478 L7,2.99075223 C7,1.33900538 8.33451092,0 10.0013575,0 Z"
                                      id="Rectangle-13"></Path>
                                <Path
                                    d="M23.5013003,17.0000005 C23.624482,16.9996517 23.7472231,16.9540585 23.8424981,16.8643019 L36.8391401,4.86740172 C37.0420504,4.68009984 37.0547036,4.36377032 36.8674017,4.16085995 C36.6800998,3.95794958 36.3637703,3.9452964 36.1608599,4.13259828 L23.5,15.8195459 L10.8391401,4.13259828 C10.6362297,3.9452964 10.3199002,3.95794958 10.1325983,4.16085995 C9.9452964,4.36377032 9.95794958,4.68009984 10.1608599,4.86740172 L23.1575019,16.8643019 C23.2527769,16.9540585 23.375518,16.9996517 23.4986997,17.0000005 Z M36.1464466,21.8535534 C36.3417088,22.0488155 36.6582912,22.0488155 36.8535534,21.8535534 C37.0488155,21.6582912 37.0488155,21.3417088 36.8535534,21.1464466 L29.5734435,13.8663367 C29.3781814,13.6710746 29.0615989,13.6710746 28.8663367,13.8663367 C28.6710746,14.0615989 28.6710746,14.3781814 28.8663367,14.5734435 L36.1464466,21.8535534 Z M11.1464466,20.1464466 C10.9511845,20.3417088 10.9511845,20.6582912 11.1464466,20.8535534 C11.3417088,21.0488155 11.6582912,21.0488155 11.8535534,20.8535534 L17.8535534,14.8535534 C18.0488155,14.6582912 18.0488155,14.3417088 17.8535534,14.1464466 C17.6582912,13.9511845 17.3417088,13.9511845 17.1464466,14.1464466 L11.1464466,20.1464466 Z"
                                    id="Combined-Shape" fill="#979797"></Path>
                                <Path
                                    d="M3.22192383,25.7947998 L15.71521,25.7947998 L12.2885742,23 L8.79174805,6.56323242 C8.79174805,6.56323242 7.2919732,5.96641152 6.61071777,5.6953125 C6.56496311,5.67710487 3.22192383,25.7947998 3.22192383,25.7947998 Z"
                                    id="Path-4-Copy"></Path>
                                <Path
                                    d="M3.49407894,19.2532608 C5.07058506,22.1411754 6.99580663,24.7397798 9.29009701,26.8220386 C13.8096855,30.9239399 21.6743932,35.6164965 24.2500525,36.0349121 C26.3342044,36.3734824 29.8273755,33.635069 31.0318432,31.781743 C31.0565322,31.7437597 31.0565322,31.7437597 31.0819771,31.7045277 C32.0919905,30.145305 32.1340756,28.9059401 30.5266552,27.4601214 C29.6942213,26.7113762 29.2644142,26.3329659 28.688048,25.8548534 C28.261672,25.5011622 27.8555868,25.1810282 27.4654204,24.8938765 C26.0743272,23.8700702 24.9597124,23.2998047 23.9980469,23.2998047 C22.7811463,23.2998047 21.9289491,24.1870409 21.191934,25.6207714 C20.8910574,26.2060727 20.4045466,27.4171888 20.4487318,27.3365602 C20.2126199,27.7674135 19.9796809,27.8743873 18.7634686,27.5050598 C17.2051485,27.0318443 12.9041579,23.4179348 11.6989558,21.8455251 C9.99111772,19.6173335 9.1763137,18.0578103 9.36436638,16.5977099 L9.4659066,15.8093197 L8.72074512,15.5325454 L9.3563181,16.6494623 C8.87476264,17.3354771 8.87476264,17.3354771 8.81205285,17.3681179 C8.70874051,17.4115861 8.70874051,17.4115861 8.7037661,17.4132513 C8.74957047,17.3982302 8.74957047,17.3982302 8.80667749,17.3793283 C8.91585804,17.3429907 9.02764402,17.3043472 9.14992817,17.259979 C9.51241028,17.1284602 9.87080255,16.9815453 10.2118883,16.8170656 C10.9896214,16.4420243 11.5648389,16.0401743 11.8996066,15.5197749 C13.0424728,13.7431794 13.1085493,12.0568065 11.2648735,10.0016613 C10.9293459,9.62764884 9.79152393,8.34037088 9.55313229,8.07831679 C9.04015115,7.51441781 8.68376264,7.16456016 8.31231981,6.87709208 C8.09514417,6.70901489 7.87545819,6.56574937 7.64025061,6.43938885 C7.21244962,6.20956142 7.22914334,6.21833229 7.06351423,6.14346708 C5.74847301,5.54906168 4.59481662,5.93925237 3.20939589,7.56470104 C1.42095986,9.66298853 0.581110256,12.1601652 1.17979437,14.0230097 C1.61193357,15.3676389 2.4214267,17.2883284 3.49407894,19.2532608 Z M4.73152207,8.86205677 C5.58576123,7.85981833 5.82554485,7.7787185 6.23974707,7.96594003 C6.34216095,8.01223164 6.3312468,8.00649735 6.69373377,8.20123615 C6.83035536,8.27463333 6.95738491,8.3574741 7.08824116,8.45874674 C7.34754947,8.65943136 7.63248481,8.93914523 8.07370366,9.42415889 C8.30044057,9.67340141 9.43178531,10.9533513 9.77614217,11.3372059 C10.943835,12.6388329 10.9158823,13.352229 10.2175809,14.4377446 C10.137829,14.5617196 9.81126228,14.7898609 9.34317167,15.0155853 C9.06964524,15.1474862 8.77142138,15.2697365 8.467784,15.3799047 C8.36356878,15.417717 8.26832384,15.4506424 8.17509604,15.4816706 C8.12590148,15.4979548 8.12590148,15.4979548 8.09044574,15.5095728 C7.99482343,15.5434922 7.99482343,15.5434922 7.93363938,15.5713458 C7.87057123,15.6041699 7.87057123,15.6041699 7.81901377,15.6370801 L7.38881389,16.290398 L8.37255859,16.4699707 L7.38075081,16.3422315 C7.09783227,18.5389002 8.06826084,20.3962865 10.111591,23.0621898 C11.5476139,24.935748 16.1475851,28.8008762 18.1823322,29.4187684 C19.353626,29.7744554 20.294431,29.7743735 21.0334298,29.4349993 C21.6129782,29.1688504 21.9194987,28.8143802 22.2026353,28.2977171 C22.2312363,28.2455266 22.7310523,27.0012887 22.9706771,26.5351417 C23.3881591,25.7230054 23.7946467,25.2998047 23.9980469,25.2998047 C24.3879426,25.2998047 25.2241424,25.727626 26.2799304,26.5046569 C26.6364534,26.767048 27.0127745,27.0637177 27.4111385,27.3941721 C27.9606088,27.8499737 28.3760288,28.2157173 29.1891652,28.9471051 C29.9419026,29.6241663 29.9361092,29.7947777 29.4033794,30.617187 C29.3794425,30.6540941 29.3794425,30.6540941 29.3548756,30.6918898 C28.5426425,31.9416808 25.6216863,34.2315158 24.5707483,34.060791 C22.4519953,33.7165998 14.8936612,29.2068441 10.6342194,25.3410474 C8.52198283,23.4240175 6.72653578,21.0005787 5.24954289,18.294957 C4.23942613,16.4445798 3.4787162,14.6396386 3.0838775,13.4110723 C2.73230571,12.3171338 3.34865226,10.4845126 4.73152207,8.86205677 Z"
                                    id="Path-3" fill="#979797"></Path>
                            </G>
                        </G>
                    </Svg>
                );
                break;
            case 'contactUs2':
                return (
                    <Svg viewBox="0 0 60 65" style={{
                                                position: 'absolute',
                                                top: -10,
                                                left: 8,
                                                height: 40,
                                                width: 60,
                                            }}>
                        <G id="Page-1" strokeWidth="1">
                            <G id="contact-us">
                                <Path fill="#909090"
                                      d="M9,21.1823567 C9,22.1826798 9.83938809,23 10.8722377,23 L36.1277623,23 C37.1677259,23 38,22.1888353 38,21.1823567 L38,3.81764334 C38,2.81732021 37.1606119,2 36.1277623,2 L10.8722377,2 C9.83227412,2 9,2.81116468 9,3.81764334 L9,6.78121816 L9,21.1823567 Z M10.0013575,0 L36.9986425,0 C38.6562465,0 40,1.34410858 40,2.99075223 L40,22.0092478 C40,23.6609946 38.6654891,25 36.9986425,25 L10.0013575,25 C8.34375352,25 7,23.6558914 7,22.0092478 L7,2.99075223 C7,1.33900538 8.33451092,0 10.0013575,0 Z"
                                      id="Rectangle-13"></Path>
                                <Path
                                    d="M23.5013003,17.0000005 C23.624482,16.9996517 23.7472231,16.9540585 23.8424981,16.8643019 L36.8391401,4.86740172 C37.0420504,4.68009984 37.0547036,4.36377032 36.8674017,4.16085995 C36.6800998,3.95794958 36.3637703,3.9452964 36.1608599,4.13259828 L23.5,15.8195459 L10.8391401,4.13259828 C10.6362297,3.9452964 10.3199002,3.95794958 10.1325983,4.16085995 C9.9452964,4.36377032 9.95794958,4.68009984 10.1608599,4.86740172 L23.1575019,16.8643019 C23.2527769,16.9540585 23.375518,16.9996517 23.4986997,17.0000005 Z M36.1464466,21.8535534 C36.3417088,22.0488155 36.6582912,22.0488155 36.8535534,21.8535534 C37.0488155,21.6582912 37.0488155,21.3417088 36.8535534,21.1464466 L29.5734435,13.8663367 C29.3781814,13.6710746 29.0615989,13.6710746 28.8663367,13.8663367 C28.6710746,14.0615989 28.6710746,14.3781814 28.8663367,14.5734435 L36.1464466,21.8535534 Z M11.1464466,20.1464466 C10.9511845,20.3417088 10.9511845,20.6582912 11.1464466,20.8535534 C11.3417088,21.0488155 11.6582912,21.0488155 11.8535534,20.8535534 L17.8535534,14.8535534 C18.0488155,14.6582912 18.0488155,14.3417088 17.8535534,14.1464466 C17.6582912,13.9511845 17.3417088,13.9511845 17.1464466,14.1464466 L11.1464466,20.1464466 Z"
                                    id="Combined-Shape" fill="#909090"></Path>
                                <Path
                                    d="M3.22192383,25.7947998 L15.71521,25.7947998 L12.2885742,23 L8.79174805,6.56323242 C8.79174805,6.56323242 7.2919732,5.96641152 6.61071777,5.6953125 C6.56496311,5.67710487 3.22192383,25.7947998 3.22192383,25.7947998 Z"
                                    id="Path-4-Copy" fill="#ffffff"></Path>
                                <Path
                                    d="M3.49407894,19.2532608 C5.07058506,22.1411754 6.99580663,24.7397798 9.29009701,26.8220386 C13.8096855,30.9239399 21.6743932,35.6164965 24.2500525,36.0349121 C26.3342044,36.3734824 29.8273755,33.635069 31.0318432,31.781743 C31.0565322,31.7437597 31.0565322,31.7437597 31.0819771,31.7045277 C32.0919905,30.145305 32.1340756,28.9059401 30.5266552,27.4601214 C29.6942213,26.7113762 29.2644142,26.3329659 28.688048,25.8548534 C28.261672,25.5011622 27.8555868,25.1810282 27.4654204,24.8938765 C26.0743272,23.8700702 24.9597124,23.2998047 23.9980469,23.2998047 C22.7811463,23.2998047 21.9289491,24.1870409 21.191934,25.6207714 C20.8910574,26.2060727 20.4045466,27.4171888 20.4487318,27.3365602 C20.2126199,27.7674135 19.9796809,27.8743873 18.7634686,27.5050598 C17.2051485,27.0318443 12.9041579,23.4179348 11.6989558,21.8455251 C9.99111772,19.6173335 9.1763137,18.0578103 9.36436638,16.5977099 L9.4659066,15.8093197 L8.72074512,15.5325454 L9.3563181,16.6494623 C8.87476264,17.3354771 8.87476264,17.3354771 8.81205285,17.3681179 C8.70874051,17.4115861 8.70874051,17.4115861 8.7037661,17.4132513 C8.74957047,17.3982302 8.74957047,17.3982302 8.80667749,17.3793283 C8.91585804,17.3429907 9.02764402,17.3043472 9.14992817,17.259979 C9.51241028,17.1284602 9.87080255,16.9815453 10.2118883,16.8170656 C10.9896214,16.4420243 11.5648389,16.0401743 11.8996066,15.5197749 C13.0424728,13.7431794 13.1085493,12.0568065 11.2648735,10.0016613 C10.9293459,9.62764884 9.79152393,8.34037088 9.55313229,8.07831679 C9.04015115,7.51441781 8.68376264,7.16456016 8.31231981,6.87709208 C8.09514417,6.70901489 7.87545819,6.56574937 7.64025061,6.43938885 C7.21244962,6.20956142 7.22914334,6.21833229 7.06351423,6.14346708 C5.74847301,5.54906168 4.59481662,5.93925237 3.20939589,7.56470104 C1.42095986,9.66298853 0.581110256,12.1601652 1.17979437,14.0230097 C1.61193357,15.3676389 2.4214267,17.2883284 3.49407894,19.2532608 Z M4.73152207,8.86205677 C5.58576123,7.85981833 5.82554485,7.7787185 6.23974707,7.96594003 C6.34216095,8.01223164 6.3312468,8.00649735 6.69373377,8.20123615 C6.83035536,8.27463333 6.95738491,8.3574741 7.08824116,8.45874674 C7.34754947,8.65943136 7.63248481,8.93914523 8.07370366,9.42415889 C8.30044057,9.67340141 9.43178531,10.9533513 9.77614217,11.3372059 C10.943835,12.6388329 10.9158823,13.352229 10.2175809,14.4377446 C10.137829,14.5617196 9.81126228,14.7898609 9.34317167,15.0155853 C9.06964524,15.1474862 8.77142138,15.2697365 8.467784,15.3799047 C8.36356878,15.417717 8.26832384,15.4506424 8.17509604,15.4816706 C8.12590148,15.4979548 8.12590148,15.4979548 8.09044574,15.5095728 C7.99482343,15.5434922 7.99482343,15.5434922 7.93363938,15.5713458 C7.87057123,15.6041699 7.87057123,15.6041699 7.81901377,15.6370801 L7.38881389,16.290398 L8.37255859,16.4699707 L7.38075081,16.3422315 C7.09783227,18.5389002 8.06826084,20.3962865 10.111591,23.0621898 C11.5476139,24.935748 16.1475851,28.8008762 18.1823322,29.4187684 C19.353626,29.7744554 20.294431,29.7743735 21.0334298,29.4349993 C21.6129782,29.1688504 21.9194987,28.8143802 22.2026353,28.2977171 C22.2312363,28.2455266 22.7310523,27.0012887 22.9706771,26.5351417 C23.3881591,25.7230054 23.7946467,25.2998047 23.9980469,25.2998047 C24.3879426,25.2998047 25.2241424,25.727626 26.2799304,26.5046569 C26.6364534,26.767048 27.0127745,27.0637177 27.4111385,27.3941721 C27.9606088,27.8499737 28.3760288,28.2157173 29.1891652,28.9471051 C29.9419026,29.6241663 29.9361092,29.7947777 29.4033794,30.617187 C29.3794425,30.6540941 29.3794425,30.6540941 29.3548756,30.6918898 C28.5426425,31.9416808 25.6216863,34.2315158 24.5707483,34.060791 C22.4519953,33.7165998 14.8936612,29.2068441 10.6342194,25.3410474 C8.52198283,23.4240175 6.72653578,21.0005787 5.24954289,18.294957 C4.23942613,16.4445798 3.4787162,14.6396386 3.0838775,13.4110723 C2.73230571,12.3171338 3.34865226,10.4845126 4.73152207,8.86205677 Z"
                                    id="Path-3" fill="#909090"></Path>
                            </G>
                        </G>
                    </Svg>
                );
                break;
            case 'vehicleSettings':
                return (
                    <Svg viewBox="0 0 55 60" style={{
                                        position: 'absolute',
                                        top: -12,
                                        left: 7,
                                        height: 35,
                                        width: 55,
                                    }}>
                        <G id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <G id="vehicle-settings">
                                <Path
                                    d="M15.627551,28.9914042 C17.1254836,29.0005396 18.3948284,27.8907126 18.5857414,26.4049678 C18.7766544,24.919223 17.8291309,23.5245361 16.377551,23.1546695 L11.7857143,21.9556899 C10.8965345,21.7214593 9.94899983,21.9131314 9.22076614,22.4745407 C8.49253246,23.0359499 8.06606318,23.9035236 8.06632653,24.8230368 L8.06632653,26.0220164 C8.06632653,27.661964 9.39576671,28.9914042 11.0357143,28.9914042 L15.627551,28.9914042 Z M10.1122449,24.8230368 C10.1123353,24.5367758 10.2451752,24.2667413 10.4718868,24.0919636 C10.6985984,23.9171859 10.993546,23.8574283 11.2704082,23.9301797 L15.8622449,25.1291593 C16.3213585,25.2388797 16.623818,25.6771791 16.5634933,26.1453509 C16.5031687,26.6135226 16.099482,26.960834 15.627551,26.9505879 L11.0357143,26.9505879 C10.5268557,26.9477995 10.1150332,26.5359771 10.1122449,26.0271185 L10.1122449,24.8230368 Z M38.2142857,21.9556899 L33.622449,23.1546695 C32.1698541,23.5247173 31.2221184,24.9209324 31.4144407,26.4075323 C31.6067631,27.8941322 32.8786087,29.0031986 34.377551,28.9914042 L38.9693878,28.9914042 C40.6053528,28.9885957 41.9308649,27.6630835 41.9336735,26.0271185 L41.9336735,24.8230368 C41.9339368,23.9035236 41.5074675,23.0359499 40.7792339,22.4745407 C40.0510002,21.9131314 39.1034655,21.7214593 38.2142857,21.9556899 L38.2142857,21.9556899 Z M39.5306122,24.093445 C39.7599412,24.2679458 39.8940647,24.5399709 39.8928571,24.8281389 L39.8928571,26.0271185 C39.8900688,26.5359771 39.4782464,26.9477995 38.9693878,26.9505879 L34.377551,26.9505879 C33.90562,26.960834 33.5019334,26.6135226 33.4416087,26.1453509 C33.3812841,25.6771791 33.6837435,25.2388797 34.1428571,25.1291593 L38.7346939,23.9301797 C38.8112991,23.9100065 38.890171,23.8997188 38.9693878,23.8995675 C39.1727698,23.9002655 39.3701667,23.9684572 39.5306122,24.093445 L39.5306122,24.093445 Z M11.7346939,18.1444654 L38.2653061,18.1444654 C38.6038063,18.1447932 38.9204367,17.9772359 39.1105551,17.6971691 C39.3006735,17.4171022 39.339531,17.0609837 39.2142857,16.7465062 C38.3520408,14.5679348 36.6632653,10.5475266 35.7959184,9.30773072 C35.1734694,8.41487358 34.2653061,7.94038379 32.7040816,7.66487358 C30.1547311,7.28243851 27.5771798,7.12027469 25,7.1801797 C22.4297741,7.12005947 19.8591276,7.28051151 17.3163265,7.65977154 C15.7397959,7.93528175 14.8469388,8.40977154 14.2244898,9.30773072 C13.3622449,10.5475266 11.6734694,14.5679348 10.8061224,16.7465062 C10.6821351,17.0576504 10.7187367,17.4098305 10.9040568,17.6888287 C11.0893768,17.967827 11.399816,18.1381149 11.7346939,18.1444654 L11.7346939,18.1444654 Z M15.8826531,10.4914042 C16.0357143,10.2669144 16.2704082,9.9301797 17.6530612,9.69038379 C20.0842519,9.3254215 22.5421313,9.16839032 25,9.22099603 C27.4523397,9.16379938 29.9050928,9.31570962 32.3316327,9.67507766 C33.7091837,9.91487358 33.9438776,10.2516083 34.0969388,10.470996 C35.1067936,12.2767795 35.9865764,14.1522855 36.7295918,16.0832409 L13.2653061,16.0832409 C14.0091778,14.1542977 14.8889365,12.2805482 15.8979592,10.4760981 L15.8826531,10.4914042 Z M2.96428571,21.0781389 C2.06721617,22.8101366 1.62149582,24.7404215 1.66836735,26.6903838 L1.66836735,38.6597715 C1.67117733,40.6028742 3.24567289,42.1773697 5.18877551,42.1801797 L8.41836735,42.1801797 C10.36147,42.1773697 11.9359655,40.6028742 11.9387755,38.6597715 L11.9387755,37.8026287 C11.9387755,37.8026287 23.6726257,37.8026287 30.9111328,37.8026287 C32.3801087,37.8026287 34.1035156,34.9926758 34.1035156,34.9926758 C34.1035156,34.9926758 41.0255102,7.80262868 40.0357143,6.37405726 C38.1479592,3.66487358 35.4438776,2.91487358 33.5918367,2.58834297 C30.7502056,2.14578397 27.8752829,1.95287051 25,2.01181236 C22.131967,1.94899899 19.2639276,2.13678728 16.4285714,2.57303685 C14.5663265,2.89956746 11.8673469,3.64446542 9.97959184,6.35875113 C8.98979592,7.78732256 7.60714286,10.9505879 6.73979592,13.0220164 C6.0283812,12.6001673 5.21978143,12.3698921 4.39285714,12.3536491 L3.43877551,12.3536491 C1.55470982,12.3942958 0.0378534063,13.9134028 0,15.7975266 L0,17.6342613 C0.0362459148,19.3438255 1.27916106,20.7878319 2.96428571,21.0781389 L2.96428571,21.0781389 Z M3.48979592,14.4148736 L4.36734694,14.4148736 C5.16977048,14.4591257 5.92514209,14.8076184 6.47959184,15.3893634 C6.72512917,15.6190266 7.0680381,15.7130037 7.39635656,15.6406105 C7.72467503,15.5682173 7.99626441,15.3387453 8.12244898,15.0271185 C9.54591837,11.4914042 10.8979592,8.62405726 11.6479592,7.54752664 C13.0816327,5.50671032 15.1377551,4.89446542 16.75,4.60875113 C19.4698644,4.20110407 22.2199889,4.03039492 24.9693878,4.09854705 C27.7187871,4.0303692 30.4689138,4.20107849 33.1887755,4.60875113 C34.8214286,4.89446542 36.877551,5.48630215 38.2908163,7.54752664 C38.5728247,7.95423258 38.9399522,8.61268929 39.3639905,9.46403872 C40.0676801,10.8768493 45.6079723,40.1393634 44.7908163,40.1393634 L41.5816327,40.1393634 C40.7644766,40.1393634 40.1020408,39.4769275 40.1020408,38.6597715 L40.1020408,36.7822205 C40.1020408,36.2186647 39.6451885,35.7618124 39.0816327,35.7618124 L10.9183673,35.7618124 C10.3548115,35.7618124 9.89795918,36.2186647 9.89795918,36.7822205 L9.89795918,38.6597715 C9.89795918,39.0521837 9.74207406,39.4285237 9.46459677,39.706001 C9.18711947,39.9834783 8.8107795,40.1393634 8.41836735,40.1393634 L5.17857143,40.1393634 C4.78615928,40.1393634 4.4098193,39.9834783 4.13234201,39.706001 C3.85486471,39.4285237 3.69897959,39.0521837 3.69897959,38.6597715 L3.69897959,26.6903838 C3.63556701,24.7533499 4.1699705,22.8437481 5.22959184,21.220996 C5.33503401,21.0645334 5.44557823,20.9097715 5.56122449,20.7567103 C5.79312575,20.4475086 5.83042776,20.033823 5.65757877,19.688125 C5.48472977,19.342427 5.13140006,19.1240573 4.74489796,19.1240573 L4.60204082,19.1240573 L3.57142857,19.1087511 C2.72609477,19.1087511 2.04081633,18.4234727 2.04081633,17.5781389 L2.04081633,15.8740573 C2.04079672,15.0721405 2.68789882,14.4204814 3.48979592,14.4148736 Z"
                                    id="Shape-Copy-3" fill="#979797"></Path>
                                <Path
                                    d="M29,8 L49,8 C49,8 47.4329635,31.8579042 45.3759766,40.6899414 C44.8048711,43.1420838 41.1157227,41.8525391 41.1157227,41.8525391 L39,35.9189453 L29,35 L29,8 Z"
                                    id="Rectangle-8" fill="#202020"></Path>
                                <Path
                                    d="M45.4723967,40.8041291 L45.6460396,40.7965769 C44.8548648,40.7965769 44.2672315,41.3319808 44.1147272,41.9435445 L45.4847767,36.6036877 L45.750619,35.56755 L46.7600162,35.2134728 C47.7818388,34.8550371 48.5693096,34.5019615 49.2697639,34.0729511 L50.2405612,33.4783625 L51.2474755,34.0094997 L56.0309235,36.5332125 C55.5323875,36.2833884 54.8016754,36.3322112 54.2772808,36.8577756 L54.3790471,36.7626507 C55.4826654,35.8008416 56.4901772,34.7316845 57.2885692,33.6647869 L58.8898515,34.8630753 L57.2246112,33.7553863 C56.9330627,34.1936847 56.8592186,34.7857554 57.2753538,35.4113507 L57.1691304,35.2320563 L54.5305165,30.1973341 L54.0557162,29.2913707 L54.5123298,28.3761063 C54.8945656,27.6099292 55.1869218,26.8719819 55.3894889,26.1411136 L55.6839061,25.0788468 L56.7392515,24.76051 L61.9657367,23.1839808 L62.5433168,25.0987657 L61.6472944,23.3107098 C61.2637032,23.5029333 60.8985149,23.942137 60.8985149,24.6410637 L60.9043798,24.4880101 C60.9684271,23.6535372 61,23.0523144 61,22.5051209 C61,22.1407579 60.9810371,21.7497938 60.9434497,21.2977387 C60.9137591,20.940657 60.8833033,20.6476284 60.8092083,19.9792862 L60.7970297,19.7589089 C60.7970297,20.5471974 61.3306286,21.1354657 61.8743595,21.2698674 L56.5463892,19.6933383 L55.5454891,19.3971752 L55.2160728,18.4067215 C54.9265532,17.5362252 54.6165837,16.8077786 54.2534413,16.1607518 L53.7298719,15.2278851 L54.2151823,14.2745545 L56.745003,9.30518901 C56.4907897,9.81474988 56.5637319,10.3630365 56.8186706,10.7462977 L58.4839109,9.63860877 L56.9405948,10.9106841 C56.0351315,9.81215149 55.0150714,8.80156673 53.9425374,7.95058295 L55.1856436,6.38383889 L54.0745314,8.04679706 C54.5145204,8.34077744 55.1107007,8.41546624 55.7385874,7.99594128 L55.5307098,8.11740662 L50.507195,10.6601956 L49.5788166,11.1301196 L48.6611504,10.6396058 C47.9574541,10.2634638 47.2771447,9.97581798 46.6028257,9.77704639 L45.413612,9.42649733 L45.1986174,8.20547676 L44.2852511,3.01818727 L46.2549505,2.671367 L44.3144117,3.1554218 C44.4423265,3.66822247 44.8489746,4.07577782 45.3629203,4.2045509 L45.8490099,2.26452077 L45.5364058,4.23993938 C43.7499739,3.9572419 41.9136446,3.92207452 40.1670155,4.14650089 L39.9121287,2.16280921 L40.3052023,4.12380211 C40.8041613,4.02378767 41.2580124,3.60682936 41.4175151,2.9573192 L40.4026636,8.09375291 L40.1601962,9.32094475 L38.9506424,9.63995851 C38.1440348,9.85269723 37.3600152,10.154088 36.5457749,10.5621164 L35.4334481,11.1195206 L34.4418258,10.3680847 L30.2809347,7.21502641 L31.4888614,5.6210022 L30.5928389,7.40905805 C30.9537949,7.58993869 31.415017,7.58993869 31.775973,7.40905805 L30.8799505,5.6210022 L32.0285906,7.25826393 C30.5913924,8.26654711 29.3754652,9.37129537 28.3673834,10.6012633 L26.8205446,9.33347409 L28.4857848,10.4411631 C28.7407235,10.0579018 28.8136657,9.50961521 28.5631216,9.00744718 L30.9987651,13.9404578 L31.46243,14.8795375 L30.9546777,15.7955307 C30.4541747,16.6984458 30.0816204,17.5220902 29.8444312,18.2748652 L29.523673,19.2928656 L28.4994253,19.593078 L23.0442579,21.1903812 C23.6582317,21.0365453 24.0354431,20.5744807 24.1435091,20.1412521 L22.2029703,19.6571973 L24.1786031,19.9684449 C24.0534465,20.7628715 24,21.5556448 24,22.5051209 C24,23.5614701 24.0149387,24.0106317 24.084018,24.5298817 L24.1014851,24.661178 L24.1014851,24.793631 C24.1014851,24.0887196 23.5898977,23.473445 22.982422,23.3216702 L28.2089072,24.745632 L29.2972794,25.0421603 L29.606539,26.1269836 C29.8884125,27.1157419 30.2504089,28.0454271 30.6716808,28.8476294 L31.1877657,29.8303783 L30.6268052,30.7882209 L27.8867062,35.4669526 C28.2422665,34.9383228 28.1684224,34.346252 27.8768739,33.9079537 L26.2116337,35.0156426 L27.806312,33.8085796 C28.7712747,35.0834137 29.9413341,36.2333132 31.3292944,37.2885977 L30.1188119,38.8806819 L31.229924,37.2177237 C30.7407734,36.8908958 30.1835201,36.8908958 29.7809577,37.092626 L30.6769802,38.8806819 L29.6015258,37.1944441 L34.0668724,34.3465204 L35.0931901,33.6919521 L36.1460722,34.3028753 C36.8903196,34.7347166 37.772921,35.0907023 38.788199,35.3814289 L39.7612496,35.6600636 L40.1129799,36.6091424 L42.0919403,41.9489992 L40.2165842,42.6440095 L41.8818244,41.5363206 C41.6760372,41.2269511 41.3064526,40.9491442 40.6732673,40.9491442 L40.8397263,40.9560834 C41.0797571,40.9761306 41.3248923,40.9880184 41.6048273,40.9941176 C41.829244,40.9990071 42.0135184,41 42.4492574,41 C43.1846887,41 43.4230575,40.9827301 45.4723967,40.8041291 Z M40.6732673,42.9491442 C40.470297,42.9491442 40.3180693,42.7965769 40.2165842,42.6440095 L38.2376238,37.3041527 C37.1720297,36.999018 36.1064356,36.5921718 35.1423267,36.0327582 L30.6769802,38.8806819 C30.4740099,38.9823934 30.2710396,38.9823934 30.1188119,38.8806819 C28.6472772,37.7618547 27.3279703,36.4904602 26.2116337,35.0156426 C26.1101485,34.8630753 26.0594059,34.6087964 26.1608911,34.4562291 L28.9009901,29.7774974 C28.3935644,28.8112376 27.9876238,27.7432662 27.6831683,26.6752948 L22.4566832,25.251333 C22.2537129,25.2004772 22.1014851,25.0479099 22.1014851,24.793631 C22,24.0307943 22,23.2679576 22,22.5051209 C22,21.5388611 22.0507426,20.6234571 22.2029703,19.6571973 C22.2537129,19.4537742 22.355198,19.3012068 22.5581683,19.2503511 L27.9368812,17.6738219 C28.2413366,16.7075621 28.6980198,15.7413023 29.2054455,14.8258983 L26.769802,9.89288766 C26.6683168,9.68946455 26.7190594,9.48604143 26.8205446,9.33347409 C27.9876238,7.90951227 29.3576733,6.68897357 30.8799505,5.6210022 C31.0829208,5.51929064 31.2858911,5.51929064 31.4888614,5.6210022 L35.6497525,8.77406052 C36.5631188,8.31635851 37.4764851,7.96036805 38.4405941,7.70608915 L39.4554455,2.56965544 C39.5061881,2.36623233 39.6584158,2.21366499 39.9121287,2.16280921 C41.8910891,1.90853031 43.9207921,1.95938609 45.8490099,2.26452077 C46.0519802,2.31537655 46.2042079,2.46794388 46.2549505,2.671367 L47.1683168,7.85865649 C48.0309406,8.11293539 48.8428218,8.46892584 49.6039604,8.87577208 L54.6274752,6.33298311 C54.779703,6.23127155 55.0334158,6.28212733 55.1856436,6.38383889 C56.4034653,7.3500987 57.519802,8.46892584 58.4839109,9.63860877 C58.585396,9.79117611 58.6361386,9.99459922 58.5346535,10.1980223 L55.9975248,15.1818887 C56.4542079,15.9955812 56.8094059,16.8601294 57.1138614,17.7755335 L62.4418317,19.3520626 C62.644802,19.4029184 62.7970297,19.5554857 62.7970297,19.7589089 C62.8985149,20.6743129 63,21.5897169 63,22.5051209 C63,23.2171018 62.9492574,23.9799385 62.8985149,24.6410637 C62.8985149,24.8444868 62.7462871,24.9970541 62.5433168,25.0987657 L57.3168317,26.6752948 C57.0631188,27.5906989 56.7079208,28.4552471 56.3019802,29.2689396 L58.9405941,34.3036617 C59.0420792,34.4562291 58.9913366,34.710508 58.8898515,34.8630753 C57.9764851,36.083614 56.8601485,37.2532969 55.6930693,38.2704125 C55.5408416,38.4229799 55.3378713,38.4229799 55.134901,38.3212683 L50.3143564,35.7784793 C49.4009901,36.3378929 48.4368812,36.7447391 47.4220297,37.1007296 L46.0519802,42.4405864 C46.0012376,42.6440095 45.8490099,42.7965769 45.6460396,42.7965769 C44.4789604,42.8982884 43.4641089,43 42.4492574,43 C41.8403465,43 41.2821782,43 40.6732673,42.9491442 Z"
                                    id="Shape" fill="#979797"></Path>
                                <Path
                                    d="M45.6460396,42.7965769 C45.8490099,42.7965769 46.0012376,42.6440095 46.0519802,42.4405864 L47.4220297,37.1007296 C48.4368812,36.7447391 49.4009901,36.3378929 50.3143564,35.7784793 L55.134901,38.3212683 C55.3378713,38.4229799 55.5408416,38.4229799 55.6930693,38.2704125 C56.8601485,37.2532969 57.9764851,36.083614 58.8898515,34.8630753 C58.9913366,34.710508 59.0420792,34.4562291 58.9405941,34.3036617 L56.3019802,29.2689396 C56.7079208,28.4552471 57.0631188,27.5906989 57.3168317,26.6752948 L62.5433168,25.0987657 C62.7462871,24.9970541 62.8985149,24.8444868 62.8985149,24.6410637 C62.9492574,23.9799385 63,23.2171018 63,22.5051209 C63,21.5897169 62.8985149,20.6743129 62.7970297,19.7589089 C62.7970297,19.5554857 62.644802,19.4029184 62.4418317,19.3520626 L57.1138614,17.7755335 C56.8094059,16.8601294 56.4542079,15.9955812 55.9975248,15.1818887 L58.5346535,10.1980223 C58.6361386,9.99459922 58.585396,9.79117611 58.4839109,9.63860877 C57.519802,8.46892584 56.4034653,7.3500987 55.1856436,6.38383889 C55.0334158,6.28212733 54.779703,6.23127155 54.6274752,6.33298311 L49.6039604,8.87577208 C48.8428218,8.46892584 48.0309406,8.11293539 47.1683168,7.85865649 L46.2549505,2.671367 C46.2042079,2.46794388 46.0519802,2.31537655 45.8490099,2.26452077 C43.9207921,1.95938609 41.8910891,1.90853031 39.9121287,2.16280921 C39.6584158,2.21366499 39.5061881,2.36623233 39.4554455,2.56965544 L38.4405941,7.70608915 C37.4764851,7.96036805 36.5631188,8.31635851 35.6497525,8.77406052 L31.4888614,5.6210022 C31.2858911,5.51929064 31.0829208,5.51929064 30.8799505,5.6210022 C29.3576733,6.68897357 27.9876238,7.90951227 26.8205446,9.33347409 C26.7190594,9.48604143 26.6683168,9.68946455 26.769802,9.89288766 L29.2054455,14.8258983 C28.6980198,15.7413023 28.2413366,16.7075621 27.9368812,17.6738219 L22.5581683,19.2503511 C22.355198,19.3012068 22.2537129,19.4537742 22.2029703,19.6571973 C22.0507426,20.6234571 22,21.5388611 22,22.5051209 C22,23.2679576 22,24.0307943 22.1014851,24.793631 C22.1014851,25.0479099 22.2537129,25.2004772 22.4566832,25.251333 L27.6831683,26.6752948 C27.9876238,27.7432662 28.3935644,28.8112376 28.9009901,29.7774974 L26.1608911,34.4562291 C26.0594059,34.6087964 26.1101485,34.8630753 26.2116337,35.0156426 C27.3279703,36.4904602 28.6472772,37.7618547 30.1188119,38.8806819 C30.2710396,38.9823934 30.4740099,38.9823934 30.6769802,38.8806819 L35.1423267,36.0327582 C36.1064356,36.5921718 37.1720297,36.999018 38.2376238,37.3041527 L40.2165842,42.6440095 C40.3180693,42.7965769 40.470297,42.9491442 40.6732673,42.9491442 C41.2821782,43 41.8403465,43 42.4492574,43 C43.4641089,43 44.4789604,42.8982884 45.6460396,42.7965769 Z M41.5176975,44.9931685 C41.1603458,44.9853826 40.8347041,44.9695906 40.5068084,44.942205 L40.6732673,42.9491442 L40.6732673,44.9491442 C39.6848841,44.9491442 39.010844,44.4424863 38.5513439,43.7516985 L38.4222358,43.5576043 L38.341228,43.3390199 L36.3622676,37.999163 L38.2376238,37.3041527 L37.6870485,39.2268765 C36.3749842,38.8511647 35.1928352,38.3743604 34.1385812,37.7626412 L35.1423267,36.0327582 L36.2177811,37.718996 L31.7524346,40.5669197 L31.5730027,40.6687377 C30.7644997,41.0738911 29.8013058,41.0738911 29.0076998,40.54364 C27.2400254,39.2043326 25.8102435,37.7991856 24.6169554,36.2227057 C24.028455,35.3446907 23.8925694,34.2551805 24.4956508,33.3485401 L26.1608911,34.4562291 L24.435076,33.4455055 L27.175175,28.7667738 L28.9009901,29.7774974 L27.1302994,30.7073653 C26.5750161,29.6499733 26.1138977,28.4657213 25.7597976,27.2236061 L27.6831683,26.6752948 L27.1574295,28.6049577 L21.9705936,27.1913632 C20.8854801,26.9194796 20.1014851,25.9765867 20.1014851,24.793631 L22.1014851,24.793631 L20.1189523,25.0573803 C20.0188897,24.3052359 20,23.7372818 20,22.5051209 C20,21.359339 20.0672169,20.3623091 20.2273375,19.3459497 L20.2624315,19.1731425 C20.4821312,18.2923831 21.0811601,17.5586033 21.9956242,17.3310949 L27.3743371,15.7545658 L27.9368812,17.6738219 L26.0293312,17.0727786 C26.3560059,16.036001 26.8352319,14.9765262 27.4562134,13.8562659 L29.2054455,14.8258983 L27.412126,15.7113387 L24.9801516,10.785721 C24.5416626,9.90678657 24.6677954,8.95867983 25.1553043,8.22578513 L25.2737057,8.06568486 C26.521977,6.54265996 28.0068559,5.19355167 29.7313104,3.98374048 L29.8520587,3.89902812 L29.983928,3.83294635 C30.7508246,3.44864259 31.6179873,3.44864259 32.3848839,3.83294635 L32.549783,3.91557987 L32.696788,4.02697799 L36.8576791,7.18003631 L35.6497525,8.77406052 L34.75373,6.98600467 C35.8080104,6.45768844 36.8493473,6.05738048 37.9305457,5.7722198 L38.4405941,7.70608915 L36.4785245,7.3184254 L37.5149067,2.08560065 C37.7584781,1.10914153 38.5303713,0.399994224 39.5190551,0.201816303 L39.6572419,0.179117522 C41.7873568,-0.0945833886 44.0054459,-0.0521049629 46.161614,0.289102153 L46.3350995,0.324490631 C47.2549858,0.554975276 47.9660894,1.26766529 48.1954893,2.1873122 L48.2246499,2.32454674 L49.1380162,7.51183623 L47.1683168,7.85865649 L47.7338079,5.94026659 C48.6854416,6.22078328 49.6143743,6.61355107 50.5467704,7.11193838 L49.6039604,8.87577208 L48.7007258,7.09134857 L53.7242407,4.5485596 L54.6274752,6.33298311 L53.5163631,4.67002495 C54.4246693,4.06313659 55.5171818,4.20000533 56.2967557,4.72088072 L56.4287498,4.81709483 C57.7266717,5.84690873 58.9466785,7.05558297 60.0272269,8.36653347 L60.1491512,8.53091981 C60.63666,9.26381451 60.7627928,10.2119212 60.3169959,11.1053565 L57.7798672,16.0892229 L55.9975248,15.1818887 L57.7416082,14.2030256 C58.2393753,15.0899191 58.6468574,16.0475261 59.01165,17.1443454 L57.1138614,17.7755335 L57.6813336,15.8577287 L62.9279213,17.4120325 C63.9768845,17.6748583 64.7970297,18.5790308 64.7970297,19.7589089 L62.7970297,19.7589089 L64.7848511,19.5385315 C64.8629839,20.2432954 64.8959562,20.5605361 64.9296939,20.9662911 C64.9758317,21.5211804 65,22.019466 65,22.5051209 C65,23.1784661 64.9639161,23.8655898 64.8926499,24.7941172 L62.8985149,24.6410637 L64.8985149,24.6410637 C64.8985149,25.7163231 64.2723647,26.4693796 63.4393393,26.8868215 L63.2855675,26.963879 L63.120897,27.0135506 L57.8944119,28.5900797 L57.3168317,26.6752948 L59.2441745,27.2094761 C58.9688577,28.2028277 58.582892,29.1770582 58.0916306,30.1617729 L56.3019802,29.2689396 L58.0734439,28.340545 L60.7120577,33.3752672 L58.9405941,34.3036617 L60.6058343,33.1959728 C61.2089158,34.1026132 61.0730302,35.1921234 60.5550918,35.9707643 C59.5171601,37.3628924 58.3164883,38.6370282 57.0070915,39.7781743 L55.6930693,38.2704125 L57.1088578,39.6830494 C56.2945057,40.4992183 55.1672339,40.5745374 54.201782,40.0902479 L49.3812374,37.547459 L50.3143564,35.7784793 L51.3589489,37.4840076 C50.3876167,38.0789238 49.3524936,38.5430383 48.0840432,38.9879864 L47.4220297,37.1007296 L49.3592827,37.5977715 L47.992519,42.9246412 C47.7307665,43.9739874 46.8279322,44.7965769 45.6460396,44.7965769 L45.6460396,42.7965769 L45.8196825,44.7890247 C43.6175189,44.9809444 43.3545027,45 42.4492574,45 C41.9843158,45 41.7809532,44.9989042 41.5176975,44.9931685 Z"
                                    id="Shape"></Path>
                                <Path
                                    d="M50,23 C50,19.1340068 46.8659932,16 43,16 C39.1340068,16 36,19.1340068 36,23 C36,26.8659932 39.1340068,30 43,30 C46.8659932,30 50,26.8659932 50,23 Z M34,23 C34,18.0294373 38.0294373,14 43,14 C47.9705627,14 52,18.0294373 52,23 C52,27.9705627 47.9705627,32 43,32 C38.0294373,32 34,27.9705627 34,23 Z"
                                    id="Oval-5" fill="#979797"></Path>
                            </G>
                        </G>
                    </Svg>
                );
                break;
            case 'visitSite':
                return (
                    <Svg viewBox="0 0 60 65" style={{
                                                position: 'absolute',
                                                top: -8,
                                                left: 12,
                                                height: 40,
                                                width: 60,
                                            }}>
                        <G id="Page-1" stroke="none" strokeWidth="1" fill="none"
                           fillRule="evenodd">
                            <Path
                                d="M2.56666667,0 C1.20310667,0 0,1.05256328 0,2.41743424 L0,19.8790395 C0,21.2439104 1.20310667,22.3076995 2.56666667,22.3076995 L12.0541667,22.3076995 C12.00628,22.9537591 11.9180233,23.5274625 11.75625,23.9717814 C11.5317033,24.5885531 11.25443,24.9461598 10.7479167,25.1861114 L9.53333333,25.1861114 C8.92584,25.1861114 8.43333333,25.6693608 8.43333333,26.2655159 C8.43333333,26.861635 8.92584,27.3449203 9.53333333,27.3449203 L23.4666667,27.3449203 C24.0741967,27.3449203 24.5666667,26.861635 24.5666667,26.2655159 C24.5666667,25.6693608 24.0741967,25.1861114 23.4666667,25.1861114 L22.2520833,25.1861114 C21.74557,24.9461598 21.4683333,24.5885531 21.24375,23.9717814 C21.0819767,23.5274625 20.99372,22.9537591 20.9458333,22.3076995 L30.4333333,22.3076995 C31.7968933,22.3076995 33,21.2439104 33,19.8790395 L33,2.41743424 C33,1.05256328 31.7968933,4.09046935e-14 30.4333333,4.09046935e-14 L2.56666667,4.09046935e-14 L2.56666667,0 Z M2.56666667,2.15880893 L30.4333333,2.15880893 C30.69484,2.15880893 30.8,2.29395037 30.8,2.41743424 L30.8,19.8790395 C30.8,20.0024873 30.69484,20.1488906 30.4333333,20.1488906 L2.56666667,20.1488906 C2.30516,20.1488906 2.2,20.0024873 2.2,19.8790395 L2.2,2.41743424 C2.2,2.29395037 2.30516,2.15880893 2.56666667,2.15880893 L2.56666667,2.15880893 Z M14.2656433,22.3076995 L18.7343933,22.3076995 C18.7845167,23.1407119 18.90449,23.9425295 19.18125,24.7026102 C19.2401733,24.8644489 19.3107567,25.0294179 19.3875,25.1861114 L13.6125,25.1861114 C13.6892433,25.0294179 13.7598267,24.8644489 13.81875,24.7026102 C14.09551,23.9425295 14.2154833,23.1407119 14.2656433,22.3076995 L14.2656433,22.3076995 Z"
                                id="visit-our-site" fill="#909090"></Path>
                        </G>
                    </Svg>
                );
                break;
            case 'language':
                return (
                    <Svg viewBox="0 0 60 65" style={{
                                            position: 'absolute',
                                            top: -12,
                                            zIndex: 10,
                                            left: 14,
                                            height: 45,
                                            width: 60
                                        }}>
                        <G id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <G id="language" fill="#909090">
                                <Path
                                    d="M36,18 C36,27.94104 27.94104,36 18,36 C8.05896,36 0,27.94104 0,18 C0,8.05896 8.05896,0 18,0 C27.94104,0 36,8.05896 36,18 L36,18 Z M8.64864,17.1162 C8.7318,14.59548 9.16848,12.1842 9.90072,9.95472 L3.88764,9.94788 C2.66832,12.0816 1.91808,14.51772 1.77876,17.1162 L8.64864,17.1162 L8.64864,17.1162 Z M17.12124,9.9486 L11.76228,9.9486 C10.9638,12.18528 10.494,14.59188 10.40508,17.1162 L17.12088,17.1162 L17.12088,9.9486 L17.12124,9.9486 Z M17.12124,1.77732 C15.22908,3.4686 13.63176,5.65416 12.4776,8.17524 L17.12124,8.17524 L17.12124,1.77732 L17.12124,1.77732 Z M5.05152,8.17488 L10.566,8.17488 C11.49372,5.95764 12.7692,3.90204 14.23836,2.20032 C10.4454,3.05568 7.20036,5.34312 5.05152,8.17488 L5.05152,8.17488 Z M34.22124,17.1162 C34.08192,14.51736 33.33132,12.0816 32.11236,9.94788 L26.09856,9.95472 C26.83116,12.1842 27.26784,14.59548 27.351,17.1162 L34.22124,17.1162 L34.22124,17.1162 Z M18.87876,17.1162 L25.59492,17.1162 C25.506,14.59188 25.03584,12.18528 24.23736,9.9486 L18.87876,9.9486 L18.87876,17.1162 L18.87876,17.1162 Z M18.87876,8.17488 L23.52276,8.17488 C22.36824,5.6538 20.77092,3.46824 18.87876,1.77696 L18.87876,8.17488 L18.87876,8.17488 Z M21.76128,2.20068 C23.2308,3.9024 24.50664,5.958 25.434,8.17488 L30.94848,8.17488 C28.8,5.34312 25.55532,3.05568 21.76128,2.20068 L21.76128,2.20068 Z M1.77876,18.8838 C1.91808,21.48192 2.66832,23.9184 3.88764,26.0514 L9.90072,26.04492 C9.16848,23.8158 8.7318,21.40416 8.64864,18.88344 L1.77876,18.88344 L1.77876,18.8838 Z M17.12124,18.8838 L10.40508,18.8838 C10.494,21.40848 10.9638,23.81472 11.76228,26.0514 L17.12124,26.0514 L17.12124,18.8838 L17.12124,18.8838 Z M17.12124,27.82512 L12.47724,27.82512 C13.63176,30.34656 15.22872,32.53176 17.12088,34.22268 L17.12088,27.82512 L17.12124,27.82512 Z M14.23836,33.79932 C12.7692,32.09688 11.49336,30.042 10.566,27.82476 L5.05152,27.82476 C7.20036,30.65652 10.4454,32.94396 14.23836,33.79932 L14.23836,33.79932 Z M27.35064,18.8838 C27.26784,21.40452 26.83116,23.8158 26.0982,26.04528 L32.112,26.05176 C33.33132,23.91876 34.08192,21.48228 34.22088,18.88416 L27.35064,18.88416 L27.35064,18.8838 Z M18.87876,26.0514 L24.23772,26.0514 C25.0362,23.81472 25.506,21.40848 25.59528,18.8838 L18.87876,18.8838 L18.87876,26.0514 L18.87876,26.0514 Z M18.87876,34.22268 C20.77128,32.53176 22.36824,30.3462 23.52276,27.82512 L18.87876,27.82512 L18.87876,34.22268 L18.87876,34.22268 Z M30.94848,27.82512 L25.434,27.82512 C24.50664,30.04236 23.2308,32.09724 21.76128,33.79968 C25.55532,32.94396 28.8,30.65652 30.94848,27.82512 L30.94848,27.82512 Z"
                                    id="Shape"></Path>
                            </G>
                        </G>
                    </Svg>
                );
                break;

            default:
                return null;
        }
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 40,
        height: 40
    }
})