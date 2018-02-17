import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import Loading from './screens/Loading'
import Login from './screens/Login'
import Welcome from './screens/Welcome'
import Lobby from './screens/Lobby'
import Friends from './screens/Friends'
import Loot from './screens/Loot'
import Game from './screens/Game'
import Winners from './screens/Winners'
import Sale from './screens/Sale'
import TermsAgreement from './screens/TermsAgreement'

import ModalScreen from './components/Menu'
import TermsOfAgreement from './components/TermsOfAgreement'

import { I18nextProvider, translate } from 'react-i18next';
import { TabNavigator, StackNavigator } from 'react-navigation';

import i18n from './services/localize/i18n';

import store from './store'

let MainNavigator = TabNavigator({
  loader: {screen: Loading },
  login: {screen: Login},
  welcome: {screen: Welcome},
  main: {
    screen: TabNavigator({
      sale: {screen: Sale},
      winners: {screen: Winners},
      lobby: {screen: Lobby},
      friends: {screen: Friends},
      loot: {screen: Loot},
    }, {
      laze: false,
      swipeEnabled: false,
      initialRouteName: 'lobby',
      animationEnabled: false, 
      tabBarPosition: "bottom", 
      tabBarOptions: {
        activeTintColor: '#e91e63',
        showIcon: true,
        iconStyle: {
          width: 40,
          height: 40
      },
      style: {
        backgroundColor: "#444",
      },
      pressColor: "#fff",
      upperCaseLabel: false,
      showLabel: true,
      indicatorStyle: {
        backgroundColor: 'transparent'
      },
      labelStyle: {
        padding: 0,
        margin: 0,
        fontSize: 12
      }
    }
    }
  )
  },
  MyModal: {
    screen: ModalScreen,
  },
  TermsAgreement: {
    screen: TabNavigator({
      termsAgreement: {screen: TermsAgreement},
      termsOfService: {screen: TermsOfAgreement}
    }, {
      swipeEnabled: false, 
      backBehavior: 'none',
      animationEnabled: false,
      navigationOptions: {
        lazy:true,
        tabBarVisible: false} 
    })
  }
}, {
  mode: 'modal',
  headerMode: 'none',
  swipeEnabled: false, 
  backBehavior: 'none',
  animationEnabled: false,
  tabBarPosition: "bottom", 
  lazy: true,
  navigationOptions: {
    lazy:false,
    tabBarVisible: false} 
  })

const WrappedMainNavigator = () => {
  return <MainNavigator screenProps={{ t: i18n.getFixedT() }}/>
}

const ReloadAppOnLanguageChange = translate('translation',{
  bindI18n: 'languageChanged',
  bindStore: false
})(WrappedMainNavigator)

export default class App extends React.Component {
  componentDidMount(){
    // Expo.Util.getCurrentLocaleAsync().then((data)=> console.log(data))
    Expo.SecureStore.deleteItemAsync('sessionId')
  }
  render() {
    
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store} key="provider">
          <View style={styles.container}>
            <ReloadAppOnLanguageChange />
          </View>
        </Provider>
      </I18nextProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

