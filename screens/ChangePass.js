import React, {useState} from 'react';
import { StyleSheet, View, Modal, ImagePickerIOS, Alert,KeyboardAvoidingView } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import * as firebase from 'firebase';


const CreateEmployee = ({navigation, route}) =>{
       
    let state ={
        pass: '',
        oldPassSame:false,
        textOldPass:'',
        textNewPass1:'',
        textNewPass2:'',
      };

        const [oldPassword, setOldPassword] = useState(state.pass)
        const [shift, setShift] = useState(false)
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
        
         
      const  readOldPassword=()=> {
        firebase.database().ref().child('password').on('value', function (snapshot) {
         let password=snapshot.val();
            //console.log(password);    
            //console.log("Read Old");
            state.pass=password;       

        });
    }
    const  readOldPasswordText=(pass)=> {
            //console.log("Read Old Pass Field")
            state.textOldPass=pass;
        }

    const setNewPass1Text=(pass1)=>
    {
        
            state.textNewPass1=pass1;
        
    }

    const setNewPass2Text=(pass2)=>
    {
        
            state.textNewPass2=pass2;
        

    }


     const compareOldPass=()=>
     {
       
        readOldPassword();
        if(state.textOldPass!='')
        {
            if(state.pass==state.textOldPass)
        {
            state.oldPassSame=true;
            //console.log("Matched yeeees")
            changePassword();

        }
 
        else
        {
         state.oldPassSame=false;
         //console.log("NOOOOO");
         alert("Old Password Field Dosen't Match Your Old Pass! Try Again")
         
        }
        }
        else
        {
            alert("Fill Old Pass Empty Field ");
        }
      
     }
     const changePassword=()=>
     {
            if((state.textNewPass1==state.textNewPass2)&&(state.textNewPass1!="")&&(state.textNewPass2!=""))
            {
            alert("Your Password Has Been Changed")
            navigation.navigate("PassDoor")
             firebase.database().ref('password/').set(
             state.textNewPass2)
             
            }
            if((state.textNewPass1!=state.textNewPass2))
            {
                alert("The New Passwords Fields Dosen't Match Try Again")
            }
            
            if((state.textNewPass1=="")||(state.textNewPass2==""))
            {
                alert("Fill New Password Empty Fields")
            }
            
            
        }
         
        return(
            <KeyboardAvoidingView behavior="position"  style={styles.root} enabled={shift}>
            <View>
                 <TextInput
                    secureTextEntry={true}
                    style={styles.inputstyle}
                    label='Old Password'
                    theme={theme}
                    onFocus={()=>setShift(false)}
                    mode='outlined'
                    
                    onChangeText={(value)=>readOldPasswordText(value)}
                    
                 />
                 <TextInput
                    secureTextEntry={true}
                    style={styles.inputstyle}
                    label='New Password'
                    theme={theme}
                    onFocus={()=>setShift(false)}
                    onChangeText={(value)=>setNewPass1Text(value)}
                    mode='outlined'
                    
                 />

                 <TextInput
                    secureTextEntry={true}
                    style={styles.inputstyle}
                    label='Repeate Password'
                    theme={theme}
                    onFocus={()=>setShift(false)}
                    onChangeText={(value)=>setNewPass2Text(value)}
                    mode='outlined'
                    
                 />
           
         
             <Button style={styles.buttonStyle} 
              icon="check" 
              theme={theme}
              mode="contained"
              onPress={()=>compareOldPass()}
              >
               Edit Password
            </Button>
            </View>
            </KeyboardAvoidingView>
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
    inputstyle:{
        margin:5,  
    },
    buttonStyle:{
        margin:5,  
        padding:5
    },
    modalButtonView:{
     flexDirection:'row',
     margin:5,
     justifyContent:'space-around'

     
    },
    Button:{
        margin:5,
        width:160,
        height:60,
        justifyContent:'space-around',
        bottom:2,
        
    },

    ModalView:{
        position: 'absolute',
        bottom:4,
        //left:5,
        alignSelf:'center',
        backgroundColor:"#bdbdbd"
    }



    
})

export default CreateEmployee;