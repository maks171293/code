import {Dimensions, Platform, NativeModules} from "react-native";
let {width, height} = Dimensions.get('window');
const menuHeight = 50;

/**
 * Dimensions
 */
const statusBarHeight = (Platform.OS === 'ios') ? 20 : NativeModules.StatusBarManager.HEIGHT;
height = height - statusBarHeight - menuHeight;

export {width, height, menuHeight};
