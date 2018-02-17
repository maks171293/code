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

export default class PrivacyPolicy extends React.Component {

    render() {
        return (
            <View style={[LayoutStyle.container, LayoutStyle.containerFlex]}>
                <Text style={[LayoutStyle.fuelTitle]}>Privacy Policy</Text>
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
                            <Text style={LayoutStyle.fuelText}>GONG Privacy policy</Text>
                            <Text style={LayoutStyle.fuelText}>Last updated: 9th of November 2016</Text>
                        </View>

                        <Text style={[LayoutStyle.textPolicy]}>This privacy policy sets out how GONG Technologies Ltd.,
                            (“we”, “us” or “our”) collects,

                            uses and protects any information that you give us when you use our website, mobile

                            apps, or any other products, services or websites offered by us (“Services”). We are

                            committed to ensuring that your privacy is protected. Should we ask you to provide certain

                            information by which you can be identified when using this website, then you can be

                            assured that it will only be used in accordance with this privacy statement, as updated

                            from time to time.</Text>
                        <Text style={[LayoutStyle.titlePolicy]}>Updates</Text>
                        <Text style={[LayoutStyle.textPolicy]}>We may change this policy from time to time by updating
                            this page. You should check this
                            page from time to time to ensure that you are happy with any changes.</Text>
                        <Text style={[LayoutStyle.titlePolicy]}>Links to Other Websites, Apps and Services</Text>
                        <Text style={[LayoutStyle.textPolicy]}>Our websites and other Services may contain links to
                            other third party websites, apps and

                            services of interest. However, once you have used these links to leave our site, you should

                            note that we do not have any control over such third party services. Therefore, we cannot

                            be responsible for the protection and privacy of any information that you provide while

                            visiting such sites and services and they are not governed by this privacy statement. You

                            should exercise caution and look at the privacy statement applicable to the third party
                            sites

                            and services in question.</Text>
                        <Text style={[LayoutStyle.titlePolicy]}>Collection of Your Information</Text>
                        <Text style={[LayoutStyle.textPolicy]}>We collect or receive information about your interactions
                            with us. Depending on how you

                            use our Services, your information may include:</Text>

                        <Text style={LayoutStyle.textPolicy}>• registration-related information (such as name,
                            addresses, e-mail addresses, telephone

                            numbers, occupation, information imported from social log in permissions granted to us,

                            etc.);</Text>

                        <Text style={LayoutStyle.textPolicy}>• information about the Services that you use, how
                            frequently you use them, and your

                            responses to the offerings and advertisements presented or made available by us;</Text>

                        <Text style={LayoutStyle.textPolicy}>• information about the searches you perform on our
                            websites or in our other Services and

                            how you use the results of those searches;</Text>

                        <Text style={LayoutStyle.textPolicy}>• transaction-related information (such as credit card or
                            other preferred means of payment,

                            billing information, or a history of purchases through our Services);</Text>

                        <Text style={LayoutStyle.textPolicy}>• customer service information about you as a user of our
                            Services;</Text>

                        <Text style={LayoutStyle.textPolicy}>• location data;</Text>

                        <Text style={LayoutStyle.textPolicy}>• information about any devices, connections and methods
                            used to access and interact

                            with us; or</Text>

                        <Text style={LayoutStyle.textPolicy}>• other information specifically related to your use of
                            Services, including information that

                            you publicly post using tools made available by us.

                            Your information may be supplemented with additional information from other companies

                            such as publicly available information, information about households, and other

                            information that we may append or match to your information.

                            We may also receive or collect certain technical information when you use our Services.

                            This may include: your browser or operating system, your manner of connecting to the

                            Internet and the name of your Internet service provider or wireless carrier; your Internet

                            protocol (IP) address; information about referring websites or services (websites you used

                            immediately prior to using our websites or other Services; exiting websites or services

                            (immediately after using our website or other Services); and data relating to malfunctions

                            or problems occurring when you use our Services. Additionally, we may collect information

                            about other software on your device for the limited purpose of protecting your security or

                            improving your online experience.</Text>
                        <Text style={[LayoutStyle.titlePolicy]}>We do not currently honor “Do Not Track” requests</Text>
                        <Text style={[LayoutStyle.textPolicy]}>How Your Information is used</Text>

                        <Text style={[LayoutStyle.textPolicy]}>Your information is used for purposes that
                            include:</Text>

                        <Text style={[LayoutStyle.textPolicy]}>• to operate and improve the Services available through
                            us;</Text>

                        <Text style={[LayoutStyle.textPolicy]}>• to personalize the content and advertisements provided
                            to you (including to present

                            offers to you on behalf of business partners and advertisers);</Text>

                        <Text style={[LayoutStyle.textPolicy]}>• to fulfill your requests for tools, software,
                            functionality, features and other products, and

                            services;</Text>

                        <Text style={[LayoutStyle.textPolicy]}>• to communicate with you and respond to your
                            inquiries;</Text>

                        <Text style={[LayoutStyle.textPolicy]}>• to conduct research about your use of our products;
                            and</Text>

                        <Text style={[LayoutStyle.textPolicy]}>• to help offer you other products, features, or services
                            that may be of interest.</Text>

                        <Text style={[LayoutStyle.textPolicy]}>We may use cookies, web beacons or other technologies in
                            combination with your

                            information to enhance and personalize your experience. You can choose to accept or

                            decline cookies. Most web browsers automatically accept cookies, but you can usually

                            modify your browser setting to decline cookies if you prefer. However, it&#39;s important to

                            remember that many of our Services may not function properly if your cookies are

                            disabled.</Text>
                        <Text style={[LayoutStyle.titlePolicy]}>Sharing of Your Information</Text>
                        <Text style={[LayoutStyle.textPolicy]}>We do not rent or sell your personally identifiable
                            information (such as name, address,

                            telephone number, and credit card information) to third parties for their marketing

                            purposes. We may share your information with third parties to provide products and

                            services you have requested, when we have your consent, or as described in this Privacy

                            Policy.</Text>

                        <Text style={[LayoutStyle.textPolicy]}>We may share aggregated, non-personally identifiable
                            information, publicly and with our

                            partners like publishers, advertisers or connected sites. For example, we may share

                            information publicly to show trends about the general use of our services.</Text>

                        <Text style={[LayoutStyle.textPolicy]}>The contents of your online communications, as well as
                            other information about you as a

                            user of our Services, may be accessed and disclosed under the following circumstances:

                            in response to lawful governmental requests or legal process (for example, a court order,

                            search warrant or subpoena), in other circumstances in which we have a good faith belief

                            that a crime has been or is being committed by a user of our Services, that an emergency

                            exists that poses a threat to the safety of you or another person, when necessary either to

                            protect our rights or property, or for us to render the service you have requested.</Text>

                        <Text style={[LayoutStyle.textPolicy]}>Many of our services let you share information with
                            others. Remember that when you

                            share information publicly, others besides us have access to it, and it may be indexable by

                            search engines, or copied, forwarded or archived by others.</Text>

                        <Text style={[LayoutStyle.textPolicy]}>Our offerings may include features or functionalities
                            provided by third parties. In the

                            process of providing such functionalities within our Services, your browser may

                            automatically send certain technical information to the third party provider. The use of

                            these third-party provided features or functionalities is subject to their own privacy
                            policies.

                            Business partners or other third parties may receive data about groups of our users, but do

                            not receive information that personally identifies you.</Text>

                        <Text style={[LayoutStyle.textPolicy]}>We may use agents and contractors in order to help
                            operate our Services. Their use of

                            information is limited to these purposes.</Text>

                        <Text style={[LayoutStyle.textPolicy]}>In the event that ownership of us was to change as a
                            result of a merger, acquisition, or

                            transfer to another company, your information may be transferred. If such a transfer results

                            in a material change in the use of your information, you will be provided notice (which may

                            be via updates to this page) about the choices you have to decline to permit such a

                            transfer.</Text>
                        <Text style={[LayoutStyle.titlePolicy]}>Display of Advertising</Text>
                        <Text style={[LayoutStyle.textPolicy]}>Your information may be used for the presentation of advertisements. We may use ad

                            networks to customize and display advertising on our Services. We may share certain

                            information about you as a user (such as age, zip code, or other information we have

                            collected or received) with certain ad network and service providers to help them deliver

                            more relevant content and advertisements through their networks.  We may from time to

                            time work with other companies for certain services such as analytics or advertising, and

                            you may be subject to their privacy policies as well, though you may opt out through them

                            directly or contact us with questions.</Text>
                        <Text style={[LayoutStyle.titlePolicy]}>Your Choices about Your Information</Text>
                        <Text style={[LayoutStyle.textPolicy]}>You may choose to restrict the collection or use of your personal information in the

                            following ways:</Text>

                            <Text style={[LayoutStyle.textPolicy]}>• Whenever you are asked to fill in a form on this website or our other Services, consider

                            what information to include and exclude; in addition, sometimes there may be a box that

                            you can click to indicate that you do not want the information to be used by anybody for

                            direct marketing purposes</Text>

                                <Text style={[LayoutStyle.textPolicy]}>• We may provide you with access to your registration information and the ability to edit

                            this information in your account settings dashboard and profile pages.  Please be aware

                            that even after you delete or update information within our Services, we may not

                            immediately delete residual copies from our active servers and may not remove

                            information from our backup systems.</Text>

                                    <Text style={[LayoutStyle.textPolicy]}>• Some of our Services may provide you with additional information and choices about

                            your privacy, which you should review.</Text>

                                        <Text style={[LayoutStyle.textPolicy]}>• If you have previously agreed to us using your personal information for direct marketing

                            purposes, you may change your mind at any time by writing to us using the contact

                            information below.</Text>
                        <Text style={[LayoutStyle.titlePolicy]}>Our Commitment to Security</Text>
                        <Text style={[LayoutStyle.textPolicy]}>We have established safeguards to help prevent unauthorized access to or misuse of your

                            information, but cannot guarantee that your information will never be disclosed in a

                            manner inconsistent with this Privacy Policy (for example, as a result of unauthorized acts

                            by third parties that violate applicable law or our policies). To protect your privacy and

                            security, we may use passwords or other technologies to register or authenticate you and

                            enable you to take advantage of our Services, and before granting access or making

                            corrections to your information.</Text>
                        <Text style={[LayoutStyle.titlePolicy]}>Age</Text>
                        <Text style={[LayoutStyle.textPolicy]}>Our Services are intended for a general audience, and children under the age of thirteen

                            should not register, or should only register with the consent of a parent or guardian.</Text>
                        <Text style={[LayoutStyle.titlePolicy]}>How to Contact Us</Text>
                        <Text style={[LayoutStyle.textPolicy]}>If you have any questions or concerns about this Privacy Policy or its implementation, you

                            may contact us at support@gongforhelp.com If you believe your information is wrong, we

                            strive to give you ways to update it quickly or to delete it unless we have to keep that

                            information for legitimate business or legal purposes. When updating your personal

                            information, we may ask you to verify your identity before we can act on your request.  We

                            may reject requests that are unreasonably repetitive, require disproportionate technical

                            effort (for example, developing a new system or fundamentally changing an existing

                            practice), risk the privacy of others, or would be extremely impractical (for instance,

                            requests concerning information residing on backup tapes).</Text>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

