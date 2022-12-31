
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, StyleSheet,  } from 'react-native';
import { navigations } from './enum';
import Home from './Home';



const Splash = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate(navigations.TAB_HOME
        );
    }, 2000);
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
    <Image source={require('../src/assets/images/img.png')} />
    
    <SafeAreaView>
    
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