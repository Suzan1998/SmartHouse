import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image ,FlatList, Alert, KeyboardAvoidingView,
    ScrollView , } from 'react-native';
import { Card, FAB, Button } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
//import { item } from 'react-native-paper';

const Home = ({navigation})=>{



    return(
        <View style={{flex:1}}>
           <LinearGradient
            colors={["#ff3f00","#db4c1d","#ff7d52","#ff774a"]}
            style={{height:"25%"}}
            />
             <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/logo.png')}/>
        <Image style={styles.name} source={require('./assets/name.png')}/>
        
        
     
     <Button style={styles.inputstyle} 
           
              theme={theme}
              mode="contained"
              onPress={()=>navigation.navigate("MainScreen")}>
                Lets Start
            </Button>
            </View>
  
    
   
  </View>
      
    )
}
const theme ={
    colors:{
        primary:"#197fff",   
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center', 
        justifyContent: 'center',
 
        
      },
    text:{
       fontSize:18,
    },
    logo: {
        marginTop:-200,
        height: 180,
        width: 180,
      },
      name: {
        height: 150,
        width: 300,
      },

    inputstyle:{
        padding:10, 
        alignSelf:'center', 
        width:180,
    },
  });
export default Home;