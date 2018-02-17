import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Image,
    Platform
} from 'react-native'
import Drawer from 'react-native-drawer';
import Main from '../containers/main';
import FooterBar from '../components/FooterBar.js';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
/**
 * setup custom icons from iconMoon
 */
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/fonts/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);


const {width, height} = Dimensions.get('window');
const dismissKeyboard = require('dismissKeyboard');

export default class NavigationDrawer extends React.Component {

    constructor() {
        super();
        this.state = {
            refresh: false
        }
    }

    render() {
        dismissKeyboard();
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                open={state.open}
                onOpen={()=>Actions.refresh({key: state.key, open: true})}
                onClose={()=> {
                    Actions.refresh({key: state.key, open: false})
                }}
                type="overlay"
                content={<Main strings={this.props.strings} close={()=> {
                    this._drawer.close()
                }}/>}
                tapToClose={true}
                openDrawerOffset={0.2}
                side={"right"}
                panCloseMask={.2}
                negotiatePan={true}>
                <DefaultRenderer navigationState={children[0]}
                                 onNavigate={this.props.onNavigate}/>

            </Drawer>
        );
    }
}

