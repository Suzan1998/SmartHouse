import React ,{useState}from 'react';
import {
  StyleSheet, Platform, Image, Text, View, TouchableOpacity, TabView,
  TextInput,
  ScrollView,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
  CheckBox,
  Switch, KeyboardAvoidingView,
} from 'react-native'
import { Card, FAB, Button } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import * as firebase from 'firebase';


export default class Pin extends React.Component {
  
  state = {
  status: '',
  status2: '',
  doorstatus:'',
};
  readvalue() {
     let id="0"
     let id2="1"
    let status
    let status2
    try
     {
        firebase.database().ref().child('led1').on("value", function (snapshot) {
            snapshot.forEach(function (item) {
                status=item.val()
               // console.log("status") 
                //console.log(status)  
             //  console.log("sdlfjsdhfh",status)
             if(status == 1)
             {
          this.setState({
           status: "ON"
          })
        }
        else {
          this.setState({
            status: "OFF"
           })
        }

         }.bind(this))
      }.bind(this)) 
    }
    catch(error){
      console.log(error)
    }
};

readvalue2() {
  let id="0"
  let id2="1"
 let status
 let status2
 try
  {
     firebase.database().ref().child('led2').on("value", function (snapshot) {
         snapshot.forEach(function (item) {
             status=item.val()
          if(status == 1)
          {
       this.setState({
        status2: "ON"
       })
     }
     else {
       this.setState({
         status2: "OFF"
        })
     }

      }.bind(this))
   }.bind(this)) 
 }
 catch(error){
   console.log(error)
 }
};

readvalueofdoor() {
  let id="off"
  let id2="on"
 let status
 let status2
 try
  {
     firebase.database().ref().child('outLight').on("value", function (snapshot) {
         snapshot.forEach(function (item) {
             status=item.val()
          if(status == "on")
          {
       this.setState({
        doorstatus: "ON"
       })
     }
     if(status == "auto")
          {
       this.setState({
        doorstatus: "AUTO"
       })
     }
     if(status == "off") {
       this.setState({
         doorstatus: "OFF"
        })
     }

      }.bind(this))
   }.bind(this)) 
 }
 catch(error){
   console.log(error)
 }
};

changevaluetoOFF() {
  let id="0";
  //let id2="1";
  let status
  try
     {
     firebase.database().ref('led1/').set(
      {status:id})
      this.setState({status: id})
    }
  catch(error){
    console.log(error)
  }
};

changevaluetoON() {
  let id="1";
  //let id2="1";
  let status
  try
     {
     firebase.database().ref('led1/').set(
      {status:id})
      this.setState({status: id})
    }
  catch(error){
    console.log(error)
  }
};

changevaluetoOFFdoor() {
  let id="off";
  //let id2="1";
  let status
  try
     {
     firebase.database().ref('outLight/').set(
      {status:id})
      this.setState({status: id})
    }
  catch(error){
    console.log(error)
  }
};
changevaluetoAuto() {
  let id="auto";
  //let id2="1";
  let status
  try
     {
     firebase.database().ref('outLight/').set(
      {status:id})
      this.setState({status: id})
    }
  catch(error){
    console.log(error)
  }
};

changevaluetoONdoor() {
  let id="on";
  //let id2="1";
  let status
  try
     {
     firebase.database().ref('outLight/').set(
      {status:id})
      this.setState({status: id})
    }
  catch(error){
    console.log(error)
  }
};

changevaluetoOFFled2() {
  let id="0";
  //let id2="1";
  let status
  try
     {
     firebase.database().ref('led2/').set(
      {status:id})
      this.setState({status: id})
    }
  catch(error){
    console.log(error)
  }
};

changevaluetoONled2() {
  let id="1";
  //let id2="1";
  let status
  try
     {
     firebase.database().ref('led2/').set(
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
        //if (!firebase.app.length) {
        firebase.initializeApp(firebaseConfig);
        //console.log(firebaseConfig)
        //}
      }
      catch(error){
        console.log(error)
      } 
      console.disableYellowBox=true
      this.readvalue()  
      this.readvalue2() 
      this.readvalueofdoor()
     // this.changevalue()
  }

  

    render() {
     console.log("DGDFG",this.state.status)
        return (
         <View style={{flex:1}}>
          
         <ScrollView style={styles.scrollView}>
         <Card style={styles.roomcard}>
           <Text style={styles.text}>OutDoor Light is {this.state.doorstatus}</Text>
           </Card>
          <Card style={styles.mycard}>
          <View style={styles.cardview}>
          <View style={styles.textview}>
          <Image style={styles.imageStyle}
            source={require('./assets/outdoor.png')}/>
             
             </View>
             <Card style={styles.buttonsCard}>
             <View style={styles.buttonsCardView}>
             <TouchableHighlight onPress={this.changevaluetoONdoor} >
             <Image style={styles.image2Style}
                        source={require('./assets/on2.png')}/>
          
      </TouchableHighlight>
         
        
          <TouchableHighlight onPress={this.changevaluetoOFFdoor} >
          <Image style={styles.image2Style}
                    source={require('./assets/off2.png')}/>  
         </TouchableHighlight>
         
         <TouchableHighlight onPress={this.changevaluetoAuto} >
          <Image style={styles.image1Style}
                    source={require('./assets/auto.png')}/>  
         </TouchableHighlight>
         </View>
         </Card>
         </View>
         </Card>
           <Card style={styles.roomcard}>
           <Text style={styles.text}>Living Room Light is {this.state.status}</Text>
           </Card>
           <Card style={styles.mycard}>
           <View style={styles.cardview}>
           <View style={styles.textview}>
        
           <Image style={styles.imageStyle}
                        source={require('./assets/living.png')}/>
           </View>
           <Card style={styles.buttonsCard}>
             <View style={styles.buttonsCardView}>
             <TouchableHighlight onPress={this.changevaluetoON} >
                <Image style={styles.image2Style}
                        source={require('./assets/on2.png')}/>
          
      </TouchableHighlight>
  
          <TouchableHighlight onPress={this.changevaluetoOFF} >
          <Image style={styles.image2Style}
                    source={require('./assets/off2.png')}/>  
         </TouchableHighlight>
             </View>
             
         </Card>
         </View>
           </Card>
           <Card style={styles.roomcard}>
           <Text style={styles.text}>Kitchen Light is {this.state.status2}</Text>
           </Card>
           <Card style={styles.mycard}>
           <View style={styles.cardview}>
           <View style={styles.textview}>
             
             <Image style={styles.imageStyle}
              source={require('./assets/kitchen.png')}/>
             </View>
             <Card style={styles.buttonsCard}>
             <View style={styles.buttonsCardView}>
             <TouchableHighlight onPress={this.changevaluetoONled2} >
             <Image style={styles.image2Style}
            source={require('./assets/on2.png')}/>
      </TouchableHighlight>
         
        
          <TouchableHighlight onPress={this.changevaluetoOFFled2} >
          <Image style={styles.image2Style}
           source={require('./assets/off2.png')}/>  
         </TouchableHighlight>
         </View>
         </Card>

         </View>
          </Card>
          
         
          </ScrollView>
          <View>
          <FAB 
        style={styles.fab}
        large
        icon="plus"
        theme={{colors:{accent:'#272429'}}}
       />
        </View>
        </View>
          
     
        );
    }
}
const styles = StyleSheet.create({
  fab:{
    position: 'absolute',
    margin: 16,
    right: 265,
    bottom: 20,

},
textview:{
  flexDirection:'column',
  marginTop:2,
  
  
},
text:{
 fontSize:15,
 alignSelf:'center',
 color:'#ffffff'
},
image1Style:{
  alignSelf:'center',
  height:55,
  width: 65,

  
},
image2Style:{
  alignSelf:'center',
  height:60,
  width: 70,

  
},
  
  imageStyle:{
    alignSelf:'center',
    height:150,
    width: 340,
    
  },

  mycard:{
    width:400,
    height:230,
    marginBottom:10,
    backgroundColor:'#ffffff',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
    
     
   },
  roomcard:{
    marginBottom:5,
     height:50,
     borderWidth:2,
     borderColor:'#ffffff',
     flexDirection:"row",
     backgroundColor:'#197fff',
     justifyContent:'center',
     alignItems:'center',
    },
   
  cardview:{
    flexDirection:'column',
    padding:6,
},
buttonsCard:{
  marginBottom:20,
  marginTop:5,
   height:65,
   width:400,
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'center',
   alignSelf:'center'
 
 },

buttonsCardView:{

  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  padding:0
},

  
})