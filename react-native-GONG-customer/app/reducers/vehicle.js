import * as VAction from '../constants/actionsVehicle';

import * as global from '../constants/global';
import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';

const initialState = {
    vehicleName: '',
    vehicleModel: '',
    vehicleId: '',
    vehicleLicensePlate: '',
    vehicleColor: ''
};
/**
 * load vehicle from storage
 * @type {Storage}
 */
let storage = new Storage({
    size: 100000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
});
storage.load({
    key: global.VEHICLE,
}).then(ret => {
    if (ret) {
        initialState.vehicleName = ret.vehicleName;
        initialState.vehicleId = ret.vehicleId;
        initialState.vehicleModel = ret.vehicleModel;
        initialState.vehicleLicensePlate = ret.vehicleLicensePlate;
        initialState.vehicleColor = ret.vehicleColor;
    }
});


export default function vehicle(state = initialState, action = {}) {
    switch (action.type) {
        case VAction.VEHICLE_UPDATE:
            return {
                ...state,
                vehicleName: action.vehicle.vehicleName,
                vehicleModel: action.vehicle.vehicleModel,
                vehicleId: action.vehicle.vehicleId,
                vehicleLicensePlate: action.vehicle.vehicleLicensePlate,
                vehicleColor: action.vehicle.vehicleColor
            };

        default:
            return state;
    }
}
