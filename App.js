import React from "react";
import Navigators from "./src/navigators";
import { useFonts } from "expo-font";
import Fonts from "./src/constants/Fonts";   

export default function App() {
  const [fontsLoaded] = useFonts({
    [Fonts.POPPINS_BLACK]: require("./src/assets/fonts/Poppins-Black.ttf"),
    [Fonts.POPPINS_BOLD]: require("./src/assets/fonts/Poppins-Bold.ttf"),
    [Fonts.POPPINS_EXTRA_BOLD]: require("./src/assets/fonts/Poppins-ExtraBold.ttf"),
    [Fonts.POPPINS_EXTRA_LIGHT]: require("./src/assets/fonts/Poppins-ExtraLight.ttf"),
    [Fonts.POPPINS_LIGHT]: require("./src/assets/fonts/Poppins-Light.ttf"),
    [Fonts.POPPINS_MEDIUM]: require("./src/assets/fonts/Poppins-Medium.ttf"),
    [Fonts.POPPINS_REGULAR]: require("./src/assets/fonts/Poppins-Regular.ttf"),
    [Fonts.POPPINS_SEMI_BOLD]: require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    [Fonts.POPPINS_THIN]: require("./src/assets/fonts/Poppins-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return null; // keep splash screen until fonts are ready
  }

  return <Navigators />;
}
