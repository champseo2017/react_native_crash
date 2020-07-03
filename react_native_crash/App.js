import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import shortid from "shortid";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

const App = () => {
  const [items, setItems] = useState([
    { id: shortid.generate(), text: "Milk" },
    { id: shortid.generate(), text: "Eggs" },
    { id: shortid.generate(), text: "Bread" },
    { id: shortid.generate(), text: "Juice" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
        "Error",
        "Please enter an item",
        [
          { text: "OK"}
        ],
        { cancelable: false }
      );
    } else {
      setItems((prevItems) => {
        return [{ id: shortid.generate(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
