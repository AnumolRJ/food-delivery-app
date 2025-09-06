import React, { useState } from "react";
import {View, StyleSheet, StatusBar, TouchableOpacity, Text, Image} from 'react-native';
import { Colors, Fonts, Images } from "../constants";
import { Separator, ToggleButton } from "../components";
import AntDesign from '@expo/vector-icons/AntDesign';
import { TextInput } from "react-native-gesture-handler";
import { Display } from "../utils";



const ForgetPasswordScreen = ({navigation}) => {
    
  return (
    <View style={styles.container}>
      <StatusBar
             barStyle="dark-content"
             backgroundColor={Colors.DEFAULT_WHITE}
             translucent
           />
        <Separator height={StatusBar.currentHeight} />
        <View style={styles.headerContainer}>
            <AntDesign name="left" size={24} color="black" onPress={() => navigation.goBack()} />
            <Text style={styles.headerTitle}>Sign Up</Text>
        </View>

        <Text style={styles.title}>Forget Password</Text>
        <Text style={styles.content}>Please enter your Email, so we can help you to recover your password</Text>


        <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
                <AntDesign name="mail" size={18} color={Colors.DEFAULT_GREY} style={{ marginRight: 10 }} />
                <TextInput placeholder="Email" 
                        placeholderTextColor={Colors.DEFAULT_GREY} 
                        selectionColor={Colors.DEFAULT_GREY}
                        style={styles.inputText}
                 />
            </View>
        </View>

        <TouchableOpacity style={styles.signinButton}>
            <Text style={styles.signinButtonText}>Reset Password</Text>
        </TouchableOpacity>

       

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily:Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width:Display.setWidth(80),
    textAlign:'center'
  },
  title: {
    fontSize: 20,
    fontFamily:Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    marginBottom:10,
    marginTop:50,
    marginHorizontal: 20
  },
  content:{
    fontSize: 20,
    fontFamily:Fonts.POPPINS_MEDIUM,
    marginBottom:20,
    marginTop:10,
    marginHorizontal: 20
  },
  inputContainer:{
    backgroundColor:Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  inputText:{
    fontSize: 18,
    textAlignVertical: 'center',
    height:Display.setHeight(6),
    padding: 0,
    color: Colors.DEFAULT_BLACK,
    flex: 1,
  },
  
  signinButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },

});

export default ForgetPasswordScreen;
