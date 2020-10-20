import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform ,StyleSheet,Image} from 'react-native';
import * as firebase from 'firebase';
import { Card, FAB,  } from 'react-native-paper';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    allowAnnouncements:true,
  }),
});
const FireAlarm = ({navigation}, route)=>{
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
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  
  
 
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  const image2="https://i2-prod.birminghammail.co.uk/incoming/article380201.ece/ALTERNATES/s615b/firestock.jpg"
  const image1="https://thumbs.dreamstime.com/b/safe-guard-protection-modern-shield-vector-symbol-graphic-logo-design-safe-guard-protection-modern-shield-symbol-logo-design-112480981.jpg"
  let state ={
    firestate:'Ok no Fire',
    smokeSensor:"noFire",
    image:"https://thumbs.dreamstime.com/b/safe-guard-protection-modern-shield-vector-symbol-graphic-logo-design-safe-guard-protection-modern-shield-symbol-logo-design-112480981.jpg",
  
    };
    
    try
    {
        firebase.database().ref().child('smokeSensor').on('value', function (snapshot) {
            let smokeSensore=snapshot.val(); 
               state.smokeSensor=smokeSensore; 
    
           });
    }catch(error){
      console.log(error)
    } 
    if(state.smokeSensor=="Fire")
    {
      state.firestate='Fire Detected Hurry Up',
      state.image=image2,
      sendPushNotification(expoPushToken);
      setTimeout(function(){
        firebase.database().ref('smokeSensor/').set(
          "noFire")
   
      }, 8000);
   
    }
    if(state.smokeSensor=="noFire")
    {
      state.firestate='Ok no Fire',
      state.image=image1
    }
    

  return(
    <View>
        <View style={{margin:5}}>
            <Card style={styles.titleCard1}
                
                >
                <Text style={styles.titleText}>Fire Status ({state.firestate})</Text>   
                </Card>
                <Card style={styles.mycard} >
                <Image 
                    style={styles.cardImage}
                    source={{uri:state.image}}
                    
                    />
                </Card>
                <Card style={styles.titleCard}
                onPress={()=>navigation.navigate("Emergency")}
                >
                <Text style={styles.titleText}onPress={()=>navigation.navigate("Emergency")}>Call Emergency Now</Text>   
                    
                </Card>
            <Card style={styles.mycard} 
                onPress={()=>navigation.navigate("Emergency")}
                >
                        <Image 
                    style={styles.cardImage}
                    source={require('./assets/emergency.png')}
                    
                    />
                </Card>   
               
        </View>

    </View>
        );
}

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Fire Alarm',
    body: 'Fire Detected in your house Hurry Up!',
    data: { data: 'goes here' },
    
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }


  return token;
}
const theme ={
    colors:{
        primary:"#197fff",   
    }

}
const styles = StyleSheet.create({

    mycard:{
        height:230,
       // padding:5,
       backgroundColor:"white",
       justifyContent:'center',
       alignItems:'center',
      
        
      },
    titleCard:{
        marginTop:5,
        marginBottom:0,
        height:40,
        width:360,
       backgroundColor:"red",
       justifyContent:'center',
       alignItems:'center',
        
      },
      titleCard1:{
        marginTop:5,
        marginBottom:0,
        height:40,
        width:360,
       backgroundColor:"#197fff",
       justifyContent:'center',
       alignItems:'center',
       alignSelf:'center'
        
      },

      titleText:{
        marginTop:10,
        fontSize:15,
        alignSelf:'center',
        color:'#ffffff'
      
     },
      cardImage: {
        width:300,
        height:220,
        borderRadius:10,
      },
      cardview:{

        flexDirection:"row",
        padding:6,
        
    },
   

  });
export default FireAlarm;

