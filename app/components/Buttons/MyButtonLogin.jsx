import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const MyButtonLogin = ({ handleLogin, buttonTextValue }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>{buttonTextValue}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButtonLogin;

const styles = StyleSheet.create({
  button: {
    width: 213,
    height: 43,
    backgroundColor: "#e4b062",
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 29,
  },
});
