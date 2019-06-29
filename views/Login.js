import React from 'react';
import { StyleSheet, TextInput,ImageBackground, KeyboardAvoidingView,View,Text,Button ,Image} from 'react-native';



export default class Login extends React.Component {

  state={
    phone:'',
    password:'' 
  }

  componentWillMount (){
    
  }

  render() {
    return (
      <KeyboardAvoidingView style={{flex:1}} behavior="padding">
      
      <ImageBackground source={require('./../assets/pexels-photo-949587.jpeg')} style={styles.container}>
        <View style={{flexDirection:"row",justifyContent:"center"}}>
            <Image  source={require('../assets/icon.png')} style={{marginTop:30,height:150}}/>
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
               <Button title="Log in" onPress={()=>this.handleClick()}/>
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
    padding:8,
    margin: 15,
    height: 40,
    width:"80%",
    borderColor: '#7a42f4',
    borderWidth: 1,
    backgroundColor:"white"
 },
});
