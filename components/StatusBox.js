import React from 'react';
import { StyleSheet,Button, Image,Text,FlatList,ScrollView,TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



class StatusBox extends React.Component {
state={text:''}
render() {
 return (
   <View>

     <View style={styles.statusBoxContainer}>
      <View  style={styles.statusBoxFlex}>
          <Image style={{width:50,height:50,margin:"5%",borderRadius:50}} source={require('../assets/avatar.jpg')} /> 
          <TextInput
              style={styles.statusBox}
              placeholder="what's up?"
              multiline={true}
              numberOfLines={4}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}/>
              
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginRight:10,marginLeft:5}}>
             <View style={{width:100,marginBottom:5}}><Button style={{width:50}}  title="Post"/></View> 
             <Icon name="md-images" size={40}/>
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBox: {
    width:"70%"
  },
  statusBoxFlex:{
    flexDirection:"row",
  },
  statusBoxContainer:{

     shadowOffset: {
      height: 10,
      width: 10,
    },
    elevation: 1,
    borderRadius:5,
   
    margin:25,
    marginBottom:4
  }
 
});

export default StatusBox;
