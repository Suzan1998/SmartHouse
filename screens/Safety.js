import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image ,FlatList, Alert, KeyboardAvoidingView,
    ScrollView , } from 'react-native';
import { Card, FAB, Button } from 'react-native-paper';

//import { item } from 'react-native-paper';

const Safety = ({navigation}, route)=>{


    return(
        <ScrollView  style={styles.root} >
        <View>
        <Card style={styles.titleCard} onPress={()=>navigation.navigate("Lights")}>
           <Text style={styles.text}>Main Door control</Text>
           </Card>
        <Card style={styles.mycard}
            onPress={()=>navigation.navigate("PassDoor")}
            >
                <View style={styles.cardview}>
                <Image 
                 style={styles.cardImage}
                source={require('./assets/door.png')}
                
                />
                </View>
            </Card>

            <Card style={styles.titleCard} onPress={()=>navigation.navigate("Lights")}>
           <Text style={styles.text}>Carage Door control</Text>
           </Card>
            <Card style={styles.mycard}
            onPress={()=>navigation.navigate("Carage")}
            >
                <View style={styles.cardview}>
                <Image 
                 style={styles.cardImage}
                source={require('./assets/carage.png')}
                
                />
                </View>
            </Card>

            <Card style={styles.titleCard} onPress={()=>navigation.navigate("Lights")}>
           <Text style={styles.text}>Fire Detector</Text>
           </Card>                   
            <Card style={styles.mycard}
                onPress={()=>navigation.navigate("FireAlarm")}
                >
                    <View style={styles.cardview}>
                    <Image 
                     style={styles.cardImage}
                    source={require('./assets/fire.jpg')}
                    
                    />
                    </View>
                </Card>
            </View>
           </ScrollView>
            )
    
}
const theme ={
    colors:{
        primary:"#197fff",   
    }

}
const styles = StyleSheet.create({
    textview:{
        flexDirection:'column',
        
    },
    titleCard:{
        marginTop:10,
        width:360,
       height:30,
       borderWidth:2,
       borderColor:'#ffffff',
       flexDirection:"row",
       backgroundColor:'#197fff',
       justifyContent:'center',
       alignItems:'center',
       alignSelf:'center'
      },
    mycard:{
        width:360,
       height:220,
       marginBottom:5,
       backgroundColor:'#ffffff',
       justifyContent:'center',
       alignItems:'center',
       borderWidth:10,
       alignSelf:'center',
       borderColor:'white',
       borderRadius:10,
        
      },
      text:{
        fontSize:15,
        alignSelf:'center',
        color:'#ffffff'
       },
    cardImage: {
    width:310,
    height:195,
    borderRadius:10
    //borderWidth:1,
    //borderColor:"#ff3c00"
    },
      cardview:{
        flexDirection:"row",
        padding:6,
        
    },

  });
export default Safety;