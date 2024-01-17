import { View, Text, StyleSheet, SafeAreaView, TextInput, Image } from 'react-native';
import React from 'react';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contaifind}>
        <Text style={styles.findtext}>Find Products</Text>
      </View>
      <View style={styles.containersearch}>
        <View style={styles.searchWrapper}>
          <Image source={require('../../Image/ic_search.png')} style={styles.searchIcon} />
          <TextInput placeholder='Search Store' clearButtonMode='always' style={styles.search} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  findtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Gilroy-Bold',
    lineHeight: 20,
  },
  contaifind: {
    width: 126,
    height: 18,
    marginTop: 56.93,
  },
  containersearch: {
    width: '100%',
    padding: 20,
    marginTop: 26,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 51,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  search: {
    flex: 1,
  },
});

export default Search;