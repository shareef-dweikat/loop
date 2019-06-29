import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './views/Login'
 
const MainNavigator = createStackNavigator({
  Login: {screen: Login,navigationOptions:()=>({
  header:null
  })},
 
});

const App = createAppContainer(MainNavigator);

export default App;