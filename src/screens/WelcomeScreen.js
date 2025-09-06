import React, { useState, useRef } from 'react';
import {View, StyleSheet, StatusBar, TouchableOpacity, Text, Button} from 'react-native';
import {Colors, Fonts, General } from '../constants';
import { FlatList } from 'react-native-gesture-handler';
import { WelcomeCard, Separator } from '../components';
import { Display } from '../utils';

const pageStyle = isActive => ({
  ...(isActive ? styles.page : {...styles.page, backgroundColor: Colors.DEFAULT_GREY})
});

const Pagination = ({ index }) => {
  return (
    <View style={styles.paginationContainer}>
      {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) => (
        i == index ? (
          <View key={i} style={pageStyle(true)} />
        ) : (
          <View key={i} style={pageStyle(false)} />
        )
      ))}
    </View>
  );
}

const WelcomeScreen = ({navigation}) => {
  const [welcomeListIndex, setWelcomeListIndex] = useState(0);
  const welcomeList = useRef();
  const onViewRef = useRef(({changed}) => {
    setWelcomeListIndex(changed[0].index)
  });

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const pageScroll = () => {
    welcomeList.current.scrollToIndex({index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex});
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <Separator height={Display.setWidth(8)} />

      <View style={styles.welcomeListContainer}>
        <FlatList
          ref={welcomeList}
          data={General.WELCOME_CONTENTS}
          renderItem={({ item }) => (
           <WelcomeCard
             title={item.title}
             content={item.content}
             image={item.image}

           />
          )}
          keyExtractor={(item) => item.title}
          showsHorizontalScrollIndicator={false}
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          horizontal
          pagingEnabled
          overScrollMode='never'
        />
      </View>
      <Separator height={Display.setWidth(8)} />
      <Pagination index={welcomeListIndex} />
      <Separator height={Display.setWidth(8)} />
      {welcomeListIndex === 2 ? (
        <TouchableOpacity style={styles.gettingStartedButton} onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.gettingStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      ) : (
      <View style={styles.buttonContainer}>
          <TouchableOpacity style={{marginLeft: 10}} 
            onPress={() => welcomeList.current.scrollToEnd()}
          >
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} 
              activeOpacity={0.8} 
              onPress={pageScroll}
          >
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
      </View>
      )};
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  welcomeListContainer: {
    height: Display.setHeight(60),
  },
  paginationContainer: {
    flexDirection: 'row',
  },
  page:{
    width: 15,
    height: 8,
    borderRadius: 32,
    backgroundColor: Colors.DEFAULT_GREEN,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Display.setWidth(90),
    alignItems: 'center',
  },
  buttonText:{
    fontSize: 16,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
    lineHeight: 16 * 1.4,
  },
  button:{
    backgroundColor: Colors.LIGHT_GREEN,
    paddingVertical: 15,
    paddingHorizontal: 11,
    borderRadius: 32,
  },
  gettingStartedButton:{
    backgroundColor: Colors.DEFAULT_GREEN,
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    justifyContent: 'center',

  },
  gettingStartedButtonText : {
    color:Colors.DEFAULT_WHITE,
    fontSize:20,
    fontFamily:Fonts.POPPINS_MEDIUM,
    lineHeight:20 * 1.4
  }
});

export default WelcomeScreen;