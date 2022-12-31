import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>
      <Image  style={styles.img1} source={require('../src/assets/images/bg.png')}  
      />
      <LinearGradient
      
      colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.9)']}
      style={{position: 'absolute', width:360, height:600}}></LinearGradient>
      <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
        <Text style={{textAlign:"right",backgroundColor:"white",color:"orange",borderRadius:10,paddingTop:5,width:38,height:25,textAlign:"center"}}>Skip</Text>
      </TouchableOpacity>
   
    </SafeAreaView>
  );
};
const styles=StyleSheet.create({
img1:{
flex:1,
  width:360,
  height:600,
  justifyContent: 'center',
    alignItems: 'center',


  
  
 
}
});

export default Welcome;