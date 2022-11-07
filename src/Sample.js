import React from 'react';

import {SafeAreaView, StyleSheet, StatusBar, Text, TouchableOpacity} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




const Sample = () => {

  return (

    <SafeAreaView style={styles.container}>

     
      <TouchableOpacity>
      <MaterialIcons name="home" size={30} color="yellow" />

      <Text style={{fontFamily: 'NotoSerif-Italic', fontSize: 20}}>Home</Text>
      </TouchableOpacity>
      
      

    </SafeAreaView>

  );

};




const styles = StyleSheet.create({

  container: {

    flex: 1,

    marginTop: StatusBar.currentHeight || 0,

    justifyContent: 'center',

    alignItems: 'center',

  },

});




export default Sample;