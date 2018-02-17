import {ActionConst} from 'react-native-router-flux';
import * as Action from '../constants/actionsRoute';

const initialState = {
    scene: {},
    history: [],
    // submit: '',
    showConfirm: true,
    backButton: false,
    disabledDrawer: false
};

export default function reducer(state = initialState, action = {}) {
    let route = state;
    let h = route.history;
    /**
     * nullabling submit to avoid cyclic recurrence
     * @type {string}
     */
    // route.submit = '';

    switch (action.type) {
        case ActionConst.REPLACE:
            let sceneKey = action.key;
            // console.log(state, action);
            // /**
            //  * check show confirm
            //  */
            // in_array(sceneKey, Action.WITHOUT_CONFIRM) ? route.showConfirm = false : route.showConfirm = true;
            // /**
            //  * 'ifs' for check double click
            //  */
            if( (h.length === 0) || (h[h.length - 1].scene != sceneKey) ) {
                // let step = ;
                h.push({scene: sceneKey});
                // return {
                //     ...route
                // };
            }
            // if ()
            // {
            //     let step = {
            //         scene: sceneKey,
            //     };
            //     h.push(step);
            // }
            return {
                ...route,
                backButton: false
            };
        case Action.DO_ROUTE:
            h.splice(h.length - 2, 2);
            return {
                ...route,
                backButton: false
            };
        // case Action.SHOW_CONFIRM:
        //     route.showConfirm = true;
        //     console.log('changing');
        //     return {
        //         ...route
        //     };
        // case Action.DO_CONFIRM:
        //     return {
        //         ...route,
        //         submit: action.submit ? action.submit : ''
        //     };
        // case Action.DO_SUBMIT:
        //     return {
        //         ...route
        //     };
        // case Action.CLEAN_HISTORY:
        //     return {
        //         ...route,
        //         history: []
        //     };
        // case ActionConst.FOCUS:
        //     return {
        //         ...route
        //     };
        case Action.CHANGE_BACK_BUTTON:
            if (!action.scene) {
                return {
                    ...route,
                    backButton: false
                }
            }
            return {
                ...route,
                backButton: {
                    route: action.scene,
                    props: action.props
                },
            };
        case Action.DISABLE_DRAWER:
            return {
                ...route,
                disabledDrawer: action.status
            };
        default:
            return state;
    }

    // function in_array(value, array) {
    //     for(var i = 0; i < array.length; i++)
    //     {
    //         if(array[i] == value) return true;
    //     }
    //     return false;
    // }
}