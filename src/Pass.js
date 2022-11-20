import React from 'react';
import { Image, SafeAreaView, StyleSheet, TextInput, View,  } from 'react-native';

const Pass = () => {
    const [Mail,SetMail]=React.useState(null)
  return (
  <SafeAreaView>
    <View>
    <Image  source={require('../src/assets/images/ellip.png')}/>
     <Image style={{alignSelf:'flex-end',bottom:80}}  source={require('../src/assets/images/img6.png')}/>
     <Image style={{bottom:160}}  source={require('../src/assets/images/img5.png')}/>
     </View>
     <View>
     <Image style={{bottom:40}} source={require('../src/assets/images/img04.png')}/>
     <Image style={{bottom:10}} source={require('../src/assets/images/img05.png')}/>
     </View>
     <View>
        <TextInput
         style={styles.input}
        onChangeText={SetMail}
        value={Mail}
        keyboardType="text"
        >

        </TextInput>
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
    }
})
export default Pass;