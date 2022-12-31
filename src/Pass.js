import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View,  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Pass = () => {
    const [Mail,SetMail]=React.useState(null)
  return (
    <><LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.9)']}
          style={{ position: 'absolute', width:370, height:1000,flex:1 }}></LinearGradient><SafeAreaView>

          </SafeAreaView></>
  );
}
    const styles=StyleSheet.create({
       
    
})
export default Pass;