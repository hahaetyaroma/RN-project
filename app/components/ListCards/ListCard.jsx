import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ListCard = ({ users, posts }) => {
  return (
    <View style={styles.cardItem}>
      <Text style={styles.cardText}>Author: {users.name}</Text>
      <Text style={styles.cardText}>Company: {users.company.name}</Text>
      <Text style={styles.cardText}>Title: {posts.title}</Text>
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  cardItem: {
    borderBottomWidth: 5,
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderRadius: 5,
    borderColor: "#27569C",
    width: 300,
    height: 330,
    padding: 15,
    marginBottom: 5,
    marginTop: 5,
  },
  cardText: {
    fontWeight: "800",
    fontSize: 20,
    lineHeight: 20,
    paddingBottom: 17,
  },
});
