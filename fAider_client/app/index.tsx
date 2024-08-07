import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeroSection/>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#fff",
  },
  headerText:{
    fontSize: 30,
  }
});
