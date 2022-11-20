import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, StyleSheet,Text, TouchableOpacity, View } from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.food} >
    <Image style={{alignSelf:'flex-end'}} source={require('../src/assets/images/ghj.png')} />
   
      
    <View >
    <Image style={styles.kite} source={require('../src/assets/images/psp.png')} />
    <View>
    <Image style={{alignSelf:'center',bottom : -15}}  source={require('../src/assets/images/red.png')} />
   </View>
   <View>
    <Image style={{bottom:-10}} source={require('../src/assets/images/img1.png')}/>
    <Image style={{alignSelf:'flex-end',bottom:115}} source={require('../src/assets/images/img2.png')}/>
  
   </View>
   <View>
    <TouchableOpacity 
        onPress={() => navigation.navigate('Signup')}>

    <Image style={{bottom:140,alignSelf:'center'}} source={require('../src/assets/images/img3.png')}/>
    <Text style={{color:"black",bottom:180,textAlign:"center",fontWeight:"bold",fontSize:18}}>Start with email or phone</Text>
    </TouchableOpacity>
    <View>
    <Image style={{bottom:130,alignSelf:"center"}} source={require('../src/assets/images/img4.png')}/>
    </View>
   </View>
    </View>
    
    </SafeAreaView>

  );
};
const styles = StyleSheet.create({
    food:{
        backgroundColor:"#465c2d",
        width: 360,
        height: 570,
        
    },
    kite:{
        // width: 300,
        // height: 250,
    }
})

export default Welcome;