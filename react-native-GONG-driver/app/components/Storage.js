import React, {Component}from 'react';
import {AsyncStorage} from "react-native";

const Storage = {

    get (key, callback) {
        AsyncStorage.getItem(key, callback);

    },

    /**
     *
     * @param {string} key
     * @param {object} data
     */
    set (key, data, callback) {
        console.log('storage',data);
        AsyncStorage.setItem(key, data, callback);
    },

    add () {

    },

    remove () {

    }
};

export default Storage;
