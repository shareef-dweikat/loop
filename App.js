import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './views/Login'
import Home from './views/Home'

const MainNavigator = createStackNavigator({
  Home: {screen: Home,navigationOptions:()=>({
  header:null
  })},
 
});

const App = createAppContainer(MainNavigator);

export default App;