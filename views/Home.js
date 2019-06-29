import React from 'react';
import { StyleSheet, TextInput,ImageBackground, KeyboardAvoidingView,View,Text,Button ,Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import UserProfile from './UserProfile'
import Login from './Login'

class Home extends React.Component {

  state={
    phone:'',
    password:'' 
  }

  componentWillMount (){
    
  }

  render() {
    return (
     <View></View>
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

const TabNavigator = createBottomTabNavigator({
    Home: {screen:()=><Home />,
        navigationOptions:{
            tabBarIcon:()=><Icon name="ios-home" size={24}/>
            
          }},
    UserProfile: {screen:()=><UserProfile />,
         navigationOptions:{
                tabBarIcon:()=><Icon name="ios-contact" size={24}/>
                
              }},
        Logout: {screen:()=><Login />,
            navigationOptions:{
                tabBarIcon:()=><Icon name="md-log-out" size={24}/>
                       
        }},
  });
  
  export default createAppContainer(TabNavigator);