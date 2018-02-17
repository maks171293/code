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
} from 'react-native';

import LayoutStyle from  '../styles/Layout'

import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/fonts/selection.json';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
const {width, height} = Dimensions.get('window');

export default class LocationsTerms extends React.Component {

    render() {
        return (
            <View style={[LayoutStyle.container, LayoutStyle.containerFlex]}>
                <Text style={[LayoutStyle.fuelTitle]}>Location services terms</Text>
                <KeyboardAwareScrollView>
                    <View style={{
                        textAlign: 'left',
                        borderColor: '#d0d0d0',
                        borderBottomWidth: 1,
                        borderTopWidth: 1, paddingTop: 15
                    }}>
                        <View style={{
                            width: width,
                            alignItems: 'center',
                            justifyContent: 'center', marginBottom: 15
                        }}>
                            <Text style={LayoutStyle.fuelText}>GONG Location service terms</Text>
                            <Text style={LayoutStyle.fuelText}>Last updated: 9th of November 2016</Text>
                        </View>

                        <Text style={[LayoutStyle.textPolicy]}>GONG Technologies LTD (“GONG”) provides an online
                            platform whereby users can

                            connect with vendors who offer roadside assistance and tow services. GONG provides

                            Location Services that may enable your location to be determined by cellular mobile

                            network or via Global Positioning Satellite service. Location Services are an integral part
                            of

                            GONG’s services, enabling GONG to know your current location in order to connect you

                            with GONG customers requiring services in the vicinity of your service vehicle.

                            Additionally, it gives GONG the ability to provide Customers with timely and accurate ETAs

                            once you’ve been awarded a job. Enabling Location Services allows GONG to verify your

                            location, deliver relevant job offers based on your location, and share your location as
                            part

                            of the Services we offer. GONG will request your permission to obtain your location via

                            your mobile phone, so that Service can be provided. Permission is obtained via a double

                            opt-in process as described below:

                            GONG may ask you for permission to send you, or an employee of yours, an initial text

                            message via mobile device requesting that you opt-in for Location Services. GONG will

                            only track your location if you opt-in by replying “YES” to those initial questions.</Text>
                        <Text style={[LayoutStyle.titlePolicy]}>Opting-In</Text>
                        <Text style={[LayoutStyle.textPolicy]}>By opting-in you agree to the GONG Terms &amp; Conditions
                            herein and associated Privacy

                            Policy. You also agree to the following as it pertains to specific usage from your
                            Cellular</Text>

                        <Text style={[LayoutStyle.textPolicy]}>Provider:</Text>

                        <Text style={[LayoutStyle.textPolicy]}>Important Message about your Cellular Provider (AT&amp;T,
                            Wind, T-Mobile, Verizon Wireless

                            and others). This is not a Cellular Provider application. If you use this application, it
                            may

                            require your Cellular Provider to disclose your customer information, including Mobile

                            Phone Location Information, to the application provider or some other third party. By

                            providing your consent, you authorize your Cellular Provider to disclose your information to

                            third parties to enable this application. Check the application’s terms of use and the

                            policies for more information about how the application will collect, access, use or
                            disclose

                            your information. Terms of use and other policies usually are available on the application

                            provider’s website. If you aren’t comfortable with the application’s policies, don’t use it.
                            You

                            acknowledge and agree that (1) your relationship with the application provider is separate

                            from your relationship with your Cellular Provider; (2) your Cellular Provider is not

                            responsible for this application; and (3) you will hold harmless your Cellular Provider and

                            its subsidiaries, affiliates, officers, employees, agents, successors and assigns from any

                            judgments, claims, actions, losses, liabilities or expenses arising from or attributable to
                            this

                            application or the acts or omissions of the application provider.

                            Message and data rates may apply. Reply HELP to 00000 for help. Reply STOP to cancel.

                            You will receive up to 4 messages per month, including opt-in requests, an opt-in

                            confirmation and a monthly reminder message.

                            Limitations – GONG Service is available only on EU carriers (AT&amp;T, T-Mobile, Wind,

                            Verizon and Sprint). The location service will not be available if the phone is roaming or
                            is

                            turned off. Other Network Carriers will be added as they become available.

                            You acknowledge that text messages are distributed via third-party mobile network

                            providers and therefore GONG cannot control certain factors relating to message delivery.

                            You acknowledge that, depending on your mobile provider service, it may not be possible

                            to transmit the text message to the recipient successfully. GONG is not responsible for

                            incomplete, lost, late, or misdirected messages, including (but not limited to) undelivered

                            messages resulting from any form of filtering by your mobile carrier or service
                            provider.</Text>
                        <Text style={[LayoutStyle.titlePolicy]}>Opting Out</Text>
                        <Text style={[LayoutStyle.textPolicy]}>You may opt-out by texting “STOP” on your mobile device
                            to 00000 or by calling 800-000-
                            000</Text>
                        <Text style={[LayoutStyle.titlePolicy]}>Help</Text>
                        <Text style={[LayoutStyle.textPolicy]}>For additional information, reply “HELP” from your mobile
                            device.</Text>

                        <Text style={[LayoutStyle.titlePolicy]}>Protecting your Privacy</Text>
                        <Text style={[LayoutStyle.textPolicy]}>Throughout the process of performing service for a GONG
                            customer, GONG will receive

                            updates on your location only as frequently as is necessary in order to keep GONG

                            customers updated on your location and ETA.

                            GONG shall retain this location data as part of the record of service for no more than 1

                            year.</Text>

                        <Text style={[LayoutStyle.textPolicy]}>GONG may periodically request your location when you are
                            not in the process of providing

                            Services to a Customer in order to try to connect nearby Customers with your Services

                            through GONG. GONG keeps data regarding your location when not providing Services to

                            a Customer only for as long as necessary to identify you as a nearby candidate for

                            Services to other Customers, and for no more than 60 days.

                            For additional information regarding our use of information collected through GONG,

                            please refer to our Privacy Policy http://www.GONGforhelp.com/privacy-policy/.</Text>


                        <Text style={[LayoutStyle.titlePolicy]}>No Guarantee</Text>
                        <Text style={[LayoutStyle.textPolicy]}>You accept that the service accuracy of the location
                            information can vary depending on the

                            user’s situation (physical location, cellular reception, etc.)</Text>

                        <Text style={[LayoutStyle.textPolicy]}>F. Sharing of Information</Text>

                        <Text style={[LayoutStyle.textPolicy]}>By opting-in to Location Services, you agree to be
                            located and provide consent for the

                            mobile operator to release their location information to GONG for the provisions of

                            Location Services described herein. GONG does not share information regarding your

                            location with any Third Party unless the service on which you’ve agreed to be located is

                            specifically requested by that same Third Party. In such cases, GONG may provide that

                            specific Third Party your location on a map only as it pertains to and only for the duration

                            of the service on which you’ve agreed to be located.</Text>

                        <Text style={[LayoutStyle.titlePolicy]}>LIMITATION ON LIABILITY</Text>
                        <Text style={[LayoutStyle.textPolicy]}>YOU EXPRESSLY UNDERSTAND AND AGREE THAT GONG, ITS
                            SUBSIDIARIES,

                            AFFILIATES, OFFICERS, AGENTS, EMPLOYEES, PARTNERS, AND LICENSORS

                            SHALL NOT BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL,

                            SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT

                            LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER

                            INTANGIBLE LOSSES, EVEN IF GONG HAS BEEN ADVISED OF THE POSSIBILITY OF

                            SUCH DAMAGES, RESULTING FROM THE USE OR THE INABILITY TO USE THE

                            SERVICES, UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR

                            TRANSMISSIONS OR DATA, STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON

                            THE SERVICES, OR ANY OTHER MATTER RELATING TO THE SERVICES. SOME

                            STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF

                            INCIDENTAL, CONSEQUENTIAL OR SPECIAL DAMAGES, SO THE ABOVE

                            LIMITATIONS MAY NOT APPLY TO YOU.</Text>
                        <Text style={[LayoutStyle.titlePolicy]}>Contact Us</Text>
                        <Text style={[LayoutStyle.textPolicy]}>If you have any questions or concerns about GONG and its
                            services, you may contact

                            GONG by emailing partners@GONGforhelp.com or by calling 00000000000.</Text>


                        <Text style={[LayoutStyle.titlePolicy]}>Changes to these Terms &amp; Conditions</Text>
                        <Text style={[LayoutStyle.textPolicy]}>GONG may change these Terms &amp; Conditions
                            periodically. If we make significant changes

                            in the way we treat your information in regards to Location Services, we will provide you

                            notice through the Services or by some other means, such as email. Your continued use of

                            the Services after such notice constitutes your consent to the changes. We encourage you

                            to review these Terms &amp; Conditions.</Text>

                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

