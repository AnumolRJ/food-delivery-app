import React, { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { Colors, Fonts } from "../constants";
import { TextInput } from "react-native-gesture-handler";
import { Display } from "../utils";
import { Separator } from "../components";
import AntDesign from '@expo/vector-icons/AntDesign';

export const VerificationScreen = ({
        route: {
            params: { phoneNumber },
        }
    }) => {
        const firstInput = useRef();
        const secondInput = useRef();
        const thirdInput = useRef();
        const fourthInput = useRef();
        const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});

  return (
    <View style={styles.container}>
            
        <StatusBar
                barStyle="dark-content"
                backgroundColor={Colors.DEFAULT_WHITE}
                translucent
            />
        <Separator height={StatusBar.currentHeight} />
        <View style={styles.headerContainer}>
          
            <Text style={styles.headerTitle}>Verification</Text>
        </View>

        <Text style={styles.title}>Verification</Text>
        <Text style={styles.content}>
            Enter the OTP number just sent you at {' '}
            <Text style={styles.phoneNumberText}>{phoneNumber}</Text>
        </Text>
        <View style={styles.otpContainer}>
            <View style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType="number-pad" 
                    selectionColor={Colors.DEFAULT_GREY} 
                    maxLength={1} 
                    ref={firstInput}
                    onChangeText={(text) => {
                        setOtp({...otp, 1: text});
                        if (text) secondInput.current.focus();
                    }}
                    />
            </View>

            <View style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType="number-pad" selectionColor={Colors.DEFAULT_GREY} maxLength={1} ref={secondInput} onChangeText={(text) => {
                    setOtp({...otp, 2: text});
                    if (text) thirdInput.current.focus();
                }} />
            </View>

            <View style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType="number-pad" selectionColor={Colors.DEFAULT_GREY} maxLength={1} ref={thirdInput} onChangeText={(text) => {
                    setOtp({...otp, 3: text});
                    if (text) fourthInput.current.focus();
                }} />
            </View>

            <View style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType="number-pad" 
                        selectionColor={Colors.DEFAULT_GREY} 
                        maxLength={1} 
                        ref={fourthInput} 
                        onChangeText={(text) => {
                        setOtp({...otp, 4: text});
                    }} 
                />
            </View>

            
        </View>

        <TouchableOpacity
            style={styles.signinButton}
            onPress={() => console.log(otp)}>
            <Text style={styles.signinButtonText}>Verify</Text>
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
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  phoneNumberText: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_YELLOW,
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    borderRadius: 5,
    borderColor: Colors.DEFAULT_GREEN,
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 25,
    color: Colors.DEFAULT_BLACK,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
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
  phoneNumberText: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_YELLOW,
  },
});

export default VerificationScreen;