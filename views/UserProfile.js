import React from 'react';
import { ScrollView,StyleSheet, TextInput,ImageBackground
  ,View,Text,Button ,Image, TouchableHighlight} from 'react-native';
import {user_info} from '../dummy';
import { FlatList, ListItem, TouchableOpacity } from 'react-native-gesture-handler';



class UserProfile extends React.Component {

  render() {
    return (
     <ScrollView>
       <ImageBackground source={require("../assets/login_bg.jpg")} style={styles.header_image}>
         <View style={styles.header_avatar}>
          <Image source={require("../assets/user.png")} style={styles.userimage}/>
          <Text style={styles.username}>{user_info.username}</Text>
          </View>
       </ImageBackground>
       
       <View style={{marginTop:150,margin:8}}>

           <View style={{marginBottom:8}}>
              <Text style={{fontSize:22,color:"#428bca",textAlign:"center" }}>Email</Text>
              <Text style={{fontSize:18,textAlign:"center"}}>{user_info.email}</Text>
           </View>

        
           <View style={{marginBottom:8}}>
              <Text style={{fontSize:22,color:"#428bca",textAlign:"center" }}>Birthdate</Text>
              <Text style={{fontSize:18,textAlign:"center"}}>{user_info.birthdate}</Text>
           </View>

           <View style={{marginBottom:8}}>
              <Text style={{fontSize:22,color:"#428bca",textAlign:"center" }}>Role</Text>
              <Text style={{fontSize:18,textAlign:"center"}}>{user_info.role}</Text>
           </View>
           <Text style={{fontSize:22,marginTop:8,textAlign:'center',color:"#428bca"}}>Interests</Text>
           <FlatList
            horizontal
            data={user_info.interest}
            renderItem={({item}) => <View style={{maxWidth:120,marginRight:4}}><TouchableOpacity><Text style={{backgroundColor:"#428bca",borderRadius:10,padding:8,color:"white"}}>{item.title}</Text></TouchableOpacity></View>}
           />

       </View>
     </ScrollView>
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
   fontSize: 22
 },
 userimage: {
  width: 200,
  height: 200,
 }
});
export default UserProfile