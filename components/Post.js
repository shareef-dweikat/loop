import React from 'react';
import { StyleSheet, TextInput,ImageBackground, KeyboardAvoidingView,View,Text,Button ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Post extends React.Component {

  componentWillMount (){
    
  }

  render() {
    return (
     <View style={{marginTop:8,borderStyle:"solid",borderWidth:3,borderColor:"#e1e3e6",margin:"auto",width:"99%"}}>
           <Image style={{width:"99.99%",margin:"auto"}} source={require('../assets/pexels-photo-949587.jpeg')}/>  
           <Text style={{padding:8}}>Item's Name</Text>
           <View style={{flexDirection:"row",justifyContent:"flex-start",margin:20}}>
               <View style={{flexDirection:"row"}}>
                  <Text style={{marginRight:4}}>4</Text>
                  <Icon style={{marginRight:10,marginLeft:8}} name="ios-thumbs-up" size={24}/>
               </View>
               <View style={{flexDirection:"row"}}>
                   <Text style={{marginRight:4}}>4</Text>
                   <Icon  style={{marginRight:4}} name="ios-chatboxes" size={24}/>
               </View>
           </View>
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
});

  export default Post;