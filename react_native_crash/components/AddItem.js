import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);
  return (
    <View>
      <TextInput placeholder="Add Item..." style={styles.input} onChangeText={onChange}/>
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
      <Icon raised name="plus" size={20} solid={true} type="font-awesome-5" color="green"/>
        <Text style={styles.btnText}>
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
    paddingLeft: 8,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
   
  },
});

AddItem.defaultProps = {
  addItem: "",
};

export default AddItem;
