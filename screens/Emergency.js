import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, Image, Linking, Platform, Alert } from 'react-native';
import {Title, Card, Button,} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import { MaterialIcons, Entypo } from '@expo/vector-icons';


const Emergency =(route)=>{
    const openDial=(num)=>{
        if(Platform.OS === "android"){
            Linking.openURL(`tel:${'102'+num}`)
            
        }else{
            Linking.openURL(`telprompt:${'102'+num}`)
        }

    }

    return (
        <View style={styles.root}>
            <LinearGradient
            colors={["#004dc9","#197fff","#197fff","#004dc9"]}
            style={{height:"25%"}}
            />
            <View style={{alignSelf:'center',}}>
                <Image style={{width:170, height:180, borderRadius:75, marginTop:-130 }}
                source={require('./assets/fireman.png')}> 
                </Image>
            </View>
            <Card style={{width:370,height:80, backgroundColor:'red',justifyContent:'center', alignSelf:'center'}}>
                 <Text style={{fontSize:30,color:'white',alignSelf:'center', marginTop:25}}> Civil Defense(102)</Text>
             </Card>
             <Card style={{width:370,height:290,margin:3, backgroundColor:'red',justifyContent:'center', alignSelf:'center'}}>
            <Card style={styles.cardview}  onPress={() =>{
                Linking.openURL(`mailto:suzanbanifadel97@gmail.com`)
            }}>
                <View style={styles.carddata}>
        <Text style={styles.textst}>firefighterpal@gmail.ps</Text>
                <MaterialIcons style={{margin:3}} name="email" size={32} color="#ff3c00" />
                </View>

            </Card>
            <Card style={styles.cardview} onPress={() =>{
                openDial('022791930')
            }}>
                <View style={styles.carddata}>
        <Text style={styles.textst}>022791930</Text>
                 <Text style={styles.textst}>Jerusalem</Text>
                < Entypo style={{margin:3}} name="phone" size={32} color="#ff3c00"  />
                </View>
                </Card>
            <Card style={styles.cardview} onPress={() =>{
                openDial('092381011')
            }}>
                <View style={styles.carddata}>
        <Text style={styles.textst}>092381011</Text>
        <Text style={styles.textst}>Nablus</Text>
                < Entypo style={{margin:3}} name="phone" size={32} color="#ff3c00" />
                </View>
                </Card>
                <Card style={styles.cardview} onPress={() =>{
                openDial('022955880')
            }}>
                <View style={styles.carddata}>
        <Text style={styles.textst}>022955880</Text>
        <Text style={styles.textst}>Ramallah</Text>
                < Entypo style={{margin:3}} name="phone" size={32} color="#ff3c00" />
                </View>
                </Card>
               
                <Card style={styles.cardview} onPress={() =>{
                openDial('022322658')
            }}>
                <View style={styles.carddata}>
        <Text style={styles.textst}>022322658</Text>
        <Text style={styles.textst}>Jericho</Text>
                < Entypo style={{margin:3}} name="phone" size={32} color="#ff3c00" />
                </View>
                

            </Card>
            <Card style={styles.cardview} onPress={() =>{
                openDial('022291626')
            }}>
                <View style={styles.carddata}>
        <Text style={styles.textst}>022291626</Text>
        <Text style={styles.textst}>Hebron</Text>
                < Entypo style={{margin:3}} name="phone" size={32} color="#ff3c00" />
                </View>
                

            </Card>
            </Card>
            
            
           
       
       
           
        </View>
)
}

const theme ={
    colors:{
        primary:"#197fff",   
    }
}
const styles = StyleSheet.create({
root:{
    flex:1,
},

cardview:{
    margin:3,
  
    
    
},
carddata:{
flexDirection:'row',
justifyContent:'flex-end',

},
textst:{
    margin:8,
    fontSize:17,
},
buttonviewstyle:{
 

  
},
buttonstyle:{
    margin:10,
    padding:10,
}

})




export default Emergency;