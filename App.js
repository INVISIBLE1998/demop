import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements'
const dimScreen=Dimensions.get('window');
const image = {uri: 'https://t4.ftcdn.net/jpg/01/19/02/41/360_F_119024139_myvWSH6zo9kwTk91Sn674RA7CfkxI3Ru.jpg'};

const App = () => (
  <View style={styles.container}>
  
    <ImageBackground  source={image} >
      <View ><Text style={styles.text}>PRIME FIGHT TERMS OF SERVICES</Text></View>
      <View ><Text style={{display:'flex', color:'white', fontSize:20,}}>Home</Text></View>
      
    </ImageBackground>
  </View>
 
);

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    width: dimScreen.width,
    height: dimScreen.height,
  },

  text: {
    color: 'white',
    fontSize: 22,
    lineHeight: 150,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },


});

export default App;