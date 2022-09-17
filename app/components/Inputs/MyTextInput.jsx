import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

const MyTextInput = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 5,
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderRadius: 5,
    borderColor: "#27569C",
    color: "black",
    paddingLeft: 15,
  },
});
