import React, {Component}from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback
} from "react-native";
const dismissKeyboard = require('dismissKeyboard');
const defaultMask = '+(xxx)-xx-xx';
const defaultSeparator = 'x';

function makeMaskedArr (string = defaultMask, separator = defaultSeparator) {
    return string.split(separator);
}

export default class MaskedTextInput extends Component {
    constructor (props) {
        super(props);
        this.state = {
            maskedText: '',
        };

        this.mask = makeMaskedArr(this.props.mask, this.props.separator);
        this.regExp = this.props.regExp || /^\d+$/;

        this._doMask = this._doMask.bind(this);
    }

    componentDidMount () {
        this._doMask(this.props.value);
    }

    _doMask (text = '') {

        let pureString = '',
            maskedString = '',
            maskIndex = 0;

        for (let i = 0; i < text.length; i++) {

            if (maskIndex >= this.mask.length-1) break;

            let letter = text[i].match(this.regExp);

            if (!letter) continue;

            maskedString += this.mask[maskIndex++]+letter;
            pureString += letter;

        }

        this.setState({maskedText: maskedString});
        return pureString;

    }

    focus () {
        this.maskedInput.focus();
    }

    render() {
        return (
            <TextInput
                maxLength={this.props.mask.length}
                {...this.props}
                ref={c=>this.maskedInput=c}
                onChangeText={text => {
                    const pureText = this._doMask(text);
                    this.props.onChangeText(pureText);
                }}
                value={this.state.maskedText}
            />
        )
    }
}
