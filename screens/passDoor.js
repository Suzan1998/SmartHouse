import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image ,FlatList, Alert, KeyboardAvoidingView,
    ScrollView , } from 'react-native';
import { Card, FAB, Button } from 'react-native-paper';
import PinView from 'styled-react-native-pin-view';
import * as firebase from 'firebase';

const PassDoor = ({navigation}, route)=>{  
        try
        {
        const firebaseConfig = {
          apiKey: "AIzaSyDrxKgonBdLFWIeNSXDvFfPPynQXP6AiJo",
          authDomain: "ardu-a361a.firebaseapp.com",
          databaseURL: "https://ardu-a361a.firebaseio.com",
          projectId: "ardu-a361a",
          storageBucket: "ardu-a361a.appspot.com",
          messagingSenderId: "1096024222021",
          appId: "1:1096024222021:web:ad47c9d5e28eee46bc762c",
          measurementId: "G-B4C2GHM5BC"
        };
          
          firebase.initializeApp(firebaseConfig);
          
        }
        
        catch(error){
          console.log(error)
        } console.disableYellowBox=true
   
      
   let state ={
      pass: 1,
      pinPas:2,
       doorStatus: ''
    };

    const  readPassword=(pinval)=> {
        firebase.database().ref().child('password').on('value', function (snapshot) {
         let password=snapshot.val();
            //console.log(password);           
              state.pass=password;
              state.pinPass=pinval;
             
        });
    }
    let doorStatus="?"
    let comparePass=()=>
    {
     let state2="open"
      if (state.pinPass==state.pass){
        firebase.database().ref('mainDoor/').set(
          {status:state2});
         doorStatus=state2
        alert("Correct Password Your Door Will Be Open");
      }
      else
      {
        alert("Wrong Password Try Again")
        
      }

    }


    let closeDoor = ()=> {
    let state1="close"
      firebase.database().ref('mainDoor/').set(
        {status:state1})
        doorStatus=state1
        alert("Your Door Will Be Closed");
    }

    
    let checkDoorState = () =>{
        if(doorStatus=="open")
        {
          alert("Your Door Is Open")
        }

        else {
          alert("Your Door is Closed")
        }
    }
     
    return(
        <View>
        <Card style={styles.mycard} >
                <Image 
                 style={styles.cardImage}
                source={require('./assets/pass.jpg')}
                />
 
            </Card>
            <View style={styles.pinStyle}>
            <PinView  
            onComplete={(val)=>readPassword(val)}
            pinLength={5}
            buttonBgColor={'#aeb0b5'}
            buttonTextColor={'white'}
            inputBgColor={'#197fff'}
            inputBgOpacity={.5}
            />
            </View>
            <View style={styles.buttonsStyle}>  
            <Button style={styles.inputstyleEdit}  theme={theme} onPress={()=>comparePass()} >
        Open Door
        </Button>
            <Button style={styles.inputstyleEdit} theme={theme} onPress={()=>closeDoor()} >
        Close Door
         </Button>
          </View>
          <View style={styles.buttonsStyle}>    
          <Button style={styles.inputstyleEdit} theme={theme} onPress={()=>navigation.navigate("ChangePass")} >
         Edit Password
         </Button>
         <Button style={styles.inputstyleEdit} theme={theme} onPress={()=> checkDoorState()} >
         Door State
         </Button>
          </View>

            </View>
           
            )
    
}
const theme ={
    colors:{
        primary:"white",   
    }

}
const styles = StyleSheet.create({
    mycard:{
       padding:1,
       backgroundColor:"white",
       justifyContent:'center',
       alignItems:'center',
       borderBottomWidth:1,
        borderBottomColor: '#197fff'
        
      },

      cardImage: {
       
        width:400,
        height:80,
       
       
      },
      pinStyle:{
   
        
    },
    inputstyle:{
      backgroundColor:'#197fff',
      padding:10, 
      alignSelf:'center', 
      width:180,
      margin:5
  },
    inputstyleEdit:{
      backgroundColor:'#197fff',
      padding:10, 
      alignSelf:'center', 
      width:190,
      margin:5
  },
  buttonsStyle:{
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center'
  },
  headStyle:{
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
    height:40,
    backgroundColor: 'white',
  },
  textStyle:{
    flexDirection:'row',
    alignSelf: 'center',

    width:200,
    fontSize:20,
    color:'#197fff'
  }
  });
export default PassDoor;