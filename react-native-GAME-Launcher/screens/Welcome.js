import React from 'react';
import { LinearGradient } from 'expo'
import { View, Text, FlatList, StyleSheet, TouchableHighlight} from 'react-native';
import { translate } from 'react-i18next';

@translate(['welcome', 'common'], { wait: true })
class Welcome extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: screenProps.t('welcome:title')
      });
    state = { 
        motd: [{key: 'The best and cool message of the big and hard day 1'},
            {key: 'The best and cool message of the big and hard day 2'},
            {key: 'The best and cool message of the big and hard day 3'},
            {key: 'The best and cool message of the big and hard day 4'},
            {key: 'The best and cool message of the big and hard day 5'},
            {key: 'The best and cool message of the big and hard day 6'},
            {key: 'The best and cool message of the big and hard day 7'},
            {key: 'The best and cool message of the big and hard day 8'},
            {key: 'The best and cool message of the big and hard day 9'},
            {key: 'The best and cool message of the big and hard day 10'},
            {key: 'The best and cool message of the big and hard day 11'}
    ]
     }

    render() {
        const {t, i18n } = this.props;

        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#EDAE69', '#72EACE']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: '100%',
                    }}
                    />
                <View style={{marginTop: 40, marginBottom: 30}}>
                    <Text style={styles.dayMessage}>{t('welcome:msgOfTheDay')}</Text>
                </View>
                <FlatList
                    data={this.state.motd}
                    renderItem={({item})=><Text style={styles.listItem}>{item.key}</Text>}
                />
                <TouchableHighlight style={styles.button} onPress={()=>{this.props.navigation.navigate('main')}}>
                    <Text style={styles.text}>OK</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        width: 150,
        padding: 10,
        margin: 20,
        borderRadius: 50, 
        borderColor: '#FFF4B9',
        borderWidth: 2,
        borderStyle: 'solid'
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
    listItem: {
        color: '#fff',
        fontSize: 20,
        padding: 20,
        textAlign: 'center',
        borderBottomColor: '#FFF4B9',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    dayMessage: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 30
    }
    });