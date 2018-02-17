import React, {Component} from 'react';
import {View, Platform} from 'react-native'
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import DrawerMenu from './DrawerMenu';
import Svg, {
    LinearGradient,
    Rect,
    Defs,
    Stop
} from 'react-native-svg';

const dismissKeyboard = require('dismissKeyboard');

export default class NavigationDrawer extends Component {

    render() {
        const state = this.props.navigationState;

        dismissKeyboard();
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                styles={drawerStyles}
                open={state.open}
                onOpen={()=> {
                    setTimeout(()=>Actions.refresh({key: state.key, open: true}));
                    //Actions.refresh({key: state.key, open: true});
                }}
                onClose={()=> {
                    Actions.refresh({key: state.key, open: false})
                }}
                type="overlay"
                content={
                    <View style={{flex: 1}}>
                        <DrawerMenu
                            style={Platform.select({android:{marginRight:20}})}
                            close={()=> {
                                this._drawer.close()
                            }}
                        />
                        {Platform.OS === 'android' && (
                            <Svg
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    right: 0,
                                    width: 20,
                                }}
                            >
                            <Defs>
                                <LinearGradient id="grad" x1="0" y1="0" x2="20" y2="0">
                                    <Stop offset="0" stopColor="#000" stopOpacity=".6" />
                                    <Stop offset="1" stopColor="#000" stopOpacity="0" />
                                </LinearGradient>
                            </Defs>
                            <Rect
                                x="0"
                                y="0"
                                width="100%"
                                height="100%"
                                fill="url(#grad)"
                            />
                            </Svg>
                        )}
                    </View>
                }
                tapToClose={true}
                openDrawerOffset={0.2}
                negotiatePan={true}
                tweenHandler={(value) =>({
                    mainOverlay: {opacity: value},
                    drawer: {shadowOpacity: value}
                })}
            >
                <DefaultRenderer
                    navigationState={state.children[0]}
                    onNavigate={this.props.onNavigate}
                />
            </Drawer>
        );
    }
}

const drawerStyles = {
    drawer: {shadowColor: '#000', shadowOpacity: 0, shadowRadius: 10, shadowOffset:{width:5}},
    mainOverlay: {backgroundColor: 'rgba(0, 0, 0, .5)', opacity: 0}
};