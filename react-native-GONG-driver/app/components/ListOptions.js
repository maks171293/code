import  React, {Component} from 'react';
import  {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    TextInput,
    Image,
    Dimensions,
    AsyncStorage
} from 'react-native';
import LayoutStyle from  '../styles/Layout';
import icoMoonConfig from '../assets/fonts/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';


export default class ListOptions extends React.Component {

    render() {
        return (
            <View>
                {this.props.options.map((option, index) => {
                    return (
                        <View key={index}
                              style={this.props.multiple ?
                                  (option.select ? styles.selectBackground : null)
                                  :
                                  [
                                      index == 0 ? {borderColor: '#d0d0d0', borderTopWidth: 1} : null,
                                      this.props.chosenOption == index ? styles.selectBackground : null,
                                  ]}> 
                            <TouchableOpacity style={styles.demandService}
                                              onPress={()=>this.props.chooseOption(index)}>
                                {this.props.multiple ? null
                                    :
                                    <Icon size={40}
                                          name={option.key}
                                          fontSize="2"
                                          style={styles.demandServiceIcon}/> }
                                <Text style={{color: '#424242', textAlign: 'justify'}}>
                                    {option.name}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    selectBackground: {
        backgroundColor: '#ebebeb'
    },
    demandService: {
        // width: width,
        borderColor: '#d0d0d0',
        borderBottomWidth: 1,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    demandServiceIcon: {
        position: 'absolute',
        top: 2,
        left: 13,
        color: 'black'
    },
})