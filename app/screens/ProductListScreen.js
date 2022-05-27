import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';

import AppText from '../components/AppText';
import ProductCard from '../components/ProductCard';
import Screen from '../components/Screen';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import {getProducts} from '../services/fakeProductService';

function ProductListScreen() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const allProducts = getProducts();
    setProducts(allProducts);
    setSearch(allProducts);
  }, []);

  const renderItem = ({item}) => (
    <ProductCard
      title={item.title}
      imageUrl={item.imgURL}
      subTitle={item.price}
      stock={item.inStock}
    />
  );

  const handleSearch = text => {
    const searchedProducts = search.filter(product =>
      product.title.toLowerCase().includes(text.trim().toLowerCase()),
    );
    setProducts(searchedProducts);
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>patikastore</AppText>
      <View style={styles.textInput}>
        <TextInput
          style={defaultStyles.text}
          placeholder="Ara..."
          placeholderTextColor={defaultStyles.colors.medium}
          onChangeText={handleSearch}
        />
      </View>
      <Screen style={{padding: 0}}>
        <FlatList
          data={products}
          keyExtractor={product => product.id.toString()}
          renderItem={renderItem}
          numColumns={2}
        />
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  listContainer: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    textTransform: 'uppercase',
    color: colors.primary,
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 10,
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
});

export default ProductListScreen;
