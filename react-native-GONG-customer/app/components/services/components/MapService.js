import  React, {Component} from 'react';
import  LayoutStyle from  '../../../styles/Layout'
import  {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Image,
    Animated,
} from 'react-native';

import MapView from 'react-native-maps';
import AutoComplete from '../../AutoComplete';
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.011527469804754276;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const DELTS = {
    latitude: 0.011527469804754276,
    longitude: LATITUDE_DELTA * ASPECT_RATIO
};
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../../assets/fonts/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

export default  class MapService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            destinationAddress: {
                width: 320,
                top: 10,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 8,
                height: 265
            },
        };

        this.focusChange = this.focusChange.bind(this);
    }

    focusChange(zIndex) {
        let destinationAddress = {
            ...this.state.destinationAddress,
            zIndex: zIndex,
        };
        this.setState({destinationAddress});
    }

    render() {
        return (
            <View>
                <View
                    style={[this.state.destinationAddress]}
                    onFocus={()=> this.focusChange(18)}
                    onBlur={()=> this.focusChange(9)}
                    onChange={() => this.props.destinationCheck(0)}>
                    <AutoComplete
                        autoCompleteChange={(location, address) => this.props.autoCompleteChange(location, address)}
                        addressCheck={() => this.props.destinationCheck(1)}
                        isAddressCheck={this.props.destinationCheckStatus}
                        text={this.props.searchString}
                        editable={this.props.trueSwitchIsOn}
                    />
                    <Image source={require('../../../assets/images/position.png')}
                           resizeMode={'stretch'}
                           style={LayoutStyle.destinationImageOne}/>
                    {this.props.destinationCheckStatus != 0 ?
                        <Image source={require('../../../assets/images/check.png')}
                               resizeMode={'stretch'}
                               style={LayoutStyle.destinationImageTwo}/>
                        : null
                    }
                </View>
                <View style={LayoutStyle.servicesMapView}>
                    <MapView style={LayoutStyle.serviceMap}
                             resizeMode={'cover'}
                             region={this.props.currentRegion != 0 ? this.props.currentRegion : this.props.region}
                             onLongPress={(name) => this.props.manualPress(name)}
                             onRegionChangeComplete={(newRegion)=> this.props.onRegionChangeComplete(newRegion)}>
                        <MapView.Marker
                            coordinate={{
                                latitude: this.props.region.latitude,
                                longitude: this.props.region.longitude,
                            }}
                            anchor={{
                                x: 0.5,
                                y: 0.5,
                            }}
                            style={LayoutStyle.marker}
                            image={require('../../../assets/images/marker.png')}
                        />
                        { this.props.regionDestination != 0 ?
                            <MapView.Marker
                                coordinate={{
                                    latitude: this.props.regionDestination.latitude,
                                    longitude: this.props.regionDestination.longitude,
                                }}
                                anchor={{
                                    x: 0.5,
                                    y: 0.5,
                                }}
                                style={LayoutStyle.marker}
                                image={require('../../../assets/images/marker-green.png')}
                            /> : null}
                        {this.props.allPoints ?
                            <MapView.Polyline
                                coordinates={this.props.allPoints}
                                strokeColor="rgba(0,0,200,0.5)"
                                strokeWidth={3}
                                lineDashPattern={[5, 2, 3, 2]}
                            /> : null}
                    </MapView>

                    {this.props.showDistance ?
                        <Text style={LayoutStyle.distanceText}>
                            {this.props.distance}
                        </Text> : null }
                </View>
            </View>
        );
    }
}