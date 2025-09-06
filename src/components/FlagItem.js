import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { StaticImageService } from "../services";
import { Colors, Fonts } from "../constants";

const FlagItem = ({ code, name, dial_code, onPress }) => {
  return (
        <TouchableOpacity style={styles.container} onPress={() => onPress({ code, name, dial_code })}>
        <Image source={{ uri: StaticImageService.getFlagIcon(code) }} style={styles.flagIcon} />
        <Text style={styles.flagText}>{dial_code}</Text>
        <Text style={styles.flagText}>{name}</Text>
        </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  flagIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  flagText: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginRight: 10,
  },
});

export default FlagItem;
