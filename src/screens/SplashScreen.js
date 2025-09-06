import React, { useEffect } from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import {Colors, Fonts, Images} from '../constants';
import { Display } from '../utils';


const SplashScreen = ({navigation}) => {

  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Image source={Images.PLATE} resizeMode="contain" style={styles.image} />
      <Text style={styles.titleText}>FooDelivery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  image: {
    width: Display.setWidth(60),
    height: Display.setHeight(30),
  },
  titleText: {
    fontFamily:Fonts.POPPINS_LIGHT,
    fontSize:32,
    color: Colors.DEFAULT_WHITE,
    
  },
});

export default SplashScreen;