import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";

import {
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";

export default class CustomSideDrawer extends Component{
    constructor(props){
        super(props)
        
    }
    ComponentdidMount(){
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn =()=>{
    firebase.auth().onauth.stateChanged(user =>{
        if (user) {
            this.props.navigation.navigate("DashBoardScreen");
        }
        else{
            this.props.navigation.navigate("LoginScreen");
        }
    });
    };
   render(){
   
    
return(
        <View style={styles.container}>
    <SafeAreaView style={styles.AndroidSafeArea}/>
       <View style={styles.appTitle}  >
     <Image
     source={require("../assets/logo.png")} 
     style={styles.appIcon}   ></Image>
      <Text style={styles.appTitleText}>
        {"Story Telling App"}
        </Text>  
       </View>
       <View style={styles.buttonContainer}>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=> this.signInWithGoogleAsync()}>

            <Image
            source={require("../assets/google_icon.png")}>
            style={styles.googleIcon}
                
            </Image>
            <Text style={styles.googleText}>
                Sign In With Google!
            </Text>
       </TouchableOpacity>
       </View>

       <View style={styles.cloudContainer}>
        <Image
        source={require("../assets/cloud.png")}
        style={styles.cloudImage}></Image>
       </View>
        </View>
        )
    }
   
}
const styles=StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:"#15193C"
   },
   appTitle:{
    flex:0.4,
    justifyContent:"center",
    alingItems:"center",
   },
   appIcon:{
    width:RFValue(130),
    height:RFValue(130),
    resizeMode:"contain",
   },
   appTitleText:{
    color:"white",
    textAnlign:"center",
    fontSize:RFValue(40),
    fontFamily:"Bubblegum-Sans"
   },
   bottomContainer:{
   flex:0.3,
   justifyContent:"center",
   alingItems:"center",
   },
   button:{
    width:RFValue(250),
    height:RFValue(50),
    flexDirection:"row",
    justifyContent:"space-evenly",
    alingItems:"center",
    boarderRadius:RFValue(30),
    backgroundColor:"white"
   },
   googleIcon:{
   width:RFValue(30),
   height:RFValue(30),
   resizeMode:"contain",
   },
   googleText:{
    color:"black",
    fontSize:RFValue(30),
    fontFamily:"Bubblegun-sans"
   },
   cloudContainer:{
    flex:0.3,
   },
   cloudImage:{
    position:absoulute,
    width:"100%",
    resizeMode:"contain",
    bottom:RFValue(-5)
   }
   
    
})


