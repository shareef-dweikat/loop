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
            // response = {alert: "Logged in successfully" ,alertType: 'sucess'}
            this.props.navigation.navigate('Home')
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
        
        <View style={{justifyContent:"center"}}>
            <Image  source={require('../assets/loop.png')} style={{marginTop:30,height:150,width: 150}}/>
            <Text style={{textAlign:'center', fontSize: 24, color: 'white'}}>L00P</Text>
        </View>  

         <TextInput style = {styles.input}
               placeholder = "Email"
               placeholderTextColor = "#428baa"
               autoCapitalize = "none"
               value={this.state.phone}
               onChangeText={(value)=>this.setState({email:value})}
               />
            
            <TextInput style = {styles.input}
               placeholder = "Password"
               placeholderTextColor = "#428baa"
               value={this.state.password}
               secureTextEntry={true}
               onChangeText={(value)=>this.setState({password:value})}
               />
               <View style={styles.button}>
                <Button title="Log in" color="#428bca" accessibilityLabel="Press to login" 
                onPress={()=>this.handleClick()}/>
               </View>
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
    paddingLeft: 10,
    margin: 15,
    height: 60,
    width: "90%",
    backgroundColor:"white",
    color: '#333',
    borderColor: '#428bca',
    borderWidth: 3,
    fontSize: 20
 },
 button: { 
    width: '90%',
    backgroundColor: "#428bca"
 }
});
