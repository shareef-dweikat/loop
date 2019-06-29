import React from 'react';
import { StyleSheet, TextInput,ImageBackground
  ,View,Text,Button ,Image, TouchableHighlight} from 'react-native';
import {user_info} from '../dummy';
import { FlatList, ListItem } from 'react-native-gesture-handler';



class UserProfile extends React.Component {

  render() {
    return (
     <View>
       <ImageBackground source={require("../assets/login_bg.jpg")} style={styles.header_image}>
         <View style={styles.header_avatar}>
          <Image source={require("../assets/user.png")} style={styles.userimage}/>
          <Text style={styles.username}>{user_info.username}</Text>
          </View>
       </ImageBackground>
       
     </View>
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
 header_image: {
  height: 200,

 },
 header_avatar: {
   position: 'relative',
   top: 110,
   alignSelf: 'center',
 },
 username: {
   position:'relative',
   textAlign: 'center',
   fontWeight: 'bold',
   fontSize: 14
 },
 userimage: {
  width: 200,
  height: 200,
 }
});
export default UserProfile