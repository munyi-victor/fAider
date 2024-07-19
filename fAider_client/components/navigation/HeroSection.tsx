import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";

type NavProps = {
  navigate(arg0: string): unknown;
};

const HeroSection = () => {
  const navigation: NavProps = useNavigation();

  const handlePress = () => {
    navigation.navigate("prompt");
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>First Aider</Text>
      </View>
      <View>
        <Text style={styles.description}>
          For any medical assistance, just explain your query here. Our AI
          system is dedicated to provide with the best First Aid activities you
          could undertake to prevent things like excessive bleeding, etc.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.gradient}
        >
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.buttonText}>Start now</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default HeroSection;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingEnd: 10,
  },
  title: {
    marginBottom: 20,
    backgroundColor: "",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#555",
  },
  titleText: {
    fontSize: 30,
  },
  description: {
    textAlign: "center",
    fontSize: 17,
    color: "#555",
  },
  buttonContainer: {
    marginTop: 40,
  },
  gradient: {
    padding: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
  },
});
