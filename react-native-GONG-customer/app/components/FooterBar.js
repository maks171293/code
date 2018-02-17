import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Image,
    Navigator} from 'react-native'
import  LayoutStyle from  '../styles/Layout'
import {Actions,
    DefaultRenderer,} from 'react-native-router-flux';



export default  class extends React.Component {
    render() {
        console.log(Actions.get);
        return (
            <View style={LayoutStyle.footerBarBlock}>
                <View style={LayoutStyle.footerLeftBlock}>
                    { this.props.showBack ?
                        <TouchableOpacity onPress={this.props.backScreen != null ? Actions[this.props.backScreen] : Actions.pop}>
                            <Image source={require('../assets/images/left-arrow.png')}
                                   resizeMode={'stretch'}
                                   style={LayoutStyle.footerLeftArrow}/>
                            <Text style={LayoutStyle.footerBack}>Back</Text>
                        </TouchableOpacity> : null}
                </View>
                <View style={LayoutStyle.footerRightBlock}>
                    { this.props.showConfirm  ?
                    <TouchableOpacity onPress={Actions[this.props.nextScreen]}>
                        <Text style={LayoutStyle.footerConfirm}>Confirm</Text>
                        <Image source={require('../assets/images/right-arrow.png')}
                               resizeMode={'stretch'}
                               style={LayoutStyle.footerRightArrow}/>
                    </TouchableOpacity> : null }
                </View>
            </View>

        );
    }
}

