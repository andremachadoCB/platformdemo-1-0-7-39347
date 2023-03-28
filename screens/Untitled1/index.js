import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = ({}) => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: '#1B1A20',
      padding: 10,
      position: 'relative',
      flex: 1
    }}>
        <ImageBackground style={styles.BAuRCnCj} source={require("./Screenshot.png")} resizeMode="cover"></ImageBackground>
        <ImageBackground style={styles.eziaingY} source={require("./5cc08480f9312f082b3bc204_brand-line.png")} resizeMode="cover"></ImageBackground>
        
          <Pressable onPress={() => {
        navigation.navigate("searchHotelsList");
      }}><View style={styles.VngTxYqJ}>
            <Text style={styles.OLGmBJlN}>Lets Go</Text>
          </View></Pressable>
        
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  IuZHwZrj: {
    width: 347,
    height: 617,
    alignItems: "stretch",
    justifyContent: "flex-start"
  },
  BAuRCnCj: {
    width: '100%',
    height: 294,
    position: "absolute",
    bottom: 0,
    left: 5
  },
  eziaingY: {
    width: 223,
    height: 30,
    position: "absolute",
    top: 50,
    alignSelf: "center"
  },
  VngTxYqJa: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  VngTxYqJ: {
    height: 48,
    width: 140,
    backgroundColor: "#04c2ab",
    borderRadius: 10,
    color: "#777777",
    marginTop: '70%',
    alignSelf: "center"
  },
  OLGmBJlN: {
    width: 138,
    height: 40,
    lineHeight: 34,
    fontSize: 20,
    borderRadius: 0,
    position: "absolute",
    top: 5,
    left: 1,
    textAlign: "center",
    fontWeight: "700"
  }
});
export default Untitled1;