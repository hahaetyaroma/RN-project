import { View, KeyboardAvoidingView, StyleSheet, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { useNavigation } from "@react-navigation/native";
import MyTextInput from "../components/Inputs/MyTextInput";
import MyButtonLogin from "../components/Buttons/MyButtonLogin";
import MyButtonRegistr from "../components/Buttons/MyButtonRegistr";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSingUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
      })
      .catch((error) => alert(error.message));
  };
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
      })
      .catch((error) => alert(error.message));
  };
  const navigation = useNavigation();
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("MainPage");
      }
    });

    return unSubscribe;
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.border}>
        <View>
          <Text style={styles.authText}>Autorization</Text>
        </View>
        <View style={styles.authInputForm}>
          <Text style={styles.inputFormText}>login</Text>
          <MyTextInput
            placeholder={"Email"}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.inputFormText}>password</Text>
          <MyTextInput
            placeholder={"Password"}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btn}>
          <MyButtonLogin handleLogin={handleLogin} buttonTextValue={"Submit"} />
          <MyButtonRegistr
            handleSingUp={handleSingUp}
            buttonTextValue={"Register"}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  border: {
    borderBottomWidth: 5,
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderRadius: 5,
    borderColor: "#27569C",
  },
  authText: {
    fontSize: 25,
    color: "#27569C",
    textAlign: "center",
    lineHeight: 30,
    fontWeight: "800",
  },
  authInputForm: {
    padding: 35,
    paddingBottom: 13,
  },
  inputFormText: {
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 29,
    paddingBottom: 13,
    paddingTop: 13,
  },
  btn: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 13,
  },
});
