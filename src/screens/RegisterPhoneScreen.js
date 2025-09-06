import React, { useState } from "react";
import {View, StyleSheet, StatusBar, TouchableOpacity, Text, Image} from 'react-native';
import { Colors, Fonts, Images, CountryCodes } from "../constants";
import { Separator, ToggleButton, FlagItem } from "../components";
import AntDesign from '@expo/vector-icons/AntDesign';
import { FlatList, TextInput } from "react-native-gesture-handler";
import { Display } from "../utils";
import { StaticImageService } from "../services";

const getDropdownStyle = y => ({...styles.countryDropdown, top: y + 60});

const RegisterPhoneScreen = ({navigation}) => {
    const [selectedCountry,SetSelectedCountry] = useState(CountryCodes.find(country => country.code === 'IN'));
    const [inputsContainerY, setInputsContainerY] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownLayout, setDropdownLayout] = useState({});
    const [phoneNumber, setPhoneNumber] = useState('');

    const closeDropdown = (pageX, pageY) => {
      if (isDropdownOpen) {
        if (
          pageX < dropdownLayout?.x ||
          pageX > dropdownLayout?.x + dropdownLayout?.width ||
          pageY < dropdownLayout?.y ||
          pageY > dropdownLayout?.y + dropdownLayout?.height
        ) {
          setIsDropdownOpen(false);
        }
      }
    };

  return (
    <View style={styles.container} onStartShouldSetResponder={({nativeEvent: {pageX, pageY}}) =>
        closeDropdown(pageX, pageY)
      }>
      <StatusBar
             barStyle="dark-content"
             backgroundColor={Colors.DEFAULT_WHITE}
             translucent
           />
        <Separator height={StatusBar.currentHeight} />
        <View style={styles.headerContainer}>
            <AntDesign name="left" size={24} color="black" onPress={() => navigation.goBack()} />
            <Text style={styles.headerTitle}>Register Phone</Text>
        </View>

        <Text style={styles.title}>Register Phone</Text>
        <Text style={styles.content}>Please enter your registered phone number</Text>
        <View style={styles.inputsContainer} onLayout={({
          nativeEvent: {
            layout: {y},
          },
        }) => setInputsContainerY(y)}>

            <TouchableOpacity style={styles.countryListContainer} onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
               <Image
                  source={{uri: StaticImageService.getFlagIcon(selectedCountry.code)}}
                  style={styles.flagIcon}
                />
                <Text style={styles.countryCodeText}>{selectedCountry.dial_code}</Text>
                <AntDesign name="down" size={12} color={Colors.DEFAULT_BLACK} />
            </TouchableOpacity>

             <View style={styles.phoneInputContainer}>
              <TextInput
                placeholder="Phone Number"
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                keyboardType="phone-pad"
                style={styles.inputText}
                onChangeText={text =>
                setPhoneNumber(selectedCountry?.dial_code + text)
              }
                onFocus={() => {
                  setIsDropdownOpen(false);
                }}
              />
            </View>
        </View>
        {isDropdownOpen && (
          <View style={getDropdownStyle(inputsContainerY)} onLayout={({
            nativeEvent: {
              layout: {x, y, height, width},
            },
          }) => setDropdownLayout({x, y, height, width})}>
              <FlatList
                data={CountryCodes}
                keyExtractor={item => item.code}
                renderItem={({item}) => {
                  return (
                    <FlagItem
                      code={item.code}
                      name={item.name}
                      dial_code={item.dial_code}
                      onPress={country => {
                      SetSelectedCountry(country);
                      setIsDropdownOpen(false);
                    }}
                    />
                  );
                }}
              />    
          </View>
        )}

        <TouchableOpacity style={styles.signinButton} onPress={() => navigation.navigate('Verification',{phoneNumber})}>
          <Text style={styles.signinButtonText}>Continue</Text>
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
  inputsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  countryListContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    width: Display.setWidth(22),
    marginRight: 10,
    borderRadius: 8,
    height: Display.setHeight(6),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    flexDirection: 'row',
  },
  phoneInputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: 'center',
    flex: 1,
  },
  flagIcon:{
    height: 20,
    width: 20,
   
  },
  countryCodeText: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
 inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(6),
    color: Colors.DEFAULT_BLACK,
  },

  countryDropdown: {
    backgroundColor: Colors.LIGHT_GREY,
    position: 'absolute',
    width: Display.setWidth(80),
    height: Display.setHeight(50),
    marginLeft: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    zIndex: 3,
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

export default RegisterPhoneScreen;
