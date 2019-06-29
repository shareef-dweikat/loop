import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './views/Login'
import Home from './views/Home'

const MainNavigator = createStackNavigator({
  Home: {screen: Home,navigationOptions:()=>({
   
    title:"Home",
    headerStyle:{
    backgroundColor:"#428bca",

    },
    headerTitleStyle: { 
      textAlign:"center", 
      flex:1,
      color:"white"
  },
    }),
  },
  Login: {screen: Login,navigationOptions:()=>({
    title:"Login",
  header:null,
  
  })},
 
});

const App = createAppContainer(MainNavigator);

export default App;