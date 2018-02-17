import React from 'react';
import {Button, View, Text, WebView,ScrollView, BackHandler, TouchableHighlight} from 'react-native'
import api from '../services/api'

const script = `
<script>
window.location.hash = 1;
 var calculator = document.createElement("div");
 calculator.id = "height-calculator";
 while (document.body.firstChild) {
    calculator.appendChild(document.body.firstChild);
 }
 document.body.appendChild(calculator);
 document.title = calculator.clientHeight;
</script>
`

const style = `
<style>
body, html, #height-calculator {
    margin: 0;
    padding: 0;
}
#height-calculator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
</style>
`

export default class TermsOfAgreement extends React.Component {
    state = {
        termsHtml: '',
        height: 0,
        isScreenFocused: false
    }
    onNavigationChange = (event) => {
        if (event.title) {
            const htmlHeight = Number(event.title) //convert to number
            this.setState({height:htmlHeight});
        }

     }
    componentWillMount(){
        api.fetchTermsOfService().then((response)=>{
            return response.text()
        }).then((data)=>{
            this.setState({termsHtml: data})
        })
    }
    componentDidMount(){
        this._screenFocusListener = this.props.navigation.addListener('didFocus', () => {
            BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
            this.setState({isScreenFocused: true})
          });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    }

    onBackButtonPressAndroid = () => {
        this.props.navigation.navigate('termsAgreement');
        return true;
    };

    render() {
        console.log(this.state.height)
      return (
        <View style={{marginTop: 24}}>
         <TouchableHighlight style={{marginBottom: 10, height: 30}} onPress={()=>this.props.navigation.navigate('termsAgreement')}>
                    <Text style={{fontSize: 16, color: '#444', marginLeft: 10}}>Back</Text>
         </TouchableHighlight>  
          <ScrollView>
            <WebView
                scrollEnabled={false}
                source={{html: this.state.termsHtml+style+script}}
                style={{margin: 5, height: this.state.height}}    
                javaScriptEnabled ={true}
                onNavigationStateChange={this.onNavigationChange}
                />
            </ScrollView>
        </View>
      );
    }
  }