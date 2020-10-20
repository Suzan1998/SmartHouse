import React from 'react';
import { Card, FAB, Button } from 'react-native-paper';
import {
  StyleSheet, Platform, Image, Text, View, TouchableOpacity, TabView,
  TouchableHighlight,
} from 'react-native'
import * as firebase from 'firebase';

export default class GaraegDoor extends React.Component {
    state={
      doorstatus:'',
      imageURL : 'https://cdn1.vectorstock.com/i/thumb-large/12/30/garage-isometric-icon-isolated-on-color-vector-20151230.jpg'
    

  }
  Load_Open_Image=()=>{

    this.setState({

      imageURL : 'https://www.pngitem.com/pimgs/m/143-1436644_garage-clipart-free-download-hd-png-download.png'

    })
  }
  Load_Close_Image=()=>{

    this.setState({

      imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuIw-TZOShKqMRjuatu61mtu0nSrm_CrPL8A&usqp=CAU.jpg'

    })
  }
  
    


readvalueofdoor() {
  let id="close"
  let id2="open"
 let status
 let status2
 try
  {
     firebase.database().ref().child('door1').on("value", function (snapshot) {
         snapshot.forEach(function (item) {
             status=item.val()
            // console.log("status") 
             //console.log(status)  
          //  console.log("sdlfjsdhfh",status)
          if(status == "open")
          {
       this.setState({
        doorstatus: "Open"
       })
     }
      if(status == "close") {
       this.setState({
         doorstatus: "Closed"
        })
     }

      }.bind(this))
   }.bind(this)) 
 }
 catch(error){
   console.log(error)
 }
};



changevaluetoOFFdoor() {
  let id="close";
  //let id2="1";
  let status
  try
     {
     firebase.database().ref('door1/').set(
      {status:id})
      this.setState({status: id})
    }
  catch(error){
    console.log(error)
  }
};

changevaluetoONdoor() {
  let id="open";
  //let id2="1";
  let status
  try
     {
     firebase.database().ref('door1/').set(
      {status:id})
      this.setState({status: id})
    }
  catch(error){
    console.log(error)
  }
};




  componentWillMount() {
      console.log(this.state.status)
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
      } 
      console.disableYellowBox=true
     
      
      this.readvalueofdoor()
  }

  

    render() {
            return (
                  
          <View style={styles.viewStyle}>
                <Card style={styles.garagecard}>
                  <Text style={styles.text}>Your Garage Door is {this.state.doorstatus}</Text>
                </Card>      
                <Card style={styles.mycard}>

                  <View style={styles.cardview}>
                      <View style={styles.textview}>
                          <Image 
                            style={styles.imageStyle}
                            source={require('./assets/garage2.png')}
                          
                          />
                      </View>
                  </View>   
                  </Card>
                  <View style={styles.modalButtonView}>
                                <TouchableHighlight onPress={this.changevaluetoONdoor}>
                        <Image style={{
                            
                            height:80,
                            width: 80,
                          }}
                                source={require('./assets/open.png')}/>
                  
              </TouchableHighlight>
                
                
                  <TouchableHighlight onPress={this.changevaluetoOFFdoor} >
                    <Image style={{
                            
                            height: 80,
                            width:80,
                          }}
                            source={require('./assets/close.png')}/>  
                </TouchableHighlight>
                                </View>
                            </View>
            
                      
            
                );
    }
}


const styles = StyleSheet.create({
  modalButtonView:{
    flexDirection:'row',
    margin:5,
    width: 360,
    height:100,
    justifyContent:'space-around',
    borderWidth:2,
    borderColor:'#197fff'

    
   },
   viewStyle:{
     alignContent: 'center',
     justifyContent:'center',
     alignSelf:'center'
   },

  garagecard:{
    margin:5,
   height:50,
   borderWidth:2,
   borderColor:'#ffffff',
   flexDirection:"row",
   backgroundColor:'#197fff',
   justifyContent:'center',
   alignItems:'center',
   
    
  },
  text:{
    fontSize:15,
    alignSelf:'center',
    color:'#ffffff'
   },


   mycard:{
    height:400,
    width: 360,
    margin:5,
    borderWidth:2,
   borderColor:'#197fff',
   backgroundColor:"#ffffff",
   alignItems:'center',
   justifyContent:'center',
  },
  
  imageStyle:{
  
    height:350,
    width: 350,
    alignSelf:'center',
  },

  
})