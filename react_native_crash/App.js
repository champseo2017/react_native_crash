import React,{useState} from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import Header from './components/Header'
import shortid from 'shortid';
import ListItem from './components/ListItem'

const App = () => {
  const [items, setItems] = useState([
      {id:shortid.generate(),text:'Milk'},
      {id:shortid.generate(),text:'Eggs'},
      {id:shortid.generate(),text:'Bread'},
      {id:shortid.generate(),text:'Juice'}
  ]);
  
  return (
    <View style={styles.container}>
       <Header/>
       <FlatList data={items} renderItem={({item}) => (
          <ListItem item={item}/>
       )}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60
  }
})

export default App;