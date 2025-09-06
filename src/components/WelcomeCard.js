import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import { Display } from "../utils";
import { Fonts, Images } from "../constants";

const WelcomeCard = ({title, content, image}) => {
  return (
    <View style={styles.container}>
      <Image source={Images[image]} style={styles.image} resizeMethod="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
   width: Display.setWidth(100),
  },
  image: {
    height: Display.setHeight(20),
    width: Display.setWidth(70),
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  content: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_LIGHT,
    textAlign: "center",
    marginHorizontal: 20,
  },
});

export default WelcomeCard;
