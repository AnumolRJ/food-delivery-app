import React, { useState } from "react";
import {View, StyleSheet, StatusBar, TouchableOpacity, Text, Image} from 'react-native';
import { Colors, Fonts, Images } from "../constants";
import { Separator, ToggleButton } from "../components";
import AntDesign from '@expo/vector-icons/AntDesign';
import { TextInput } from "react-native-gesture-handler";
import { Display } from "../utils";



const SignupScreen = ({navigation}) => {
    const [isPasswordShow,setIsPasswordShow] = useState(false);
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

        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.content}>Enter your Email, choose a username and password</Text>

        <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
                <AntDesign name="user" size={18} color={Colors.DEFAULT_GREY} style={{ marginRight: 10 }} />
                <TextInput placeholder="Username" 
                        placeholderTextColor={Colors.DEFAULT_GREY} 
                        selectionColor={Colors.DEFAULT_GREY}
                        style={styles.inputText}
                 />
            </View>
        </View>
        
        <Separator height={15} />

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


        <Separator height={15} />
        <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
                <AntDesign name="lock" size={18} color={Colors.DEFAULT_GREY} style={{ marginRight: 10 }} />
                <TextInput placeholder="Password" 
                        placeholderTextColor={Colors.DEFAULT_GREY} 
                        selectionColor={Colors.DEFAULT_GREY}
                        style={styles.inputText}
                        secureTextEntry={isPasswordShow ? false : true}
                 />
                 <AntDesign 
                    name={isPasswordShow ? "eye" : "eyeo"}
                    size={18}
                    color={Colors.DEFAULT_GREY} 
                    style={{ marginRight: 10 }} 
                    onPress={() => setIsPasswordShow(!isPasswordShow)}
                />
            </View>
        </View>
        
        <TouchableOpacity style={styles.signinButton}>
            <Text style={styles.signinButtonText} onPress={() => navigation.navigate('RegisterPhone')}>Create Account</Text>
        </TouchableOpacity>

        <Separator height={StatusBar.currentHeight} />

        <Text style={styles.orText}>Or</Text>

        <TouchableOpacity style={styles.facebookButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.FACEBOOK} style={styles.signinButtonLogo} />
          </View>
          <Text style={styles.socialSigninButtonText}>
            Connect with Facebook
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.GOOGLE} style={styles.signinButtonLogo} />
          </View>
          <Text style={styles.socialSigninButtonText}>Connect with Google</Text>
        </View>
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
  signupContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  signupText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_GREEN,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 5,
  },
  orText: {
    fontSize: 15,
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 5,
    alignSelf: 'center',
  },
  facebookButton: {
    backgroundColor: Colors.FACEBOOK_BLUE,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: Colors.GOOGLE_BLUE,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinButtonLogo: {
    height: 18,
    width: 18,
  },
  signinButtonLogoContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    padding: 2,
    borderRadius: 3,
    position: 'absolute',
    left: 25,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  socialSigninButtonText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SignupScreen;
