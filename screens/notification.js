
import React, {useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View,Image ,FlatList, Alert, KeyboardAvoidingView,
    ScrollView ,Button } from 'react-native';
    import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions'    
import { Card, FAB,  } from 'react-native-paper';
import * as firebase from 'firebase';
import * as Notifications from 'expo-notifications';
//import { item } from 'react-native-paper';

const FireAlarm = ({navigation}, route)=>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
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


    
    return(
        <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      />
    </View>
            )

            
    
}
async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: 'default',
      title: 'Original Title',
      body: 'And here is the body!',
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
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
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


    fab:{
        position: 'absolute',
        margin: 16,
        right: 265,
        bottom: 20,

    },
    mycard:{
        margin:5,
       // padding:5,
       backgroundColor:"white",
       justifyContent:'flex-end',
       alignItems:'flex-end',
       borderBottomWidth:1,
        borderBottomColor: '#197fff'
        
      },
    StateCard:{
        margin:5,
       // padding:5,
       backgroundColor:"white",
       justifyContent:'flex-end',
       alignItems:'flex-end',
       borderBottomWidth:1,
        borderBottomColor: '#197fff'
        
      },
      text:{
          margin:30,
        fontSize:20,
        color: '#ff3c00'

     },
      cardImage: {
        width:100,
        height:100,
        borderRadius:50,
        borderWidth:1,
         borderColor:"#ff3c00"
      },
      cardview:{
        flexDirection:"row",
        padding:6,
        
    },

  });
export default FireAlarm;