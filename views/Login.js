import React from 'react';
import { StyleSheet, TextInput,ImageBackground, KeyboardAvoidingView,View,Text,Button ,Image ,Alert} from 'react-native';
import dummy_user from '../dummy'


export default class Login extends React.Component {

  state={
    email:'',
    password:''
  }

  componentWillMount (){
    
  }
 
  handleClick () {
      let response = {}
      if(!this.state.email && !this.state.password) { 
          response = {alert: "Please enter email and password", alertType: 'error'};
      } else {
          if(this.state.email == dummy_user.email && this.state.password == dummy_user.password) {
            response = {alert: "Logged in successfully" ,alertType: 'sucess'}
          } else {
            response = {alert: "Wrong username or password", alertType: 'error'}
          }
      }
      Alert.alert(
        response.alertType,
        response.alert,
        [
          {
            text: 'Ok',
            onPress: () => console.log('Ok Pressed'),
            style: response.alertType,
          }
        ],
        {cancelable: false},
      );

  }
  render() {
    return (
      <KeyboardAvoidingView style={{flex:1}} behavior="padding">
      
      <ImageBackground source={require('./../assets/login_bg.jpg')} style={styles.container}>
        
        <View style={{flexDirection:"row",justifyContent:"center"}}>
            <Image  source={require('../assets/loop.png')} style={{marginTop:30,height:120,width: 120}}/>
        </View>  

         <TextInput style = {styles.input}
               placeholder = "Phone"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               value={this.state.phone}
               onChangeText={(value)=>this.setState({phone:value})}
               />
            
            <TextInput style = {styles.input}
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               value={this.state.password}
               secureTextEntry={true}
               onChangeText={(value)=>this.setState({password:value})}
               />
               <Button title="Log in" color="#3344ff" style={styles.button} accessibilityLabel="Press to login" 
               onPress={()=>this.handleClick()}/>
               </ImageBackground>

      
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingLeft: 6,
    margin: 15,
    height: 60,
    width: "90%",
    backgroundColor:"white",
    color: '#3344ff',
    borderColor: '#9999ff',
    borderWidth: 3,
    fontSize: 20
 },
 button: { 
    width: 120,
    backgroundColor: "#3344ff"
 }
});
