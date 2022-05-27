import React from 'react';
import {Dimensions, Image, View, StyleSheet} from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function ProductCard({imageUrl, subTitle, stock, title}) {
  let stockSituation = !stock ? (
    <AppText style={styles.stock}>No stock</AppText>
  ) : null;

  return (
    <View style={styles.card}>
      <Image
        source={{uri: imageUrl}}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <AppText numberOfLines={1} style={styles.title}>
          {title}
        </AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
        {stockSituation}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.light,
    flex: 1,
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 4,
  },
  stock: {
    color: colors.danger,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  textContainer: {
    padding: 10,
  },
  title: {
    marginBottom: 7,
  },
});

export default ProductCard;
