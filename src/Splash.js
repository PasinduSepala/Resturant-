
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, StyleSheet,  Text,  TouchableOpacity } from 'react-native';

const Splash = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <Image source={require('../src/assets/images/img.png')} />
    
    <SafeAreaView>
    <TouchableOpacity  title="Welcome"
        onPress={() => navigation.navigate('Welcome')}>
         <Text style={{fontFamily:'RobotoCondensed-Regular',fontSize:20,textAlign:"left"}}> Welcome</Text>
        
        
    </TouchableOpacity>
    </SafeAreaView>
    </SafeAreaView>
    
  );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f57242",
        justifyContent: 'center',
        alignItems: 'center',
        width: 360,
        height: 570,

    },
    Shop:{
        color:"black",
        textAlign:"right",
       
    },
    // bus:{
    //   fontFamily:"RobotoCondensed-Italic"

    // }

});

export default Splash;