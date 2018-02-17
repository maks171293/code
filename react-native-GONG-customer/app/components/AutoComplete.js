import  React, {Component} from 'react';
import  {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import {GooglePlacesAutocomplete} from '../components/GooglePlacesAutocomplete';

const {width, height} = Dimensions.get('window');

export default class AutoComplete extends Component {

    render() {
        return (
            <GooglePlacesAutocomplete
                placeholder='Search'
                ref="googleComplete"
                textInputProps={{
                    userProps: {
                        onSubmitEditing: (event) => {
                            this.refs.textInput.blur();
                        }
                    }
                }}
                listViewDisplayed={this.props.editable}
                editable={this.props.editable}
                minLength={3} // minimum length of text to search
                autoFocus={false}
                fetchDetails={true}

                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                    let location = details.geometry.location;
                    let address = details.formatted_address;
                    this.props.autoCompleteChange(location, address);
                    this.props.addressCheck();
                    /*console.log(data, 'data')*/
                }}
                text = {this.props.text}
                getDefaultValue={() => {
                    return this.props.text; // text input default value
                }}
                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: 'AIzaSyCvmHIDCBdcW826SWpbMidBfr_LbCFnstI',
                    language: 'en', // language of the results
                    types: 'geocode', // default: 'geocode'
                }}
                styles={{
                    textInputContainer: {
                        borderWidth: 1,
                        borderRadius: 5,
                        height: 40,
                        borderColor: this.props.isAddressCheck != 0 ? '#a7a7a7' : 'red',
                        backgroundColor: 'rgb(255, 255, 255)',
                    },
                    textInput: {
                        fontSize: 14,
                        backgroundColor: 'white',
                        borderRadius: 5,
                        margin: 0,
                        marginBottom: 0,
                        paddingLeft: 50,
                        paddingRight: 30,
                        paddingBottom: 7,
                        color: '#949494'
                    },
                    description: {
                        fontWeight: 'bold',
                        height: 40
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb',
                        height: 40
                    },
                    listView: {
                        backgroundColor: 'rgba(255, 255, 255, 111)',
                        height: 40,
                    },
                    powered: {
                        marginTop: height
                    },
                }}

                currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
                currentLocationLabel="Current location"
                nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                GoogleReverseGeocodingQuery={{
                    // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                }}
                GooglePlacesSearchQuery={{
                    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                    rankby: 'distance',
                    types: 'food',
                }}
                filterReverseGeocodingByTypes={['street_address']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
            />

        );
    }
}