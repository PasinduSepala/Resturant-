import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = ({navigation}) => {
    const[mail,setMail]=React.useState(null)
    const[Password,setPassword]=React.useState(null)
  return (
   <SafeAreaView style={{backgroundColor:"#b8b09a",flex:1}}>
   <Image   source={require('../src/assets/images/ellip.png')}/>
     <Image style={{alignSelf:'flex-end',bottom:80}}  source={require('../src/assets/images/img6.png')}/>
     <Image style={{bottom:160}}  source={require('../src/assets/images/img5.png')}/>
     <TouchableOpacity  onPress={()=> navigation.goBack('Signup')}>
     <Image  style={{bottom:196}}  source={require('../src/assets/images/tag.png')}/>
     </TouchableOpacity>
     <View>
     <Image style={{bottom:190}}  source={require('../src/assets/images/Login.png')}/>
     </View>
     <View>
        <Text style={{color:"black" ,bottom:180,fontSize:15}}>Email</Text>
        <TextInput
   style={styles.input}
   onChangeText={setMail}
   value={mail}
   keyboardType="text"
  

   >
    
       
        </TextInput>
        <Text style={{color:"black",bottom:185,fontSize:15,}}>Password</Text>
        <TextInput
   style={styles.input1}
   onChangeText={val => setPassword(val)}
    value={Password}
   
   >
    
       
        </TextInput>
     </View>
     <View>
        <Image style={{bottom:190,alignSelf:"center"}} source={require('../src/assets/images/Pass.png')}/>
        <TouchableOpacity onPress={()=> navigation.navigate('Verify')}>
        <Image style={{bottom:210,alignSelf:"center"}} source={require('../src/assets/images/Login2.png')}/>
        </TouchableOpacity>
        
        
     </View>
     <View>
     <Image style={{bottom:250,alignSelf:"center"}} source={require('../src/assets/images/dont.png')}/>
        <Image style={{bottom:230,alignSelf:"center"}} source={require('../src/assets/images/below.png')}/>
     </View>
    
 
   </SafeAreaView>
  );
}
const styles=StyleSheet.create({
    input:{
        alignSelf:"center",
        width:300,
        height:50,
        color:"black",
        fontWeight:"bold",
        fontSize:15,
        margin: 12,
            borderWidth: 1,
            padding: 10,
            borderColor:"white",
            bottom:187
    },
    input1:{
        alignSelf:"center",
        width:300,
        height:50,
        color:"black",
        fontWeight:"bold",
        fontSize:15,
        margin: 12,
            borderWidth: 1,
            padding: 10,
            borderColor:"white",
            bottom:188

    }
})

export default Login;

