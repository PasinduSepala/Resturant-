import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
const DATA = [
  {
    id: 1,
    title: 'Mango',
  },
  {
    id: 2,
    title: 'Apple',
  },
  {
    id: 3,
    title: 'Orange',
  },
  {
    id: 4,
    title: 'Pine Apple',
  },
];
const Lesson2 = () => {
  const [listData, setListData] = React.useState(DATA);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const onPressFruitItem = item => {
    setSelectedItem(item);
    // setSelectedItem(item);

    let newArray = listData.filter(fruit => fruit !== item);
    setListData(newArray);
  };

  const FruitItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.box,
        selectedItem === item
          ? {backgroundColor: 'red'}
          : {backgroundColor: 'white'},
      ]}
      onPress={() => onPressFruitItem(item)}>
      <Text style={styles.title}>{item.id}</Text>
      <View style={{padding: 10}} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listData}
        renderItem={({item}) => <FruitItem item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  box: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    // ==================
    elevation: 9, // for android
    //for ios
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    borderRadius: 8,
    //
  },
  title: {
    fontSize: 32,
  color:"green",
  },
});
export default Lesson2;