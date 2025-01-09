import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

const UserCardItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Info:</Text>
      <View style={styles.card}>
        <Entypo name="user" size={18} color="#102820" />
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <View style={styles.card}>
        <Entypo name="email" size={18} color="#102820" />
        <Text style={styles.text}>{item.email}</Text>
      </View>
      <View style={styles.card}>
        <Entypo name="address" size={18} color="#102820" />
        <Text style={styles.text}>
          {item.address.street +
            " - " +
            item.address.city +
            " - " +
            item.address.zipcode}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4C6444",
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#102820",
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    color: "#8A6240",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#CABA9C",
    paddingVertical: 5,
    paddingLeft: 5,
  },
});

export default UserCardItem;
