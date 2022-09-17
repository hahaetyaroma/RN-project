import { View, Dimensions, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import SignOutBtn from "../Buttons/SignOutBtn";

const MyHeader = () => {
  const screenWidth = Dimensions.get("window").width;
  const [authStatus, setAuthStatus] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      user ? setAuthStatus(true) : setAuthStatus(false);
    });
  }, []);

  return (
    <View style={styles.header}>
      <View>
        {screenWidth <= 1000 ? (
          <Image source={require("../../../assets/logopng.png")} />
        ) : (
          <Image source={require("../../../assets/logoWithText.png")} />
        )}
      </View>
      <View>{authStatus ? <SignOutBtn /> : <View></View>}</View>
    </View>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  signOutLogo: {
    paddingRight: 25,
  },
});
