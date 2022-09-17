import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import uuid from "react-native-uuid";
import ListCard from "../components/ListCards/ListCard";

const MainScreen = () => {
  const screenWidth = Dimensions.get("window").width;
  const [data, setData] = useState([]);
  const getData = (type) =>
    fetch(`https://jsonplaceholder.typicode.com/${type}`).then((r) => r.json());

  useEffect(() => {
    Promise.all(["posts", "users", "photos"].map(getData)).then(
      ([posts, users, photos]) => {
        const usersObj = Object.fromEntries(
          users.map((user) => [user.id, user])
        );
        const photosObj = Object.fromEntries(
          photos.map((photo) => [photo.id, photo])
        );

        setData(
          posts.map((post) => ({
            post: post,
            user: usersObj[post.userId],
            photo: photosObj[post.userId],
          }))
        );
      }
    );
  }, []);

  let renderList = () => {
    return data.map(({ post, photo, user }) => {
      return (
        <View key={uuid.v4()}>
          {screenWidth <= 1000 ? (
            <ListCard users={user} posts={post} />
          ) : (
            <View style={styles.cardItem}>
              <Image
                style={styles.cardPhoto}
                source={{
                  uri: `${photo.url}.png`,
                }}
              />
              <Text style={styles.cardText}>Author: {user.name}</Text>
              <Text style={styles.cardText}>Company: {user.company.name}</Text>
              <Text style={styles.cardText}>Title: {post.title}</Text>
              <Text numberOfLines={4} style={styles.cardText}>
                {post.body}
              </Text>
            </View>
          )}
        </View>
      );
    });
  };

  return (
    <ScrollView style={{ width: "100%" }}>
      <View style={styles.container}>
        {screenWidth <= 1000 ? (
          <View>{renderList()}</View>
        ) : (
          <View style={styles.card}>{renderList()}</View>
        )}
      </View>
    </ScrollView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  cardItem: {
    borderBottomWidth: 5,
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderRadius: 5,
    borderColor: "#27569C",
    width: 325,
    height: 500,
    padding: 15,
    marginBottom: 5,
    marginTop: 5,
  },
  cardPhoto: {
    width: 150,
    height: 150,
    marginBottom: 17,
  },
  container: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
});
