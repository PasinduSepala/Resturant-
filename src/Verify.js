import React, { useRef, useState,focus} from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Verify = ({navigation}) => {
   const pin1Ref= useRef(null)
   const pin2Ref= useRef(null)
   const pin3Ref= useRef(null)
   const pin4Ref= useRef(null)

  

  const [pin1 , setPin1]=useState("")
  const [pin2 , setPin2]=useState("")
  const [pin3 , setPin3]=useState("")
  const [pin4 , setPin4]=useState("")
  return (
   <SafeAreaView>
    <View>
    <Image   source={require('../src/assets/images/ellip.png')}/>
     <Image style={{alignSelf:'flex-end',bottom:80}}  source={require('../src/assets/images/img6.png')}/>
     <Image style={{bottom:160}}  source={require('../src/assets/images/img5.png')}/>
    </View>
    <TouchableOpacity onPress={()=> navigation.goBack('Login')}>
    <Image  style={{bottom:196}}  source={require('../src/assets/images/tag.png')}/>
    </TouchableOpacity>
    <View>
    <Image  style={{bottom:140}}  source={require('../src/assets/images/img01.png')}/>
    </View>
    <View>
      <Text style={{color:"#b2bfb5",bottom:120,}}>Please type the verifycation code sent to {'\n'}hlsepala@gmail.com</Text>
    </View>
    <View style={{
     
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"space-around",
      bottom:100,
     
    }}>
   <View style={Styles.container}>
    <TextInput
    ref={pin1Ref}
    keyboardType={'number-pad'}
    maxLength={1}
    onChange={(pin1)=>{
      setPin1(pin1);
      if (pin1 != ""){
        pin2Ref.current.focus();
      }
    }}
    style={Styles.bus}
    />
   </View>
   <View style={Styles.container}>
    <TextInput 
    ref={pin2Ref}
    keyboardType={'number-pad'}
    maxLength={1}
    onChange={(pin2)=>{
      setPin2(pin2);
      if (pin2 != ""){
        pin3Ref.current.focus();
      }
      
    }}
    style={Styles.bus} />
   </View>
   <View style={Styles.container}>
    <TextInput
     ref={pin3Ref}
    keyboardType={'number-pad'}
    maxLength={1}
    onChange={(pin3)=>{
      setPin3(pin3);
      if (pin3 != ""){
        pin4Ref.current.focus();
      }
    }}
    style={Styles.bus}/>
   </View>
   <View style={Styles.container}>
    <TextInput
     keyboardType={'number-pad'}
    maxLength={1}
    onChange={(pin4)=>{
      setPin4(pin4)
    }}
    style={Styles.bus}/>
   </View>
   </View>
   <View>
   <Image  style={{bottom:50,alignSelf:"center"}}  source={require('../src/assets/images/img03.png')}/>
   </View>
   <View>
    <TouchableOpacity onPress={()=> navigation.navigate('Pass')}>
    <Text style={{color:"black",bottom:100}}>Next</Text>
    </TouchableOpacity>
   </View>
   
   
    
    
   </SafeAreaView>
  );
};
const Styles=StyleSheet.create({
container:{
borderBottomWidth:1,
width:50,
justifyContent:"center",
alignItems:"center",


},
bus:{
fontSize:30,
color:"black"
},
});

export default Verify;