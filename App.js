import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Home from './screens/Home.js';
import CreateEmployee from './screens/CreateEmployee';
import Main from './screens/Main';
import Safety from './screens/Safety.js';
import Profile from './screens/Profile.js';
import Emergency from './screens/Emergency.js';
import PassDoor from './screens/passDoor.js'
import GaraegDoor from './screens/Garage.js';
import Pin from './screens/pin.js';
import FireAlarm from './screens/FireAlarm.js';
import ChangePass from './screens/ChangePass.js';
import Devices from './screens/Devices.js';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();


const baroptions={
  title:"Home Screen",
            headerTintColor:"white",
            headerStyle:{
            backgroundColor:"#197fff", 
            }
      } 

 function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}
          options={baroptions}
          />
          <Stack.Screen name="CreateEmp" component={CreateEmployee} 
           options={{...baroptions, title:"Add New Employee"}}
          />
          <Stack.Screen name="MainScreen" component={Main} 
           options={{...baroptions, title:"Main Window"}}
          />
          <Stack.Screen name="Lights" component={Pin} 
           options={{...baroptions, title:"Home Lightning"}}
          />
          <Stack.Screen name="ChangePass" component={ChangePass} 
           options={{...baroptions, title:"Edit Password"}}
          />
          <Stack.Screen name="Safety" component={Safety} 
           options={{...baroptions, title:"Home Safety"}}
          />
          <Stack.Screen name="Carage" component={GaraegDoor} 
           options={{...baroptions, title:"Carage Door"}}
          />
          <Stack.Screen name="PassDoor" component={PassDoor} 
           options={{...baroptions, title:"Main Door"}}
          />
          <Stack.Screen name="FireAlarm" component={FireAlarm} 
           options={{...baroptions, title:"Fire Detector System"}}
          />
          <Stack.Screen name="Devices" component={Devices} 
           options={{...baroptions, title:"Home Devices "}}
          />
          <Stack.Screen name="Emergency" component={Emergency} 
           options={{...baroptions, title:"Call Emergency"}}
          />
      </Stack.Navigator>
    </View>
  );
}

export default () =>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfcfcf',
  },
});
