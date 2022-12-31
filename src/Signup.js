import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}) => {
  const [text, onChangeText] = React.useState("");
  const [mail, setMail] = React.useState(null);
  const [Number, onChangeNumber] = React.useState(null);
  const [password, setPassword] = React.useState("");
  const storeData = async value=> {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }
  return (
   <SafeAreaView style={{backgroundColor:"#b8b09a",flex:1}}>
    <Image  source={require('../src/assets/images/img5.png')}/>
    <Image style={{alignSelf:'flex-end',bottom:66}}  source={require('../src/assets/images/img6.png')}/>
    {/* <View>
    <Image style={{bottom:45}}  source={require('../src/assets/images/img7.png')}/>
      <Text style={{color:"black",bottom:30,fontSize:15,}}>Full Name</Text>
      <TextInput 
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
    ></TextInput> */}
    <Text style={{color:"black",bottom:66,fontSize:15,}}>E-mail</Text>
    <TextInput 
      style={styles.input2}
      onchangeEmail={setMail}
      value={mail}
    ></TextInput>
     <Text style={{color:"black",bottom:100,fontSize:15,}}>Password</Text>
     <TextInput
          style={styles.inputField}
          name="password"
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry
          value={password}
          enablesReturnKeyAutomatically
          onChangeText={text => setPassword(text)}/>
   
   
    <View>
    <Image style={{bottom:158}} source={require('../src/assets/images/img9.png')} />
    <Text style={{color:'#8a9b9c',bottom:200,textAlign:'center'}}>Already have a account</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("Login")} >
<Text style={{color:'#cf470c',bottom:225,textAlign:'right',fontSize:20 ,fontWeight:'bold'}}>Login</Text>
      </TouchableOpacity >
    </View>
    <View>
    <Image  style={{bottom:225}}  source={require('../src/assets/images/img10.png')} />
    </View>

   </SafeAreaView>
  );
}
const styles= StyleSheet.create({
  input:{
    height: 40,
    margin: 25,
    borderWidth: 1,
    padding: 10,
    color:"red",
    bottom:47,
    fontSize:20,
  },
  input2:{
    height: 40,
    margin: 25,
    borderWidth: 1,
    padding: 10,
    color:"red",
    bottom:85,
    fontSize:20
  },
  input3:{
    height: 40,
    margin: 25,
    borderWidth: 1,
    padding: 10,
    
    color:"red",
    bottom:120,
    fontSize:20
  }
 
});

export default Signup;