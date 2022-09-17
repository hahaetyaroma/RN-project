import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { auth } from "../../firebase/firebase";
import { useNavigation } from "@react-navigation/native";

const SignOutBtn = () => {
  const navigation = useNavigation();
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginPage");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.signOutLogo}>
      <TouchableOpacity onPress={signOut}>
        <Image source={require("../../../assets/signOut.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default SignOutBtn;

const styles = StyleSheet.create({
  signOutLogo: {
    paddingRight: 25,
  },
});
