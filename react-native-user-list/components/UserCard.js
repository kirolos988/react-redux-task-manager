import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/dataActions";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import UserCardItem from "./UserCardItem";
import { SafeAreaView } from "react-native-safe-area-context";

const UserCard = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const dispatch = useDispatch();
  const { items = [], loading, error } = useSelector((state) => state.data);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const showLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 5, 5));
  };

  const handleSearch = (text) => {
    if (text.trim() === "") {
      setFilteredItems(items);
    } else {
      const newItems = items.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredItems(newItems);
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#8A6240" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error: Not Found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search by name ..."
        onChangeText={(value) => handleSearch(value)}
      />
      <FlatList
        data={filteredItems.slice(0, visibleCount)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <UserCardItem item={item} />}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      />
      {visibleCount < filteredItems.length && (
        <TouchableOpacity style={styles.showButton} onPress={showMore}>
          <Text style={styles.showText}>Show More</Text>
        </TouchableOpacity>
      )}
      {visibleCount > 5 && (
        <TouchableOpacity style={styles.showButton} onPress={showLess}>
          <Text style={styles.showText}>Show Less</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#CABA9C",
  },
  search: {
    width: "100%",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#8A6240",
    padding: 10,
    marginBottom: 20,
  },
  showButton: {
    padding: 10,
    backgroundColor: "#8A6240",
    borderRadius: 15,
    marginTop: 20,
  },
  showText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default UserCard;
